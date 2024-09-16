/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#481557",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        navyBlue: "#100D25",
        slateGray: "#4A6073",
        softLavender: "#C6B5E8",
        mintGreen: "#E8F5E9",
        lightTeal: "#DFF3FC",
        lightPurple: "#D5DCF8",
        rosePink: "#F28DB2",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "intro-pattern": "url('/src/assets/gradient_background.jpg')",
      },
    },
  },
  plugins: [],
};
