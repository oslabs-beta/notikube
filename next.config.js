/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'utfs.io'
      },
      {
        protocol: 'https',
        hostname: 'ca.slack-edge.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
