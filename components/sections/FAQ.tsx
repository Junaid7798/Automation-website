"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
    return (
        <div className="border-b border-card-border last:border-none">
            <button
                className="w-full py-6 flex items-center justify-between text-left group"
                onClick={onClick}
            >
                <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${isOpen ? "text-t-accent" : "text-t-text-primary group-hover:text-t-accent/80"}`}>
                    {question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown className={`w-6 h-6 ${isOpen ? "text-t-accent" : "text-gray-500"}`} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 text-t-text-muted text-lg leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const faqs = [
    {
        question: "How long does a typical AI implementation take?",
        answer: "Most of our standard automation projects (like custom chatbots or lead generation systems) take between 2 to 4 weeks. Complex custom solutions might take 6 to 8 weeks depending on the technical requirements.",
    },
    {
        question: "Will I need to change my existing software stack?",
        answer: "No. We specialize in building 'gravity-defying' integrations that work with your existing tools like HubSpot, Slack, Salesforce, and more. Our goal is to enhance your workflow, not complicate it.",
    },
    {
        question: "Is my data secure with AI automations?",
        answer: "Security is our top priority. We use enterprise-grade APIs and ensure all data processing complies with SOC2 and GDPR standards. Your proprietary data is never used to train public AI models.",
    },
    {
        question: "What kind of ROI can I expect?",
        answer: "On average, our clients see a 40-70% reduction in manual processing time within the first 3 months. For sales teams, we typically see a 3x increase in lead qualification capacity without adding headcount.",
    },
    {
        question: "Do you provide ongoing support after launch?",
        answer: "Absolutely. We offer various support tiers to monitor your systems, provide updates as AI models evolve, and ensure your automations continue to perform at peak efficiency 24/7.",
    },
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-t-background px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-t-accent font-semibold tracking-wider uppercase text-sm mb-4">Common Questions</h2>
                    <p className="text-3xl md:text-5xl font-bold text-t-text-primary tracking-tight">
                        Everything You Need to Know
                    </p>
                </div>

                <div className="bg-t-secondary/30 rounded-[40px] p-8 md:p-12 border border-card-border">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
