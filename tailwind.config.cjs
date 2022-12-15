/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'baskerville': ['Libre Baskerville', 'serif'] 
      },
      colors: {
        'backgroundpurple': '#231955',
        'borderpurple': '#874bf7',
        'textcolor': '#eee',
        'menubackground': '#210459',
      },
      borderWidth: {
        '16': '20px',
      }
    }
  },
  plugins: [],
}
