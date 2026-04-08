import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'wiser-dark-teal': '#163a38',  /* Deep architectural forest teal */
        'wiser-teal': '#286964',       /* Mid teal */
        'wiser-light-teal': '#669c98',
        'wiser-sand': '#f0eae1',       /* Elegant warm off-white/beige */
        'wiser-gold': '#c9a25b',       /* Luxury accent */
        'wiser-gray': '#4a4a4a',
        'wiser-off-white': '#faf9f6',
      },
      fontFamily: {
        arabic: ['var(--font-muslimah)', 'Tajawal', 'sans-serif'],
        'heading-en': ['var(--font-gloock)', 'Georgia', 'serif'],
        'body-en': ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
