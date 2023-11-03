/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig;
