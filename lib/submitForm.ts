import { ContactFormData } from "./formSchema";

/**
 * Submits the contact form data via the Next.js API route.
 * The API route handles server-side validation, rate limiting,
 * lead scoring, and forwarding to Google Apps Script.
 */
export async function submitContactForm(data: ContactFormData) {
    // Filter out honeypot before sending
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { honeypot, ...submitData } = data;

    const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...submitData, honeypot: data.honeypot }),
    });

    const result = await res.json();

    if (!res.ok || result.status === "error") {
        throw new Error(result.message || "Failed to submit form. Please try again later.");
    }

    return result;
}

