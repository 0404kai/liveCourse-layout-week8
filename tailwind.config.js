const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '12px',
      },
      screens: {
        sm: '576px',
        md: '720px',
        lg: '992px',
        xl: '1320px',
      },
    },
    fontFamily: {
      'sans': ['"Squada One"', '"Noto Sans TC"', ...defaultTheme.fontFamily.sans],
      'noto': '"Noto Sans TC"',
      'paytone': '"Paytone One"'
    },
    extend: {
      fontSize: {
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '80px',
      },
      colors: {
        gray: {
          DEFAULT: '#F0F0F0',
          '100': '#00000029',
          '200': '#808080'
        },
        orange: {
          DEFAULT: '#E6553B'
        },
        green: {
          DEFAULT: '#53C139'
        }
      },
      borderWidth: {
        '10': '10px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
      },
      borderColor: {
        DEFAULT: '#000000'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-writing-mode')({
      variants: ['responsive', 'hover']
  }),
  ],
}