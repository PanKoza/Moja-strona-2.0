import PortfolioPageClient from '@/components/views/PortfolioView'
import JsonLd from '@/components/seo/JsonLd'
import { pageMetadata, breadcrumbSchema, absoluteUrl, BUSINESS_ID } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Portfolio – Realizacje Stron Internetowych',
  description:
    'Zobacz nasze realizacje: strony internetowe, sklepy online i aplikacje webowe dla firm z Dolnego Śląska i całej Polski. Sprawdź, co możemy zrobić dla Ciebie.',
  path: '/portfolio',
})

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Portfolio realizacji WebGoat',
  description: 'Strony internetowe, aplikacje webowe i sklepy online stworzone przez WebGoat',
  url: absoluteUrl('/portfolio'),
  inLanguage: 'pl-PL',
  publisher: { '@id': BUSINESS_ID },
}

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={[collectionSchema, breadcrumbSchema([{ name: 'Portfolio', path: '/portfolio' }])]} />
      <PortfolioPageClient />
    </>
  )
}
