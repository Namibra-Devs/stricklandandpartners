/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./index.html",
    "./src/*.{html,js,ts,jsx,tsx}",
    "*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#03346E",
        light: "#6EACDA",
        secondary: "#EB8317",
        dark: "#021526",
      },
      fontFamily: {
        header: ["Kanit", "sans-serif"],
        body: ["Ubuntu", "sans-serif"],
      },
      // Custom transition dration
      'transition-bg': {
          transition: "background-color 0.3s ease, box-shadow 0.3s ease-in-out"

      },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
}
