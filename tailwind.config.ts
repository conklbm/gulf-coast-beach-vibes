import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          DEFAULT: '#0EA5BE',
          50:  '#E8F9FC',
          100: '#C5EFF8',
          200: '#8BDDF2',
          300: '#50CCEA',
          400: '#22BAE1',
          500: '#0EA5BE',
          600: '#0B8599',
          700: '#086373',
          800: '#05434E',
          900: '#022229',
        },
        sand: {
          DEFAULT: '#F5E6C8',
          100: '#FEF9F0',
          200: '#FAF0DB',
          300: '#F5E6C8',
          400: '#EDD49E',
          500: '#E5C274',
          600: '#D9A94A',
        },
        coral: {
          DEFAULT: '#FF6B4A',
          100: '#FFF0EC',
          200: '#FFDED8',
          300: '#FFB8AD',
          400: '#FF9381',
          500: '#FF6B4A',
          600: '#FF4420',
          700: '#E62500',
        },
        navy: {
          DEFAULT: '#1A2E44',
          50:  '#E8EDF2',
          100: '#C7D3DF',
          200: '#96AABF',
          300: '#64819E',
          400: '#3D5E7E',
          500: '#2A4060',
          600: '#1A2E44',
          700: '#14243A',
          800: '#0E1B2C',
          900: '#08111C',
        },
        cream: {
          DEFAULT: '#FAFAF8',
          100: '#FAFAF8',
          200: '#F0F0EA',
          300: '#E6E6DC',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:    ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
