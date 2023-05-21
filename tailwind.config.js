const colors = require("tailwindcss/colors");
colors.primary = "#27233A";
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      ...colors,
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
