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
      // Przekierowanie webgoat.pl → www.webgoat.pl robi Vercel (Settings → Domains), nie kod —
      // reguła w obie strony powodowała pętlę przekierowań.
    ]
  },
}

export default nextConfig
