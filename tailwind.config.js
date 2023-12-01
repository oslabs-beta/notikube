/*eslint-env node*/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite/**/*.js',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};

