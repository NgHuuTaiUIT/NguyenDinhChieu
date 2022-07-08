/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // content: ["./dist/*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    colors: {
      "btn-cl": "#751115",
      "bg-cl": "#DEDBC7",
      "header-cl": "#803E3E",
      "text-cl": "#141D29"
    },
    fontFamily: {
      sans: ["Oswald", "sans-serif"],
      serif: ["Oswald", "serif"],
      roboto: ["Roboto", "sans-serif"]
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem"
      },
      borderRadius: {
        "4xl": "2rem"
      }
    }
  },
  plugins: []
};
