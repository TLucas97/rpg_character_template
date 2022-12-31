const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        dark: {
          1: "#2C3333",
          2: "#395B64",
        },
        light: {
          1: "#E5E5CB",
        }
      },
    },
  },

  plugins: [],
};

module.exports = config;
