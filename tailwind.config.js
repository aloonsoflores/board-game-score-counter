/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3E3A60',
        secondary: '#FFFFFF',
        accent: '#FE5000',
        light: {
          background: '#FFFFFF',
          text: '#000000',
          secondaryText: '#3E3A60',
          cardBg: '#F0F0F0',
          border: '#E0E0E0',
          navbarBg: '#F8F8F8',
        },
        dark: {
          background: '#1E1E1E',
          text: '#FFFFFF',
          secondaryText: '#B3B3B3',
          cardBg: '#2D2D2D',
          border: '#444444',
          navbarBg: '#3E3A60',
        },
      },
      animation: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
};
