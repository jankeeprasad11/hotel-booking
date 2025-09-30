/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',  // ← very important
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        'primary-dull': '#3B82F6',
      },
    },
  },
  plugins: [],
}

