'use client'
import { useRef } from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import ConsultButton from '@/components/ui/ConsultButton'
import ConsultSticker from '@/components/ui/ConsultSticker'
import Guarantees from '@/components/ui/Guarantees'
import { homeProjects } from '@/data/portfolioData'
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap'

// Linie nagłówka — odsłaniane CSS-em z przesunięciem w czasie
const LINES = [
  { text: 'Tworzenie stron', className: '' },
  { text: 'internetowych, które', className: '' },
  { text: 'przynoszą klientów.', className: 'serif-accent' },
]

export default function HeroSection() {
  const stripRef = useRef(null)
  const trackRef = useRef(null)

  // Pasek realizacji przesuwa się w poziomie wraz z przewijaniem strony
  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      gsap.to(trackRef.current, {
        xPercent: -28,
        ease: 'none',
        scrollTrigger: { trigger: stripRef.current, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
      })
      gsap.utils.toArray('[data-strip-img]').forEach((img, i) => {
        gsap.fromTo(
          img,
          { yPercent: i % 2 ? -6 : 6 },
          {
            yPercent: i % 2 ? 6 : -6,
            ease: 'none',
            scrollTrigger: { trigger: stripRef.current, start: 'top bottom', end: 'bottom top', scrub: true },
          },
        )
      })
    },
    { scope: stripRef },
  )

  return (
    <section id="hero" className="relative overflow-hidden pt-[104px]">
      <div className="container-x">
        <div className="label fade-in flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4 text-mute">
          <span>(00) Studio stron internetowych — Ząbkowice Śląskie</span>
          <span className="flex items-center gap-2.5 text-ink">
            <span className="live-dot" aria-hidden="true" />
            Przyjmuję nowe projekty
          </span>
        </div>

        <h1 className="display mt-8 text-[clamp(3rem,8vw,9rem)] text-ink md:mt-8">
          {LINES.map((line, i) => (
            <span key={line.text} className="line-mask">
              <span className={line.className} style={{ animationDelay: `${0.08 + i * 0.1}s` }}>
                {line.text}{' '}
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-10 grid gap-10 border-t border-line pt-8 md:mt-14 lg:grid-cols-12 lg:gap-6">
          <div className="fade-in lg:col-span-6" style={{ animationDelay: '0.45s' }}>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-ink-3 sm:text-xl">
              Projektuję i koduję szybkie strony WWW, sklepy online i SEO dla firm z Ząbkowic Śląskich, Kłodzka,
              Dzierżoniowa i całego Dolnego Śląska. Bez szablonów — każda strona powstaje od zera, pod Twoich klientów.
            </p>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <ConsultButton size="lg" source="hero">
                Bezpłatna konsultacja
              </ConsultButton>
              <Button href="/portfolio" variant="ghost" size="lg" icon={false}>
                Zobacz realizacje
              </Button>
            </div>
          </div>

          <div className="fade-in flex items-end gap-8 lg:col-span-6 lg:justify-end" style={{ animationDelay: '0.6s' }}>
            <div className="border-l border-line pl-6">
              <p className="label mb-2 text-mute">Strona wizytówkowa</p>
              <p className="display text-[clamp(3.5rem,6vw,5.5rem)]">
                1500<span className="serif-accent ml-1 text-[0.5em]">zł</span>
              </p>
              <p className="label mt-2 text-mute">Gotowa w 7–14 dni</p>
            </div>
            <ConsultSticker source="hero-naklejka" size={136} className="hidden sm:block" />
          </div>
        </div>

        <Guarantees className="fade-in mt-8" />
      </div>

      {/* Pasek prawdziwych realizacji */}
      <div ref={stripRef} className="mt-16 overflow-hidden pb-6 md:mt-24" aria-label="Wybrane realizacje">
        <div ref={trackRef} className="flex w-max gap-4 pl-5 md:gap-6 md:pl-10">
          {homeProjects.map((p, i) => (
            <a
              key={p.slug}
              href={p.url}
              target="_blank"
              rel="noopener"
              className="group block w-[72vw] shrink-0 sm:w-[46vw] lg:w-[30vw]"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-paper-2">
                <div data-strip-img className="absolute -inset-y-[8%] inset-x-0">
                  <Image
                    src={p.image}
                    alt={`Strona ${p.title} — realizacja WebGoat`}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 72vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    priority={i < 2}
                  />
                </div>
              </div>
              <p className="mt-3 flex items-baseline justify-between gap-4 text-sm">
                <span className="font-display font-semibold">{p.title}</span>
                <span className="label text-mute">{p.location || p.tag}</span>
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
