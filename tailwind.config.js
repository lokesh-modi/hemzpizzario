/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        hemzRed: '#C4161C',
        hemzGreen: '#0E7A3D',
        hemzGreenDark: '#0A5F2E',
        hemzBg: '#F7F7F7',
      },
    },
  },
  plugins: [],
};
