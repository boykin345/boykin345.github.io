const modules = import.meta.glob('/src/posts/*.md', { eager: true });

export const posts = Object.entries(modules)
  .map(([path, { default: component, metadata }]) => ({
    slug: path.slice('/src/posts/'.length, -'.md'.length),
    title: metadata.title,
    date: new Date(metadata.date),
    component,
  }))
  .sort((a, b) => b.date - a.date);

export const formatDate = (date) =>
  date.toLocaleDateString('en-US', { dateStyle: 'long', timeZone: 'UTC' });
