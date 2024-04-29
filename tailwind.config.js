const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      blacktext: '#171731',
      white: '#fff',
      blue: '#3667E9',
      darkblue: '#012D67',
      gray: '#65657B',
      darkgray: '#6D7088',
      error: '#C34648',
    },
  },
  plugins: [],
};
