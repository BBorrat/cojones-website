/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

// module.exports = {
//   images: {
//     dangerouslyAllowSVG: true,
//     contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
//   },
// };

module.exports = nextConfig;
