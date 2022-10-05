/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-gray": "#4F4F4F",
        "dark-gray": "#333333",
        "dark-white": "#BDBDBD",
      },
      spacing: {
        half: "0.5rem",
        30: "1.875rem"
      },
      width: {
        input: "5.625rem",
      },
    },
  },
  plugins: [],
};
