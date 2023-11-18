module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-dark': {
          '100': '#F8F9FA',
          '200': '#E9ECEF',
          '300': '#DEE2E6',
          '400': '#CED4DA',
          '500': '#ADB5BD',
          '600': '#6C757D',
          '700': '#495057',
          '800': '#343A40',
          '900': '#212529',
        },
      },
    },
  },
  plugins: [],
};
