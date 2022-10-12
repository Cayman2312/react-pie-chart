module.exports = {
  singleQuote: true,
  bracketSpacing: false,
  trailingComma: 'all',
  printWidth: 120,
  tabWidth: 2,
  importOrder: ['react(?=[a-zA-Z\\-\\/]+$)*', '^(?!react)[a-zA-Z0-9\\-\\/]+', '^(\\.{1,2}\\/)+[a-zA-Z\\/]+$', '.css$'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
};
