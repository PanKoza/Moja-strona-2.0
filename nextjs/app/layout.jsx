import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingContact from '../components/FloatingContact'
import CookieConsent from '../components/CookieConsent'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://webgoat.pl'),
  title: {
    default: 'WebGoat - Tworzenie Stron Internetowych od 750 zł | Ząbkowice Śląskie · Kłodzko · Dzierżoniów',
    template: '%s | WebGoat',
  },
  description:
    'WebGoat - Profesjonalne tworzenie stron internetowych w Ząbkowicach Śląskich, Kłodzku, Dzierżoniowie i Kamieńcu Ząbkowickim. Strona wizytówkowa już od 750 zł! Nowoczesne strony WWW, sklepy internetowe, pozycjonowanie SEO dla firm z Dolnego Śląska.',
  keywords: [
    'tworzenie stron internetowych',
    'strona wizytówkowa 750 zł',
    'strony internetowe Ząbkowice Śląskie',
    'strony internetowe Kłodzko',
    'strony internetowe Dzierżoniów',
    'web development Dolny Śląsk',
    'sklepy internetowe',
    'pozycjonowanie SEO',
    'WebGoat',
  ],
  authors: [{ name: 'WebGoat' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://webgoat.pl',
    siteName: 'WebGoat',
    title: 'WebGoat - Strona wizytówkowa od 750 zł | Ząbkowice Śląskie, Kłodzko, Dzierżoniów',
    description:
      'Profesjonalna strona internetowa już od 750 zł! Pomagamy firmom z Dolnego Śląska zdobywać klientów online.',
    images: [{ url: '/logo_WebGoat.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebGoat - Profesjonalne Tworzenie Stron Internetowych',
    description: 'Tworzenie nowoczesnych stron internetowych, sklepów online i aplikacji webowych w Ząbkowicach Śląskich',
    images: ['/logo_WebGoat.png'],
  },
  icons: {
    icon: '/logo_WebGoat.png',
    apple: '/logo_WebGoat.png',
  },
  alternates: {
    canonical: 'https://webgoat.pl',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'WebGoat',
  alternateName: 'WebGoat - Tworzenie Stron Internetowych',
  url: 'https://webgoat.pl',
  logo: 'https://webgoat.pl/logo_WebGoat.png',
  description: 'Profesjonalne tworzenie stron internetowych, sklepów online i aplikacji webowych w Ząbkowicach Śląskich',
  sameAs: [
    'https://www.facebook.com/webgoat',
    'https://www.linkedin.com/company/webgoat',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+48883821301',
    contactType: 'Customer Service',
    availableLanguage: 'pl',
  },
  areaServed: [
    { '@type': 'City', name: 'Ząbkowice Śląskie' },
    { '@type': 'City', name: 'Kłodzko' },
    { '@type': 'City', name: 'Dzierżoniów' },
    { '@type': 'City', name: 'Kamieniec Ząbkowicki' },
    { '@type': 'State', name: 'Dolny Śląsk' },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Facebook Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1594029715571073');fbq('track','PageView');`}
        </Script>
        <div className="min-h-screen bg-dark text-gray-200">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingContact />
          <CookieConsent />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
