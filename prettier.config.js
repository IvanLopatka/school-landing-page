module.exports = {
  printWidth: 60,
  tabWidth: 2,
  singleQuote: true,
  bracketSameLine: false,
  trailingComma: 'es5',
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  tailwindAttributes: ['className'],
};
