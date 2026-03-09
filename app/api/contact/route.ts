import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/formSchema";
import { sendAutoReply } from "@/lib/emailAutoReply";

// Simple in-memory rate limiting (resets on deploy — fine for free tier)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const entry = rateLimitMap.get(ip);

    if (!entry || now > entry.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        return false;
    }

    if (entry.count >= MAX_REQUESTS) {
        return true;
    }

    entry.count++;
    return false;
}

/**
 * Calculate a lead score (1-100) based on company size, revenue, and budget.
 */
function calculateLeadScore(data: Record<string, unknown>): number {
    let score = 0;

    // Company size weight
    const sizeScores: Record<string, number> = {
        "Just me": 5,
        "2-10": 15,
        "11-50": 25,
        "51-200": 35,
        "200+": 45,
    };
    score += sizeScores[data.companySize as string] || 0;

    // Revenue weight
    const revenueScores: Record<string, number> = {
        "Pre-revenue": 2,
        "<$100K": 5,
        "$100K-$500K": 10,
        "$500K-$1M": 15,
        "$1M-$5M": 25,
        "$5M+": 30,
    };
    score += revenueScores[data.annualRevenue as string] || 0;

    // Budget weight
    const budgetScores: Record<string, number> = {
        "<$1K": 3,
        "$1K-$5K": 8,
        "$5K-$15K": 15,
        "$15K-$50K": 20,
        "$50K+": 25,
    };
    score += budgetScores[data.projectBudget as string] || 0;

    return Math.min(score, 100);
}

export async function POST(request: NextRequest) {
    try {
        // Rate limiting
        const forwarded = request.headers.get("x-forwarded-for");
        const ip = forwarded?.split(",")[0]?.trim() || "unknown";

        if (isRateLimited(ip)) {
            return NextResponse.json(
                { status: "error", message: "Too many requests. Please wait a moment." },
                { status: 429 }
            );
        }

        // Parse and validate
        const body = await request.json();

        // Check honeypot
        if (body.honeypot) {
            // Silently succeed for bots
            return NextResponse.json({ status: "success", message: "Thank you!" });
        }

        const parsed = contactSchema.safeParse(body);
        if (!parsed.success) {
            return NextResponse.json(
                { status: "error", message: "Validation failed.", errors: parsed.error.flatten() },
                { status: 400 }
            );
        }

        // Strip honeypot before forwarding
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { honeypot, ...submitData } = parsed.data;

        // Calculate lead score
        const leadScore = calculateLeadScore(submitData);

        // Forward to Google Apps Script (server-side, URL stays hidden)
        const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

        if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes("your-google-script-id")) {
            // Dev mode: log and return success
            console.log("📋 [DEV MODE] Form submission:", { ...submitData, leadScore });
            return NextResponse.json({
                status: "success",
                message: "Lead saved (dev mode)",
                leadScore,
            });
        }

        const scriptRes = await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: JSON.stringify({ ...submitData, leadScore, submittedAt: new Date().toISOString() }),
            redirect: "follow",
        });

        // Google Apps Script may redirect — treat any 2xx/3xx as success
        const responseText = await scriptRes.text();
        let result: { message?: string } = {};
        try {
            result = JSON.parse(responseText);
        } catch {
            // GAS sometimes returns HTML after redirect — that's OK if status is 2xx
            if (!scriptRes.ok) {
                console.error("Google Script error:", responseText.substring(0, 200));
                throw new Error("Google Script returned an error");
            }
        }

        // Send auto-reply email (fire-and-forget, don't block response)
        sendAutoReply(submitData.email, submitData.firstName).catch(() => { });

        return NextResponse.json({
            status: "success",
            message: result.message || "Thank you! We'll be in touch within 48 hours.",
            leadScore,
        });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { status: "error", message: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
