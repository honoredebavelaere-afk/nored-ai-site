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
        bg: {
          DEFAULT: "#FFFFFF",
          surface: "#F5F5F7",
          "surface-hover": "#E8E8ED",
          dark: "#1D1D1F",
        },
        border: {
          DEFAULT: "#D2D2D7",
          light: "#E5E5EA",
        },
        text: {
          primary: "#1D1D1F",
          secondary: "#424245",
          tertiary: "#6E6E73",
        },
        accent: {
          DEFAULT: "#0071E3",
          hover: "#0077ED",
          muted: "rgba(0, 113, 227, 0.08)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
