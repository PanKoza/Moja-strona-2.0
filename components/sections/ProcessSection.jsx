'use client'
import { useRef, useState } from 'react'
import SplitHeading from '@/components/motion/SplitHeading'
import ConsultButton from '@/components/ui/ConsultButton'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'

const steps = [
  {
    title: 'Bezpłatna konsultacja',
    description: 'Rozmawiamy o Twojej firmie, klientach i celach. Dostajesz konkretną propozycję i stałą cenę — bez zobowiązań.',
    note: 'Za darmo',
  },
  {
    title: 'Projekt graficzny',
    description: 'Przygotowuję projekt strony i wprowadzam poprawki, aż będziesz w pełni zadowolony. Dopiero wtedy kodujemy.',
    note: 'Poprawki w cenie',
  },
  {
    title: 'Budowa i SEO',
    description: 'Koduję szybką, responsywną stronę i od razu optymalizuję ją pod Google oraz frazy lokalne z Twojego miasta.',
    note: 'Ładowanie poniżej 2 s',
  },
  {
    title: 'Start i wsparcie',
    description: 'Uruchamiam stronę, podpinam narzędzia Google i pokazuję, jak ją edytować. Po starcie dalej jestem pod telefonem.',
    note: 'Wsparcie po starcie',
  },
]

/** Proces: lewa kolumna przyklejona z dużym licznikiem, prawa — kroki rozjaśniane w trakcie przewijania. */
export default function ProcessSection() {
  const ref = useRef(null)
  const [active, setActive] = useState(0)

  useGSAP(
    () => {
      gsap.utils.toArray('[data-step]').forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 55%',
          end: 'bottom 55%',
          onToggle: (self) => self.isActive && setActive(i),
        })
      })
      gsap.fromTo(
        '[data-progress]',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: { trigger: '[data-steps-list]', start: 'top 55%', end: 'bottom 55%', scrub: true },
        },
      )
    },
    { scope: ref },
  )

  return (
    <section id="proces" ref={ref} className="bg-paper-2 py-24 sm:py-32">
      <div className="container-x grid gap-12 border-t border-line pt-6 md:pt-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="label mb-8 flex gap-3 text-mute">
              <span>(05)</span>
              <span>Jak pracujemy</span>
            </p>
            <SplitHeading className="display text-[clamp(2.6rem,5vw,5rem)]">
              Od rozmowy do strony w <em className="serif-accent">czterech</em> krokach.
            </SplitHeading>
            <div className="mt-10 hidden items-end gap-6 lg:flex" aria-hidden="true">
              <span className="display text-[9rem] leading-[0.8] tabular-nums">
                0
                <span key={active} className="inline-block animate-[line-in_0.7s_cubic-bezier(0.16,1,0.3,1)]">
                  {active + 1}
                </span>
              </span>
              <span className="label mb-3 text-mute">/ 04 · {steps[active].note}</span>
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-6 lg:col-start-7">
          <div className="absolute bottom-0 left-0 top-0 w-px bg-line" aria-hidden="true">
            <div data-progress className="h-full w-full origin-top bg-ink" />
          </div>
          <ol data-steps-list>
            {steps.map((step, i) => (
              <li
                key={step.title}
                data-step
                className={`py-12 pl-8 transition-opacity duration-700 md:pl-12 lg:min-h-[52vh] ${
                  active === i ? 'opacity-100' : 'lg:opacity-30'
                }`}
              >
                <p className="label mb-5 text-mute">
                  Krok 0{i + 1} — <span className="text-signal-deep">{step.note}</span>
                </p>
                <h3 className="display mb-5 text-[clamp(2rem,3.6vw,3.4rem)]">{step.title}</h3>
                <p className="max-w-lg text-lg leading-relaxed text-ink-3">{step.description}</p>
              </li>
            ))}
          </ol>
          <div className="pl-8 md:pl-12">
            <p className="mb-5 text-ink-3">Pierwszy krok nic nie kosztuje.</p>
            <ConsultButton source="proces" size="lg">
              Zacznij od konsultacji
            </ConsultButton>
          </div>
        </div>
      </div>
    </section>
  )
}
