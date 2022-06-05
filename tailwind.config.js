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
    fontFamily: {
      redHat: "Red Hat Display, sans-serif",
    },
    screens: {
      xs: "320px",
      // => @media (min-width: 320px) { ... }

      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
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
      warning: "#FFCF00",
      charcoal: "#424242",
    },
  },
  plugins: [],
};
