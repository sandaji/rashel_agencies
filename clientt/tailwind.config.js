/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#374151",
        blue600: "#0284c7",
        navbg: "#1e40af",
        darkBlue: "#0F172A",
        primary: "#0d0d2b",
        lightprimary: "#35068C",
        lightgray: "#e0e0e0",
        greyishwhite: "#1F2937",
        lightergray: "#9CA3AF",
        divbg: "#374151",
        greyishsecondary: "#1F2937",
        secondary: "#2B076E",
        lightBlue: "#491F98",
        lighterBlue: "#491f98",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
