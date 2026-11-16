import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { mdsvex } from 'mdsvex';

// User/org GitHub Pages site (boykin345.github.io) is served from the domain root.
export default defineConfig({
  plugins: [
    sveltekit({
      // Blog posts are Markdown files in src/posts (see src/lib/posts.js).
      extensions: ['.svelte', '.md'],
      preprocess: [
        mdsvex({
          extensions: ['.md'],
          // mdsvex's default highlighter emits a template literal, which eats `\` + newline in code blocks.
          highlight: {
            highlighter: (code) =>
              `<pre><code>{@html ${JSON.stringify(code.replace(/&/g, '&amp;').replace(/</g, '&lt;'))}}</code></pre>`,
          },
        }),
      ],
      compilerOptions: {
        runes: ({ filename }) =>
          filename.split(/[/\\]/).includes('node_modules') ? undefined : true,
      },
      adapter: adapter({ pages: 'dist', assets: 'dist' }),
      prerender: {
        // /new/ (the "v2" link) isn't part of this build.
        handleHttpError: ({ path, message }) => {
          if (path !== '/new/') throw new Error(message);
        },
      },
    }),
  ],
});
