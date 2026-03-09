"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, ArrowRight } from "lucide-react";
import { scrollToSection } from "@/lib/scrollTo";

const caseStudies = [
    {
        client: "LuxeRetail Co.",
        industry: "E-Commerce",
        title: "Omnichannel Support Automation",
        problem: "Customer support team was overwhelmed with repetitive inquiries about order status and shipping, leading to 24-hour response times.",
        solution: "Implemented an AI-driven support assistant integrated with Shopify and Zendesk that resolves 85% of tier-1 tickets instantly.",
        metrics: [
            { label: "Tickets Automated", value: "85%", icon: TrendingUp },
            { label: "Response Time", value: "< 1m", icon: Clock },
        ],
    },
    {
        client: "Prime Realty Group",
        industry: "Real Estate",
        title: "AI Lead Qualification Pipeline",
        problem: "Sales agents were wasting 60% of their time calling cold leads that weren't ready to buy or sell.",
        solution: "Built an automated outreach system that qualifies leads via SMS and Email, booking meetings only for high-probability prospects.",
        metrics: [
            { label: "Qualified Leads", value: "+120%", icon: Users },
            { label: "Sales Efficiency", value: "3.5x", icon: TrendingUp },
        ],
    },
];

export const CaseStudies = () => {
    return (
        <section id="portfolio" className="py-24 bg-t-background px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-t-accent font-semibold tracking-wider uppercase text-sm mb-4">Case Studies</h2>
                    <p className="text-3xl md:text-5xl font-bold text-t-text-primary tracking-tight">
                        Proven Results, Real Impact
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-t-secondary/40 rounded-[40px] p-8 md:p-12 border border-card-border hover:border-t-accent/30 transition-all group flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-8">
                                    <span className="px-4 py-1.5 bg-t-accent/10 text-t-accent text-xs font-bold uppercase tracking-widest rounded-full border border-t-accent/20">
                                        {study.industry}
                                    </span>
                                    <h3 className="text-t-text-muted font-bold text-xl">{study.client}</h3>
                                </div>

                                <h4 className="text-2xl md:text-3xl font-bold text-t-text-primary mb-6 group-hover:text-t-accent transition-colors">
                                    {study.title}
                                </h4>

                                <div className="space-y-6 mb-12">
                                    <div>
                                        <p className="text-t-accent text-sm font-bold uppercase tracking-widest mb-2">Challenge</p>
                                        <p className="text-t-text-muted leading-relaxed">{study.problem}</p>
                                    </div>
                                    <div>
                                        <p className="text-t-accent text-sm font-bold uppercase tracking-widest mb-2">Solution</p>
                                        <p className="text-t-text-muted leading-relaxed">{study.solution}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-8 pt-8 border-t border-card-border">
                                {study.metrics.map((metric, mIndex) => (
                                    <div key={mIndex} className="flex items-center gap-3">
                                        <div className="p-3 bg-t-secondary rounded-2xl text-t-accent">
                                            <metric.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-t-text-primary">{metric.value}</p>
                                            <p className="text-t-text-muted text-sm uppercase tracking-wider font-medium">{metric.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button
                        onClick={() => scrollToSection("contact")}
                        className="inline-flex items-center gap-2 text-t-text-primary hover:text-t-accent font-bold transition-colors group"
                    >
                        Ready to achieve similar results?
                        <span className="flex items-center gap-1">
                            Let&apos;s talk <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};
