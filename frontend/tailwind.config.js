/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#EFF6FA",
        primary: {
          DEFAULT: "#183661",
          light: "#1476B5",
        },
        secondary: "#FF8548",
        accent: "#FF8548",
        neutral: {
          white: "#FFF",
          black: "#000",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
