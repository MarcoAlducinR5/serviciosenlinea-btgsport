/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '3xs': '240px', 
      '2xs': '390px', /* iphone 12 pro: 390x844 */
      'xs': '475px',
      'sm': '640px', /* iphone 12 */
      'md': '768px', /* Oppo: 720x1600 */
      'lg': '1024px', /* ipad: 768x1024 */
      'xl': '1280px', /* ipad pro: 1024x1366 */
      '2xl': '1536px', /* macbook pro: 1440x900 */
      '3xl': '1600px', /* Escritorio: 1552x757 */
      'hd': '1920px',
      '4k': '3440px',
    },
    extend: {},
  },
  plugins: [],
}

