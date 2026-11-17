import { notFound } from 'next/navigation'
import citiesData from '@/data/citiesData'
import LocalCityPageClient from '@/components/views/CityView'
import WebsiteQuiz from '@/components/sections/WebsiteQuiz'
import JsonLd from '@/components/seo/JsonLd'
import { pageMetadata, breadcrumbSchema, faqSchema, absoluteUrl, BUSINESS_ID } from '@/lib/seo'

// Tylko miasta z citiesData — każdy inny adres zwraca prawdziwe 404 (a nie „soft 404” z kodem 200)
export const dynamicParams = false

export async function generateStaticParams() {
  return citiesData.map((c) => ({ city: c.slug }))
}

export async function generateMetadata({ params }) {
  const { city } = await params
  const cityData = citiesData.find((c) => c.slug === city)
  if (!cityData) return {}

  return pageMetadata({
    title: cityData.metaTitle,
    description: cityData.metaDescription,
    path: `/lokalizacja/${cityData.slug}`,
  })
}

export default async function LocalCityPage({ params }) {
  const { city } = await params
  const cityData = citiesData.find((c) => c.slug === city)
  if (!cityData) notFound()

  const path = `/lokalizacja/${cityData.slug}`
  const isRegion = cityData.slug === 'dolnoslaskie'

  // Usługa świadczona w danym mieście przez firmę z Ząbkowic Śląskich.
  // Bez fikcyjnego adresu firmy w każdym mieście (to narusza wytyczne Google dla LocalBusiness).
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Tworzenie stron internetowych – ${cityData.name}`,
    serviceType: 'Tworzenie stron internetowych',
    description: cityData.metaDescription,
    url: absoluteUrl(path),
    provider: { '@id': BUSINESS_ID },
    areaServed: isRegion
      ? { '@type': 'State', name: 'Dolny Śląsk' }
      : {
          '@type': 'City',
          name: cityData.name,
          geo: { '@type': 'GeoCoordinates', latitude: cityData.lat, longitude: cityData.lng },
        },
    offers: {
      '@type': 'Offer',
      name: 'Strona wizytówkowa',
      price: '1500',
      priceCurrency: 'PLN',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: 1500, priceCurrency: 'PLN' },
    },
  }

  const schemas = [
    serviceSchema,
    breadcrumbSchema([{ name: `Strony internetowe ${cityData.name}`, path }]),
  ]
  if (cityData.faq?.length) schemas.push(faqSchema(cityData.faq))

  return (
    <>
      <JsonLd data={schemas} />
      <LocalCityPageClient city={city} />
      <WebsiteQuiz />
    </>
  )
}
