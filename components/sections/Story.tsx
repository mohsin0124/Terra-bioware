"use client";

import { motion } from "framer-motion";
import { Award, Users, FlaskConical, Target, Globe, BookOpen, Landmark } from "lucide-react";

const MILESTONES = [
    {
        year: "2022",
        title: "Terra Bioware Founded",
        desc: "Shruti Singh establishes Anava Bioware Pvt. Ltd. (Terra Bioware) in Bengaluru with a mission to turn industrial emissions into high-value biomaterials.",
    },
    {
        year: "2022",
        title: "NITI Aayog Grant — $120K",
        desc: "Awarded the prestigious NITI Aayog Grant of $120,000 for climate-positive innovation in advanced biomaterials — validating the commercial potential of methane-to-PHA conversion.",
    },
    {
        year: "2022",
        title: "BIRAC BioChallenge '22 Winner",
        desc: "Recognized at BIRAC Bionest BioChallenge, one of India's premier biotech startup competitions run by the Government's Biotechnology Industry Research Assistance Council.",
    },
    {
        year: "2022–23",
        title: "BITS Pilani Cleantech Pre-Incubation",
        desc: "Selected for the BITS Pilani Cleantech Pre-Incubation Program, refining the biomanufacturing process and preparing for lab-to-pilot scale transition.",
    },
    {
        year: "2023",
        title: "NSRCEL IIM Bangalore Incubation",
        desc: "Incubated at the Nadathur S Raghavan Centre for Entrepreneurial Learning (NSRCEL) at IIM Bangalore — one of India's top startup incubators, accelerating R&D and go-to-market strategy.",
    },
    {
        year: "2023",
        title: "Rebalance Accelerator Cohort 05",
        desc: "Joined Rebalance's Accelerator focused on climate and sustainability startups, gaining mentorship and investor access.",
    },
    {
        year: "2023",
        title: "Pre-Seed Funding Closed",
        desc: "Closed pre-seed round led by Rebalance Angel Community with participation from Seeders and angel investors. Arise Ventures joins as institutional investor.",
    },
    {
        year: "2024–25",
        title: "Biorefinery Scale-Up",
        desc: "Progressing from lab to pilot biorefinery, optimizing bioreactor configurations, and preparing for commercial PHA production targeting nutraceutical and cosmetic markets.",
    },
    {
        year: "2027",
        title: "Vision: Affordable PHA at Scale",
        desc: "Target: making next-generation PHA bioplastics an affordable, functional alternative to petroleum plastics — closing the 3–5× cost gap that blocks mainstream adoption.",
    },
];

const STATS = [
    { label: "Carbon Impact", value: "Net Negative", icon: Target, desc: "At production scale" },
    { label: "PHA Variants", value: "150+", icon: FlaskConical, desc: "Biopolyester family" },
    { label: "Recognition", value: "5+", icon: Award, desc: "Awards & programs" },
    { label: "Headquarters", value: "Bengaluru", icon: Globe, desc: "Karnataka, India" },
];

const INVESTORS = [
    "Rebalance Angel Community",
    "Arise Ventures",
    "Seeders",
    "The Sustainability Mafia",
    "The Incubation Network",
    "Atal Incubation Centre — Nalanda",
];

