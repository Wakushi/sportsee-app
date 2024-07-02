/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        darker: "1px 1px 10px rgba(0,0,0,0.9);",
      },
      colors: {
        brand: "#FF0101",
        "brand-light": "#E60001",
        light: "#FBFBFB",
        dark: "#282D30",
        "light-red": "#fbeaeb",
        "light-blue": "#e9f4fb",
        "light-yellow": "#fbf6e5",
        "light-pink": "#fbeaef",
      },
    },
  },
  plugins: [],
}
