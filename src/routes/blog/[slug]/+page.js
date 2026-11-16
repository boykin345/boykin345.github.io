import { error } from '@sveltejs/kit';
import { posts } from '#lib/posts.js';

export const entries = () => posts.map(({ slug }) => ({ slug }));

export const load = ({ params }) => {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) error(404, 'Post not found');
  return { post };
};
