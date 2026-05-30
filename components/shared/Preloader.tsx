"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
                        {/* Actual Terra Bioware Logo */}
                        <div className="flex items-center justify-center animate-pulse">
                            <Image
                                src="/logo.png"
                                alt="Terra Bioware Logo"
                                width={80}
                                height={80}
                                className="invert mix-blend-screen opacity-90 drop-shadow-[0_0_15px_rgba(0,180,160,0.5)]"
                                priority
                            />
                        </div>

                        <p className="font-sans text-terra-sand tracking-[0.3em] uppercase text-sm font-medium mt-4">
                            Terra Bioware
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
