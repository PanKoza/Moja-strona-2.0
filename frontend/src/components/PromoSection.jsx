import { motion, useAnimationControls } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const floatingParticles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 6 + 3,
  duration: Math.random() * 4 + 3,
  delay: Math.random() * 2,
}))

export default function PromoSection() {
  const [pulse, setPulse] = useState(false)
  const controls = useAnimationControls()

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(p => !p)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    controls.start({
      scale: [1, 1.04, 1],
      transition: { duration: 1.6, ease: 'easeInOut', repeat: Infinity, repeatDelay: 2 },
    })
  }, [controls])

  return (
    <section id="promocja" className="relative py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-dark to-accent-900/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-800/20 via-transparent to-transparent" />

      {/* Floating particles */}
      {floatingParticles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary-400/20 blur-sm"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Animated border glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Limited offer badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/40 mb-6"
        >
          <motion.span
            className="w-2 h-2 bg-red-400 rounded-full"
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <span className="text-sm font-semibold text-red-300 uppercase tracking-wider">Oferta Specjalna dla Nowych Klientów</span>
        </motion.div>

        {/* Main promo heading */}
        <motion.animate animate={controls}>
          <motion.div
            animate={controls}
            className="mb-6"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mb-4 leading-tight"
            >
              Strona wizytówkowa
              <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
                  za jedyne 750 zł!
                </span>
                {/* Underline animation */}
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </motion.h2>
          </motion.div>
        </motion.animate>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          Profesjonalna strona internetowa, która{' '}
          <strong className="text-primary-300">przyciąga klientów i buduje wiarygodność</strong> Twojej firmy.
          Szybka realizacja, responsywny design, podstawowe SEO — wszystko w jednej cenie.
        </motion.p>

        {/* Features list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-10"
        >
          {[
            '✓ Nowoczesny design',
            '✓ Wersja mobilna (RWD)',
            '✓ Podstawowe SEO',
            '✓ Formularz kontaktowy',
            '✓ Szybka realizacja',
            '✓ Hosting 1 rok gratis',
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#kontakt"
            whileHover={{ scale: 1.08, boxShadow: '0 0 40px rgba(251,146,60,0.6)' }}
            whileTap={{ scale: 0.97 }}
            className="relative px-12 py-5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-extrabold text-xl rounded-full overflow-hidden shadow-2xl shadow-orange-500/40 ring-2 ring-orange-400/40"
          >
            <span className="relative z-10">🎯 Skorzystaj z promocji!</span>
            <motion.span
              className="absolute inset-0 bg-white/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
          </motion.a>

          <Link
            to="/dlaczego-strona-internetowa"
            className="group flex items-center gap-2 px-8 py-4 border border-white/20 text-gray-400 font-medium text-sm rounded-full hover:bg-white/5 hover:border-white/30 hover:text-gray-300 transition-all duration-300"
          >
            Dlaczego warto mieć stronę?
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>

        {/* Trust anchor */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-4 text-sm text-gray-400 font-medium"
        >
          Zero zobowiązań. Odpowiadam w ciągu 24h.
        </motion.p>

        {/* Trust signals */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-2 text-sm text-gray-500"
        >
          Bez ukrytych kosztów · Stała cena · Gwarancja satysfakcji
        </motion.p>
      </div>
    </section>
  )
}
