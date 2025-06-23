/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        '"Fredoka", sans-serif',
      ],
    },
    extend: {
      colors: {
        brandBlue: '#0D5D9C',
        brandLightBlue: '#DBE3FF',
        textBlue: '#407EC9',
        brandRed: '#EE3224',
        brandGreen: '#009E44',
        brandLightGreen: '#C4D600',
        brandMediumGreen: '#AFCB17',
        brandBeige: '#C4D600'
      }
    }
  },
  plugins: [],
}