import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",      // #f5f0e9 in light, #061c13 in dark
                foreground: "var(--foreground)",
                terra: {
                    green: "#0a4d2e",
                    forest: "#14593f",
                    teal: "#00b4a0",
                    cyan: "#009688",
                    earth: "#e8e0d9",
                    sand: "#f5f0e9",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                display: ["var(--font-playfair)", "serif"],
            },
            backgroundImage: {
                'bioluminescence': 'radial-gradient(circle at center, rgba(0, 180, 160, 0.15) 0%, transparent 60%)',
            },
            animation: {
                'breathe': 'breathe 4s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                breathe: {
                    '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
                    '50%': { opacity: '1', transform: 'scale(1.05)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-15px)' },
                }
            }
        },
    },
    plugins: [],
};
export default config;
