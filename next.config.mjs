import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  async redirects() {
    // Food guides moved to /blog so they join the destination clusters that
    // components/DestinationPosts.tsx builds. The /eat URLs were live and
    // linked, so they redirect rather than 404.
    return [
      { source: '/eat/best-restaurants-destin', destination: '/blog/best-restaurants-destin', permanent: true },
      { source: '/eat/best-seafood-gulf-shores', destination: '/blog/best-seafood-gulf-shores', permanent: true },
      { source: '/eat/best-breakfast-gulf-coast', destination: '/blog/best-breakfast-gulf-coast', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
