/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      cyan: "rgb(77,150,168)",
      lightskyblue: "rgb(143,227,249)",
      purple: "rgb(133,95,177)",
      lightpurple: "rgb(217,184,255)",
      grey: "rgb(40,40,61)",
      lightgrey: "rgb(135,137,157)",
      white: "rgb(250,250,250)",
    },
    fontFamily: {
      redhat: ["RedHat"],
    },
    
    extend: {
      spacing: {
        "91px": "91px",
        "553px": "553px",
        "139px": "8.688rem",
        "58px": "3.625rem",
        "118px": "118px",
      },
      fontSize: {
        "3xl": ["32px","36px"]
      }
    },
  },
  plugins: [],
};
