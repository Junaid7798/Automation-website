"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Calendar, X, MoreVertical } from "lucide-react";

export const FloatingCTA = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const actions = [
        {
            icon: MessageCircle,
            label: "Chat on WhatsApp",
            href: "https://wa.me/your-number", // Replace with actual number
            color: "bg-green-500",
        },
        {
            icon: Calendar,
            label: "Book a Discovery Call",
            href: "#contact",
            color: "bg-t-accent",
        },
    ];

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <div className="flex flex-col items-end gap-4 mb-2">
                        {actions.map((action, index) => (
                            <motion.a
                                key={index}
                                href={action.href}
                                target={action.href.startsWith("http") ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-3 group"
                                onClick={() => action.href === "#contact" && setIsOpen(false)}
                            >
                                <span className="bg-t-background text-t-text-primary text-sm font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    {action.label}
                                </span>
                                <div className={`${action.color} text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110`}>
                                    <action.icon className="w-6 h-6" />
                                </div>
                            </motion.a>
                        ))}
                    </div>
                )}
            </AnimatePresence>

            <button
                onClick={toggleMenu}
                className={`${isOpen ? "bg-t-secondary" : "bg-t-accent"
                    } text-white p-5 rounded-full shadow-[0_20px_50px_rgba(232,62,140,0.3)] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center`}
            >
                {isOpen ? <X className="w-8 h-8" /> : <MoreVertical className="w-8 h-8" />}
            </button>
        </div>
    );
};
