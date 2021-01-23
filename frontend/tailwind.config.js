module.exports = {
  purge: ["./pages/**/*.ts*", "./components/**/*.ts*"],
  darkMode: false,
  theme: {
    colors: {
      red: "#e64c4c",
      green: "#8adc33",
      black: "#121211",
      white: "#fcfaf4",
      transparent: {
        "light-gray": "rgba(18, 18, 17, 0.05)",
        gray: "rgba(18, 18, 17, 0.3)",
      },
    },
    extend: {
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
