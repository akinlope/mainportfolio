/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

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