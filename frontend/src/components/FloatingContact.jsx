import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiPhone, HiChat, HiX } from 'react-icons/hi'

export default function FloatingContact() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-2 items-end"
          >
            {/* Call */}
            <a
              href="tel:+48883821301"
              className="flex items-center gap-3 px-4 py-3 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-full shadow-xl shadow-green-500/40 transition-all duration-200 hover:scale-105 text-sm whitespace-nowrap"
            >
              <HiPhone className="w-4 h-4" />
              Zadzwoń teraz
            </a>
            {/* SMS */}
            <a
              href="sms:+48883821301?body=Cześć, chciałbym zapytać o wycenę strony internetowej."
              className="flex items-center gap-3 px-4 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-full shadow-xl shadow-blue-500/40 transition-all duration-200 hover:scale-105 text-sm whitespace-nowrap"
            >
              <HiChat className="w-4 h-4" />
              Wyślij SMS
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        whileTap={{ scale: 0.92 }}
        className="relative w-14 h-14 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white shadow-2xl shadow-orange-500/50 flex items-center justify-center"
        aria-label="Kontakt telefoniczny"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <HiX className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.span key="phone" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <HiPhone className="w-6 h-6" />
            </motion.span>
          )}
        </AnimatePresence>
        {/* Pulse ring */}
        {!open && (
          <span className="absolute inset-0 rounded-full animate-ping bg-orange-400/40" />
        )}
      </motion.button>
    </div>
  )
}
