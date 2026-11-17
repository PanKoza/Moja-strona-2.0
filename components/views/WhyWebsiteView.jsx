'use client'
import { useRef } from 'react'
import Link from 'next/link'
import ConsultButton from '@/components/ui/ConsultButton'
import Guarantees from '@/components/ui/Guarantees'
import SectionIntro from '@/components/ui/SectionIntro'
import FaqAccordion from '@/components/ui/FaqAccordion'
import CTABand from '@/components/ui/CTABand'
import Reveal from '@/components/motion/Reveal'
import ScrollReveal from '@/components/reactbits/ScrollReveal'
import whyWebsiteFaq from '@/data/whyWebsiteFaq'
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap'

const stats = [
  { value: 81, suffix: '%', label: 'konsumentów szuka produktów i usług w internecie przed zakupem', source: 'GUS / Google' },
  { value: 75, suffix: '%', label: 'użytkowników ocenia wiarygodność firmy na podstawie jej strony www', source: 'Stanford Web Credibility' },
  { value: 3, suffix: '×', label: 'więcej zapytań generuje firma z dobrze zoptymalizowaną stroną SEO', source: 'HubSpot' },
  { value: 94, suffix: '%', label: 'pierwszych wrażeń o firmie jest związanych z designem strony internetowej', source: 'ResearchGate' },
]

const benefits = [
  {
    title: 'Widoczność w Google 24/7',
    desc: 'Twoja strona pracuje dla Ciebie przez całą dobę. Klienci znajdą Twoją ofertę o każdej porze — nawet gdy śpisz. Optymalizacja SEO sprawia, że pojawiasz się wysoko na frazy, których szukają Twoi klienci.',
  },
  {
    title: 'Profesjonalny wizerunek',
    desc: 'Firmy bez strony internetowej są postrzegane jako mniej wiarygodne. Nowoczesna, szybka strona buduje zaufanie i sprawia, że wyglądasz profesjonalnie — nawet przy dużo większej konkurencji.',
  },
  {
    title: 'Więcej klientów i zapytań',
    desc: 'Strona to najlepszy sprzedawca — zawsze dostępny, nigdy nie choruje, obsługuje dziesiątki klientów jednocześnie. Formularz, telefon, mapa dojazdu — wszystko w jednym miejscu.',
  },
  {
    title: 'Lokalni klienci',
    desc: 'Lokalne SEO sprawia, że gdy ktoś w Ząbkowicach Śląskich, Kłodzku czy Dzierżoniowie szuka Twoich usług, trafia właśnie do Ciebie. Google Maps, wizytówka Google, słowa kluczowe — to działa razem.',
  },
  {
    title: 'Rekomendacje przez AI',
    desc: 'Modele językowe jak ChatGPT i Gemini coraz częściej polecają firmy z dobrą obecnością w internecie. Strona z wartościowymi treściami zwiększa szansę, że AI wymieni właśnie Twoją firmę.',
  },
  {
    title: 'Zwrot z inwestycji',
    desc: 'Strona za 1500 zł może przynieść Ci dziesiątki nowych klientów rocznie. Często jeden pozyskany klient zwraca koszt całego projektu. To najtańsze narzędzie marketingowe dla małych firm.',
  },
]

const seoSteps = [
  { title: 'Klient szuka usługi w Google', desc: 'Np. „mechanik Ząbkowice Śląskie” albo „catering na wesele Kłodzko”. Dziennie w Polsce takich zapytań są miliony.' },
  { title: 'Google pokazuje firmy z dobrym SEO', desc: 'Strony zoptymalizowane pod dane frazy pojawiają się na górze. Pierwsze wyniki zbierają większość kliknięć.' },
  { title: 'Klient trafia na stronę i dzwoni', desc: 'Profesjonalna strona przekonuje go do kontaktu. Bez strony — klient idzie do konkurencji.' },
  { title: 'Nowi klienci bez kosztów reklamy', desc: 'W przeciwieństwie do płatnych reklam ruch z SEO jest bezpłatny i rośnie z czasem.' },
]

const comparison = [
  'Dostępność 24/7',
  'Widoczność w Google',
  'Profesjonalny wizerunek',
  'Opinie klientów online',
  'Zapytania bez Twojego udziału',
  'Przewaga nad lokalną konkurencją',
]

