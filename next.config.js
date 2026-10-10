/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/swc',
  // geist is ESM-only and imports next/font/local by directory, which Node cannot resolve on Next 13.
  transpilePackages: ['geist'],
}

module.exports = nextConfig
