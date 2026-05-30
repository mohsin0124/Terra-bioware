"use client";

import { motion } from "framer-motion";
import { Package, Pill, Palette, Wheat, Heart, Layers, Utensils } from "lucide-react";

const APPLICATIONS = [
    {
        icon: Pill,
        title: "Nutraceuticals & Pharma",
        desc: "Biocompatible PHA for drug delivery systems, capsule shells, and controlled-release formulations — leveraging the body-safe properties of polyhydroxyalkanoates. A primary high-value market for Terra Bioware.",
        market: "Priority Market",
        highlight: true,
    },
    {
        icon: Palette,
        title: "Cosmetics & Personal Care",
        desc: "Microplastic-free exfoliants, bio-based packaging, and sustainable formulation ingredients for the clean beauty industry. PHA microspheres replace harmful plastic microbeads.",
        market: "Priority Market",
        highlight: true,
    },
    {
        icon: Heart,
        title: "Medical Devices",
        desc: "Bioabsorbable sutures, tissue engineering scaffolds, cardiovascular patches, and implant materials. PHA integrates safely with biological systems and degrades predictably in the body.",
        market: "MedTech",
        highlight: false,
    },
    {
        icon: Package,
        title: "Sustainable Packaging",
        desc: "Flexible films, rigid containers, coatings, and laminates that match petroleum-plastic performance — then biodegrade completely in marine, soil, and home compost environments.",
        market: "Packaging",
        highlight: false,
    },
    {
        icon: Wheat,
        title: "Agriculture",
        desc: "Biodegradable mulch films, seed coatings, and controlled-release fertilizer capsules that enhance yields without leaving microplastic residue in soil. Fully soil-biodegradable.",
        market: "AgriTech",
        highlight: false,
    },
    {
        icon: Layers,
        title: "3D Printing Filaments",
        desc: "High-performance, biodegradable filaments for additive manufacturing — enabling sustainable rapid prototyping and end-use parts with comparable mechanical properties to PLA.",
        market: "Manufacturing",
        highlight: false,
    },
    {
        icon: Utensils,
        title: "Consumer Products",
        desc: "Single-use cutlery, straws, plates, cups, and food containers that are truly home-compostable — not just 'industrially compostable' like many greenwashed alternatives.",
        market: "Consumer",
        highlight: false,
    },
];

const PRODUCT_FORMS = [
    { name: "Pellets", desc: "Injection molding & extrusion" },
    { name: "Films", desc: "Packaging & agriculture" },
    { name: "Fibers", desc: "Textiles & composites" },
    { name: "Microspheres", desc: "Cosmetics & pharma" },
    { name: "Coatings", desc: "Paper & food contact" },
];

export function Applications() {
    return (
        <section
            id="applications"
            className="relative w-full bg-[#061c13] text-terra-sand overflow-x-clip py-24 md:py-32 section-padding"
        >
            {/* Dot grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,180,160,0.8) 1px, transparent 0)`,
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 max-w-3xl"
                >
                    <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-terra-teal font-semibold mb-4 flex items-center gap-2">
                        <span className="w-8 h-px bg-terra-teal" />
                        Market Applications
                    </p>
                    <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6 leading-[0.95]">
                        One Polymer,<br />
                        <span className="italic text-terra-teal">Infinite</span> Uses.
                    </h2>
                    <p className="font-sans text-base md:text-lg text-terra-sand/40 max-w-2xl leading-relaxed">
                        TerraPHA&apos;s family of 150+ biopolyester variants serves high-value markets across
                        seven industries. Our initial focus: nutraceuticals and cosmetics — where biocompatibility
                        commands premium pricing and PHA&apos;s properties are unmatched.
                    </p>
                </motion.div>

                {/* Application Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {APPLICATIONS.map((app, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06, duration: 0.6 }}
                            className={`group relative p-7 rounded-3xl border transition-all duration-500 cursor-default ${app.highlight
                                ? "border-terra-teal/20 bg-terra-teal/[0.04]"
                                : "border-white/[0.06] bg-white/[0.02] hover:border-terra-teal/15 hover:bg-white/[0.04]"
                                }`}
                        >
                            <div className="absolute top-5 right-5">
                                <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border ${app.highlight
                                    ? "text-terra-teal border-terra-teal/30 bg-terra-teal/10"
                                    : "text-terra-teal/40 border-terra-teal/10"
                                    }`}>
                                    {app.market}
                                </span>
                            </div>

                            <div className={`p-3 rounded-2xl w-fit mb-5 transition-colors duration-300 ${app.highlight ? "bg-terra-teal/15" : "bg-terra-teal/10 group-hover:bg-terra-teal/15"
                                }`}>
                                <app.icon className="text-terra-teal" size={22} />
                            </div>
                            <h3 className="font-display font-semibold text-lg md:text-xl mb-2 group-hover:text-terra-teal transition-colors duration-300">
                                {app.title}
                            </h3>
                            <p className="text-terra-sand/40 text-sm md:text-[15px] leading-relaxed">{app.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Product Forms */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-20"
                >
                    <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-terra-teal font-semibold mb-8 flex items-center gap-2">
                        <span className="w-8 h-px bg-terra-teal" />
                        Product Forms
                    </p>
                    <div className="flex flex-wrap gap-4">
                        {PRODUCT_FORMS.map((form, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.4 }}
                                className="px-6 py-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-terra-teal/20 transition-all duration-300"
                            >
                                <p className="font-display font-semibold text-base md:text-lg text-terra-sand mb-0.5">{form.name}</p>
                                <p className="text-xs md:text-sm text-terra-sand/30">{form.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* 2027 target */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-20 p-8 md:p-12 rounded-3xl border border-terra-teal/10 bg-terra-teal/[0.03]"
                >
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div>
                            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-terra-teal/60 mb-2 font-semibold">Vision 2027</p>
                            <p className="font-display text-xl md:text-2xl lg:text-3xl text-terra-sand max-w-xl leading-snug">
                                Making PHA bioplastics an <span className="text-terra-teal font-semibold">affordable and functional</span> alternative
                                to petroleum plastics at industrial scale.
                            </p>
                        </div>
                        <div className="shrink-0 text-center md:text-right">
                            <p className="font-display text-5xl md:text-6xl font-bold text-terra-teal">2027</p>
                            <p className="text-xs md:text-sm text-terra-sand/30 mt-1">Target Year</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
