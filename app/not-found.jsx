import Link from 'next/link'
import Button from '@/components/ui/Button'

export const metadata = {
  title: 'Nie znaleziono strony (404)',
  robots: { index: false, follow: true },
  // Nie dziedzicz kanonicznego adresu strony głównej z layoutu
  alternates: { canonical: null },
}

const links = [
  { href: '/uslugi/strony-internetowe', label: 'Strony internetowe' },
  { href: '/portfolio', label: 'Realizacje' },
  { href: '/dlaczego-strona-internetowa', label: 'Dlaczego warto mieć stronę?' },
  { href: '/#kontakt', label: 'Kontakt' },
]

export default function NotFound() {
  return (
    <section className="pb-24 pt-[104px]">
      <div className="container-x">
        <p className="label border-b border-line pb-4 text-mute">Błąd 404</p>
        <p className="display mt-10 text-[clamp(7rem,30vw,26rem)] leading-[0.8]" aria-hidden="true">
          4<em className="serif-accent text-signal">0</em>4
        </p>
        <div className="mt-12 grid gap-10 border-t border-line pt-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h1 className="display text-5xl">
              Tej strony <em className="serif-accent">tu nie ma.</em>
            </h1>
            <p className="mt-5 text-lg text-ink-3">Mogła zostać przeniesiona albo adres zawiera literówkę.</p>
            <Button href="/" variant="signal" size="lg" className="mt-8">
              Wróć na stronę główną
            </Button>
          </div>
          <ul className="border-t border-ink lg:col-span-5 lg:col-start-8">
            {links.map((l) => (
              <li key={l.href} className="border-b border-line">
                <Link href={l.href} className="group flex items-center justify-between py-4 font-display text-xl font-semibold tracking-tight">
                  {l.label}
                  <span className="transition-transform duration-500 group-hover:translate-x-2" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
