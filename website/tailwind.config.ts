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
      scrollBehavior: {
        smooth: 'smooth',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'prussian': '#1c3144',
      'engineering': '#d00000',
      'verdigris': '#70a9a1',
      'cambridge': '#9ec1a3',
      'white': '#ffffff',
      'vanilla': '#F8F4A6',
      'wine': '#6B2737',
      'persian': '#E08E45',
      'tea': '#BDF7B7',
    },
    keyframes: {
      typing: {
        "0%": {
          width: "0%",
          visibility: "hidden"
        },
        "100%": {
          width: "100%"
        }
      },
      blink: {
        "50%": {
          borderColor: "transparent"
        },
        "100%": {
          borderColor: "white"
        }
      }
    },
    animation: {
      typing: "typing 5s steps(40) infinite alternate, blink .7s infinite"
    }
  },
  plugins: [],
};


export default config;
