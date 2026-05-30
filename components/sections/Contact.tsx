"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, ArrowUpRight, MapPin, Mail, Globe, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const contactSchema = z.object({
    name: z.string().min(2, "Name is too short"),
    email: z.string().email("Invalid email address"),
    company: z.string().optional(),
    interest: z.string().optional(),
    message: z.string().min(10, "Tell us a bit more."),
});

type ContactFormData = z.infer<typeof contactSchema>;

const INTEREST_OPTIONS = [
    "Technology Licensing",
    "Partnership / Collaboration",
    "Investment Inquiry",
    "Careers — Join the Lab",
    "Media / Press",
    "General Inquiry",
];

export function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to submit inquiry");
            }

            setIsSubmitted(true);
            reset();
        } catch (error) {
            console.error("Submission error:", error);
            alert("Something went wrong. Please try again later.");
        }
    };

    return (
        <section id="contact" className="relative bg-[#061c13] text-terra-sand overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-terra-teal/[0.03] blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-terra-teal/[0.02] blur-[100px] pointer-events-none" />

            <div className="relative z-10 section-padding pt-24 md:pt-32 pb-12 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Left Column */}
                    <div className="lg:w-1/2 flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-terra-teal font-semibold mb-4 flex items-center gap-2">
                                <span className="w-8 h-px bg-terra-teal" />
                                Get in Touch
                            </p>
                            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 leading-[0.95]">
                                Join the<br />
                                <span className="italic text-terra-teal">materials</span><br />
                                revolution.
                            </h2>
                            <p className="font-sans text-base md:text-lg text-terra-sand/40 max-w-md mb-10 leading-relaxed">
                                Whether you&apos;re looking to license our methanotrophic biomanufacturing technology,
                                partner on high-value PHA applications, invest in climate-positive materials, or
                                join our Bengaluru lab — we want to hear from you.
                            </p>
                        </motion.div>

                        {/* Contact info */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="space-y-3 mb-10"
                        >
                            <div className="flex items-center gap-3 text-terra-sand/35 text-sm md:text-base">
                                <MapPin size={14} className="text-terra-teal shrink-0" />
                                <span>Bengaluru, Karnataka, India</span>
                            </div>
                            <div className="flex items-center gap-3 text-terra-sand/35 text-sm md:text-base">
                                <Globe size={14} className="text-terra-teal shrink-0" />
                                <span>www.terrabioware.co</span>
                            </div>
                            <div className="flex items-center gap-3 text-terra-sand/35 text-sm md:text-base">
                                <Mail size={14} className="text-terra-teal shrink-0" />
                                <span>hello@terrabioware.co</span>
                            </div>
                        </motion.div>

                        {/* Recognition */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="mt-auto pt-8 border-t border-white/5"
                        >
                            <p className="text-[10px] text-terra-sand/25 uppercase tracking-widest mb-4">Recognized & Backed by</p>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "BIRAC BioChallenge '22",
                                    "NITI Aayog",
                                    "NSRCEL IIM Bangalore",
                                    "BITS Pilani Cleantech",
                                    "Arise Ventures",
                                    "Rebalance",
                                ].map((item) => (
                                    <span key={item} className="text-[10px] px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] text-terra-sand/30 font-mono uppercase tracking-wider">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column — Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, duration: 0.8 }}
                        className="lg:w-1/2 w-full relative min-h-[500px]"
                    >
                        <AnimatePresence mode="wait">
                            {isSubmitted ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center text-center bg-white/[0.03] backdrop-blur-sm border border-terra-teal/20 rounded-3xl p-7 md:p-9"
                                >
                                    <div className="w-16 h-16 bg-terra-teal/10 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 size={32} className="text-terra-teal" />
                                    </div>
                                    <h3 className="font-display text-2xl md:text-3xl text-terra-sand mb-3">Inquiry Received</h3>
                                    <p className="text-terra-sand/50 text-sm md:text-base max-w-sm mb-8">
                                        Thank you for your interest in Terra Bioware. Our team will review your message and get back to you within 48 hours.
                                    </p>
                                    <button 
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-terra-teal text-sm font-semibold hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="flex flex-col gap-5 bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-3xl p-7 md:p-9"
                                >
                            <div>
                                <input
                                    {...register("name")}
                                    placeholder="Full Name *"
                                    className="w-full bg-transparent border-b border-terra-sand/10 py-4 text-base md:text-lg focus:outline-none focus:border-terra-teal transition-colors duration-300 placeholder:text-terra-sand/20"
                                />
                                {errors.name && (
                                    <span className="text-red-400 mt-1.5 text-xs block">{String(errors.name.message)}</span>
                                )}
                            </div>

                            <div>
                                <input
                                    {...register("email")}
                                    placeholder="Email Address *"
                                    type="email"
                                    className="w-full bg-transparent border-b border-terra-sand/10 py-4 text-base md:text-lg focus:outline-none focus:border-terra-teal transition-colors duration-300 placeholder:text-terra-sand/20"
                                />
                                {errors.email && (
                                    <span className="text-red-400 mt-1.5 text-xs block">{String(errors.email.message)}</span>
                                )}
                            </div>

                            <div>
                                <input
                                    {...register("company")}
                                    placeholder="Company / Organization"
                                    className="w-full bg-transparent border-b border-terra-sand/10 py-4 text-base md:text-lg focus:outline-none focus:border-terra-teal transition-colors duration-300 placeholder:text-terra-sand/20"
                                />
                            </div>

                            <div>
                                <select
                                    {...register("interest")}
                                    className="w-full bg-transparent border-b border-terra-sand/10 py-4 text-base md:text-lg focus:outline-none focus:border-terra-teal transition-colors duration-300 text-terra-sand/40 appearance-none cursor-pointer"
                                    defaultValue=""
                                >
                                    <option value="" disabled className="bg-[#061c13]">I&apos;m interested in...</option>
                                    {INTEREST_OPTIONS.map((opt) => (
                                        <option key={opt} value={opt} className="bg-[#061c13] text-terra-sand">
                                            {opt}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="pt-1">
                                <textarea
                                    {...register("message")}
                                    placeholder="How can we collaborate? *"
                                    rows={3}
                                    className="w-full bg-transparent border-b border-terra-sand/10 py-4 text-base md:text-lg focus:outline-none focus:border-terra-teal transition-colors duration-300 placeholder:text-terra-sand/20 resize-none"
                                />
                                {errors.message && (
                                    <span className="text-red-400 mt-1.5 text-xs block">{String(errors.message.message)}</span>
                                )}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                aria-disabled={isSubmitting}
                                disabled={isSubmitting}
                                className="mt-4 bg-terra-teal text-[#061c13] w-full py-5 rounded-2xl font-bold text-base md:text-lg flex justify-center items-center gap-3 hover:bg-white transition-all duration-300 shadow-[0_0_25px_rgba(0,180,160,0.2)] hover:shadow-[0_0_35px_rgba(0,180,160,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                                <Send size={18} />
                            </motion.button>

                            <p className="text-[10px] text-terra-sand/20 text-center mt-1">
                                We typically respond within 48 hours.
                            </p>
                        </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 section-padding py-6 border-t border-white/[0.04] max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border border-terra-teal/30 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-terra-teal rounded-full" />
                        </div>
                        <span className="font-display text-xs font-semibold text-terra-sand/40">
                            Anava Bioware Pvt. Ltd.
                        </span>
                        <span className="text-terra-sand/15 text-xs">|</span>
                        <span className="text-terra-sand/25 text-xs">d/b/a Terra Bioware</span>
                    </div>

                    <p className="text-[10px] text-terra-sand/20">
                        © {new Date().getFullYear()} Anava Bioware Private Limited. All rights reserved. Bengaluru, India.
                    </p>

                    <div className="flex gap-4">
                        <a
                            href="https://www.linkedin.com/company/terra-bioware/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-terra-sand/25 hover:text-terra-teal transition-colors text-xs flex items-center gap-1"
                        >
                            LinkedIn <ArrowUpRight size={10} />
                        </a>
                        {/* <a
                            href="https://x.com/terrabioware"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-terra-sand/25 hover:text-terra-teal transition-colors text-xs flex items-center gap-1"
                        >
                            X (Twitter) <ArrowUpRight size={10} />
                        </a> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
