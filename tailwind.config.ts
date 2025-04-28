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
        },
    },
    plugins: [],
}

export default config;
