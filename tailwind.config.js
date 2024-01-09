/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {},
    colors: {
      'blue': '#3b82f6',
      'white': '#fff',
      'gray': '#f5f5f5',
      'dark-gray': '#64748b',
      'black': '#000'
    }
  },
  plugins: [],
}

