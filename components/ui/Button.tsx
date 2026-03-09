import React from "react";
import { LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "accent";
    size?: "sm" | "md" | "lg";
    icon?: LucideIcon;
    iconPosition?: "left" | "right";
    isLoading?: boolean;
}

export const Button = ({
    children,
    variant = "primary",
    size = "md",
    icon: Icon,
    iconPosition = "right",
    isLoading,
    className = "",
    ...props
}: ButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-t-accent focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-t-background text-t-text-primary border border-card-border hover:bg-t-secondary transition-colors",
        secondary: "bg-t-secondary text-t-text-primary border border-card-border hover:bg-t-background transition-colors",
        accent: "bg-t-accent text-white hover:opacity-90 shadow-lg shadow-t-accent/20",
        outline: "border-2 border-t-accent text-t-accent hover:bg-t-accent hover:text-white",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            disabled={isLoading || props.disabled}
            {...props}
        >
            {isLoading ? (
                <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
            ) : Icon && iconPosition === "left" ? (
                <Icon className="w-5 h-5 mr-2" />
            ) : null}

            {children}

            {!isLoading && Icon && iconPosition === "right" ? (
                <Icon className="w-5 h-5 ml-2" />
            ) : null}
        </button>
    );
};
