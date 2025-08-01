/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        customBlack: '#0B0B0B',
        customBrown: '#121212',
        customGray: '#1D1C20',
        customGray2: '#E9E9E9',
        customLightTextColor: '#181D27',
        customBoldTextColor: '#414651',
        customBorderColor: '#414044',
        customIconBgColor: '#373A41',
        customWhite: '#F4EBFF',
        customBody: '#F9FAFB',
        customGreen: '#099250',
        customSuccessGreen: '#095C37',
        customRed: '#FF542A',
        customErrorRed: '#D92D20',
        customViolet: '#7E3AF2',
      },
      fontFamily: {
        ttcommons: ['"TT Commons"', 'sans-serif'],
        testtiemposfine: ['"TestTiemposFineLight"', 'sans-serif'],
        aktivgrotesk: ['"AktivGrotesk_Trial_SBd"', 'sans-serif'],
      },
      fontSize: {
        // Custom font sizes only
        '10': ['10px', { lineHeight: '14px' }],
        '11': ['11px', { lineHeight: '16px' }],
        '12': ['12px', { lineHeight: '16px' }],
        '13': ['13px', { lineHeight: '18px' }],
        '14': ['14px', { lineHeight: '20px' }],
        '15': ['15px', { lineHeight: '22px' }],
        '16': ['16px', { lineHeight: '24px' }],
        '17': ['17px', { lineHeight: '26px' }],
        '18': ['18px', { lineHeight: '28px' }],
        '19': ['19px', { lineHeight: '28px' }],
        '20': ['20px', { lineHeight: '30px' }],
        '21': ['21px', { lineHeight: '30px' }],
        '22': ['22px', { lineHeight: '32px' }],
        '24': ['24px', { lineHeight: '32px' }],
        '26': ['26px', { lineHeight: '36px' }],
        '28': ['28px', { lineHeight: '40px' }],
        '30': ['30px', { lineHeight: '38px' }],
        '32': ['32px', { lineHeight: '44px' }],
        '36': ['36px', { lineHeight: '40px' }],
        '40': ['40px', { lineHeight: '52px' }],
        '44': ['44px', { lineHeight: '52px' }],
        '48': ['48px', { lineHeight: '60px' }],
        '56': ['56px', { lineHeight: '68px' }],
        '64': ['64px', { lineHeight: '76px' }],
        '70': ['70px', { lineHeight: '1.3' }],
        '72': ['72px', { lineHeight: '1.4' }],
        '78': ['78px', { lineHeight: '1.4' }],
        '96': ['96px', { lineHeight: '1' }],
        '128': ['128px', { lineHeight: '1' }],
      }
    },
  },
  plugins: [],
}