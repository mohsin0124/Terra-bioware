import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ClientProviders } from "@/components/shared/ClientProviders";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
    title: "Terra Bioware — Climate-Positive Biomanufacturing | Turning Emissions into Biomaterials",
    description:
        "Terra Bioware (Anava Bioware Pvt. Ltd.) engineers proprietary methanotrophic microbes that capture industrial methane and CO₂, transforming them into TerraPHA — a family of 150+ high-performance, marine-biodegradable biopolymers. Founded 2022, Bengaluru.",
    keywords: [
        "Terra Bioware",
        "TerraPHA",
        "PHA bioplastics",
        "polyhydroxyalkanoates",
        "climate-positive",
        "biomanufacturing",
        "methane capture",
        "biodegradable polymers",
        "carbon negative",
        "Bengaluru startup",
        "Shruti Singh",
    ],
    authors: [{ name: "Terra Bioware" }],
    openGraph: {
        title: "Terra Bioware — Turning Emissions into Tomorrow's Materials",
        description:
            "Climate-positive biomanufacturing. 150+ PHA biopolyesters from captured methane. Marine-biodegradable, home-compostable, carbon-negative.",
        url: "https://www.terrabioware.co",
        siteName: "Terra Bioware",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Terra Bioware — Climate-Positive Biomanufacturing",
        description: "Turning industrial methane into high-performance biodegradable biopolymers.",
    },
    other: {
        "theme-color": "#061c13",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${inter.variable} ${playfair.variable} font-sans bg-background text-foreground antialiased selection:bg-terra-teal selection:text-white`}
            >
                <ClientProviders>
                    {children}
                </ClientProviders>
            </body>
        </html>
    );
}
