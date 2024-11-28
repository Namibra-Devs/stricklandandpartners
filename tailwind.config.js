/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3490dc",
        secondary: "#f1c40f",
      },
      fontFamily: {
        header: ["Kanit", "sans-serif"],
        body: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
}

