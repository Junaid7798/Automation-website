import { Resend } from "resend";

/**
 * Sends an auto-reply email to the lead using Resend.
 * Returns silently if Resend is not configured (no API key set).
 *
 * Free tier: 100 emails/day, 3,000/month at https://resend.com/
 */
export async function sendAutoReply(toEmail: string, firstName: string) {
    const apiKey = process.env.RESEND_API_KEY;

    // Skip if not configured
    if (!apiKey) {
        console.log("📧 [SKIP] Resend not configured — auto-reply not sent");
        return;
    }

    const resend = new Resend(apiKey);

    try {
        const { error } = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL || "AntiGravity AI <onboarding@resend.dev>",
            to: toEmail,
            subject: "We received your application — AntiGravity AI",
            html: `
                <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
                    <h1 style="font-size: 24px; color: #0a0a1c; margin-bottom: 16px;">
                        Hi ${firstName},
                    </h1>
                    <p style="font-size: 16px; color: #374151; line-height: 1.6;">
                        Thank you for reaching out to <strong>AntiGravity AI</strong>! We've received your application and our team is reviewing it.
                    </p>
                    <p style="font-size: 16px; color: #374151; line-height: 1.6;">
                        You can expect to hear back from us within <strong>48 hours</strong>. In the meantime, here's what happens next:
                    </p>
                    <ul style="font-size: 15px; color: #374151; line-height: 1.8; padding-left: 20px;">
                        <li>Our team reviews your requirements</li>
                        <li>We prepare a tailored proposal</li>
                        <li>We schedule a discovery call at your convenience</li>
                    </ul>
                    <p style="font-size: 16px; color: #374151; line-height: 1.6;">
                        If you have any urgent questions, feel free to reply to this email.
                    </p>
                    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 32px 0;" />
                    <p style="font-size: 13px; color: #9ca3af;">
                        AntiGravity AI — Automating the Future<br/>
                        This is an automated message. Please do not reply directly.
                    </p>
                </div>
            `,
        });

        if (error) {
            console.error("Resend auto-reply failed:", error);
        } else {
            console.log(`📧 Auto-reply sent to ${toEmail}`);
        }
    } catch (error) {
        // Don't throw — auto-reply failure shouldn't block form submission
        console.error("Resend error:", error);
    }
}
