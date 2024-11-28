/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/main/home',
            permanent: true,
          },
        ]
      },
}

module.exports = nextConfig
