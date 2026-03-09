import React from "react";
import { TiltCard } from "./TiltCard";

interface ServiceCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
}

export const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
    return (
        <TiltCard className="bg-t-secondary p-8 rounded-2xl border border-card-border hover:border-t-accent/40 transition-all duration-300 group">
            <div className="w-14 h-14 bg-t-accent/10 text-t-accent flex items-center justify-center rounded-xl mb-6 group-hover:bg-t-accent group-hover:text-white transition-colors duration-300">
                <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold text-t-text-primary mb-3">{title}</h3>
            <p className="text-t-text-muted text-sm leading-relaxed">{description}</p>
        </TiltCard>
    );
};
