// Integrations marquee — no client-side interactivity needed beyond CSS animation

const integrations = [
    "OpenAI",
    "n8n.io",
    "Make.com",
    "Zapier",
    "Slack",
    "HubSpot",
    "Salesforce",
    "Google Workspace",
    "Anthropic",
    "Pinecone",
    "LangChain",
    "Shopify",
];

export const Integrations = () => {
    // Double the array to create a seamless loop
    const doubledIntegrations = [...integrations, ...integrations];

    return (
        <section className="py-20 bg-t-background border-y border-card-border/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
                <p className="text-sm font-semibold text-t-accent uppercase tracking-widest mb-2">
                    Our Tech Stack
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-t-text-primary tracking-tight">
                    Seamlessly Integrated with Your Favorite Tools
                </h2>
            </div>

            <div className="relative flex overflow-x-hidden">
                <div className="flex animate-marquee whitespace-nowrap py-4">
                    {doubledIntegrations.map((item, index) => (
                        <div
                            key={index}
                            className="mx-8 flex items-center justify-center group"
                        >
                            <span className="text-2xl md:text-4xl font-black text-t-text-muted/40 transition-colors duration-300 group-hover:text-t-accent select-none">
                                {item.toUpperCase()}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Gradient Masks for a smooth fade on the edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-t-background to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-t-background to-transparent z-10" />
            </div>
        </section>
    );
};
