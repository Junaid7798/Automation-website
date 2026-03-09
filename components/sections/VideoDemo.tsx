"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, ShieldCheck, Zap } from "lucide-react";

export const VideoDemo = () => {
    return (
        <section id="demo" className="py-24 bg-t-background px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-t-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-t-accent font-semibold tracking-wider uppercase text-sm mb-4">See It In Action</h2>
                    <p className="text-3xl md:text-5xl font-bold text-t-text-primary tracking-tight">
                        Witness the Power of Automation
                    </p>
                    <p className="mt-4 text-t-text-muted max-w-2xl mx-auto">
                        Watch how our AI lead-generation system qualifies and books meetings while you sleep.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative max-w-5xl mx-auto aspect-video rounded-[32px] overflow-hidden border border-card-border shadow-2xl group bg-t-secondary/20"
                >
                    {/* Video Embed Frame */}
                    <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity">
                        <div className="w-full h-full bg-gradient-to-br from-t-accent/20 to-t-background flex items-center justify-center">
                            <Zap className="w-24 h-24 text-t-accent/20 animate-pulse" />
                        </div>
                    </div>

                    {/* Semi-transparent Overlay */}
                    <div className="absolute inset-0 z-10 bg-black/40 flex flex-col items-center justify-center gap-6 group-hover:bg-black/20 transition-all duration-500">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-20 h-20 md:w-28 md:h-28 bg-t-accent text-white rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(232,62,140,0.5)] group-hover:shadow-[0_0_80px_rgba(232,62,140,0.8)] transition-all"
                        >
                            <Play className="w-8 h-8 md:w-12 md:h-12 fill-current ml-1" />
                        </motion.button>
                        <p className="text-white font-bold text-lg md:text-xl tracking-wide uppercase">Watch 2-Min Demo</p>
                    </div>

                    {/* Placeholder for Iframe - In a real app this would be a Loom or YT embed */}
                    <iframe
                        className="w-full h-full relative z-0 hidden group-[.playing]:block"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0" // Replace with actual demo video
                        title="AI Automation Demo"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </motion.div>

                <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16">
                    <div className="flex items-center gap-3 text-t-text-muted">
                        <ShieldCheck className="w-5 h-5 text-t-accent" />
                        <span className="text-sm font-medium">Enterprise-Grade Security</span>
                    </div>
                    <div className="flex items-center gap-3 text-t-text-muted">
                        <Zap className="w-5 h-5 text-t-accent" />
                        <span className="text-sm font-medium">Instant Deployment</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
