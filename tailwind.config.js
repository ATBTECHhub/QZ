/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#104573",
        secondary: "#F3B855",
        light: "rgba(250, 247, 237, 0.60)",
        darkPrimary: "#231F20",
        dark: "rgba(35, 31, 32, 0.80)",
        primaryBg: "rgba(16, 69, 115, 0.90)",
        btnDashboard: "rgba(52, 101, 128, 0.70)",
         submit: "rgba(16, 53, 115, 0.40)",
        success: "#008000",
      
    
      },
      boxShadow: {
        btnShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.12)",
        cardShadow: " 0px 4px 30px 0px rgba(0, 0, 0, 0.10)",
        formShadow: "0px 4px 28.3px 3px #00000012",
        tableShadow: " 0px 4px 28.3px 3px rgba(0, 0, 0, 0.07)",
        
        
      },
      fontFamily: {
        pop: '"Poppins", sans-serif',
        fustat: '"Fustat", system-ui',
        rubik: '"Rubik", sans-serif',
        inter: '"Inter", sans-serif',
      },
      backgroundImage: {
        footerBg: "url('../src/assets/footerBg.svg')",
        waitlistBg: "url('../src/assets/waitlistBg.svg')",
        testResultBg: "url('../src/assets/line.svg')",
        profileCircleBg: "url('../src/assets/circleIcon.svg')",
      },
    },
  },
  plugins: [],
};
