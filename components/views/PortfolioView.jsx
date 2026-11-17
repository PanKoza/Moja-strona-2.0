'use client'
import { useState } from 'react'
import { ScrollTrigger } from '@/lib/gsap'
import portfolioData, { portfolioCategories } from '@/data/portfolioData'
import CTABand from '@/components/ui/CTABand'
import ConsultButton from '@/components/ui/ConsultButton'
import Reveal from '@/components/motion/Reveal'
import ParallaxImage from '@/components/ui/ParallaxImage'

const TOPIC = { Sklepy: 'sklep', Aplikacje: 'aplikacja', 'Strony WWW': 'wizytówkowa' }

export default function PortfolioPage() {
  const [active, setActive] = useState('Wszystkie')
  const filtered = active === 'Wszystkie' ? portfolioData : portfolioData.filter((p) => p.category === active)

  const choose = (cat) => {
    setActive(cat)
    // Wysokość listy się zmienia — przelicz pozycje animacji
    requestAnimationFrame(() => ScrollTrigger.refresh())
  }

  return (
    <>
      <section className="pt-[104px]">
        <div className="container-x">
          <p className="label fade-in flex justify-between gap-4 border-b border-line pb-4 text-mute">
            <span>Realizacje — {String(portfolioData.length).padStart(2, '0')} projektów online</span>
            <span className="hidden sm:inline">Kliknij, żeby zobaczyć na żywo ↗</span>
          </p>
          <h1 className="display mt-10 text-[clamp(3.4rem,13vw,13rem)]">
            <span className="line-mask">
              <span>
                Nasze <em className="serif-accent">realizacje.</em>
              </span>
            </span>
          </h1>
          <div className="fade-in mt-10 grid gap-8 border-t border-line pt-8 lg:grid-cols-12" style={{ animationDelay: '0.3s' }}>
            <p className="text-lg leading-relaxed text-ink-3 lg:col-span-6">
              Strony wizytówkowe, sklepy internetowe i aplikacje webowe dla firm z Dolnego Śląska i całej Polski. Każdy projekt
              powstał od zera — zobacz, co możemy stworzyć dla Twojej firmy.
            </p>
            <div role="tablist" aria-label="Filtruj realizacje" className="flex flex-wrap gap-x-6 gap-y-2 lg:col-span-5 lg:col-start-8 lg:justify-end">
              {portfolioCategories.map((cat) => {
                const count = cat === 'Wszystkie' ? portfolioData.length : portfolioData.filter((p) => p.category === cat).length
                const isActive = active === cat
                return (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => choose(cat)}
                    className={`font-display text-xl font-semibold tracking-tight transition-colors ${
                      isActive ? 'text-ink underline decoration-2 underline-offset-8' : 'text-mute hover:text-ink'
                    }`}
                  >
                    {cat} <sup className="label">{count}</sup>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-x space-y-24 sm:space-y-32">
          {filtered.map((p, i) => {
            const flip = i % 2 === 1
            return (
              <article key={p.slug} className="grid items-end gap-8 lg:grid-cols-12 lg:gap-10">
                <div className={`lg:col-span-8 ${flip ? 'lg:order-2' : ''}`}>
                  <ParallaxImage
                    src={p.image}
                    alt={`Strona ${p.title} — realizacja WebGoat`}
                    href={p.url}
                    aspect="aspect-[16/10]"
                  />
                </div>
                <Reveal className={`lg:col-span-4 ${flip ? 'lg:order-1' : ''}`} y={40}>
                  <p className="label mb-4 flex justify-between border-b border-line pb-3 text-mute">
                    <span>{String(portfolioData.indexOf(p) + 1).padStart(2, '0')}</span>
                    <span>
                      {p.tag}
                      {p.location ? ` · ${p.location}` : ''}
                    </span>
                  </p>
                  <h2 className="display text-[clamp(2.2rem,3.6vw,3.6rem)]">{p.title}</h2>
                  <p className="mt-4 leading-relaxed text-mute">{p.description}</p>
                  <p className="label mt-5 text-mute">{p.tech.join(' / ')}</p>
                  <div className="mt-7 flex flex-wrap items-center gap-5">
                    <a href={p.url} target="_blank" rel="noopener" className="label u-link text-ink">
                      Zobacz na żywo ↗
                    </a>
                    <ConsultButton
                      variant="ink"
                      size="sm"
                      source={`portfolio-podobna ${p.title}`}
                      topic={TOPIC[p.category]}
                      magnet={false}
                    >
                      Chcę podobną
                    </ConsultButton>
                  </div>
                </Reveal>
              </article>
            )
          })}
        </div>
      </section>

      <CTABand
        eyebrow="Twoja strona może być następna"
        title={
          <>
            Dołącz do grona <em className="serif-accent">moich</em> klientów.
          </>
        }
        description="Strona wizytówkowa już od 1500 zł, gotowa w 7–14 dni. Opowiedz mi o swojej firmie — omówimy projekt za darmo."
        source="portfolio-koniec"
        buttonLabel="Zamów bezpłatną wycenę"
      />
    </>
  )
}
