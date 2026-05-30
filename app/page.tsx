import { Preloader } from "@/components/shared/Preloader";
import { Navigation } from "@/components/shared/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Technology } from "@/components/sections/Technology";
import { Applications } from "@/components/sections/Applications";
import { Story } from "@/components/sections/Story";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Terra Bioware",
        "legalName": "Anava Bioware Pvt. Ltd.",
        "url": "https://terra-bioware.vercel.app",
        "logo": "https://terra-bioware.vercel.app/logo.png",
        "foundingDate": "2022",
        "founders": [
            {
                "@type": "Person",
                "name": "Shruti Singh"
            }
        ],
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bengaluru",
            "addressCountry": "IN"
        },
        "description": "Climate-positive biomanufacturing startup turning industrial methane into high-performance biodegradable biopolymers.",
        "sameAs": [
            "https://www.linkedin.com/company/terra-bioware"
        ]
    };

    return (
        <main className="relative w-full overflow-x-clip">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Preloader />
            <Navigation />

            <div className="flex flex-col w-full">
                <Hero />
                <Problem />
                <Technology />
                <Applications />
                <Story />
                <Contact />
            </div>
        </main>
    );
}
