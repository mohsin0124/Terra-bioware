"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 seconds simulated loading for premium feel

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="fixed inset-0 z-[10000] bg-[#061c13] flex flex-col items-center justify-center pointer-events-none"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.1, opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col items-center gap-6"
                    >
                        {/* Hexagonal organic motif representing TerraPHA */}
                        <div className="w-16 h-16 border border-terra-teal/50 rounded-full flex items-center justify-center animate-pulse">
                            <div className="w-8 h-8 bg-terra-teal rounded-full animate-breathe blur-sm" />
                        </div>

                        <p className="font-sans text-terra-sand tracking-[0.3em] uppercase text-sm font-medium">
                            Terra Bioware
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
