import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      cream: '#FFFFFF',
      dcream: '#f8f5f5',
      black: '#000000',
      pastel1: '#FAEDCB',
      pastel2: '#C9E4DE',
      pastel3: '#C6DEF1',
      pastel4: '#DBCDF0',
      pastel5: '#F2C6DE',
      pastel6: '#F7D9C4',
    }
  },
  plugins: [],
};
export default config;
