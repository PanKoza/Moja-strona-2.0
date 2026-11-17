'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ConsultSticker from '@/components/ui/ConsultSticker'
import { openConsult, PHONE_HREF } from '@/lib/consult'

/**
 * Telefon: dolny pasek „Zadzwoń / Bezpłatna wycena" po przewinięciu pierwszego ekranu.
 * Desktop: obracająca się naklejka CircularText w prawym dolnym rogu.
 * Chowa się przy formularzu kontaktowym i w stopce (nie dublujemy CTA).
 */
export default function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const [blocked, setBlocked] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const targets = [document.getElementById('kontakt'), document.querySelector('footer')].filter(Boolean)
    const seen = new Set()
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? seen.add(e.target) : seen.delete(e.target)))
        setBlocked(seen.size > 0)
      },
      { threshold: 0.05 },
    )
    targets.forEach((t) => io.observe(t))
    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  const show = visible && !blocked

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            key="mobile"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-[1fr_1.6fr] border-t border-ink bg-paper md:hidden"
            style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
          >
            <a href={PHONE_HREF} className="label flex items-center justify-center border-r border-ink py-4 text-ink">
              Zadzwoń
            </a>
            <button
              type="button"
              onClick={() => openConsult({ source: 'sticky-mobile' })}
              className="label flex items-center justify-center gap-2 bg-signal py-4 text-ink"
            >
              Bezpłatna wycena →
            </button>
          </motion.div>

          <motion.div
            key="desktop"
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 90 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-50 hidden md:block"
          >
            <ConsultSticker source="sticky-desktop" size={118} tone="ink" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
