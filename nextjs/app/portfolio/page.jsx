import PortfolioPageClient from '../../components/PortfolioPage'

export const metadata = {
  title: 'Portfolio — Realizacje',
  description:
    'Zobacz nasze realizacje — strony internetowe, aplikacje webowe i sklepy online stworzone przez WebGoat. Projekty dla firm z całego Dolnego Śląska i Polski.',
  keywords: [
    'portfolio stron internetowych',
    'realizacje WebGoat',
    'przykłady stron www',
    'tworzenie stron Ząbkowice Śląskie',
  ],
  alternates: {
    canonical: 'https://webgoat.pl/portfolio',
  },
  openGraph: {
    url: 'https://webgoat.pl/portfolio',
  },
}

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Portfolio realizacji WebGoat',
  description: 'Strony internetowe, aplikacje webowe i sklepy online stworzone przez WebGoat',
  url: 'https://webgoat.pl/portfolio',
  publisher: { '@type': 'Organization', name: 'WebGoat', url: 'https://webgoat.pl' },
}

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <PortfolioPageClient />
    </>
  )
}
