module.exports = {
  defaultNamespace: 'common',
  locales: ['en', 'fr'],
  output: 'public/assets/locales/$LOCALE/$NAMESPACE.json',
  input: ['src/**/*.{ts,tsx}'],
  verbose: true,
};
