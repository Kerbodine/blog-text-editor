module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accent: "#818CF8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
