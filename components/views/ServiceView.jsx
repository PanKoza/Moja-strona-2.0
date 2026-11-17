'use client'
import Link from 'next/link'
import servicesData from '@/data/servicesData'
import { projectForService } from '@/data/portfolioData'
import ConsultButton from '@/components/ui/ConsultButton'
import Guarantees from '@/components/ui/Guarantees'
import SectionIntro from '@/components/ui/SectionIntro'
import FaqAccordion from '@/components/ui/FaqAccordion'
import CTABand from '@/components/ui/CTABand'
import { Arrow } from '@/components/ui/Button'
import Reveal from '@/components/motion/Reveal'
import ParallaxImage from '@/components/ui/ParallaxImage'
import PortfolioShowcase from '@/components/sections/PortfolioShowcase'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/consult'

// Wstępnie zaznaczony temat w oknie konsultacji
const TOPIC_BY_SLUG = {
  'strony-internetowe': 'firmowa',
  'sklepy-internetowe': 'sklep',
  'pozycjonowanie-seo': 'seo',
  'aplikacje-webowe': 'aplikacja',
  'branding-design': 'branding',
  'wsparcie-techniczne': 'opieka',
}

export default function ServicePage({ slug }) {
  const index = servicesData.findIndex((s) => s.slug === slug)
  const service = servicesData[index]
  if (!service) return null

  const related = servicesData.filter((s) => s.slug !== slug)
  const isBusinessCard = slug === 'strony-internetowe'
  const topic = TOPIC_BY_SLUG[slug] || ''
  const project = projectForService(slug)
  const no = String(index + 1).padStart(2, '0')

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
              <li>
                <Link href="/#uslugi" className="u-link">Usługi</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-ink" aria-current="page">{service.title}</li>
            </ol>
          </nav>

          <p className="label fade-in mt-10 text-mute">
            Usługa {no} / 06 — {service.title}
          </p>
          <h1 className="display fade-in mt-5 max-w-[16ch] text-[clamp(2.8rem,7.4vw,7.6rem)]" style={{ animationDelay: '0.1s' }}>
            {service.headline}
          </h1>

          <div className="mt-12 grid gap-10 border-t border-line pt-8 lg:grid-cols-12">
            <div className="fade-in lg:col-span-6" style={{ animationDelay: '0.25s' }}>
              <p className="mb-8 text-lg leading-relaxed text-ink-3 sm:text-xl">{service.intro}</p>
              <div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <ConsultButton size="lg" source={`usluga-hero ${slug}`} topic={topic}>
                  Bezpłatna wycena
                </ConsultButton>
                <a href={PHONE_HREF} className="u-link font-display text-xl font-semibold">
                  {PHONE_DISPLAY}
                </a>
              </div>
              <Guarantees />
            </div>

            <aside className="fade-in lg:col-span-4 lg:col-start-9" style={{ animationDelay: '0.4s' }} aria-label="Szybka wycena">
              <div className="bg-ink p-7 text-paper">
                <p className="label text-mute-dark">{isBusinessCard ? 'Strona wizytówkowa · od' : 'Wycena projektu'}</p>
                <p className="display mt-2 text-6xl">
                  {isBusinessCard ? (
                    <>
                      1500<span className="serif-accent ml-1 text-3xl">zł</span>
                    </>
                  ) : (
                    <>
                      24 <span className="serif-accent text-3xl">godziny</span>
                    </>
                  )}
                </p>
                <p className="label mt-2 text-mute-dark">{isBusinessCard ? 'Jednorazowo · 7–14 dni' : 'Za darmo · bez zobowiązań'}</p>
                <ul className="my-7 space-y-2 border-t border-dashed border-line-dark pt-6 text-sm">
                  {service.features.slice(0, 4).map((f) => (
                    <li key={f.title} className="flex gap-3">
                      <span className="text-signal" aria-hidden="true">+</span>
                      {f.title}
                    </li>
                  ))}
                </ul>
                <ConsultButton variant="paper" source={`usluga-karta ${slug}`} topic={topic} className="w-full" magnet={false}>
                  Zapytaj o cenę
                </ConsultButton>
              </div>
            </aside>
          </div>
        </div>

        <div className="container-x mt-20">
          <ParallaxImage
            src={project.image}
            alt={`Przykładowa realizacja: ${project.title}`}
            href={project.url}
            caption={
              <>
                <span>Przykład realizacji — {project.title}</span>
                <span>{project.location || project.tag} ↗</span>
              </>
            }
          />
        </div>
      </section>

      {/* ===== ZAKRES ===== */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionIntro
            index="01"
            label="Zakres usługi"
            title={
              <>
                Co dokładnie <em className="serif-accent">otrzymujesz.</em>
              </>
            }
          >
            Szczegółowy zakres usługi „{service.title.toLowerCase()}” — bez gwiazdek i drobnego druku.
          </SectionIntro>

          <Reveal as="ol" stagger={0.08} className="mt-16 grid border-t border-ink md:grid-cols-2">
            {service.features.map((feature, i) => (
              <li key={feature.title} className="grid grid-cols-[3rem_1fr] border-b border-line py-8 md:odd:border-r md:odd:pr-10 md:even:pl-10">
                <span className="label pt-2 text-mute">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{feature.title}</h3>
                  <p className="mt-3 leading-relaxed text-mute">{feature.description}</p>
                </div>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <CTABand
        title={
          <>
            Sprawdź, ile będzie kosztować <em className="serif-accent">Twój</em> projekt.
          </>
        }
        description="Opisz krótko swoją firmę — w 24 h dostaniesz konkretną propozycję i stałą cenę. Konsultacja jest bezpłatna."
        source={`usluga-srodek ${slug}`}
        topic={topic}
        buttonLabel="Poproś o wycenę"
      />

      {/* ===== PROCES + TECHNOLOGIE ===== */}
      <section className="bg-paper-2 py-24 sm:py-32">
        <div className="container-x">
          <SectionIntro
            index="02"
            label="Etapy"
            size="md"
            title={
              <>
                Jak przebiega <em className="serif-accent">realizacja.</em>
              </>
            }
          />
          <Reveal as="ol" stagger={0.07} className="mt-14 border-t border-ink md:ml-[25%]">
            {service.process.map((step, i) => (
              <li key={step} className="group grid grid-cols-[3rem_1fr] items-baseline border-b border-line py-5">
                <span className="label text-mute">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-display text-2xl font-semibold tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
                  {step}
                </span>
              </li>
            ))}
          </Reveal>

          <div className="mt-16 grid gap-10 md:ml-[25%] md:grid-cols-2">
            <Reveal y={24}>
              <p className="label mb-4 text-mute">Narzędzia i technologie</p>
              <p className="font-display text-2xl tracking-tight">{service.technologies.join(' / ')}</p>
            </Reveal>
            <Reveal y={24} delay={0.1}>
              <p className="label mb-4 text-mute">Masz już stronę lub sklep?</p>
              <p className="mb-5 text-ink-3">
                Przejrzę ją za darmo i powiem, co poprawić, żeby przynosiła więcej zapytań z Google.
              </p>
              <ConsultButton variant="ghost" size="sm" source={`usluga-audyt ${slug}`} topic="jeszcze nie wiem" magnet={false}>
                Poproś o opinię
              </ConsultButton>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionIntro
            index="03"
            label="FAQ"
            size="md"
            title={
              <>
                Najczęściej zadawane <em className="serif-accent">pytania.</em>
              </>
            }
          />
          <div className="mt-14 md:ml-[25%]">
            <FaqAccordion items={service.faq} />
            <p className="mt-8 text-mute">
              Nie ma tu Twojego pytania?{' '}
              <a href={PHONE_HREF} className="u-link font-semibold text-ink">
                Zadzwoń: {PHONE_DISPLAY}
              </a>
            </p>
          </div>
        </div>
      </section>

      <PortfolioShowcase
        limit={3}
        index="04"
        title={
          <>
            Zobacz, jak to wygląda <em className="serif-accent">w praktyce.</em>
          </>
        }
        description="Kilka stron, które już działają i pracują dla moich klientów."
      />

      {/* ===== POWIĄZANE USŁUGI ===== */}
      <section className="py-24">
        <div className="container-x">
          <SectionIntro index="05" label="Inne usługi" size="md" title="Może Ci się też przydać." />
          <ul className="mt-12 border-t border-ink md:ml-[25%]">
            {related.map((s) => (
              <li key={s.slug} className="border-b border-line">
                <Link href={`/uslugi/${s.slug}`} className="group flex items-center justify-between gap-6 py-5">
                  <span className="font-display text-2xl font-semibold tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
                    {s.title}
                  </span>
                  <span className="hidden flex-1 text-right text-sm text-mute md:block">{s.shortDesc}</span>
                  <Arrow className="h-5 w-5 shrink-0 transition-transform duration-500 group-hover:-rotate-45" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand
        eyebrow="Ostatni krok"
        title={
          <>
            Gotowy, żeby ruszyć <em className="serif-accent">z projektem?</em>
          </>
        }
        description={`${service.title} dla Twojej firmy — zacznij od bezpłatnej, 15-minutowej rozmowy. Bez zobowiązań.`}
        source={`usluga-koniec ${slug}`}
        topic={topic}
      />
    </>
  )
}
