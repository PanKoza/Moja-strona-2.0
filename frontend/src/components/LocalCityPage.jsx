import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiArrowLeft, HiCheck, HiPhone, HiMail, HiChevronDown, HiLocationMarker } from 'react-icons/hi'
import citiesData from '../data/citiesData'
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'

const SERVICES = [
  { label: 'Strony internetowe', href: '/uslugi/strony-internetowe' },
  { label: 'Sklepy internetowe', href: '/uslugi/sklepy-internetowe' },
  { label: 'Pozycjonowanie SEO', href: '/uslugi/pozycjonowanie-seo' },
  { label: 'Aplikacje webowe', href: '/uslugi/aplikacje-webowe' },
  { label: 'Web Design', href: '/uslugi/web-design' },
  { label: 'Wsparcie techniczne', href: '/uslugi/wspieranie-techniczne' },
]

function FaqItem({ q, a, index }) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <details className="group glass-card rounded-xl overflow-hidden">
        <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
          <h3 className="text-base font-semibold text-white pr-4">{q}</h3>
          <HiChevronDown className="w-5 h-5 text-primary-400 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
        </summary>
        <div className="px-6 pb-6 text-gray-400 leading-relaxed">{a}</div>
      </details>
    </AnimatedSection>
  )
}

export default function LocalCityPage() {
  const { city } = useParams()
  const cityData = citiesData.find((c) => c.slug === city)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [city])

  // Dynamiczny meta title i description dla każdego miasta
  useEffect(() => {
    if (!cityData) return
    document.title = cityData.metaTitle
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', cityData.metaDescription)

    // Schema.org LocalBusiness dla konkretnego miasta
    const existingSchema = document.getElementById('local-city-schema')
    if (existingSchema) existingSchema.remove()

    const schema = document.createElement('script')
    schema.id = 'local-city-schema'
    schema.type = 'application/ld+json'
    schema.textContent = JSON.stringify({
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
        'Aplikacje webowe',
      ],
    })
    document.head.appendChild(schema)

    // FAQ Schema (rich snippet w wynikach Google)
    const faqSchema = document.createElement('script')
    faqSchema.id = 'local-city-faq-schema'
    faqSchema.type = 'application/ld+json'
    faqSchema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: cityData.faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    })
    document.head.appendChild(faqSchema)

    // BreadcrumbList Schema
    const breadcrumbSchema = document.createElement('script')
    breadcrumbSchema.id = 'local-city-breadcrumb-schema'
    breadcrumbSchema.type = 'application/ld+json'
    breadcrumbSchema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://webgoat.pl/' },
        { '@type': 'ListItem', position: 2, name: cityData.name, item: `https://webgoat.pl/lokalizacja/${cityData.slug}` },
      ],
    })
    document.head.appendChild(breadcrumbSchema)

    return () => {
      ;['local-city-schema', 'local-city-faq-schema', 'local-city-breadcrumb-schema'].forEach(
        (id) => document.getElementById(id)?.remove()
      )
    }
  }, [cityData])

  if (!cityData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-bold text-white font-[family-name:var(--font-heading)]">
          Nie znaleziono lokalizacji
        </h1>
        <Link
          to="/"
          className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-xl transition-colors"
        >
          <HiArrowLeft className="w-5 h-5" />
          Wróć na stronę główną
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark">
      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-900/30 via-dark to-dark" />
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-primary-800/15 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors mb-8"
            >
              <HiArrowLeft className="w-4 h-4" />
              Powrót na stronę główną
            </Link>

            {/* Breadcrumb nawigacyjny */}
            <nav aria-label="breadcrumb" className="flex items-center gap-2 text-xs text-gray-500 mb-6">
              <Link to="/" className="hover:text-primary-400 transition-colors">Strona główna</Link>
              <span>/</span>
              <span className="text-gray-400">{cityData.name}</span>
            </nav>

            <div className="flex items-center gap-2 mb-4">
              <HiLocationMarker className="w-5 h-5 text-primary-400" />
              <span className="text-sm font-medium text-primary-400 uppercase tracking-widest">
                {cityData.region}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
              {cityData.heroTitle}
            </h1>

            <p className="text-gray-300 text-lg sm:text-xl max-w-3xl leading-relaxed mb-10">
              {cityData.heroSubtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+48883821301"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg shadow-primary-900/30"
              >
                <HiPhone className="w-5 h-5" />
                Zadzwoń teraz
              </a>
              <a
                href="/#kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 glass hover:bg-white/10 text-white font-semibold rounded-xl transition-all border border-white/10"
              >
                <HiMail className="w-5 h-5" />
                Bezpłatna wycena
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== DLACZEGO MY ===== */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-white mb-4">
              Dlaczego WebGoat dla{' '}
              <span className="text-gradient">{cityData.nameGenitive}?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl">
              Wybierz lokalnego partnera, który zna Twój rynek i jest w zasięgu ręki.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cityData.whyUs.map((item, i) => (
              <StaggerItem key={i}>
                <div className="glass-card rounded-xl p-6 flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600/20 rounded-full flex items-center justify-center mt-0.5">
                    <HiCheck className="w-4 h-4 text-primary-400" />
                  </div>
                  <p className="text-gray-200">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== USŁUGI ===== */}
      <section className="py-20 bg-dark/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-white mb-3">
              Nasze usługi dla firm z{' '}
              <span className="text-gradient">{cityData.nameGenitive}</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Kompleksowa obsługa online — od projektu po pozycjonowanie.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((svc, i) => (
              <StaggerItem key={i}>
                <Link
                  to={svc.href}
                  className="glass-card rounded-xl p-6 flex items-center gap-3 hover:border-primary-600/50 transition-all group"
                >
                  <span className="text-gray-200 font-medium group-hover:text-primary-300 transition-colors">
                    {svc.label}
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-white mb-10 text-center">
              Często zadawane pytania — {cityData.name}
            </h2>
          </AnimatedSection>

          <div className="flex flex-col gap-4">
            {cityData.faq.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== INNE OBSŁUGIWANE MIASTA ===== */}
      <section className="py-12 bg-dark/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-gray-500 text-sm text-center mb-4 uppercase tracking-widest">
              Obsługujemy również
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {citiesData
                .filter((c) => c.slug !== cityData.slug)
                .map((c) => (
                  <Link
                    key={c.slug}
                    to={`/lokalizacja/${c.slug}`}
                    className="px-5 py-2.5 text-sm text-gray-300 glass rounded-full border border-white/5 hover:border-primary-600/50 hover:text-primary-300 transition-all"
                  >
                    {c.name}
                  </Link>
                ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== OKOLICZNE MIEJSCOWOŚCI ===== */}
      {cityData.nearbyPlaces && cityData.nearbyPlaces.length > 0 && (
        <section className="py-12 bg-dark/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <p className="text-gray-500 text-sm text-center mb-4">
                Obsługujemy również firmy z pobliskich miejscowości:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {cityData.nearbyPlaces.map((place) => (
                  <span
                    key={place}
                    className="px-4 py-2 text-sm text-gray-400 glass rounded-full border border-white/5"
                  >
                    {place}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* ===== CTA ===== */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-white mb-4">
              Gotowy na <span className="text-gradient">nową stronę</span> dla firmy z{' '}
              {cityData.nameGenitive}?
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Skontaktuj się z nami. Przygotujemy bezpłatną wycenę w ciągu 24 godzin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+48883821301"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg shadow-primary-900/30"
              >
                <HiPhone className="w-5 h-5" />
                +48 883 821 301
              </a>
              <a
                href="mailto:jakub.kuzakowski@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 glass hover:bg-white/10 text-white font-semibold rounded-xl transition-all border border-white/10"
              >
                <HiMail className="w-5 h-5" />
                Napisz email
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
