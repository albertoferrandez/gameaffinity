const { nextui } = require("@nextui-org/react");
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "shadow-planet": "#221144",
      "purple-emperor": "#6633BB",
      galactic: "#442288",
      sulphur: "#D5D717",
      spiralgreen: "d4ff8f",
      lightgreen: "#f0f2f1",
      spiraldark: "#9b7cff",
      greengray: "#d0d8d4",
    },
  },
  plugins: [nextui({ addCommonColors: true })],
};
export default config;
