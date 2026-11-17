'use client'
import { useRef } from 'react'
import Link from 'next/link'
import SectionIntro from '@/components/ui/SectionIntro'
import ConsultButton from '@/components/ui/ConsultButton'
import Reveal from '@/components/motion/Reveal'
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap'

const INCLUDED = [
  'Indywidualny projekt',
  'Wersja mobilna (RWD)',
  'Podstawowe SEO + Google Maps',
  'Formularz kontaktowy',
  'Certyfikat SSL',
  'Hosting na 1 rok gratis',
]

const STEPS = [
  { day: 'Dzień 1', text: 'Bezpłatna konsultacja i wycena' },
  { day: 'Dni 2–5', text: 'Projekt graficzny do akceptacji' },
  { day: 'Dni 6–12', text: 'Kodowanie, treści i SEO' },
  { day: 'Dzień 14', text: 'Strona online — klienci dzwonią' },
]

/** Oferta „strona wizytówkowa od 1500 zł": oś realizacji + karta-bilet z odliczaną ceną. */
export default function PromoSection({ index = '02' }) {
  const ref = useRef(null)
  const priceRef = useRef(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      const counter = { v: 0 }
      gsap.to(counter, {
        v: 1500,
        duration: 1.8,
        ease: 'power3.out',
        onUpdate: () => {
          if (priceRef.current) priceRef.current.textContent = Math.round(counter.v)
        },
        scrollTrigger: { trigger: priceRef.current, start: 'top 85%', once: true },
      })
      // Linie osi czasu „rysują się" przy przewijaniu
      gsap.from('[data-step-line]', {
        scaleX: 0,
        transformOrigin: 'left',
        stagger: 0.12,
        duration: 1.2,
        scrollTrigger: { trigger: '[data-steps]', start: 'top 80%', once: true },
      })
    },
    { scope: ref },
  )

  return (
    <section id="promocja" ref={ref} className="bg-paper-2 py-24 sm:py-32">
      <div className="container-x">
        <SectionIntro
          index={index}
          label="Oferta dla nowych klientów"
          title={
            <>
              Profesjonalna strona w <em className="serif-accent">14 dni</em> — za mniej, niż myślisz.
            </>
          }
        >
          Często jeden nowy klient zwraca cały koszt strony. Ty zajmujesz się firmą — ja dbam o to, żeby klienci mogli Cię
          znaleźć w Google i od razu zadzwonić.
        </SectionIntro>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-6">
          <ol data-steps className="lg:col-span-6 lg:col-start-4">
            {STEPS.map((s, i) => (
              <li key={s.day} className="relative grid grid-cols-[7rem_1fr] gap-4 py-6">
                <span data-step-line className="absolute inset-x-0 top-0 h-px bg-ink" aria-hidden="true" />
                <span className="label pt-1 text-mute">{s.day}</span>
                <span className={`font-display text-2xl font-semibold tracking-tight ${i === STEPS.length - 1 ? 'text-signal-deep' : ''}`}>
                  {s.text}
                </span>
              </li>
            ))}
          </ol>

          <Reveal className="lg:col-span-3" y={60}>
            <div className="relative rounded-sm bg-ink p-7 text-paper">
              {/* Perforacja „biletu" */}
              <span className="absolute -left-3 top-[42%] h-6 w-6 rounded-full bg-paper-2" aria-hidden="true" />
              <span className="absolute -right-3 top-[42%] h-6 w-6 rounded-full bg-paper-2" aria-hidden="true" />

              <p className="label mb-1 text-mute-dark">Strona wizytówkowa · od</p>
              <p className="display text-[5.5rem] leading-none">
                <span ref={priceRef}>1500</span>
                <span className="serif-accent ml-1 text-4xl">zł</span>
              </p>
              <p className="label mt-2 text-mute-dark">Jednorazowo · bez abonamentu</p>

              <div className="my-7 border-t border-dashed border-line-dark" />

              <ul className="mb-8 space-y-2.5 text-sm">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-signal" aria-hidden="true">+</span>
                    {item}
                  </li>
                ))}
              </ul>

              <ConsultButton source="promo-1500" topic="wizytówkowa" className="w-full" magnet={false}>
                Chcę taką stronę
              </ConsultButton>
            </div>
            <p className="label mt-4 text-mute">
              Bez ukrytych kosztów ·{' '}
              <Link href="/dlaczego-strona-internetowa" className="u-link text-ink">
                Dlaczego warto?
              </Link>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
