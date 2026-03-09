"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";
import { scrollToSection } from "@/lib/scrollTo";
import { ParticleField } from "../ui/ParticleField";
import { MagneticWrapper } from "../ui/MagneticWrapper";

export const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-t-background text-t-text-primary pt-20">
            {/* Interactive Particle Background */}
            <ParticleField particleCount={80} connectionDistance={120} mouseRepelRadius={150} />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-t-accent/10 text-t-accent rounded-full border border-t-accent/20">
                        AI Automation Agency
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        Scale Your Business with AI — <br className="hidden md:block" />
                        <span className="gradient-text-animated">
                            Without Scaling Your Team
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-t-text-muted mb-10 leading-relaxed">
                        We build custom AI automations that eliminate manual work, reduce costs, and unlock exponential growth for ambitious businesses.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <MagneticWrapper>
                            <Button
                                variant="accent"
                                size="lg"
                                icon={ArrowRight}
                                onClick={() => scrollToSection("contact")}
                            >
                                Let&apos;s Talk
                            </Button>
                        </MagneticWrapper>
                        <MagneticWrapper>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-card-border text-t-text-primary hover:border-t-accent"
                                onClick={() => scrollToSection("services")}
                            >
                                See Our Services
                            </Button>
                        </MagneticWrapper>
                    </div>
                </motion.div>

                {/* Trust Bar Placeholder */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="mt-20 pt-10 border-t border-card-border/50"
                >
                    <p className="text-sm font-medium text-t-text-muted uppercase tracking-widest mb-8">
                        Trusted by Businesses Across the Globe
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale contrast-125">
                        {/* Using text logo placeholders as instructed no stock photos */}
                        <div className="text-xl font-bold">DIGITALCORE</div>
                        <div className="text-xl font-bold">STRATOS</div>
                        <div className="text-xl font-bold">ZENITH</div>
                        <div className="text-xl font-bold">PIVOTAL</div>
                        <div className="text-xl font-bold">LUMINAI</div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-t-text-muted hidden md:block"
            >
                <ChevronDown className="w-6 h-6" />
            </motion.div>
        </section>
    );
};
