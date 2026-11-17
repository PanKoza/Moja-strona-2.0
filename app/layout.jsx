import { Bricolage_Grotesque, Instrument_Serif, Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import '@/app/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Providers from '@/components/layout/Providers'
import SmoothScroll from '@/components/motion/SmoothScroll'
import ScrollProgress from '@/components/conversion/ScrollProgress'
import ConsultModal from '@/components/conversion/ConsultModal'
import StickyCTA from '@/components/conversion/StickyCTA'
import NudgeToast from '@/components/conversion/NudgeToast'
import CookieConsent from '@/components/layout/CookieConsent'
import ConsentScripts from '@/components/layout/ConsentScripts'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL, SITE_NAME, OG_IMAGE, businessSchema, websiteSchema } from '@/lib/seo'

// latin-ext jest niezbędny dla polskich znaków (ą, ę, ł, ś, ż, ź, ć, ń)
const display = Bricolage_Grotesque({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-bricolage',
  display: 'swap',
})

const serif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-instrument',
  display: 'swap',
})

const sans = Geist({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-geist',
  display: 'swap',
})

const mono = Geist_Mono({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-geist-mono',
  display: 'swap',
})

const DEFAULT_TITLE = 'Tworzenie Stron Internetowych od 1500 zł – Ząbkowice Śląskie | WebGoat'
const DEFAULT_DESCRIPTION =
  'Strony internetowe, sklepy online i SEO dla firm z Ząbkowic Śląskich, Kłodzka, Dzierżoniowa i Dolnego Śląska. Strona wizytówkowa od 1500 zł. Bezpłatna wycena!'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { telephone: true, email: true, address: false },
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
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export const viewport = {
  themeColor: '#eeebe3',
  colorScheme: 'light',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="pl"
      className={`${display.variable} ${serif.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Klasa .js przed pierwszym malowaniem — elementy animowane nie mrugają (patrz globals.css) */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <JsonLd data={[businessSchema, websiteSchema]} />
        <a
          href="#tresc"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10000] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-paper"
        >
          Przejdź do treści
        </a>
        <Providers>
          <SmoothScroll>
            <ScrollProgress />
            <div className="min-h-screen">
              <Navbar />
              <main id="tresc">{children}</main>
              <Footer />
            </div>
            {/* Warstwa konwersji: okno konsultacji, przyklejone CTA, podpowiedź */}
            <ConsultModal />
            <StickyCTA />
            <NudgeToast />
            <CookieConsent />
          </SmoothScroll>
        </Providers>
        {/* Skrypty marketingowe (Meta Pixel) ładowane wyłącznie po zgodzie na cookies */}
        <ConsentScripts />
        {/* Vercel Analytics nie używa cookies — nie wymaga zgody */}
        <Analytics />
      </body>
    </html>
  )
}
