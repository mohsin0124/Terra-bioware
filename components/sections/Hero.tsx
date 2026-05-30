"use client";

import { motion } from "framer-motion";
import { PHAMoleculeScene } from "@/components/3d/PHAMoleculeScene";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowDownRight, ChevronDown } from "lucide-react";

export function Hero() {
    const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section
            id="hero"
            className="relative w-full min-h-[100dvh] flex flex-col justify-center overflow-x-clip bg-[#061c13]"
        >
            <PHAMoleculeScene />

            {/* Multi-layer cinematic gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#061c13]/30 via-transparent to-[#061c13] z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061c13]/80 via-[#061c13]/20 to-transparent z-10 pointer-events-none" />

            <div className="relative z-20 max-w-[1400px] mx-auto w-full section-padding flex flex-col pt-[104px] pb-16 lg:pb-20 text-terra-sand pointer-events-none">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.8 }}
                    className="flex items-center gap-3 mb-6 pointer-events-auto"
                >
                    <div className="w-2 h-2 bg-terra-teal rounded-full animate-pulse shadow-[0_0_8px_rgba(0,180,160,0.6)]" />
                    <p className="uppercase tracking-[0.25em] font-sans text-xs md:text-sm text-terra-teal font-semibold">
                        Climate-Positive Biomanufacturing · Est. 2022, Bengaluru
                    </p>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, delay: 3.0, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-semibold leading-[0.88] tracking-tighter pointer-events-auto max-w-5xl"
                >
                    Turning Emissions<br />
                    <span className="italic text-terra-earth/70">into</span> Tomorrow&apos;s<br />
                    Materials.
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 3.4 }}
                    className="mt-6 md:mt-8 text-base md:text-lg lg:text-xl text-terra-sand/50 max-w-xl leading-relaxed font-sans pointer-events-auto"
                >
                    Terra Bioware engineers proprietary methanotrophic microbes that capture
                    industrial methane and CO₂, transforming them into TerraPHA — a family of 150+
                    high-performance, marine-biodegradable biopolymers for packaging, medicine,
                    and agriculture.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.8, duration: 1 }}
                    className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center pointer-events-auto"
                >
                    <MagneticButton>
                        <a
                            href="#contact"
                            onClick={(e) => scrollTo(e, "#contact")}
                            className="bg-terra-teal text-[#061c13] px-7 md:px-8 py-3.5 md:py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-white hover:text-terra-green transition-all duration-500 shadow-[0_0_25px_rgba(0,180,160,0.3)] hover:shadow-[0_0_40px_rgba(0,180,160,0.5)] text-sm md:text-base inline-flex"
                        >
                            Partner with Us <ArrowDownRight size={18} />
                        </a>
                    </MagneticButton>
                    <MagneticButton>
                        <a
                            href="#technology"
                            onClick={(e) => scrollTo(e, "#technology")}
                            className="bg-transparent border border-terra-sand/15 text-terra-sand px-7 md:px-8 py-3.5 md:py-4 rounded-full font-medium hover:bg-terra-sand/5 hover:border-terra-sand/30 transition-all duration-500 backdrop-blur-sm text-sm md:text-base inline-flex"
                        >
                            Discover TerraPHA
                        </a>
                    </MagneticButton>
                </motion.div>

                {/* Backed by badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4.2, duration: 1 }}
                    className="mt-10 md:mt-14 pointer-events-auto"
                >
                    <p className="text-[11px] uppercase tracking-[0.2em] text-terra-sand/25 mb-3 font-sans">Backed by</p>
                    <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs md:text-sm text-terra-sand/30 font-sans">
                        <span className="px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02]">BIRAC</span>
                        <span className="px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02]">NITI Aayog</span>
                        <span className="px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02]">NSRCEL IIM Bangalore</span>
                        <span className="px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02]">Arise Ventures</span>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.a
                href="#problem"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.6, duration: 1 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 pointer-events-auto cursor-pointer"
                onClick={(e) => scrollTo(e, "#problem")}
            >
                <span className="text-[10px] text-terra-sand/30 uppercase tracking-[0.25em] font-sans">Scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown size={16} className="text-terra-teal/50" />
                </motion.div>
            </motion.a>
        </section>
    );
}
