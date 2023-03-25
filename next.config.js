/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreDuringBuilds: true,
  },
  env: {
    APP_STAGING: process.env.APP_STAGING,
    APP_PROD: process.env.APP_PROD,
  },
  swcMinify: false,
}

module.exports = nextConfig
