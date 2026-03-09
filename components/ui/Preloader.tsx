"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Only show once per session
        const hasLoaded = sessionStorage.getItem("antigravity-loaded");
        if (hasLoaded) {
            setIsLoading(false);
            return;
        }

        const timer = setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem("antigravity-loaded", "true");
        }, 2400);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-t-background"
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <div className="text-center">
                        {/* Logo animation */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.6,
                                ease: [0.21, 0.47, 0.32, 0.98],
                            }}
                        >
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-t-text-primary">
                                ANTIGRAVITY
                                <span className="gradient-text-animated">AI</span>
                            </h1>
                        </motion.div>

                        {/* Loading bar */}
                        <motion.div
                            className="mt-8 w-48 h-1 bg-card-border/30 rounded-full mx-auto overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <motion.div
                                className="h-full bg-gradient-to-r from-t-accent to-t-accent-secondary rounded-full"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{
                                    duration: 1.8,
                                    delay: 0.5,
                                    ease: "easeInOut",
                                }}
                            />
                        </motion.div>

                        {/* Tagline */}
                        <motion.p
                            className="mt-4 text-t-text-muted text-sm tracking-widest uppercase"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            Automating the Future
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
