"use client";

import { useEffect, useRef } from "react";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { Star } from "lucide-react";

/**
 * Reusable animated number component that counts up when it enters the viewport.
 */
function AnimatedNumber({ value }: { value: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const spring = useSpring(0, {
        mass: 1,
        stiffness: 100,
        damping: 30,
    });

    const display = useTransform(spring, (current) =>
        Math.round(current).toLocaleString()
    );

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, spring, value]);

    return <motion.span ref={ref}>{display}</motion.span>;
}

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "COO",
        company: "ScaleFlow Digital",
        quote: "AntiGravity AI completely transformed our lead qualification process. We're now handling 3x the volume with the same team size.",
    },
    {
        name: "Michael Chen",
        role: "Founder",
        company: "Nexus Ops",
        quote: "The workflow automations they built for us saved our team at least 15 hours per week. The ROI was immediate and obvious.",
    },
    {
        name: "David Rodriguez",
        role: "Ops Manager",
        company: "Stellar Creative",
        quote: "I was skeptical about AI chatbots, but the internal knowledge assistant they created is a game-changer for our onboarding.",
    },
];

const stats = [
    { label: "Automations Built", value: 500, suffix: "+" },
    { label: "Hours Saved yearly", value: 10000, suffix: "+" },
    { label: "Happy Clients", value: 50, suffix: "+" },
];

export const Testimonials = () => {
    return (
        <section className="py-24 bg-t-background px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-t-secondary p-10 rounded-3xl text-center border border-card-border">
                            <p className="text-4xl md:text-5xl font-bold text-t-accent mb-2">
                                <AnimatedNumber value={stat.value} />
                                {stat.suffix}
                            </p>
                            <p className="text-t-text-muted uppercase tracking-widest text-sm font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-t-accent font-semibold tracking-wider uppercase text-sm mb-4">Success Stories</h2>
                    <p className="text-3xl md:text-5xl font-bold text-t-text-primary tracking-tight">Trusted by Industry Leaders</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-t-secondary p-8 rounded-3xl border border-card-border flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex gap-1 mb-6 text-t-accent">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-current" />
                                    ))}
                                </div>
                                <p className="text-t-text-muted italic text-lg leading-relaxed mb-8">&ldquo;{t.quote}&rdquo;</p>
                            </div>
                            <div>
                                <p className="text-t-text-primary font-bold">{t.name}</p>
                                <p className="text-t-text-muted text-sm">
                                    {t.role}, {t.company}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
