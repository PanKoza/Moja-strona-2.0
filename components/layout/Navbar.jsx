'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useLenis } from 'lenis/react'
import servicesData from '@/data/servicesData'
import ConsultButton from '@/components/ui/ConsultButton'
import DecryptedText from '@/components/reactbits/DecryptedText'
import { Arrow } from '@/components/ui/Button'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/consult'

const navLinks = [
  { name: 'Realizacje', href: '/portfolio' },
  { name: 'Proces', href: '/#proces' },
  { name: 'Dlaczego strona', href: '/dlaczego-strona-internetowa' },
  { name: 'Certyfikaty', href: '/certyfikaty' },
  { name: 'Kontakt', href: '/#kontakt' },
]

const EASE = [0.76, 0, 0.24, 1]

function NavText({ children }) {
  return (
    <DecryptedText
      text={children}
      animateOn="hover"
      sequential
      speed={28}
      revealDirection="start"
      characters="ABCDEFGHIJKLMNOPRSTUWYZĄĘŁŚŻ"
      useOriginalCharsOnly={false}
    />
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const lastY = useRef(0)
  const closeTimer = useRef(null)
  const pathname = usePathname()
  const lenis = useLenis()

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 20)
      if (y > 300 && y > lastY.current + 6) setHidden(true)
      if (y < lastY.current - 6 || y < 300) setHidden(false)
      lastY.current = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [pathname])

  // Menu mobilne blokuje przewijanie strony pod spodem
  useEffect(() => {
    if (mobileOpen) lenis?.stop()
    else lenis?.start()
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen, lenis])

  const openServices = () => {
    clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }
  const closeServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 160)
  }

  const isActive = (href) => !href.includes('#') && pathname.startsWith(href)
  const solid = scrolled || servicesOpen

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: hidden && !mobileOpen && !servicesOpen ? '-100%' : '0%' }}
        transition={{ duration: 0.5, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ${
          mobileOpen ? 'bg-transparent' : solid ? 'border-b border-line bg-paper/90 backdrop-blur-md' : 'border-b border-transparent'
        }`}
      >
        <nav aria-label="Nawigacja główna" className="container-x flex h-[72px] items-center justify-between gap-6">
          <Link
            href="/"
            aria-label="WebGoat – strona główna"
            className={`relative z-[61] flex items-center gap-2.5 ${mobileOpen ? 'text-paper' : 'text-ink'}`}
          >
            <Image src="/logo-symbol.png" alt="" width={44} height={36} priority className="h-8 w-auto" />
            <span className="font-display text-[1.35rem] font-bold tracking-[-0.04em]">WebGoat</span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            <div onMouseEnter={openServices} onMouseLeave={closeServices}>
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setServicesOpen((o) => !o)}
                className={`flex items-center gap-1.5 text-[0.95rem] font-medium ${pathname.startsWith('/uslugi') ? 'text-ink' : 'text-ink-3'}`}
              >
                <NavText>Usługi</NavText>
                <span className={`inline-block text-xs transition-transform duration-500 ${servicesOpen ? 'rotate-180' : ''}`} aria-hidden="true">
                  ↓
                </span>
              </button>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-[0.95rem] font-medium transition-colors hover:text-ink ${isActive(link.href) ? 'text-ink' : 'text-ink-3'}`}
              >
                <NavText>{link.name}</NavText>
                {isActive(link.href) && <span className="absolute -bottom-1.5 left-0 h-px w-full bg-ink" />}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-6 lg:flex">
            <a href={PHONE_HREF} className="label u-link hidden text-ink xl:inline">
              {PHONE_DISPLAY}
            </a>
            <ConsultButton size="sm" source="navbar" magnet={false}>
              Bezpłatna wycena
            </ConsultButton>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className={`relative z-[61] flex h-11 items-center gap-3 lg:hidden ${mobileOpen ? 'text-paper' : 'text-ink'}`}
            aria-label={mobileOpen ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={mobileOpen}
          >
            <span className="label">{mobileOpen ? 'Zamknij' : 'Menu'}</span>
            <span className="relative block h-3 w-7" aria-hidden="true">
              <span
                className={`absolute left-0 h-[1.5px] w-full bg-current transition-all duration-500 ${mobileOpen ? 'top-1/2 rotate-45' : 'top-0'}`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-full bg-current transition-all duration-500 ${mobileOpen ? 'top-1/2 -rotate-45' : 'top-full'}`}
              />
            </span>
          </button>
        </nav>

        {/* Panel usług (desktop) */}
        <AnimatePresence>
          {servicesOpen && (
            <motion.div
              onMouseEnter={openServices}
              onMouseLeave={closeServices}
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={{ clipPath: 'inset(0 0 0% 0)' }}
              exit={{ clipPath: 'inset(0 0 100% 0)' }}
              transition={{ duration: 0.6, ease: EASE }}
              className="absolute inset-x-0 top-full hidden border-b border-line bg-paper lg:block"
            >
              <div className="container-x grid grid-cols-12 gap-10 py-10">
                <p className="label col-span-3 text-mute">Usługi — 06</p>
                <ul className="col-span-6 border-t border-line">
                  {servicesData.map((s, i) => (
                    <li key={s.slug} className="border-b border-line">
                      <Link href={`/uslugi/${s.slug}`} className="group flex items-baseline gap-6 py-3.5">
                        <span className="label w-8 text-mute">{String(i + 1).padStart(2, '0')}</span>
                        <span className="font-display text-2xl font-semibold tracking-tight transition-transform duration-500 group-hover:translate-x-2">
                          {s.title}
                        </span>
                        <Arrow className="ml-auto h-4 w-4 -rotate-45 opacity-0 transition-all duration-500 group-hover:rotate-0 group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="col-span-3 flex flex-col justify-between rounded-sm bg-ink p-6 text-paper">
                  <p className="label text-mute-dark">Najczęściej wybierana</p>
                  <p className="display my-6 text-5xl">
                    1500 <span className="serif-accent text-3xl">zł</span>
                  </p>
                  <p className="mb-6 text-sm text-mute-dark">Strona wizytówkowa gotowa w 7–14 dni.</p>
                  <ConsultButton size="sm" variant="paper" source="menu-uslugi" topic="wizytówkowa">
                    Zapytaj
                  </ConsultButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Menu mobilne */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            data-lenis-prevent
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-ink px-5 pb-10 pt-28 text-paper lg:hidden"
          >
            <ul className="mb-10 border-t border-line-dark">
              {[...navLinks.slice(0, 1), { name: 'Usługi', href: '/#uslugi' }, ...navLinks.slice(1)].map((link, i) => (
                <li key={link.name} className="overflow-hidden border-b border-line-dark">
                  <motion.div
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link href={link.href} onClick={() => setMobileOpen(false)} className="flex items-baseline gap-4 py-4">
                      <span className="label text-mute-dark">{String(i + 1).padStart(2, '0')}</span>
                      <span className="display text-[2.6rem]">{link.name}</span>
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              <p className="label mb-4 text-mute-dark">Usługi</p>
              <ul className="mb-10 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                {servicesData.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/uslugi/${s.slug}`} className="u-link">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <ConsultButton size="lg" variant="paper" source="menu-mobile" className="w-full" magnet={false}>
                  Bezpłatna wycena
                </ConsultButton>
                <a href={PHONE_HREF} className="display text-center text-2xl">
                  {PHONE_DISPLAY}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
