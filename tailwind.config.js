/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "sm": {min: "150px", max: "500px"},
      "md": {min: "501px", max: "900px"},
      "lg": {min: "901px", max: "1500px"}
    },

    fontFamily: {
      nunito: "'Nunito', sans-serif"
    },
    extend: {
      colors: {
        mainTxt: "#c5c6c7",
        brightTxt: "#4ECDC4",
        txtBlack: "#0b0c10",
        bgBlack: "#001829",
      },
      fontFamily: {
        Stretch: "Stretch"
      }
    },
  },
  plugins: [],
}