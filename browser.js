module.exports = {
  env: { browser: true },
  extends: ['@gameflow-tv/eslint-config'],
  plugins: ['compat'],
  rules: {
    'compat/compat': 'warn',
    'no-console': 'warn',
  },
}
