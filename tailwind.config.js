module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["JetBrains Mono", "monospace"],
    },
    ripple: theme => ({
      colors: theme("colors"),
    }),
    extend: {},
  },
  plugins: [
    require("tailwindcss-ripple")()
  ],
}
