import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "#F1F4FF",
          100: "#E4E8FF",
          200: "#C9D1FF",
          300: "#AEBAFF",
          400: "#93A3FF",
          500: "#7589FF",
          600: "#566EFF",
          700: "#4A5FDC",
          800: "#3E50B9",
        }
      },
      fontFamily: {
        suite: ['var(--font-suite)']
      }
    },
  },
  plugins: [],
};
export default config;
