/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // "tailwindcss" yerine bunu yazdık
    autoprefixer: {},
  },
};

export default config;