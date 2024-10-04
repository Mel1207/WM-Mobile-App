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
        cBlack10: '#5A5A5A'
      },
      fontFamily: {
        inter: ["Inter", "system-ui"]
      }
    },
  },
  plugins: [],
}

