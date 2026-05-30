import { Preloader } from "@/components/shared/Preloader";
import { Navigation } from "@/components/shared/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Technology } from "@/components/sections/Technology";
import { Applications } from "@/components/sections/Applications";
import { Story } from "@/components/sections/Story";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
    return (
        <main className="relative w-full overflow-hidden">
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
