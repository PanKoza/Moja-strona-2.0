import citiesData from '@/data/citiesData'

export const SITE_URL = 'https://webgoat.pl'
export const SITE_NAME = 'WebGoat'
export const PHONE = '+48883821301'
export const EMAIL = 'jakub.kuzakowski@gmail.com'
export const LEGAL_NAME = 'Jakub Kuzakowski WebGoat'
export const NIP = '8871830447'
export const BUSINESS_ID = `${SITE_URL}/#business`
export const WEBSITE_ID = `${SITE_URL}/#website`

export const OG_IMAGE = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'WebGoat – tworzenie stron internetowych, Ząbkowice Śląskie i Dolny Śląsk',
}

export const absoluteUrl = (path = '/') => (path === '/' ? SITE_URL : `${SITE_URL}${path}`)

/**
 * Pełne metadane podstrony. Next.js nadpisuje (a nie scala) obiekty openGraph/twitter
 * z layoutu, dlatego każda podstrona dostaje komplet: obrazek, typ, locale, nazwę serwisu.
 */
export function pageMetadata({ title, description, path, absoluteTitle = false, type = 'website', noindex = false }) {
  const url = absoluteUrl(path)
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      locale: 'pl_PL',
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
    ...(noindex && { robots: { index: false, follow: true } }),
  }
}

/** Główna firma — jeden spójny NAP, do którego odwołują się pozostałe schematy przez @id. */
export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': BUSINESS_ID,
  name: SITE_NAME,
  legalName: LEGAL_NAME,
  taxID: NIP,
  alternateName: 'WebGoat – Tworzenie Stron Internetowych',
  url: SITE_URL,
  logo: `${SITE_URL}/logo_WebGoat.png`,
  image: `${SITE_URL}${OG_IMAGE.url}`,
  description:
    'Tworzenie stron internetowych, sklepów online, aplikacji webowych i pozycjonowanie SEO dla firm z Ząbkowic Śląskich i całego Dolnego Śląska.',
  telephone: PHONE,
  email: EMAIL,
  priceRange: 'od 1500 zł',
  currenciesAccepted: 'PLN',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ząbkowice Śląskie',
    postalCode: '57-200',
    addressRegion: 'dolnośląskie',
    addressCountry: 'PL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 50.5906,
    longitude: 16.8114,
  },
  areaServed: [
    ...citiesData
      .filter((c) => c.slug !== 'dolnoslaskie')
      .map((c) => ({ '@type': 'City', name: c.name })),
    { '@type': 'State', name: 'Dolny Śląsk' },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: PHONE,
    email: EMAIL,
    contactType: 'customer service',
    availableLanguage: 'Polish',
  },
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: 'pl-PL',
  publisher: { '@id': BUSINESS_ID },
}

/** items: [{ name, path }] — strona główna dodawana automatycznie. */
export function breadcrumbSchema(items) {
  const all = [{ name: 'Strona główna', path: '/' }, ...items]
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function faqSchema(faq) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}