export default function WhyWebsitePage() {
  const statsRef = useRef(null)

  // Liczby odliczają się od zera przy wejściu w widok
  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      gsap.utils.toArray('[data-count]').forEach((el) => {
        const end = Number(el.dataset.count)
        const obj = { v: 0 }
        gsap.to(obj, {
          v: end,
          duration: 1.6,
          ease: 'power3.out',
          onUpdate: () => (el.textContent = Math.round(obj.v)),
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        })
      })
    },
    { scope: statsRef },
  )

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="pt-[104px]">
        <div className="container-x">
          <p className="label fade-in border-b border-line pb-4 text-mute">Poradnik dla przedsiębiorców</p>
          <h1 className="display mt-10 max-w-[15ch] text-[clamp(2.8rem,8vw,8.4rem)]">
            <span className="line-mask">
              <span>Dlaczego każda firma</span>
            </span>
            <span className="line-mask">
              <span style={{ animationDelay: '0.1s' }}>
                potrzebuje <em className="serif-accent">strony?</em>
              </span>
            </span>
          </h1>
          <div className="fade-in mt-12 grid gap-8 border-t border-line pt-8 lg:grid-cols-12" style={{ animationDelay: '0.35s' }}>
            <p className="text-lg leading-relaxed text-ink-3 sm:text-xl lg:col-span-6">
              Dziś brak strony internetowej to jak brak szyldu nad drzwiami sklepu. Sprawdź, ile tracisz i jak szybko możesz
              to zmienić — już od 1500 zł.
            </p>
            <div className="flex flex-col items-start gap-5 lg:col-span-5 lg:col-start-8 lg:items-end">
              <ConsultButton size="lg" source="dlaczego-hero" topic="wizytówkowa">
                Zamów stronę od 1500 zł
              </ConsultButton>
              <Guarantees />
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATYSTYKI ===== */}
      <section ref={statsRef} className="py-20">
        <div className="container-x">
          <dl className="grid border-t border-ink sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} className={`border-b border-line py-8 sm:pr-6 ${i < 3 ? 'lg:border-r' : ''} ${i % 2 === 0 ? 'sm:border-r lg:border-r' : ''} lg:px-6 lg:first:pl-0`}>
                <dt className="display text-[clamp(4rem,7vw,6.5rem)]">
                  <span data-count={s.value}>{s.value}</span>
                  <span className="serif-accent text-[0.6em]">{s.suffix}</span>
                </dt>
                <dd className="mt-4 text-ink-3">{s.label}</dd>
                <dd className="label mt-3 text-mute">Źródło: {s.source}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ===== MANIFEST (React Bits ScrollReveal) ===== */}
      <section className="bg-ink py-24 text-paper sm:py-32">
        <div className="container-x">
          <ScrollReveal
            as="p"
            baseOpacity={0.15}
            enableBlur
            blurStrength={6}
            baseRotation={0}
            textClassName="display text-[clamp(2rem,5vw,5rem)] leading-[1.02]"
            wordAnimationEnd="center center"
          >
            Strona nie choruje, nie bierze urlopu i nie zamyka się o siedemnastej. Odpowiada klientom wtedy, kiedy oni szukają — a nie wtedy, kiedy Ty masz czas.
          </ScrollReveal>
        </div>
      </section>

      {/* ===== KORZYŚCI ===== */}
      <section id="korzysci" className="py-24 sm:py-32">
        <div className="container-x">
          <SectionIntro
            index="01"
            label="Korzyści"
            title={
              <>
                Co zyskujesz dzięki <em className="serif-accent">stronie?</em>
              </>
            }
          >
            Profesjonalna strona to inwestycja, która zwraca się wielokrotnie.
          </SectionIntro>
          <Reveal as="ol" stagger={0.07} className="mt-16 grid border-t border-ink md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <li key={b.title} className="border-b border-line py-8 md:pr-8 lg:[&:not(:nth-child(3n))]:border-r lg:[&:not(:nth-child(3n+1))]:pl-8">
                <span className="label text-mute">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">{b.title}</h3>
                <p className="mt-3 leading-relaxed text-mute">{b.desc}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <CTABand
        eyebrow="Policzmy to razem"
        title={
          <>
            Ilu klientów może Ci dać strona <em className="serif-accent">w Twojej branży?</em>
          </>
        }
        description="Podczas bezpłatnej konsultacji sprawdzę, jak często klienci z Twojej okolicy szukają Twoich usług w Google i co zrobić, żeby trafiali do Ciebie."
        source="dlaczego-srodek"
        buttonLabel="Sprawdź za darmo"
      />

      {/* ===== JAK DZIAŁA SEO ===== */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionIntro
            index="02"
            label="SEO w 4 krokach"
            title={
              <>
                Jak SEO przyciąga klientów <em className="serif-accent">automatycznie.</em>
              </>
            }
          >
            SEO to optymalizacja strony tak, aby Google wyświetlał ją wysoko w wynikach. Klient wpisuje frazę — Twoja firma
            pojawia się pierwsza.
          </SectionIntro>
          <Reveal as="ol" stagger={0.1} className="mt-16 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {seoSteps.map((s, i) => (
              <li key={s.title} className="border-t border-ink pt-6">
                <span className="display text-7xl text-signal">{i + 1}</span>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-mute">{s.desc}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== PORÓWNANIE ===== */}
      <section className="bg-paper-2 py-24 sm:py-32">
        <div className="container-x">
          <SectionIntro
            index="03"
            label="Porównanie"
            size="md"
            title={
              <>
                Firma ze stroną <em className="serif-accent">vs.</em> bez strony.
              </>
            }
          />
          <Reveal className="mt-14 md:ml-[25%]" y={30}>
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="label border-b border-ink text-mute">
                  <th className="py-4 font-medium">Cecha</th>
                  <th className="py-4 text-center font-medium text-ink">Ze stroną</th>
                  <th className="py-4 text-center font-medium">Bez strony</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row} className="border-b border-line">
                    <td className="py-5 font-display text-lg font-semibold tracking-tight md:text-2xl">{row}</td>
                    <td className="py-5 text-center text-2xl text-moss">
                      <span aria-label="tak">●</span>
                    </td>
                    <td className="py-5 text-center text-2xl text-mute">
                      <span aria-label="nie">○</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionIntro
            index="04"
            label="FAQ"
            size="md"
            title={
              <>
                Najczęstsze <em className="serif-accent">pytania.</em>
              </>
            }
          />
          <div className="mt-14 md:ml-[25%]">
            <FaqAccordion items={whyWebsiteFaq} />
            <p className="mt-8 text-mute">
              Chcesz najpierw zobaczyć efekty?{' '}
              <Link href="/portfolio" className="u-link font-semibold text-ink">
                Zobacz realizacje →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Gotowy na więcej klientów?"
        title={
          <>
            Strona wizytówkowa od 1500 zł — <em className="serif-accent">gotowa w 14 dni.</em>
          </>
        }
        description="Skontaktuj się i zacznij przyciągać klientów online. Pierwsza rozmowa i wycena są bezpłatne."
        source="dlaczego-koniec"
        topic="wizytówkowa"
        buttonLabel="Zamów bezpłatną wycenę"
      />
    </>
  )
}
