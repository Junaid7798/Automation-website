import { MessageSquare, Settings, Target, Zap, BarChart3, Brain } from "lucide-react";
import { ServiceCard } from "../ui/ServiceCard";
import { ScrollReveal } from "../ui/ScrollReveal";

const services = [
    {
        title: "AI Chatbots & Assistants",
        description: "Custom AI chatbots for customer support, lead qualification, and internal knowledge bases that work 24/7.",
        icon: MessageSquare,
    },
    {
        title: "Workflow Automation",
        description: "End-to-end automation of repetitive business processes using n8n, Make, or Zapier to save thousands of hours.",
        icon: Settings,
    },
    {
        title: "Lead Generation Systems",
        description: "Automated outreach, data enrichment, and lead scoring pipelines to keep your sales funnel full with zero manual effort.",
        icon: Target,
    },
    {
        title: "CRM & Sales Automation",
        description: "Automate your entire sales pipeline from initial lead capture to smart follow-up sequences that convert.",
        icon: Zap,
    },
    {
        title: "Data Processing & Reporting",
        description: "Automated data extraction, transformation, and interactive dashboard generation for real-time business insights.",
        icon: BarChart3,
    },
    {
        title: "Custom AI Solutions",
        description: "Bespoke AI agents and deep integrations tailored specifically to solve your unique business challenges.",
        icon: Brain,
    },
];

export const Services = () => {
    return (
        <section id="services" className="py-24 bg-t-background px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-t-accent font-semibold tracking-wider uppercase text-sm mb-4">What We Build For You</h2>
                        <p className="text-3xl md:text-5xl font-bold text-t-text-primary tracking-tight">
                            Comprehensive AI Solutions
                        </p>
                        <p className="mt-6 text-t-text-muted max-w-2xl mx-auto text-lg">
                            We don&apos;t just provide tools. We build intelligent systems that transform how your business operates from the ground up.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <ServiceCard {...service} />
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
