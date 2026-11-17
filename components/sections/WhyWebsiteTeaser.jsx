'use client'
import ScrollReveal from '@/components/reactbits/ScrollReveal'
import Reveal from '@/components/motion/Reveal'
import Button from '@/components/ui/Button'

const reasons = [
  { title: 'Widoczność w Google 24/7', text: 'Klienci znajdują Cię, kiedy szukają usługi — także w nocy i w weekend.' },
  { title: 'Wiarygodność', text: 'Firma z dopracowaną stroną budzi zaufanie, zanim klient zadzwoni.' },
  { title: 'Więcej zapytań', text: 'Telefon, formularz i mapa w jednym miejscu — kontakt w dwóch kliknięciach.' },
  { title: 'Polecenia przez AI', text: 'ChatGPT i Gemini chętniej polecają firmy z dobrą obecnością w sieci.' },
]

export default function WhyWebsiteTeaser() {
  return (
    <section className="py-24 sm:py-36">
      <div className="container-x">
        <p className="label mb-10 flex gap-3 border-t border-line pt-6 text-mute md:pt-8">
          <span>(04)</span>
          <span>Czy wiesz, że…</span>
        </p>

        {/* Tekst odsłaniany słowo po słowie wraz z przewijaniem (React Bits ScrollReveal) */}
        <ScrollReveal
          as="h2"
          baseOpacity={0.12}
          enableBlur
          blurStrength={6}
          baseRotation={0}
          containerClassName="max-w-[1200px]"
          textClassName="display text-[clamp(2.2rem,5.4vw,5.6rem)] leading-[1]"
          wordAnimationEnd="center center"
        >
          Strona to najlepszy pracownik Twojej firmy. Pracuje dzień i noc, nie bierze urlopu i sprowadza klientów, nawet gdy śpisz.
        </ScrollReveal>

        <Reveal as="ul" stagger={0.1} className="mt-20 grid border-t border-ink sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <li key={r.title} className="border-b border-line py-7 pr-6 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:pl-6 lg:first:pl-0 lg:last:border-r-0">
              <span className="label text-mute">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">{r.title}</h3>
              <p className="mt-3 text-mute">{r.text}</p>
            </li>
          ))}
        </Reveal>

        <Reveal className="mt-12" y={20}>
          <Button href="/dlaczego-strona-internetowa" variant="ghost" size="lg">
            Poznaj wszystkie korzyści
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
