/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {  
      boxShadow: {
        'default': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 15px rgba(255, 255, 255, 0.5)',
      },
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },
      dropShadow: {
        'glow': '0 0 10px rgba(255, 255, 255, 0.5)',
      },
      stackShadow: {
        'glow': '0 0 5px rgba(255, 255, 255, 0.5)',
      },
      blackShadow: {
        'glow': '0 0 5px rgba(0, 0, 0, 0.5)',
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
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'to': 'to',
      },
    },
  },
  variants: {
    filter: ['responsive', 'hover'],
  },
  plugins: [
  ],
};
