import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#172033",
          slate: "#4b5873",
          blue: "#1f5eff",
          teal: "#0f9f9a",
          gold: "#f5b72f",
          mist: "#f4f7fb",
          red: "#ef3b24",
          cream: "#f7f4ee",
          paper: "#fbfcfe",
          warm: "#fff4dc",
        },
      },
      borderRadius: {
        card: "1.75rem",
        panel: "2rem",
        image: "1.5rem",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(23, 32, 51, 0.09)",
      },
    },
  },
  plugins: [],
};

export default config;
