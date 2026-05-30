"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function FluidCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, [mounted, isVisible]);

    if (!mounted) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-terra-teal/50 pointer-events-none z-[9999] bg-terra-teal/10 backdrop-blur-sm hidden md:block"
            animate={{
                x: mousePosition.x - 16,
                y: mousePosition.y - 16,
                opacity: isVisible ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        />
    );
}
