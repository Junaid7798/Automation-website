import { PhoneCall, Map, Construction, Rocket } from "lucide-react";

const steps = [
    {
        title: "Discovery Call",
        description: "We learn about your business, pain points, and growth goals to identify high-impact AI opportunities.",
        icon: PhoneCall,
    },
    {
        title: "Solution Design",
        description: "We map out a custom automation strategy and technical architecture tailored to your specific stack.",
        icon: Map,
    },
    {
        title: "Build & Test",
        description: "Our experts build, integrate, and rigorously test your automation to ensure 100% reliability.",
        icon: Construction,
    },
    {
        title: "Launch & Support",
        description: "We deploy your solution, monitor performance, and provide ongoing support as you scale.",
        icon: Rocket,
    },
];

export const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 bg-t-background px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-t-accent font-semibold tracking-wider uppercase text-sm mb-4">The Process</h2>
                    <p className="text-3xl md:text-5xl font-bold text-t-text-primary tracking-tight">
                        From Idea to Automation in 4 Steps
                    </p>
                </div>

                <div className="relative mt-20">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-card-border/50 -z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-24 h-24 bg-t-secondary text-t-text-primary flex items-center justify-center rounded-3xl mx-auto mb-8 shadow-xl border border-card-border transition-transform duration-300 group-hover:-translate-y-2 group-hover:bg-t-accent group-hover:text-white relative">
                                    <step.icon className="w-10 h-10" />
                                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-t-accent text-white text-xs font-bold flex items-center justify-center rounded-full border-4 border-t-background">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-t-text-primary mb-4">{step.title}</h3>
                                <p className="text-t-text-muted leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
