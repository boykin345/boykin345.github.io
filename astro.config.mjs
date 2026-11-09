import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// User/org GitHub Pages site (boykin345.github.io) is served from the domain root.
export default defineConfig({
  integrations: [react()],
  output: 'static',
  base: '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
  // Prefetch every internal link on hover/focus, like bun.com
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
