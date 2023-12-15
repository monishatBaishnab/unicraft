/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {'satoshi': "'Satoshi', sans-serif"},
      colors: {
        primary: '#1F2937',
        secondery: '#9CA3AF'
      },
      backgroundImage: {
        'hero': "url('/Gradient.png')",
        'hero-overlay': "url('/overlay.png')",
        'pricing': "url('/pricing.png')"
      }
    },
  },
  plugins: [],
}