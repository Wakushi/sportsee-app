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
        light: "9B9EAC",
        dark: "282D30",
      },
    },
  },
  plugins: [],
}
