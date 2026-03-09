"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const smoothX = useSpring(cursorX, { stiffness: 300, damping: 28 });
    const smoothY = useSpring(cursorY, { stiffness: 300, damping: 28 });
    const lastInteraction = useRef<number>(0);

    useEffect(() => {
        // Detect touch device
        const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
        setIsTouchDevice(isTouch);
        if (isTouch) return;

        const handleMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setIsVisible(true);
            lastInteraction.current = Date.now();
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        // Detect hoverable elements
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive = target.closest(
                "a, button, [role='button'], input, textarea, select, .cursor-pointer"
            );
            setIsHovering(!!isInteractive);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("mouseover", handleMouseOver);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    if (isTouchDevice) return null;

    return (
        <>
            {/* Outer ring */}
            <motion.div
                className="fixed pointer-events-none z-[9998] rounded-full border-2 mix-blend-difference"
                style={{
                    x: smoothX,
                    y: smoothY,
                    translateX: "-50%",
                    translateY: "-50%",
                    width: isHovering ? 50 : 36,
                    height: isHovering ? 50 : 36,
                    borderColor: isHovering
                        ? "rgb(var(--accent))"
                        : "rgba(255,255,255,0.6)",
                    opacity: isVisible ? 1 : 0,
                    transition: "width 0.2s, height 0.2s, border-color 0.2s, opacity 0.15s",
                }}
            />
            {/* Inner dot */}
            <motion.div
                className="fixed pointer-events-none z-[9998] rounded-full bg-white mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    width: isHovering ? 6 : 4,
                    height: isHovering ? 6 : 4,
                    opacity: isVisible ? 1 : 0,
                    transition: "width 0.15s, height 0.15s, opacity 0.15s",
                }}
            />
            {/* Hide default cursor */}
            <style jsx global>{`
                * {
                    cursor: none !important;
                }
            `}</style>
        </>
    );
};
