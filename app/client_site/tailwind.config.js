/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        primaryBlue:'#47bbf0',
        primaryText:'text-gray-600'
      }
    },
  },
  plugins: [],
}
