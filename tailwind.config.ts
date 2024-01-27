import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
        sourceSansPro: ["var(--font-source-sans-pro)"],
      },
      colors: {
        "primary-2-300": "#FF6A00",
        "grey-50": "#FAFAFA",
        "grey-100": "#F4F4F5",
        "grey-300": "#D4D4D8",
        "grey-500": "#71717A",
        "grey-800": "#27272A",
        "grey-900": "#18181B",
        danger: "#F64582",
      },
      boxShadow: {
        custom:
          "0px 14px 24px 0px rgba(14, 31, 53, 0.08), 0px 6px 12px 0px rgba(14, 31, 53, 0.12), 0px 3px 6px 0px rgba(14, 31, 53, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
