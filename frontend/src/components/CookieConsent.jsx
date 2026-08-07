import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'cookieConsent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      // krótkie opóźnienie żeby nie migało przy hydratacji
      const t = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-4 left-4 right-4 z-[9999] md:left-auto md:right-6 md:max-w-md"
          role="dialog"
          aria-label="Zgoda na pliki cookie"
        >
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-5 shadow-2xl shadow-black/60">
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Używamy plików cookie, aby poprawić jakość działania strony i analizować ruch.
              Klikając „Akceptuj", wyrażasz zgodę na ich użycie.{' '}
              <Link to="/polityka-prywatnosci" className="text-primary-400 hover:text-primary-300 underline">
                Polityka prywatności
              </Link>
            </p>
            <div className="flex gap-3">
              <button
                onClick={accept}
                className="flex-1 px-4 py-2.5 bg-primary-600 hover:bg-primary-500 text-white text-sm font-semibold rounded-xl transition-colors"
              >
                Akceptuj
              </button>
              <button
                onClick={reject}
                className="flex-1 px-4 py-2.5 bg-white/5 hover:bg-white/10 text-gray-300 text-sm font-semibold rounded-xl transition-colors border border-white/10"
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
