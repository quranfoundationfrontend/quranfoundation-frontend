/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'quranfoundationfrontend';

module.exports = {
  assetPrefix: isProd ? `/${repoName}/` : '',
  basePath: isProd ? `/${repoName}` : '',
};