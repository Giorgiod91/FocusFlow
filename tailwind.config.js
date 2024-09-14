/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#161622",
        secondary: "#fdba74",
      },
      fontFamily: {
        pthin: ["Poppins-Thin"],
        pextraLight: ["Poppins-ExtraLight"],
        plight: ["Poppins-Light"],
        pregular: ["Poppins-Regular"],
        pmedium: ["Poppins-Medium"],
        psemiBold: ["Poppins-SemiBold"],
        pbold: ["Poppins-Bold"],
        pextraBold: ["Poppins-ExtraBold"],
        pblack: ["Poppins-Black"],
      },
    },
  },
  plugins: [],
};
