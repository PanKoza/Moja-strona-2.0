'use client'
import ScrollVelocity from '@/components/reactbits/ScrollVelocity'

const ROWS = [
  'Strony wizytówkowe — Sklepy internetowe — Pozycjonowanie SEO —',
  'Aplikacje webowe — Branding — Opieka techniczna — Lokalne SEO —',
]

/** Pas w kolorze sygnału: tekst przyspiesza i zmienia kierunek razem z przewijaniem (React Bits ScrollVelocity). */
export default function TrustMarquee() {
  return (
    <section aria-label="Zakres usług" className="overflow-hidden bg-signal py-6 text-ink md:py-8">
      <ScrollVelocity
        texts={ROWS}
        velocity={38}
        numCopies={4}
        outlineAlternate
        skewWithVelocity={6}
        className="font-display font-bold tracking-[-0.04em]"
        fontSize="clamp(2.6rem, 7vw, 7rem)"
        parallaxClassName="py-1"
        scrollerClassName=""
      />
    </section>
  )
}
