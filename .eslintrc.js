module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'security'],
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:security/recommended',
    'prettier',
    'plugin:import/typescript',
  ],

  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
}
