import { z } from "zod";

export const contactSchema = z.object({
    firstName: z.string().min(2, "Required"),
    lastName: z.string().min(2, "Required"),
    email: z.string().email("Invalid email"),
    companyName: z.string().min(1, "Required"),
    companyWebsite: z.string().optional(),
    role: z.enum([
        "CEO/Founder", "CTO", "Operations Manager",
        "Marketing Manager", "Freelancer", "Other"
    ]),
    companySize: z.enum(["Just me", "2-10", "11-50", "51-200", "200+"]),
    annualRevenue: z.enum([
        "Pre-revenue", "<$100K", "$100K-$500K",
        "$500K-$1M", "$1M-$5M", "$5M+"
    ]),
    projectBudget: z.enum([
        "<$1K", "$1K-$5K", "$5K-$15K", "$15K-$50K", "$50K+"
    ]),
    howCanWeHelp: z.string().min(20, "Please provide more detail"),
    goals: z.array(z.string()).min(1, "Select at least one"),
    additionalNotes: z.string().optional(),
    honeypot: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
