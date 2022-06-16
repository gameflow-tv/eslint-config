module.exports = {
  env: { node: true },
  extends: ['@gameflow-tv/eslint-config', 'plugin:node/recommended'],
  rules: { 'node/no-mixed-requires': 'warn', 'no-console': 'off' },
}
