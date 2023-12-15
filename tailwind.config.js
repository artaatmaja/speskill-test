/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  content: [],
  theme: {
    extend: {
      colors: {
        "spe-pink": "#FC00FF",
        "spe-blue": "#00DBDE",
        "spe-black": "#111111",
        "spe-gray": "#EEEEEE",
        "spe-green": "#00FF00",
      },
      rotate: {
        30: "30deg",
      },
    },
    screens: {
      "2md": "930px",
      tablet: { max: "930px" },
    },
  },
  plugins: [],
};
