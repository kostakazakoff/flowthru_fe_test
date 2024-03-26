/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    './src/components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {}, 
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
