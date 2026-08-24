import citiesData from '../../../data/citiesData'
import LocalCityPageClient from '../../../components/LocalCityPage'
import WebsiteQuiz from '../../../components/WebsiteQuiz'

export async function generateStaticParams() {
  return citiesData.map((c) => ({ city: c.slug }))
}

export async function generateMetadata({ params }) {
  const { city } = await params
  const cityData = citiesData.find((c) => c.slug === city)
  if (!cityData) return {}

  return {
    title: cityData.metaTitle,
    description: cityData.metaDescription,
    alternates: {
      canonical: `https://webgoat.pl/lokalizacja/${city}`,
    },
    openGraph: {
      title: cityData.metaTitle,
      description: cityData.metaDescription,
      url: `https://webgoat.pl/lokalizacja/${city}`,
    },
  }
}

export default async function LocalCityPage({ params }) {
  const { city } = await params
  const cityData = citiesData.find((c) => c.slug === city)

  if (!cityData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-bold text-white">Nie znaleziono lokalizacji</h1>
        <a href="/" className="px-6 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-500 transition-colors">
          Wróć na stronę główną
        </a>
      </div>
    )
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'WebGoat',
    image: 'https://webgoat.pl/logo_WebGoat.png',
    description: cityData.metaDescription,
    url: `https://webgoat.pl/lokalizacja/${cityData.slug}`,
    telephone: '+48883821301',
    email: 'jakub.kuzakowski@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: cityData.name,
      postalCode: cityData.postalCode,
      addressRegion: 'Dolnośląskie',
      addressCountry: 'PL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: cityData.lat,
      longitude: cityData.lng,
    },
    areaServed: { '@type': 'City', name: cityData.name },
    priceRange: '$$',
    serviceType: [
      'Tworzenie stron internetowych',
      'Sklepy internetowe',
      'Pozycjonowanie SEO',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <LocalCityPageClient city={city} />
      <WebsiteQuiz />
    </>
  )
}
