import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginJest from 'eslint-plugin-jest';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: pluginReact,
      jest: pluginJest,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...pluginJest.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-console': 'warn',
      'no-debugger': 'warn',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      // Add any custom rules here
      'react/react-in-jsx-scope': 'off', // Turn off if you're using React 17+ with automatic JSX transform
      'react/prop-types': 'error', // Or 'off' if you don't want to use prop-types
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  // Add specific overrides for test files if needed
  {
    files: ['**/*.test.js', '**/*.spec.js'],
    rules: {
      // Any specific rules for test files
    },
  },
];