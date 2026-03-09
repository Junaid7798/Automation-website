"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeProvider";

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-t-secondary/50 border border-card-border text-t-text-primary hover:border-t-accent transition-colors"
            aria-label="Toggle theme"
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={theme}
                    initial={{ y: 10, opacity: 0, rotate: 45 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: -10, opacity: 0, rotate: -45 }}
                    transition={{ duration: 0.2 }}
                >
                    {theme === "dark" ? (
                        <Sun className="w-5 h-5 text-warm" />
                    ) : (
                        <Moon className="w-5 h-5 text-t-text-primary" />
                    )}
                </motion.div>
            </AnimatePresence>
        </motion.button>
    );
};
