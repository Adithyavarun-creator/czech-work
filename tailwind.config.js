/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Wix Madefor Text", "sans-serif"],
      },
      colors: {
        "custom-orange": "#ff5f23",
        "custom-yellow": "#FCB900",
        footer: "#241E0E",
      },
    },
  },
  screens: {
    sm: "576px",
    md: "960px",
    lg: "1440px",
  },
  plugins: [],
};
