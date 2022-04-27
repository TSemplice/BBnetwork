module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        primary: "Anybody",
      },
      colors: {
        // brand: {
        //   primary: "rgb(0,22,131)",
        //   secondary: "#F0F4FD",
        //   tertiary: "#FA551D",
        // },
      },
    },
  },
};
