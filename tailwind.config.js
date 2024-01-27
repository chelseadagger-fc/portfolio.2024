/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu': ['ubuntu', 'sans-serif'],
        'tajawal': ['tajawal', 'sans-serif'],
        'assistant': ['assistant', 'sans-serif']
      },
      backgroundImage: {
        'hero': "url('/hero.jpg')"
      }
    },
  },
  plugins: [],
}

