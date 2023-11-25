const prettierConfig = require('./.prettierrc.json');

module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'prettier/prettier': ['error', prettierConfig],
    'no-shadow': 'off',
    'no-undef': 'off',
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',
          'external',
          'internal',
          'unknown',
          'parent',
          'sibling',
          'index'
        ],
        'newlines-between': 'always',
      }
    ],
  },
  settings: {
    'import/internal-regex': '^(assets|containers|components|navigation|src|ui|styles|constants|utilities|core)',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': 'off',
      },
    },
    {
      files: ['*.stories.tsx'],
      rules: {
        'react-native/no-inline-styles': 'off',
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      }
    }
  ],
};
