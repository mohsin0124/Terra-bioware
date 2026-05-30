"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticButton } from "../ui/magnetic-button";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
    { label: "Technology", href: "#technology" },
    { label: "Applications", href: "#applications" },
    { label: "Our Story", href: "#story" },
    { label: "Contact", href: "#contact" },
];

export function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        // Intersection Observer to track active section
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                });
            },
            { rootMargin: "-40% 0px -50% 0px" }
        );

        sections.forEach((section) => observer.observe(section));
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    const handleNavClick = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
            e.preventDefault();
            setMobileOpen(false);
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        },
        []
    );

    const handleContactClick = useCallback(() => {
        setMobileOpen(false);
        const target = document.querySelector("#contact");
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
                className={`fixed top-0 left-0 right-0 z-[100] px-6 py-4 md:px-12 flex items-center justify-between transition-all duration-500 ${scrolled
                        ? "bg-[#061c13]/90 backdrop-blur-xl shadow-lg shadow-black/10 py-3"
                        : "bg-transparent py-6"
                    }`}
            >
                {/* Logo */}
                <a
                    href="#hero"
                    onClick={(e) => handleNavClick(e, "#hero")}
                    className="flex items-center gap-3 cursor-pointer group"
                >
                    <Image
                        src="/logo.png"
                        alt="Terra Bioware Logo"
                        width={36}
                        height={36}
                        className="rounded-full border border-terra-teal/40 group-hover:border-terra-teal transition-colors duration-300"
                    />
                    <span className="font-display font-semibold text-terra-sand text-xl tracking-wide">
                        Terra Bioware
                    </span>
                </a>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-xl px-2 py-1.5 rounded-full border border-white/10">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === link.href
                                    ? "text-terra-teal bg-terra-teal/10"
                                    : "text-terra-sand/70 hover:text-terra-sand hover:bg-white/5"
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA + Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <div className="hidden md:block">
                        <MagneticButton>
                            <button
                                onClick={handleContactClick}
                                className="bg-terra-teal text-[#061c13] px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-white hover:text-terra-green transition-all duration-300 shadow-[0_0_20px_rgba(0,180,160,0.3)] hover:shadow-[0_0_30px_rgba(0,180,160,0.5)]"
                            >
                                Partner with Us
                            </button>
                        </MagneticButton>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden text-terra-sand p-2 hover:bg-white/5 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[99] bg-[#061c13]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 pt-20"
                    >
                        {NAV_LINKS.map((link, i) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="font-display text-3xl text-terra-sand/80 hover:text-terra-teal transition-colors"
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            onClick={handleContactClick}
                            className="mt-4 bg-terra-teal text-[#061c13] px-8 py-4 rounded-full font-semibold text-lg"
                        >
                            Partner with Us
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
