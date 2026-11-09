import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import pluginAstro from 'eslint-plugin-astro';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist/', '.astro/', 'node_modules/']),
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['**/*.jsx'],
    extends: [pluginReact.configs.flat.recommended, pluginReact.configs.flat['jsx-runtime']],
    settings: { react: { version: 'detect' } },
    rules: {
      'react/prop-types': 'off',
    },
  },
  pluginAstro.configs.recommended,
  {
    files: ['*.config.{js,mjs,cjs}'],
    languageOptions: { globals: globals.node },
  },
]);
