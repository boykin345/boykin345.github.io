import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

const isProd = process.env.NODE_ENV === 'production';
const repo = '/mikhailkolyakin.github.io';

export default defineConfig({
  integrations: [react()],
  output: 'static',
  base: isProd ? repo : '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
