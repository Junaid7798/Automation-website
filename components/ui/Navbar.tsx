"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";
import { ThemeToggle } from "./ThemeToggle";
import { scrollToSection } from "@/lib/scrollTo";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#how-it-works" },
    { name: "ROI", href: "#roi-calculator" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            // Calculate scroll progress
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
            setScrollProgress(progress);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Scroll Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-[3px] z-[60]">
                <div
                    className="h-full bg-gradient-to-r from-t-accent to-t-accent-secondary transition-all duration-150"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>
            <nav
                className={`fixed top-[3px] w-full z-50 transition-all duration-300 ${isScrolled
                    ? "backdrop-blur-xl bg-t-background/70 shadow-lg shadow-t-background/20 py-3 border-b border-card-border/30"
                    : "bg-transparent py-5"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-t-text-primary font-bold text-2xl tracking-tighter">
                                ANTIGRAVITY<span className="text-t-accent">AI</span>
                            </Link>
                        </div>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center space-x-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-t-text-muted hover:text-t-accent transition-colors text-sm font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <ThemeToggle />
                            <Button variant="accent" size="sm" onClick={() => scrollToSection("contact")}>
                                Get In Touch
                            </Button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center gap-4">
                            <ThemeToggle />
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-t-text-muted hover:text-t-text-primary p-2"
                            >
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Nav */}
                <div
                    className={`md:hidden absolute top-full left-0 w-full bg-t-background border-t border-card-border transition-all duration-300 overflow-hidden ${isOpen ? "max-h-screen py-6" : "max-h-0"
                        }`}
                >
                    <div className="px-4 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-t-text-muted hover:text-t-accent transition-colors text-lg font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button
                            variant="accent"
                            size="lg"
                            className="w-full"
                            onClick={() => {
                                scrollToSection("contact");
                                setIsOpen(false);
                            }}
                        >
                            Get In Touch
                        </Button>
                    </div>
                </div>
            </nav>
        </>
    );
};
