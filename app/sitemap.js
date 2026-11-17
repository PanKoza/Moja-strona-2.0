import citiesData from '@/data/citiesData'
import servicesData from '@/data/servicesData'
import { absoluteUrl } from '@/lib/seo'

// Generowana z tych samych danych co trasy, więc slugi w sitemap zawsze zgadzają się z istniejącymi stronami.
// Przy większej zmianie treści zaktualizuj datę.
const CONTENT_UPDATED = new Date('2026-11-17')

export default function sitemap() {
  const staticPages = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/dlaczego-strona-internetowa', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/portfolio', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/certyfikaty', priority: 0.5, changeFrequency: 'yearly' },
    { path: '/polityka-prywatnosci', priority: 0.2, changeFrequency: 'yearly' },
  ]

  const services = servicesData.map((s) => ({
    path: `/uslugi/${s.slug}`,
    priority: s.slug === 'strony-internetowe' ? 0.9 : 0.8,
    changeFrequency: 'monthly',
  }))

  const cities = citiesData.map((c) => ({
    path: `/lokalizacja/${c.slug}`,
    priority: 0.7,
    changeFrequency: 'monthly',
  }))

  return [...staticPages, ...services, ...cities].map(({ path, priority, changeFrequency }) => ({
    url: absoluteUrl(path),
    lastModified: CONTENT_UPDATED,
    changeFrequency,
    priority,
  }))
}
