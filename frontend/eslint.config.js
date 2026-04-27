import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  // Ignore build folder
  globalIgnores(['dist']),

  {
    files: ['**/*.{js,jsx}'],

    // Only declare plugins you use directly in rules
    plugins: {
      prettier: prettierPlugin,
    },

    extends: [
      // Recommended JS Base
      js.configs.recommended,

      // React (flat native configs)
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,

      // Prettier ALWAYS at the end
      prettierConfig,
    ],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },

    rules: {
      // Recognize unused variables
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

      // Run prettier as a rule
      'prettier/prettier': 'error',
    },
  },
]);
