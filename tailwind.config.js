/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '3xs': '240px', 
      /* nokia 8110 4G: 240x320 */
      /* Galaxy S9, Note 8, S8: 360x740 */
      /* iPhone XS, X: 375x812 */
      '2xs': '390px', 
      /* iphone 12 pro: 390x844 */
      /* Pixel 3, 3XL: 393x786 */
      /* Galaxy S9Plus, S8Plus: 412x846 */
      /* iphone 8Plus, 7Plus, 6SPlus: 414x736 */
      /* iPhone XR, XSMax: 414x896 */
      'xs': '475px',
      'sm': '640px', 
      /* iphone 12 */
      /* Large Screen: 688x1031 */
      /* Oppo: 720x1600 */
      'md': '768px', 
      /* iPad: 768x1024 */
      /* iPad Pro 10.5": 834x1112 */
      /* Nexus 10: 800x1280 */
      'lg': '1024px', 
      /* Medium Screen: 1024x800 */
      /* iPad Pro 12.9": 1024x1366 */
      'xl': '1280px', 
      /* Laptop 2: 1280x800 */
      '2xl': '1536px', 
      /* macbook pro: 1440x900 */
      '3xl': '1600px', 
      /* Escritorio: 1552x757 */
      'hd': '1920px',
      /* 1920x1080 */
      '4k': '3440px',
      /* 3440x1440 */
    },
    extend: {},
  },
  plugins: [],
}

