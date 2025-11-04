import js from '@eslint/js';
import globals from 'globals';
import vitest from 'eslint-plugin-vitest-globals';
import prettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...vitest.environments.env.globals,
      },
    },
    plugins: { prettier },
    rules: {
      ...js.configs.recommended.rules,
      'prettier/prettier': 'warn',
    },
  },
  // 👇 Add this block
  {
    files: ['tailwind.config.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
]);
