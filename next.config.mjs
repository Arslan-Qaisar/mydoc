/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
// next.config.js
module.exports = {
  // Other configurations...
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};
export default nextConfig;
