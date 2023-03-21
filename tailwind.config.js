/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        light: '#48DA7C',
        DEFAULT: '#21A550',
        dark: '#1B7C3E',
        transparent: 'rgba(33, 165, 80, 0.2)',
      },
      secondary: {
        light: '#985E43',
        DEFAULT: '#633D2C',
        dark: '#310F00',
        transparent: 'rgba(99, 61, 44, 0.2)',
      },
      success: {
        light: '#B5F131',
        DEFAULT: '#75A60B',
        dark: '#476605',
        transparent: 'rgba(117, 166, 11, 0.2)',
      },
      info: {
        light: '#76D1E5',
        DEFAULT: '#24A1BC',
        dark: '#005365',
        transparent: 'rgba(36, 161, 188, 0.2)',
      },
      danger: {
        light: '#FF7142',
        DEFAULT: '#FF571F',
        dark: '#832000',
        transparent: 'rgba(255, 87, 31, 0.2)',
      },
      warning: {
        light: '#FFBE57',
        DEFAULT: '#FFA91F',
        dark: '#784900',
        transparent: 'rgba(255, 169, 31, 0.2)',
      },
      dark: {
        light: '#290018',
        DEFAULT: '#290018',
        dark: '#290018',
        transparent: 'rgba(41, 0, 24, 0.2)',
        muted: 'rgba(41, 0, 24, 0.7)',
        placeholder: 'rgba(41, 0, 24, 0.6)',
      },
      light: {
        light: '#FFFFFF',
        DEFAULT: '#E7F6E3',
        dark: '#9C9C81',
        transparent: 'rgba(231, 246, 227, 0.2)',
      },
    }
  },
  plugins: [],
}
