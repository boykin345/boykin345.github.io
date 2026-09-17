// next.config.mjs
const isProd = process.env.NODE_ENV === "production";
const repo = "/mikhailkolyakin.github.io"; // "" if you rename the repo to boykin345.github.io

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isProd ? repo : "",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;