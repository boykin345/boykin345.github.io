import js from '@eslint/js';
import globals from 'globals';
import svelte from 'eslint-plugin-svelte';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist/', '.svelte-kit/', 'node_modules/']),
  js.configs.recommended,
  ...svelte.configs.recommended,
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    // Site is served from the domain root (no base path), so plain hrefs are fine.
    rules: { 'svelte/no-navigation-without-resolve': 'off' },
  },
]);
