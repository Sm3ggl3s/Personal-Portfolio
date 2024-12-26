/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#EDEDED',
        secondary: '#48A89D',
        background: '#1A1A1A',
      },
    },
  },
  plugins: [],
  safelist: [
    'background',
    'primary',
    'secondary',
    {
      pattern: /^bg-/,
    },
    {
      pattern: /^text-/,
    }
  ]
}