/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix: isProd ? '/portfolio/' : '',
  basePath: isProd ? '/portfolio' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
};

export default nextConfig;
