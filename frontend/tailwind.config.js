/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
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
