"use client";

import { Droplet, Leaf, Sprout, Factory, Beaker, Recycle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const PROCESS_STEPS = [
    {
        icon: Factory,
        step: "01",
        title: "Methane Capture",
        stat: "Feedstock: CH₄ + CO₂",
        desc: "Industrial methane and carbon dioxide emissions are captured directly at source. Our process accepts even 'dirty gas' — no costly pre-treatment required. Sources include landfills, wastewater treatment, oil & gas operations, and agricultural biogas.",
        color: "from-red-500/10 to-orange-500/10",
    },
    {
        icon: Beaker,
        step: "02",
        title: "Microbial Bioreactors",
        stat: "Proprietary Methanotrophs",
        desc: "Inside our precision bioreactors, proprietary Type II methanotrophic bacteria (Methylocystis, Methylosinus) consume methane as their sole carbon and energy source. Under nutrient-limited conditions, they accumulate PHAs intracellularly — like how animals store fat.",
        color: "from-terra-teal/10 to-cyan-500/10",
    },
    {
        icon: Recycle,
        step: "03",
        title: "PHA Extraction & Processing",
        stat: "2–3 kg CH₄ → 1 kg PHA",
        desc: "PHAs are extracted from microbial cells and processed into pellets, films, fibers, and microspheres — ready for packaging, agriculture, nutraceuticals, cosmetics, and medical-grade applications. Over 150 biopolyester variants are possible.",
        color: "from-emerald-500/10 to-green-500/10",
    },
];

const MATERIAL_PROPERTIES = [
    {
        icon: Droplet,
        title: "Marine Biodegradable",
        desc: "Decomposes safely in ocean environments without leaving microplastic residue — addressing the 8M+ tonnes of plastic entering our oceans annually.",
    },
    {
        icon: Sprout,
        title: "Home Compostable",
        desc: "Breaks down in backyard compost conditions. No industrial composting facility needed — just soil, moisture, and time.",
    },
    {
        icon: Leaf,
        title: "Carbon Negative",
        desc: "At full production scale, Terra Bioware sequesters more greenhouse gas equivalents than emitted. Every kilogram of PHA is carbon pulled from the atmosphere.",
    },
];

export function Technology() {
    return (
        <section
            id="technology"
            className="relative w-full bg-terra-sand text-terra-green overflow-hidden"
        >
            {/* Top gradient blend from dark sections */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#061c13] to-transparent z-10 pointer-events-none" />

            {/* Section Header */}
            <div className="relative z-20 pt-32 pb-16 section-padding max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-terra-teal font-semibold mb-4 flex items-center gap-2">
                        <span className="w-8 h-px bg-terra-teal" />
                        Our Technology
                    </p>
                    <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6 leading-[0.95] max-w-4xl">
                        The TerraPHA<br />Process.
                    </h2>
                    <p className="font-sans text-base md:text-lg lg:text-xl text-terra-forest/60 max-w-2xl leading-relaxed">
                        Using highly specialized, proprietary methanotrophic bacteria, our biomanufacturing
                        process captures industrial methane and CO₂ — sequestering greenhouse gases inside
                        biological factories. Carbon is metabolized into Polyhydroxyalkanoates (PHAs), a family
                        of 150+ biopolyesters with properties that rival conventional petroleum-based plastics.
                    </p>
                </motion.div>
            </div>

            {/* Process Steps */}
            <div className="relative z-20 pb-20 section-padding max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {PROCESS_STEPS.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, margin: "-15%" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="process-card group bg-white/50 backdrop-blur-md p-8 lg:p-10 rounded-3xl border border-terra-green/5 hover:border-terra-teal/20 shadow-sm hover:shadow-xl transition-all duration-500 will-change-transform relative overflow-hidden"
                        >
                            {/* Watermark step number */}
                            <span className="absolute top-5 right-7 font-display text-[5rem] font-bold text-terra-green/[0.03] leading-none select-none">
                                {step.step}
                            </span>

                            {/* Hover gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />

                            <div className="relative z-10">
                                <div className="p-3.5 bg-terra-teal/10 rounded-2xl w-fit mb-6 group-hover:bg-terra-teal/20 transition-colors duration-300">
                                    <step.icon className="text-terra-teal" size={26} />
                                </div>
                                <p className="text-[11px] font-mono text-terra-teal uppercase tracking-widest mb-2 font-semibold">
                                    {step.stat}
                                </p>
                                <h3 className="font-display font-semibold text-xl md:text-2xl mb-3">{step.title}</h3>
                                <p className="text-terra-forest/55 leading-relaxed text-sm md:text-base">{step.desc}</p>
                            </div>

                            {/* Arrow connector (desktop only) */}
                            {i < PROCESS_STEPS.length - 1 && (
                                <div className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 items-center justify-center">
                                    <ArrowRight size={16} className="text-terra-teal/30" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Conversion Highlight */}
            <div className="relative z-20 section-padding max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-terra-green to-[#0d5a38] text-terra-sand rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div>
                        <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-terra-teal mb-2 font-semibold">Carbon Conversion</p>
                        <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                            2–3 kg of methane in.
                            <br />
                            <span className="text-terra-teal">1 kg of biodegradable PHA out.</span>
                        </p>
                    </div>
                    <div className="text-right md:text-left shrink-0">
                        <p className="font-display text-4xl md:text-5xl font-bold text-terra-teal">150+</p>
                        <p className="text-sm md:text-base text-terra-sand/50 mt-1">PHA biopolyester<br />variants possible</p>
                    </div>
                </motion.div>
            </div>

            {/* Material Properties */}
            <div className="relative z-20 pt-20 pb-32 section-padding max-w-7xl mx-auto">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="uppercase tracking-[0.25em] text-xs md:text-sm text-terra-teal font-semibold mb-10 flex items-center gap-2"
                >
                    <span className="w-8 h-px bg-terra-teal" />
                    Material Properties
                </motion.p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
                    {MATERIAL_PROPERTIES.map((prop, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            className="flex flex-col gap-4"
                        >
                            <div className="p-3 bg-terra-teal/10 rounded-xl w-fit">
                                <prop.icon className="text-terra-teal" size={22} />
                            </div>
                            <h4 className="font-sans font-semibold text-lg md:text-xl">{prop.title}</h4>
                            <p className="text-terra-forest/55 text-sm md:text-base leading-relaxed">{prop.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
