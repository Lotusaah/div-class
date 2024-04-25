/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {  
      boxShadow: {
      'glow': '0 0 15px rgba(255, 255, 255, 0.5)',
      },
      dropShadow: {
        'glow': '0 0 10px rgba(255, 255, 255, 0.5)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'shadow': 'box-shadow',
        'filter': 'filter',
      },
      colors: {
        'brand-blue': '#7AA2E3', 
        'primary': '#6AD4DD',
        'secondary': '#97E7E1',
        'accent': '#F8F6E3',
      },
      spacing: {
        '14': '15rem',  
      }
    },
  },
  variants: {
    filter: ['responsive', 'hover'],
  },
  plugins: [],
};
