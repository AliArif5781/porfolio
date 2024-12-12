/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-b": "linear-gradient(transparent, rgba(0, 0, 0, 1))",
      },
      fontFamily: {
        sans: ["Inter", "serif"],
      },
      colors: {
        "black-50": "#1F1F1F",
        "black-100": "#2A2A2A",
        "black-150": "#121212",
        "black-200": "#1E1E1E",
        "black-250": "#000000",
        "black-300": "#111111",
        "black-350": "#08090A",
        "black-400": "#171717",
        "white-50": "#B3B3B3",
        "white-100": "#F0F0F0",
        "white-150": "#FFFFFF",
        "white-200": "#B3B3B3",
        "white-250": "#747474",
        "white-300": "#767676",
        "white-350": "#454545",
      },
    },
  },
  plugins: [],
};
