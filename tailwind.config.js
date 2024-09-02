/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#104573", // dark blue
        secondary: "#F3B855", // yellow
        light: "rgba(250, 247, 237, 0.60)", //  offwhite
        darkPrimary: "#231F20",// black
        dark: "rgba(35, 31, 32, 0.80)", // dark grey
        primaryBg: "rgba(16, 69, 115, 0.90)", // semi dark blue
      },
      boxShadow: {
        btnShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.12)",
        cardShadow: " 0px 4px 30px 0px rgba(0, 0, 0, 0.10)",
      },
      fontFamily: {
        pop: '"Poppins", sans-serif',
        fustat: "'Fustat', sans-serif",
        inter: "'Inter', sans-serif",
      },
      backgroundImage: {
        footerBg: "url('../src/assets/footerBg.svg')",
      },
    },
  },
  plugins: [],
};

