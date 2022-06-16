module.exports = {
    env: { browser: true },
    extends: ['@gameflow-tv/eslint-config', 'react-app', 'jsx-a11y:recommended'],
    plugins: ['compat', 'jsx-a11y'],
    rules: {
      'compat/compat': 'warn',
      'no-console': 'warn',
    },
  }
  