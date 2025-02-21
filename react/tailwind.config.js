/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
      },
      colors: {
        'coral-pink': '#FF6B6B',
        'coral-light': '#FF8787',
        'coral-dark': '#FA5252',
        'text-dark': '#212529',
        'bg-cream': '#FFF5F5',
        'bg-dark': '#121212',
        'text-light': '#FFFFFF',
        'accent-blue': '#4A90E2',
      },
      spacing: {
        'section-padding': '5rem',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
  },
  plugins: [],
}
