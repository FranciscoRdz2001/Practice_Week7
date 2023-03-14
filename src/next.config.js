/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  assetPrefix: isProd ? '/Practice_Week7/' : '',
  images: {
    unoptimized: true,
  },
}