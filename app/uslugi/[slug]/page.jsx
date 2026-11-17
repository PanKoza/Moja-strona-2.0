import { notFound } from 'next/navigation'
import servicesData from '@/data/servicesData'
import ServicePageClient from '@/components/views/ServiceView'
import WebsiteQuiz from '@/components/sections/WebsiteQuiz'
import JsonLd from '@/components/seo/JsonLd'
import { pageMetadata, breadcrumbSchema, faqSchema, absoluteUrl, BUSINESS_ID } from '@/lib/seo'

// Tylko usługi z servicesData — każdy inny adres zwraca prawdziwe 404
export const dynamicParams = false

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = servicesData.find((s) => s.slug === slug)
  if (!service) return {}

  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/uslugi/${service.slug}`,
  })
}

export default async function ServicePage({ params }) {
  const { slug } = await params
  const service = servicesData.find((s) => s.slug === slug)
  if (!service) notFound()

  const path = `/uslugi/${service.slug}`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    description: service.metaDescription,
    url: absoluteUrl(path),
    provider: { '@id': BUSINESS_ID },
    areaServed: [
      { '@type': 'City', name: 'Ząbkowice Śląskie' },
      { '@type': 'State', name: 'Dolny Śląsk' },
      { '@type': 'Country', name: 'Polska' },
    ],
    ...(service.slug === 'strony-internetowe' && {
      offers: {
        '@type': 'Offer',
        name: 'Strona wizytówkowa',
        price: '1500',
        priceCurrency: 'PLN',
        priceSpecification: { '@type': 'PriceSpecification', minPrice: 1500, priceCurrency: 'PLN' },
      },
    }),
  }

  const schemas = [
    serviceSchema,
    breadcrumbSchema([
      { name: 'Usługi', path: '/#uslugi' },
      { name: service.title, path },
    ]),
  ]
  if (service.faq?.length) schemas.push(faqSchema(service.faq))

  return (
    <>
      <JsonLd data={schemas} />
      <ServicePageClient slug={slug} />
      <WebsiteQuiz />
    </>
  )
}
