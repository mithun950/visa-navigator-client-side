/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'font-color': '#034833',
        'main-color': '#83cd20',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  darkMode: 'class',
}