export function Story() {
    return (
        <section
            id="story"
            className="relative w-full bg-terra-sand text-terra-green overflow-hidden py-24 md:py-32 section-padding"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 max-w-3xl"
                >
                    <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-terra-teal font-semibold mb-4 flex items-center gap-2">
                        <span className="w-8 h-px bg-terra-teal" />
                        Our Story
                    </p>
                    <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6 leading-[0.95]">
                        From Sustainability<br />
                        Advocate to <span className="italic text-terra-teal">Climate</span><br />
                        <span className="italic text-terra-teal">Entrepreneur.</span>
                    </h2>
                    <p className="font-sans text-base md:text-lg text-terra-forest/60 max-w-2xl leading-relaxed">
                        Terra Bioware was born from the conviction that climate change is not just a crisis — it&apos;s
                        a commercial opportunity. Founded by Shruti Singh, who brings over a decade of experience at the intersection
                        of climate policy, sustainable fashion, and supply chain transformation, the company applies
                        systems-level thinking to one of humanity&apos;s greatest challenges.
                    </p>
                </motion.div>

                {/* Founder */}
                <div className="mb-24">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="uppercase tracking-[0.25em] text-xs md:text-sm text-terra-teal font-semibold mb-10 flex items-center gap-2"
                    >
                        <span className="w-8 h-px bg-terra-teal" />
                        Founder
                    </motion.p>

                    <div className="max-w-2xl">
                        {/* Shruti Singh */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white/50 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-terra-green/5"
                        >
                            <div className="flex items-start gap-5 mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-terra-teal/10 flex items-center justify-center shrink-0">
                                    <span className="text-terra-teal font-display font-bold text-xl">SS</span>
                                </div>
                                <div>
                                    <h3 className="font-display font-semibold text-xl md:text-2xl">Shruti Singh</h3>
                                    <p className="text-sm md:text-base text-terra-teal font-medium">Founder & CEO</p>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm md:text-base text-terra-forest/60 leading-relaxed">
                                <p>
                                    Over a decade at the intersection of climate change, creative industry, and public
                                    policy. Former Country Director (India) at <strong className="text-terra-green">Canopy</strong> — a
                                    non-profit transforming paper, packaging, and textile supply chains to protect global forests.
                                </p>
                                <p>
                                    Founding member and India Hub Strategist at <strong className="text-terra-green">Fashion Revolution India</strong>.
                                    Authored policy reports on gender equity in cotton farming and craft in the climate crisis,
                                    presented at <strong className="text-terra-green">G20 and COP28</strong>.
                                </p>
                                <p>
                                    Expertise: Biosystems, Ecology, Plastics, Public Health, Sustainability.
                                    Also serves as CEO of Ex Seed.
                                </p>
                            </div>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {["Canopy", "Fashion Revolution", "G20 Speaker", "COP28", "Ex Seed"].map((tag) => (
                                    <span key={tag} className="text-[11px] px-3 py-1.5 rounded-full bg-terra-teal/5 text-terra-teal/70 border border-terra-teal/10 font-mono uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-24">
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="bg-white/40 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-terra-green/5"
                        >
                            <stat.icon className="text-terra-teal mb-3" size={20} />
                            <p className="font-display text-2xl md:text-3xl font-bold text-terra-green">{stat.value}</p>
                            <p className="text-sm text-terra-forest/40 mt-0.5">{stat.desc}</p>
                            <p className="text-[11px] text-terra-forest/30 uppercase tracking-wider mt-1">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Timeline */}
                <div className="relative mb-24">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="uppercase tracking-[0.25em] text-xs md:text-sm text-terra-teal font-semibold mb-12 flex items-center gap-2"
                    >
                        <span className="w-8 h-px bg-terra-teal" />
                        Journey & Milestones
                    </motion.p>

                    {/* Timeline line */}
                    <div className="absolute left-[9px] md:left-[11px] top-28 bottom-0 w-px bg-terra-teal/15" />

                    <div className="space-y-8">
                        {MILESTONES.map((milestone, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -15 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06, duration: 0.5 }}
                                className="relative flex items-start gap-6 md:gap-10"
                            >
                                <div className="relative z-10 mt-1.5 shrink-0">
                                    <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center ${i === MILESTONES.length - 1
                                        ? "border-terra-teal bg-terra-teal/10"
                                        : "border-terra-teal/60 bg-terra-sand"
                                        }`}>
                                        <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${i === MILESTONES.length - 1 ? "bg-terra-teal" : "bg-terra-teal/60"
                                            }`} />
                                    </div>
                                </div>

                                <div className="flex-1 pb-2">
                                    <span className="text-[11px] font-mono text-terra-teal uppercase tracking-widest font-semibold">
                                        {milestone.year}
                                    </span>
                                    <h3 className="font-display font-semibold text-lg md:text-xl mt-1 mb-1.5">{milestone.title}</h3>
                                    <p className="text-terra-forest/50 text-sm md:text-base leading-relaxed max-w-2xl">{milestone.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Investors & Backers */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-terra-teal font-semibold mb-8 flex items-center gap-2">
                        <span className="w-8 h-px bg-terra-teal" />
                        Investors & Partners
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {INVESTORS.map((investor, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05, duration: 0.4 }}
                                className="px-5 py-4 rounded-xl border border-terra-green/5 bg-white/30 text-sm md:text-base font-sans text-terra-forest/60 flex items-center gap-3"
                            >
                                <Landmark size={14} className="text-terra-teal shrink-0" />
                                {investor}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Founder Quote */}
                <motion.blockquote
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="border-l-2 border-terra-teal pl-8 md:pl-12 max-w-3xl"
                >
                    <p className="font-display text-xl md:text-2xl lg:text-3xl italic text-terra-green/70 leading-relaxed">
                        &ldquo;Climate change presents a commercial opportunity. We bridge the gap between
                        scientific innovation and industrial reality — making materials that are both
                        planet-positive and economically viable.&rdquo;
                    </p>
                    <footer className="mt-6 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-terra-teal/15 flex items-center justify-center">
                            <span className="text-terra-teal font-semibold text-sm">SS</span>
                        </div>
                        <div>
                            <p className="font-semibold text-terra-green text-base">Shruti Singh</p>
                            <p className="text-sm text-terra-forest/40">Founder & CEO, Terra Bioware</p>
                        </div>
                    </footer>
                </motion.blockquote>
            </div>
        </section>
    );
}
