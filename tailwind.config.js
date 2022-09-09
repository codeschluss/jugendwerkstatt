const colors = require("tailwindcss/colors");

module.exports = {
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

      sm: "724px",
      // => @media (min-width: 576px) { ... }

      md: "1390px",
      // => @media (min-width: 960px) { ... }
      lg: "1440px",
    },
    corePlugins: {
      preflight: false,
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
  plugins: [require("@tailwindcss/typography")],
};
