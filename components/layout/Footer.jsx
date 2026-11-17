'use client'
import { useRef } from 'react'
import Link from 'next/link'
import CookieSettingsButton from '@/components/layout/CookieSettingsButton'
import ConsultButton from '@/components/ui/ConsultButton'
import { LEGAL_NAME, NIP, EMAIL } from '@/lib/seo'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/consult'
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap'

const footerLinks = {
  Usługi: [
    { name: 'Strony internetowe', href: '/uslugi/strony-internetowe' },
    { name: 'Sklepy online', href: '/uslugi/sklepy-internetowe' },
    { name: 'Pozycjonowanie SEO', href: '/uslugi/pozycjonowanie-seo' },
    { name: 'Aplikacje webowe', href: '/uslugi/aplikacje-webowe' },
    { name: 'Branding i design', href: '/uslugi/branding-design' },
    { name: 'Wsparcie techniczne', href: '/uslugi/wsparcie-techniczne' },
  ],
  Studio: [
    { name: 'O nas', href: '/#o-nas' },
    { name: 'Proces', href: '/#proces' },
    { name: 'Realizacje', href: '/portfolio' },
    { name: 'Certyfikaty', href: '/certyfikaty' },
    { name: 'Dlaczego strona WWW?', href: '/dlaczego-strona-internetowa' },
    { name: 'Kontakt', href: '/#kontakt' },
  ],
  Lokalizacje: [
    { name: 'Ząbkowice Śląskie', href: '/lokalizacja/zabkowice-slaskie' },
    { name: 'Kamieniec Ząbkowicki', href: '/lokalizacja/kamieniec-zabkowicki' },
    { name: 'Kłodzko', href: '/lokalizacja/klodzko' },
    { name: 'Dzierżoniów', href: '/lokalizacja/dzierzoniow' },
    { name: 'Świdnica', href: '/lokalizacja/swidnica' },
    { name: 'Wrocław', href: '/lokalizacja/wroclaw' },
    { name: 'Nysa', href: '/lokalizacja/nysa' },
    { name: 'Oława', href: '/lokalizacja/olawa' },
    { name: 'Trzebnica', href: '/lokalizacja/trzebnica' },
    { name: 'Prusice', href: '/lokalizacja/prusice' },
    { name: 'Dolnośląskie', href: '/lokalizacja/dolnoslaskie' },
  ],
}

export default function Footer() {
  const ref = useRef(null)

  // Ogromny napis marki wysuwa się zza krawędzi przy dojeździe do końca strony
  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      gsap.fromTo(
        '[data-wordmark]',
        { yPercent: 60 },
        { yPercent: 0, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom bottom', scrub: true } },
      )
    },
    { scope: ref },
  )

  return (
    <footer ref={ref} className="overflow-hidden bg-ink text-paper">
      <div className="container-x pt-20">
        <div className="grid gap-10 border-b border-line-dark pb-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="display mb-8 text-[clamp(2.4rem,4.6vw,4.4rem)]">
              Masz pomysł na stronę? <em className="serif-accent text-signal">Napisz.</em>
            </p>
            <ConsultButton source="stopka" variant="paper" size="lg" magnet={false}>
              Bezpłatna konsultacja
            </ConsultButton>
          </div>
          <address className="space-y-2 not-italic lg:col-span-5 lg:col-start-8 lg:text-right">
            <a href={PHONE_HREF} className="u-link block font-display text-3xl font-semibold tracking-tight">
              {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="u-link block break-all text-lg text-mute-dark hover:text-paper">
              {EMAIL}
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Z%C4%85bkowice+%C5%9Al%C4%85skie+57-200"
              target="_blank"
              rel="noopener noreferrer"
              className="u-link block text-lg text-mute-dark hover:text-paper"
            >
              57-200 Ząbkowice Śląskie, woj. dolnośląskie
            </a>
          </address>
        </div>

        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12">
          <p className="max-w-xs text-sm leading-relaxed text-mute-dark lg:col-span-3">
            Tworzenie stron internetowych, sklepów i SEO dla firm z Ząbkowic Śląskich i całego Dolnego Śląska.
          </p>
          {Object.entries(footerLinks).map(([title, links], i) => (
            <div key={title} className={i === 0 ? 'lg:col-span-3 lg:col-start-5' : 'lg:col-span-2'}>
              <h3 className="label mb-5 text-mute-dark">{title}</h3>
              <ul className={`space-y-2 ${title === 'Lokalizacje' ? 'columns-2 gap-6 lg:columns-1' : ''}`}>
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="u-link text-sm text-paper/85 hover:text-paper">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-line-dark py-6 text-xs text-mute-dark md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {LEGAL_NAME} · NIP {NIP}
          </p>
          <nav aria-label="Informacje prawne" className="flex items-center gap-6">
            <Link href="/polityka-prywatnosci" className="u-link hover:text-paper">
              Polityka prywatności
            </Link>
            <CookieSettingsButton className="u-link hover:text-paper" label="Ustawienia cookies" />
          </nav>
          <p>Zaprojektowane i zakodowane w Ząbkowicach Śląskich</p>
        </div>
      </div>

      <div aria-hidden="true" className="select-none overflow-hidden">
        <p data-wordmark className="display -mb-[0.2em] whitespace-nowrap text-center text-[25vw] leading-[0.8] tracking-[-0.06em] text-paper">
          WebGoat
        </p>
      </div>
    </footer>
  )
}
