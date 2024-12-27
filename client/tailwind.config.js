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
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        background: 'var(--background)',
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