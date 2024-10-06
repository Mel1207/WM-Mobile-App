/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cViolet: '#7D4FDF',
        cBlack10: '#222222',
        cBlack20: '#5A5A5A',
        cWhite10: '#F9F9F9',
        cGreen: '#1DBB82',
        cGreen10: '#A7CB5C',
        cRed: '#FF3D60',
        cBlue: '#2E68FF',
        cOrange: '#FF772B'
      },
      fontFamily: {
        inter: ["Inter", "system-ui"]
      }
    },
  },
  plugins: [],
}

