"use client";

import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { contactSchema, type ContactFormData } from "../../lib/formSchema";
import { submitContactForm } from "../../lib/submitForm";
import { Button } from "../ui/Button";

const GOALS_OPTIONS = [
    "Lead generation or sales",
    "Customer support",
    "Internal operations",
    "Data processing or reporting",
    "Content or marketing workflows",
    "Not sure yet",
];

export const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            goals: [],
        },
    });

    const onSubmit = useCallback(async (data: ContactFormData) => {
        setIsSubmitting(true);
        setSubmitStatus("idle");

        // Honeypot check
        if (data.honeypot) {
            console.log("Bot detected");
            setSubmitStatus("success");
            setIsSubmitting(false);
            return;
        }

        try {
            await submitContactForm(data);
            setSubmitStatus("success");
            reset();
        } catch (error: unknown) {
            console.error(error);
            setSubmitStatus("error");
            setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }, [reset]);

    return (
        <section id="contact" className="py-24 bg-t-background px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-t-accent font-semibold tracking-wider uppercase text-sm mb-4">Let&apos;s Connect</h2>
                    <p className="text-3xl md:text-5xl font-bold text-t-text-primary tracking-tight mb-6">Start Your AI Journey</p>
                    <p className="text-t-text-muted text-lg max-w-2xl mx-auto">
                        Tell us about your business and how we can help you scale. Due to high demand, we cannot guarantee your application will be accepted.
                    </p>
                </div>

                <div className="bg-t-secondary rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-card-border">
                    <AnimatePresence mode="wait">
                        {submitStatus === "success" ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-20 h-20 bg-green-100/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 className="w-10 h-10" />
                                </div>
                                <h3 className="text-3xl font-bold text-t-text-primary mb-4">Application Received!</h3>
                                <p className="text-t-text-muted text-lg">
                                    Thanks for reaching out. We&apos;ll review your application and get back to you within 48 hours.
                                </p>
                                <Button variant="primary" className="mt-8" onClick={() => setSubmitStatus("idle")}>
                                    Send Another Message
                                </Button>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit(onSubmit)}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            >
                                {/* Honeypot */}
                                <input
                                    type="text"
                                    className="hidden"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    {...register("honeypot")}
                                />

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-t-text-muted">First Name *</label>
                                    <input
                                        {...register("firstName")}
                                        placeholder="Jane"
                                        className={`w-full px-4 py-3 rounded-xl border ${errors.firstName ? "border-red-500" : "border-card-border"
                                            } bg-t-background focus:ring-2 focus:ring-t-accent outline-none text-t-text-primary`}
                                    />
                                    {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-t-text-muted">Last Name *</label>
                                    <input
                                        {...register("lastName")}
                                        placeholder="Doe"
                                        className={`w-full px-4 py-3 rounded-xl border ${errors.lastName ? "border-red-500" : "border-card-border"
                                            } bg-t-background focus:ring-2 focus:ring-t-accent outline-none text-t-text-primary`}
                                    />
                                    {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-t-text-muted">Email Address *</label>
                                    <input
                                        {...register("email")}
                                        type="email"
                                        placeholder="jane@company.com"
                                        className={`w-full px-4 py-3 rounded-xl border ${errors.email ? "border-red-500" : "border-card-border"
                                            } bg-t-background focus:ring-2 focus:ring-t-accent outline-none text-t-text-primary`}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-t-text-muted">Company Name *</label>
                                    <input
                                        {...register("companyName")}
                                        placeholder="AntiGravity Inc."
                                        className={`w-full px-4 py-3 rounded-xl border ${errors.companyName ? "border-red-500" : "border-card-border"
                                            } bg-t-background focus:ring-2 focus:ring-t-accent outline-none text-t-text-primary`}
                                    />
                                    {errors.companyName && <p className="text-red-500 text-xs">{errors.companyName.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-t-text-muted">Company Website</label>
                                    <input
                                        {...register("companyWebsite")}
                                        placeholder="https://company.com"
                                        className="w-full px-4 py-3 rounded-xl border border-card-border bg-t-background focus:ring-2 focus:ring-t-accent outline-none text-t-text-primary"
                                    />
                                    {errors.companyWebsite && <p className="text-red-500 text-xs">{errors.companyWebsite.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-t-text-muted">Your Role *</label>
                                    <select
                                        {...register("role")}
                                        className="w-full px-4 py-3 rounded-xl border border-card-border focus:ring-2 focus:ring-t-accent outline-none text-t-text-primary bg-t-background"
                                    >
                                        <option value="">Select Role</option>
                                        <option value="CEO/Founder">CEO / Founder</option>
                                        <option value="CTO">CTO</option>
                                        <option value="Operations Manager">Operations Manager</option>
                                        <option value="Marketing Manager">Marketing Manager</option>
                                        <option value="Freelancer">Freelancer</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {errors.role && <p className="text-red-500 text-xs">{errors.role.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-t-text-muted">Company Size *</label>
                                    <select
                                        {...register("companySize")}
                                        className="w-full px-4 py-3 rounded-xl border border-card-border focus:ring-2 focus:ring-t-accent outline-none text-t-text-primary bg-t-background"
                                    >
                                        <option value="">Select Size</option>
                                        <option value="Just me">Just me</option>
                                        <option value="2-10">2–10</option>
                                        <option value="11-50">11–50</option>
                                        <option value="51-200">51–200</option>
                                        <option value="200+">200+</option>
                                    </select>
                                    {errors.companySize && <p className="text-red-500 text-xs">{errors.companySize.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-t-text-muted">Annual Revenue *</label>
                                    <select
                                        {...register("annualRevenue")}
                                        className="w-full px-4 py-3 rounded-xl border border-card-border focus:ring-2 focus:ring-t-accent outline-none text-t-text-primary bg-t-background"
                                    >
                                        <option value="">Select Revenue</option>
                                        <option value="Pre-revenue">Pre-revenue</option>
                                        <option value="<$100K">Less than $100K</option>
                                        <option value="$100K-$500K">$100K – $500K</option>
                                        <option value="$500K-$1M">$500K – $1M</option>
                                        <option value="$1M-$5M">$1M – $5M</option>
                                        <option value="$5M+">$5M+</option>
                                    </select>
                                    {errors.annualRevenue && <p className="text-red-500 text-xs">{errors.annualRevenue.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-t-text-muted">Project Budget *</label>
                                    <select
                                        {...register("projectBudget")}
                                        className="w-full px-4 py-3 rounded-xl border border-card-border focus:ring-2 focus:ring-t-accent outline-none text-t-text-primary bg-t-background"
                                    >
                                        <option value="">Select Budget</option>
                                        <option value="<$1K">Less than $1,000</option>
                                        <option value="$1K-$5K">$1,000 – $5,000</option>
                                        <option value="$5K-$15K">$5,000 – $15,000</option>
                                        <option value="$15K-$50K">$15,000 – $50,000</option>
                                        <option value="$50K+">$50,000+</option>
                                    </select>
                                    {errors.projectBudget && <p className="text-red-500 text-xs">{errors.projectBudget.message}</p>}
                                </div>

                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-semibold text-t-text-muted">What are you hoping to achieve? *</label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {GOALS_OPTIONS.map((goal) => (
                                            <label key={goal} className="flex items-center space-x-3 p-3 rounded-lg border border-card-border hover:bg-t-background/50 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    value={goal}
                                                    {...register("goals")}
                                                    className="w-4 h-4 text-t-accent border-card-border rounded focus:ring-t-accent bg-t-background"
                                                />
                                                <span className="text-sm text-t-text-muted">{goal}</span>
                                            </label>
                                        ))}
                                    </div>
                                    {errors.goals && <p className="text-red-500 text-xs">{errors.goals.message}</p>}
                                </div>

                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-semibold text-t-text-muted">How can we help? *</label>
                                    <textarea
                                        {...register("howCanWeHelp")}
                                        rows={4}
                                        placeholder="Tell us what you're looking to achieve..."
                                        className={`w-full px-4 py-3 rounded-xl border ${errors.howCanWeHelp ? "border-red-500" : "border-card-border"
                                            } bg-t-background focus:ring-2 focus:ring-t-accent outline-none text-t-text-primary resize-none`}
                                    />
                                    {errors.howCanWeHelp && <p className="text-red-500 text-xs">{errors.howCanWeHelp.message}</p>}
                                </div>

                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-semibold text-t-text-muted">Anything else? (Optional)</label>
                                    <textarea
                                        {...register("additionalNotes")}
                                        rows={2}
                                        placeholder="Any specific tools you use? Preferred timeline?"
                                        className="w-full px-4 py-3 rounded-xl border border-card-border bg-t-background focus:ring-2 focus:ring-t-accent outline-none text-t-text-primary resize-none"
                                    />
                                </div>

                                <div className="md:col-span-2 pt-4">
                                    {submitStatus === "error" && (
                                        <div className="mb-6 p-4 bg-red-500/10 text-red-400 rounded-xl flex items-center gap-3 border border-red-500/20">
                                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                            <p className="text-sm">{errorMessage}</p>
                                        </div>
                                    )}

                                    <Button
                                        type="submit"
                                        variant="accent"
                                        size="lg"
                                        className="w-full py-5"
                                        isLoading={isSubmitting}
                                    >
                                        Submit Application
                                    </Button>
                                </div>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};
