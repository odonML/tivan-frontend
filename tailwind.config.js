module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "var(--white)",
      black: "var(--black)",
      pink: {
        0: "#f21d81",
        1: "#f161a5",
        2: "#ffc6e1",
        3: "#ffe7f2",
      },
      aqua: {
        0: "#16f2b4",
        1: "#5ffcd0",
        2: "#a6ffe6",
        3: "#e4fff8",
      },
      purple: {
        0: "#3d2967",
        1: "#675294",
        2: "#a38fce",
        3: "#e0d5f9",
      },
      gray: {
        0: "#595a60",
        1: "#96969f",
        2: "#d3d3d3",
        3: "#efefef",
      },
      yellow: {
        0: "#f2bc1b",
        1: "#efcb5e",
        2: "#ffeebb",
        3: "#fff8e4",
      },
      purpleDark: {
        0: "#322255",
        1: "#53476c",
        2: "#807793",
        3: "#c3bcd2",
      },
    },
  },
  plugins: [],
};
