import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./page/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],

    theme: {
        extend: {
            colors: {
                primary: "#C778DD",
                secondary: "#282C33",
                light: "#FFFFFF",
            },
            backgroundColor: {
                gray: "#ABB2BF",
            },
            fontFamily: {
                fira: ["Fira Code", "monospace"],
            },
            keyframes: {
                loading: {
                    '0%': { backgroundPosition: '0% 0' },
                    '100%': { backgroundPosition: '300% 0' }
                }
            },
            animation: {
                'loading-dots': 'loading 1s linear infinite'
            }
        },
    },
    plugins: [],
}

export default config;
