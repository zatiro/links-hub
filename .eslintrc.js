module.exports = {
  root: true,
  extends: [
    'plugin:tailwindcss/recommended',
    '@rocketseat/eslint-config/next',
    'next/core-web-vitals',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      parser: '@typescript-eslint/parser',
    },
  ],
  rules: {
    'prettier/prettier': 0,
  },
}
