'use client'
import Link from 'next/link'
import Image from 'next/image'
import SectionIntro from '@/components/ui/SectionIntro'
import Reveal from '@/components/motion/Reveal'

const VALUES = [
  {
    title: 'Jeden opiekun od początku do końca',
    text: 'Rozmawiasz bezpośrednio z osobą, która projektuje i koduje Twoją stronę. Bez pośredników i „przekazywania sprawy dalej”.',
  },
  {
    title: 'Lokalnie, z Ząbkowic Śląskich',
    text: 'Znam rynek Dolnego Śląska. Możemy porozmawiać przez telefon, online albo spotkać się osobiście.',
  },
  {
    title: 'Stała cena, jasne zasady',
    text: 'Cenę poznajesz przed startem i się nie zmienia. Poprawki w projekcie są wliczone — bez ukrytych kosztów.',
  },
  {
    title: 'Udokumentowane kompetencje',
    text: 'Certyfikaty z web developmentu i zarządzania projektami IT — możesz je obejrzeć przed podjęciem decyzji.',
    link: { href: '/certyfikaty', label: 'Zobacz certyfikaty' },
  },
]

const CITIES = [
  ['zabkowice-slaskie', 'Ząbkowice Śląskie'],
  ['klodzko', 'Kłodzko'],
  ['dzierzoniow', 'Dzierżoniów'],
  ['swidnica', 'Świdnica'],
  ['wroclaw', 'Wrocław'],
  ['kamieniec-zabkowicki', 'Kamieniec Ząbkowicki'],
  ['nysa', 'Nysa'],
  ['olawa', 'Oława'],
  ['trzebnica', 'Trzebnica'],
  ['prusice', 'Prusice'],
  ['dolnoslaskie', 'cały Dolny Śląsk'],
]

export default function AboutSection() {
  return (
    <section id="o-nas" className="py-24 sm:py-32">
      <div className="container-x">
        <SectionIntro
          index="06"
          label="O nas"
          title={
            <>
              Jedna osoba. <em className="serif-accent">Pełna</em> odpowiedzialność.
            </>
          }
        >
          <strong className="font-semibold text-ink">WebGoat</strong> to studio z Ząbkowic Śląskich. Zajmuję się{' '}
          <Link href="/uslugi/strony-internetowe" className="text-ink underline decoration-1 underline-offset-4 hover:text-signal-deep">
            tworzeniem stron internetowych
          </Link>
          , sklepów online i aplikacji webowych, łącząc projektowanie z{' '}
          <Link href="/uslugi/pozycjonowanie-seo" className="text-ink underline decoration-1 underline-offset-4 hover:text-signal-deep">
            optymalizacją SEO
          </Link>
          — żeby strona była szybka, widoczna w Google i prowadziła klienta prosto do kontaktu.
        </SectionIntro>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-3" y={40}>
            <div className="flex aspect-square w-40 items-center justify-center rounded-full bg-paper-2 lg:w-full">
              <Image src="/logo-symbol.png" alt="Logo WebGoat" width={197} height={159} className="w-1/2" />
            </div>
          </Reveal>

          <Reveal as="ol" stagger={0.1} className="grid border-t border-ink sm:grid-cols-2 lg:col-span-9">
            {VALUES.map((v, i) => (
              <li key={v.title} className="border-b border-line py-8 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8">
                <span className="label text-mute">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-mute">{v.text}</p>
                {v.link && (
                  <Link href={v.link.href} className="label u-link mt-5 inline-block text-ink">
                    {v.link.label} →
                  </Link>
                )}
              </li>
            ))}
          </Reveal>
        </div>

        <Reveal className="mt-16 grid gap-6 border-t border-line pt-6 lg:grid-cols-12" y={24}>
          <p className="label text-mute lg:col-span-3">Obsługiwane miasta</p>
          <p className="font-display text-2xl leading-snug tracking-tight lg:col-span-9 md:text-3xl">
            {CITIES.map(([slug, name], i) => (
              <span key={slug}>
                <Link href={`/lokalizacja/${slug}`} className="u-link transition-colors hover:text-signal-deep">
                  {name}
                </Link>
                {i < CITIES.length - 1 ? <span className="text-mute">, </span> : '.'}
              </span>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
