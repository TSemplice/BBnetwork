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
        brand: {
          primary: `#30279A`,
          secondary: "#3A3636",
          tertiary: `#F0FF3D`,
        },
      },
    },
  },
};
