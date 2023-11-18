/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['tsx'],
  webpack: (config, { defaultLoaders }) => {
    config.resolve.modules.push(__dirname);
    return config;
  },
};

module.exports = nextConfig