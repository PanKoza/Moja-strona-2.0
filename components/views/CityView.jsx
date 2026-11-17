'use client'
import Link from 'next/link'
import citiesData from '@/data/citiesData'
import servicesData from '@/data/servicesData'
import ConsultButton from '@/components/ui/ConsultButton'
import Guarantees from '@/components/ui/Guarantees'
import SectionIntro from '@/components/ui/SectionIntro'
import FaqAccordion from '@/components/ui/FaqAccordion'
import CTABand from '@/components/ui/CTABand'
import { Arrow } from '@/components/ui/Button'
import Reveal from '@/components/motion/Reveal'
import PromoSection from '@/components/sections/PromoSection'
import PortfolioShowcase from '@/components/sections/PortfolioShowcase'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/consult'

/** 50.4367 → 50°26′N */
function dms(value, pos, neg) {
  const abs = Math.abs(value)
  const deg = Math.floor(abs)
  const min = Math.round((abs - deg) * 60)
  return `${deg}°${String(min).padStart(2, '0')}′${value >= 0 ? pos : neg}`
}

export default function LocalCityPage({ city }) {
  const cityData = citiesData.find((c) => c.slug === city)
  if (!cityData) return null

  const otherCities = citiesData.filter((c) => c.slug !== cityData.slug)

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="pt-[104px]">
        <div className="container-x">
          <nav aria-label="Ścieżka nawigacji" className="fade-in border-b border-line pb-4">
            <ol className="label flex flex-wrap items-center gap-2 text-mute">
              <li>
                <Link href="/" className="u-link">Strona główna</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-ink" aria-current="page">Strony internetowe {cityData.name}</li>
            </ol>
          </nav>

          <div className="mt-10 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="label fade-in text-mute">{cityData.region}</p>
              <h1 className="display fade-in mt-5 text-[clamp(2.8rem,7.4vw,7.4rem)]" style={{ animationDelay: '0.1s' }}>
                {cityData.heroTitle}
              </h1>
              <p className="fade-in mt-8 max-w-2xl text-lg leading-relaxed text-ink-3 sm:text-xl" style={{ animationDelay: '0.25s' }}>
                {cityData.heroSubtitle}
              </p>
              <div className="fade-in mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center" style={{ animationDelay: '0.35s' }}>
                <ConsultButton size="lg" source={`miasto-hero ${cityData.slug}`}>
                  Bezpłatna wycena
                </ConsultButton>
                <a href={PHONE_HREF} className="u-link font-display text-xl font-semibold">
                  {PHONE_DISPLAY}
                </a>
              </div>
              <Guarantees className="fade-in mt-8" />
            </div>

            {/* Metryczka miejsca */}
            <aside className="fade-in self-end border-t border-ink lg:col-span-3 lg:col-start-10" style={{ animationDelay: '0.5s' }}>
              <dl className="divide-y divide-line">
                <div className="flex justify-between gap-4 py-3">
                  <dt className="label text-mute">Miejsce</dt>
                  <dd className="font-display font-semibold">{cityData.name}</dd>
                </div>
                <div className="flex justify-between gap-4 py-3">
                  <dt className="label text-mute">Współrzędne</dt>
                  <dd className="label">
                    {dms(cityData.lat, 'N', 'S')} {dms(cityData.lng, 'E', 'W')}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 py-3">
                  <dt className="label text-mute">Kod</dt>
                  <dd className="label">{cityData.postalCode}</dd>
                </div>
                {cityData.nearbyPlaces?.length > 0 && (
                  <div className="py-3">
                    <dt className="label mb-2 text-mute">Także okolice</dt>
                    <dd className="text-sm text-ink-3">{cityData.nearbyPlaces.join(', ')}</dd>
                  </div>
                )}
              </dl>
            </aside>
          </div>
        </div>

        {/* Oferta dla nowych klientów z miasta */}
        <div className="container-x mt-16">
          <Reveal className="grid items-center gap-6 bg-ink p-7 text-paper md:grid-cols-[1fr_auto] md:p-9" y={30}>
            <div>
              <p className="label mb-3 text-signal">Oferta dla nowych klientów z {cityData.nameGenitive}</p>
              <p className="display text-3xl md:text-4xl">
                Darmowa konsultacja + <em className="serif-accent">audyt SEO</em> w prezencie.
              </p>
              <p className="mt-3 max-w-2xl text-sm text-mute-dark">
                Dla pierwszych 3 firm z {cityData.nameGenitive} zgłoszonych w tym miesiącu — bezpłatny audyt strony (wartość 500
                zł) gratis przy zamówieniu.
              </p>
            </div>
            <ConsultButton variant="paper" source={`miasto-oferta ${cityData.slug}`} magnet={false}>
              Skorzystaj
            </ConsultButton>
          </Reveal>
        </div>
      </section>

      {/* ===== DLACZEGO MY ===== */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionIntro
            index="01"
            label={`Dla firm z ${cityData.nameGenitive}`}
            title={
              <>
                Dlaczego WebGoat dla <em className="serif-accent">{cityData.nameGenitive}?</em>
              </>
            }
          >
            Wybierz lokalnego partnera, który zna Twój rynek i jest w zasięgu ręki.
          </SectionIntro>
          <Reveal as="ol" stagger={0.08} className="mt-14 grid border-t border-ink md:ml-[25%] md:grid-cols-2">
            {cityData.whyUs.map((item, i) => (
              <li key={item} className="grid grid-cols-[3rem_1fr] border-b border-line py-7 md:odd:border-r md:odd:pr-8 md:even:pl-8">
                <span className="label pt-1.5 text-mute">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-display text-xl font-semibold tracking-tight md:text-2xl">{item}</span>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <PromoSection index="02" />

      {/* ===== USŁUGI ===== */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionIntro
            index="03"
            label="Usługi"
            title={
              <>
                Usługi dla firm z <em className="serif-accent">{cityData.nameGenitive}.</em>
              </>
            }
          />
          <ul className="mt-14 border-t border-ink">
            {servicesData.map((s, i) => (
              <li key={s.slug} className="border-b border-line">
                <Link href={`/uslugi/${s.slug}`} className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 py-6 md:grid-cols-12">
                  <span className="label text-mute md:col-span-1">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-display text-2xl font-semibold tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:col-span-5 md:text-4xl">
                    {s.title} <span className="serif-accent font-normal text-mute">{cityData.name}</span>
                  </span>
                  <span className="hidden text-mute md:col-span-5 md:block">{s.shortDesc}</span>
                  <Arrow className="h-5 w-5 justify-self-end transition-transform duration-500 group-hover:-rotate-45 md:col-span-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PortfolioShowcase
        limit={3}
        index="04"
        title={
          <>
            Strony, które przyciągają <em className="serif-accent">lokalnych</em> klientów.
          </>
        }
        description="Prawdziwe projekty dla firm usługowych z regionu — sprawdź je na swoim telefonie."
      />

      {/* ===== FAQ ===== */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionIntro
            index="05"
            label="FAQ"
            size="md"
            title={
              <>
                Często zadawane pytania — <em className="serif-accent">{cityData.name}.</em>
              </>
            }
          />
          <div className="mt-14 md:ml-[25%]">
            <FaqAccordion items={cityData.faq} />
          </div>
        </div>
      </section>

      {/* ===== INNE MIASTA ===== */}
      <section className="pb-24">
        <div className="container-x grid gap-6 border-t border-line pt-6 lg:grid-cols-12">
          <p className="label text-mute lg:col-span-3">Inne obsługiwane lokalizacje</p>
          <p className="font-display text-2xl leading-snug tracking-tight lg:col-span-9 md:text-3xl">
            {otherCities.map((c, i) => (
              <span key={c.slug}>
                <Link href={`/lokalizacja/${c.slug}`} className="u-link hover:text-signal-deep">
                  {c.name}
                </Link>
                {i < otherCities.length - 1 ? <span className="text-mute">, </span> : '.'}
              </span>
            ))}
          </p>
        </div>
      </section>

      <CTABand
        eyebrow={`Firmy z ${cityData.nameGenitive}`}
        title={
          <>
            Nowa strona dla firmy z <em className="serif-accent">{cityData.nameGenitive}?</em>
          </>
        }
        description="Zadzwoń albo zostaw numer. Przygotuję bezpłatną wycenę w ciągu 24 godzin — bez zobowiązań."
        source={`miasto-koniec ${cityData.slug}`}
      />
    </>
  )
}
