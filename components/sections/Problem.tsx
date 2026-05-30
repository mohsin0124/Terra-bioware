"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        
        const controls = animate(0, target, {
            duration: 2,
            onUpdate: (value) => {
                setCount(Math.floor(value));
            },
        });

        return () => controls.stop();
    }, [isInView, target]);

    return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

const STATS = [
    {
        value: 400,
        suffix: "M+",
        label: "Tonnes of plastic produced annually worldwide",
        detail: "80% ends up in landfills or oceans",
    },
    {
        value: 3,
        suffix: "–5×",
        label: "More expensive current bio-alternatives cost",
        detail: "Hindering widespread adoption at scale",
    },
    {
        value: 80,
        suffix: "×",
        label: "Methane is more potent than CO₂ over 20 years",
        detail: "Yet largely wasted as industrial emissions",
    },
    {
        value: 8,
        suffix: "M+",
        label: "Tonnes of plastic leak into oceans every year",
        detail: "Killing 100K+ marine animals annually",
    },
];

export function Problem() {
    return (
        <section id="problem" className="relative w-full bg-[#061c13] text-terra-sand overflow-hidden py-24 md:py-32">
            {/* Subtle radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-red-500/[0.03] blur-[150px] pointer-events-none" />

            <div className="relative z-10 section-padding max-w-7xl mx-auto">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-20"
                >
                    <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-red-400/70 font-semibold mb-4 flex items-center gap-2">
                        <span className="w-8 h-px bg-red-400/50" />
                        The Problem
                    </p>
                    <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[0.95] max-w-4xl mb-6">
                        The world is drowning in plastic<br />
                        & choking on methane.{" "}
                        <span className="text-terra-sand/30">Neither has a scalable solution — until now.</span>
                    </h2>
                    <p className="font-sans text-base md:text-lg text-terra-sand/40 max-w-2xl leading-relaxed">
                        Conventional plastics persist for centuries. Existing biodegradable alternatives
                        are prohibitively expensive. Meanwhile, industrial methane — a greenhouse gas
                        80× more potent than CO₂ — is vented or flared, wasting both energy and carbon.
                        Terra Bioware turns both crises into one elegant solution.
                    </p>
                </motion.div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="relative p-6 md:p-8 rounded-2xl border border-white/[0.05] bg-white/[0.02]"
                        >
                            <p className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-terra-sand mb-3">
                                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                            </p>
                            <p className="text-sm md:text-base text-terra-sand/60 font-sans leading-snug mb-2">{stat.label}</p>
                            <p className="text-xs md:text-sm text-terra-sand/30 font-sans">{stat.detail}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Transition statement */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mt-16 md:mt-24 text-center"
                >
                    <p className="font-display text-xl md:text-2xl lg:text-3xl text-terra-sand/50 max-w-3xl mx-auto italic leading-relaxed">
                        &ldquo;What if the very emissions destroying our planet could become
                        the materials that save it?&rdquo;
                    </p>
                    <p className="mt-4 text-sm md:text-base text-terra-teal/60 font-sans">— The Terra Bioware thesis</p>
                </motion.div>
            </div>
        </section>
    );
}
