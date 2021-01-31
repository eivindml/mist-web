module.exports = {
  purge: ["./pages/**/*.ts*", "./components/**/*.ts*"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        red: "#e64c4c",
        green: "#8adc33",
        black: "#121211",
        white: "#fcfaf4",
        beige: "#f9f8f2",
        blue: "#027aff",
        "dark-blue": "#0E2640",
        transparent: {
          "light-gray": "rgba(18, 18, 17, 0.05)",
          gray: "rgba(18, 18, 17, 0.3)",
          green: "rgba(138, 220, 51, 1)",
          red: "rgba(230, 76, 76, 1)",
          yellow: "rgba(248, 195, 51, 1)",
          beige: "rgba(249, 248, 242, 0)",
        },
      },
      transitionProperty: {
        width: "width",
      },
      transitionDuration: {
        0: "0ms",
        9000: "9000ms",
      },
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
