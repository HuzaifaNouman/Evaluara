/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        baselight: "#EFF6FA",
        basedark: "#0F1114",
        primary: {
          DEFAULT: "#183661",
          light: "#1476B5",
        },
        secondary: "#FF8548",
        accent: "#FF8548",
        neutral: {
          white: "#FFF",
          black: "#000",
          darkGray: "#30363E", // Dark gray color
          deepBlack: "#18120F", // Deep black color
        },
        dark: {
          heading: "#EAECFF",
          text: "#FFFFFF",
          cardBg: "#191B25",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
