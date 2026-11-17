'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { openConsult, sessionFlag, wasLeadSent } from '@/lib/consult'

const KEY = 'nudgeDismissed'

function messageFor(pathname) {
  if (pathname.startsWith('/uslugi/')) return 'Zastanawiasz się nad zakresem i ceną? Wycenię Twój projekt za darmo w 24 h.'
  if (pathname.startsWith('/lokalizacja/')) return 'Jestem lokalnie — możemy porozmawiać przez telefon albo spotkać się osobiście.'
  if (pathname.startsWith('/portfolio')) return 'Podoba Ci się któraś realizacja? Zrobię podobną dla Twojej firmy.'
  if (pathname.startsWith('/dlaczego')) return 'Chcesz sprawdzić, ile klientów może dać strona w Twojej branży? Konsultacja jest bezpłatna.'
  return 'Masz pytanie o stronę? Odpowiadam osobiście, a konsultacja jest bezpłatna.'
}

/** Podpowiedź wysuwana po 40 s lub po przewinięciu ~55% strony. Raz na sesję, nigdy po wysłaniu zgłoszenia. */
export default function NudgeToast() {
  const pathname = usePathname()
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(false)
    if (sessionFlag(KEY) || wasLeadSent() || pathname === '/polityka-prywatnosci') return
    let fired = false
    const fire = () => {
      if (fired || sessionFlag(KEY)) return
      fired = true
      setShow(true)
      sessionFlag(KEY, '1')
    }
    const timer = setTimeout(fire, 40000)
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (max > 0 && window.scrollY / max > 0.55) fire()
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [pathname])

  return (
    <AnimatePresence>
      {show && (
        <motion.aside
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0% 0 0)' }}
          exit={{ clipPath: 'inset(0 100% 0 0)' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed bottom-20 left-4 z-50 w-[calc(100%-2rem)] max-w-sm bg-ink p-5 text-paper md:bottom-6 md:left-6"
          aria-label="Propozycja bezpłatnej konsultacji"
        >
          <div className="mb-3 flex items-center justify-between">
            <p className="label flex items-center gap-2 text-mute-dark">
              <span className="live-dot" aria-hidden="true" />
              Jakub · WebGoat
            </p>
            <button type="button" onClick={() => setShow(false)} className="label text-mute-dark hover:text-paper" aria-label="Zamknij">
              ✕
            </button>
          </div>
          <p className="mb-4 leading-snug">{messageFor(pathname)}</p>
          <button
            type="button"
            onClick={() => {
              setShow(false)
              openConsult({ source: `nudge ${pathname}` })
            }}
            className="label u-link text-signal"
          >
            Porozmawiajmy →
          </button>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
