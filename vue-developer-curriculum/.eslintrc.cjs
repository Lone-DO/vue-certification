/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    '@vue/typescript/recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/strongly-recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
