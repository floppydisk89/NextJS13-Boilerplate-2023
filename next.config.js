/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en-us', 'pt-pt', 'nl-nl'],
    defaultLocale: 'en-us',
  },
};

module.exports = nextConfig;
