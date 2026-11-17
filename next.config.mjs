/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Stare adresy z poprzedniej sitemapy — mogły trafić do indeksu Google
      { source: '/uslugi/web-design', destination: '/uslugi/branding-design', permanent: true },
      { source: '/uslugi/wspieranie-techniczne', destination: '/uslugi/wsparcie-techniczne', permanent: true },
      // Wariant z www → domena główna (jeśli www jest podpięte w Vercel)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.webgoat.pl' }],
        destination: 'https://webgoat.pl/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
