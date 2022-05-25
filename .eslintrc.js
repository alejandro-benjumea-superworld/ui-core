module.exports = {
  root: true,
  parserOptions: {
    project: './tsconfig.eslint.json'
  },
  plugins: ['import', 'prettier'],
  extends: ['airbnb', 'airbnb-typescript', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true
  },
  settings: {
    'import/resolver': {
      typescript: {}
    }
  },
  rules: {
    '@typescript-eslint/no-shadow': 0,
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 0,
    'max-len': [2, {
      ignoreComments: true,
      ignorePattern: "^(import|import type) .*? from '.*?';",
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreTrailingComments: true
    }],
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function'
    }],
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0
  },
  overrides: [
    {
      files: ['**/*.stories.ts',  '**/*.stories.tsx'],
      rules: {
        'import/no-extraneous-dependencies': 0,
      },
    },
  ],
};
