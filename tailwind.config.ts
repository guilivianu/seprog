import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Product Sans Regular", " Helvetica", "Arial", "sans-serif"],
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      yellow: "#f3bc18",
      blue: {
        lightest: "#48aadf",
        light: "#4078bc",
        dark: "#2d3e51",
      },
      gray: "#354455",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
