module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:prettier/recommended',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['import', '@typescript-eslint', 'prettier'],
  rules: {
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'no-unused-vars': 'error',
    'no-console': 'error',
    'no-empty': 'error',
    'no-nested-ternary': 'error',
    'no-useless-escape': 'error',
    'no-var': 'error',
    '@typescript-eslint/consistent-type-imports': 'off',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    complexity: ['error', 8],
    eqeqeq: 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
  },
}
