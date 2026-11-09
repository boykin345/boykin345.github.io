export const withBase = (path) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
