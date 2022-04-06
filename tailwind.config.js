const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // backgroundImage: {
      //   bgimg: "url(/assets/background.png)",
      // },
    },
    colors: {
      primary: "#c20639",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      blue: colors.blue,
      red: colors.red,
      rose: colors.rose,
    },
  },
  plugins: [],
};
