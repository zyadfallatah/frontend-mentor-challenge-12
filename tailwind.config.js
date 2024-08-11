/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "light-color": "hsl(0, 0, 98)",
        "dark-color": "hsl(209, 23, 22)",
        "dark-alt-color": "hsl(207, 26, 17)",
        "white-color": "hsl(0, 0, 100)",
        "black-color": "hsl(200, 15, 8)",
      },
      gridTemplateColumns: {
        "auto-4": "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
};
