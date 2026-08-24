import servicesData from '../../../data/servicesData'
import ServicePageClient from '../../../components/ServicePage'
import WebsiteQuiz from '../../../components/WebsiteQuiz'

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = servicesData.find((s) => s.slug === slug)
  if (!service) return {}

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://webgoat.pl/uslugi/${slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://webgoat.pl/uslugi/${slug}`,
    },
  }
}

export default async function ServicePage({ params }) {
  const { slug } = await params
  const service = servicesData.find((s) => s.slug === slug)

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-bold text-white">Nie znaleziono usługi</h1>
        <a href="/" className="px-6 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-500 transition-colors">
          Wróć na stronę główną
        </a>
      </div>
    )
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'WebGoat',
      url: 'https://webgoat.pl',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ząbkowice Śląskie',
        addressRegion: 'Dolnośląskie',
        postalCode: '57-200',
        addressCountry: 'PL',
      },
    },
    areaServed: { '@type': 'City', name: 'Ząbkowice Śląskie' },
    priceRange: '$$',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePageClient slug={slug} />
      <WebsiteQuiz />
    </>
  )
}
