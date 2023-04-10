/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '2xs': '390px', /* iphone 12 */
      'xs': '475px',
      'sm': '640px', /* iphone 12 */
      'md': '768px', /* Oppo */
      'lg': '1024px', /* ipad */
      'xl': '1280px', /* ipad pro */
      '2xl': '1536px', /* macbook pro */
      '3xl': '1600px', /* Escritorio */
    },
    extend: {},
  },
  plugins: [],
}

