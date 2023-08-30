const { theme } = require('app/design/tailwind/theme')

const nativewind = require("nativewind/tailwind/css")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    '../../packages/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [nativewind],
  important: 'html',
  theme: {
    ...theme,
  },
}
