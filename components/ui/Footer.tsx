import Link from "next/link";
import { Linkedin, Twitter, Youtube } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-t-background text-t-text-primary py-12 border-t border-card-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-t-text-primary font-bold text-2xl tracking-tighter">
                            ANTIGRAVITY<span className="text-t-accent">AI</span>
                        </Link>
                        <p className="mt-4 text-t-text-muted max-w-sm">
                            We build custom AI automations that eliminate manual work, reduce costs, and unlock growth for your business.
                        </p>
                        <div className="mt-6 flex space-x-4 text-t-text-muted">
                            <a href="#" className="hover:text-t-accent transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-t-accent transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-t-accent transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-t-accent">Quick Links</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link href="#services" className="text-t-text-muted hover:text-t-text-primary transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="#how-it-works" className="text-t-text-muted hover:text-t-text-primary transition-colors">
                                    How It Works
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-t-text-muted hover:text-t-text-primary transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-t-accent">Legal</h3>
                        <ul className="mt-4 space-y-2">
                            <li className="text-t-text-muted">Privacy Policy</li>
                            <li className="text-t-text-muted">Terms of Service</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-card-border text-center text-t-text-muted/60 text-sm">
                    <p>© {new Date().getFullYear()} AntiGravity AI — All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};
