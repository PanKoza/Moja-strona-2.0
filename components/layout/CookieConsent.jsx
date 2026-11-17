'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { getConsent, setConsent, OPEN_SETTINGS_EVENT } from '@/lib/consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let t
    if (!getConsent()) {
      // krótkie opóźnienie żeby nie migało przy hydratacji
      t = setTimeout(() => setVisible(true), 800)
    }
    const open = () => setVisible(true)
    window.addEventListener(OPEN_SETTINGS_EVENT, open)
    return () => {
      clearTimeout(t)
      window.removeEventListener(OPEN_SETTINGS_EVENT, open)
    }
  }, [])

  const accept = () => {
    setConsent('accepted')
    setVisible(false)
  }

  const reject = () => {
    const wasAccepted = getConsent() === 'accepted'
    setConsent('rejected')
    setVisible(false)
    // Załadowanego już skryptu śledzącego nie da się „wyładować" — przeładowanie strony go usuwa.
    if (wasAccepted) window.location.reload()
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-4 left-4 right-4 z-[9999] md:left-6 md:right-auto md:max-w-sm"
          role="dialog"
          aria-label="Zgoda na pliki cookie"
        >
          <div className="border border-ink bg-paper p-5 text-ink shadow-[6px_6px_0_0_#131311]">
            <p className="label mb-2 text-mute">Pliki cookie</p>
            <p className="mb-4 text-sm leading-relaxed text-ink-3">
              Używamy plików cookie marketingowych (Meta Pixel), aby mierzyć skuteczność reklam.
              Uruchomimy je tylko za Twoją zgodą. Klikając „Akceptuj", wyrażasz zgodę na ich użycie.{' '}
              <Link href="/polityka-prywatnosci" className="text-ink underline underline-offset-2">
                Polityka prywatności
              </Link>
            </p>
            <div className="flex gap-3">
              <button
                onClick={accept}
                className="flex-1 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-signal hover:text-ink"
              >
                Akceptuj
              </button>
              <button
                onClick={reject}
                className="flex-1 rounded-full border border-ink px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-paper-2"
              >
                Odrzuć
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
