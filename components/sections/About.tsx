export const About = () => {
    return (
        <section id="about" className="py-24 bg-t-background px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="aspect-square bg-t-secondary rounded-[40px] overflow-hidden rotate-3 flex items-center justify-center p-12 border border-card-border">
                            <div className="text-t-accent font-bold text-6xl opacity-50 select-none">AG AI</div>
                        </div>
                        {/* Absolute element to give it depth */}
                        <div className="absolute inset-0 bg-t-accent rounded-[40px] -z-10 -rotate-3 opacity-20" />
                    </div>

                    <div>
                        <h2 className="text-t-accent font-semibold tracking-wider uppercase text-sm mb-4">Our Mission</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-t-text-primary mb-6 tracking-tight">
                            Democratizing AI for Every Business
                        </h3>
                        <div className="space-y-6 text-lg text-t-text-muted leading-relaxed">
                            <p>
                                Founded in 2026, AntiGravity AI was born from a simple observation: while large corporations are using AI to dominate, small and medium businesses are being left behind due to complexity.
                            </p>
                            <p>
                                We believe every business deserves the power of AI — without the complexity, the overhead, or the steep learning curve.
                            </p>
                            <p>
                                Our team of automation experts and AI architects partner with you to identify manual bottlenecks and implement elegant, automated solutions that just work.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
