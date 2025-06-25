/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, 
  },
  basePath: '/portfoliowebsite', 
  assetPrefix: '/portfoliowebsite',
};

module.exports = nextConfig;