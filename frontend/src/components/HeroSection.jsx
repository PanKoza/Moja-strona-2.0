import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import ParticleField from './ParticleField'

const phrases = [
  'Strony internetowe',
  'Sklepy online',
  'Aplikacje webowe',
  'Pozycjonowanie SEO',
]

function TypingText() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]
    let timeout

    if (!isDeleting && charIndex < currentPhrase.length) {
      timeout = setTimeout(() => setCharIndex(c => c + 1), 80)
    } else if (!isDeleting && charIndex === currentPhrase.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(c => c - 1), 40)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setPhraseIndex((p) => (p + 1) % phrases.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, phraseIndex])

  return (
    <span className="text-gradient-shimmer">
      {phrases[phraseIndex].substring(0, charIndex)}
      <span className="inline-block w-[3px] h-[1em] bg-primary-400 ml-1 align-middle" style={{ animation: 'typing-cursor 0.8s infinite' }} />
    </span>
  )
}

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <ParticleField />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-transparent to-dark z-[1]" />

      {/* Animated background blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-700/20 rounded-full blur-3xl animate-morph" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary-600/15 rounded-full blur-3xl animate-morph" style={{ animationDelay: '-4s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl animate-pulse-glow" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-gray-300">Ząbkowice Śląskie & Dolnyśląsk</span>
        </motion.div>

        {/* Animated code brackets */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, type: 'spring', stiffness: 100 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-6xl sm:text-7xl md:text-8xl font-bold text-primary-500 font-[family-name:var(--font-heading)]"
          >
            &lt;
          </motion.span>
          <motion.img
            src="/logo_WebGoat.png"
            alt="WebGoat"
            className="h-20 sm:h-24 md:h-28 w-auto drop-shadow-2xl"
            initial={{ y: -50, opacity: 0, rotate: -10 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.8, type: 'spring' }}
          />
          <motion.span
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-6xl sm:text-7xl md:text-8xl font-bold font-[family-name:var(--font-heading)]"
          >
            <span className="text-gray-400">/</span><span className="text-primary-500">&gt;</span>
          </motion.span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white leading-tight mb-6"
        >
          Profesjonalne{' '}
          <br className="hidden sm:block" />
          <TypingText />
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Tworzymy nowoczesne rozwiązania cyfrowe, które przyciągają klientów
          i rozwijają Twój biznes w <strong className="text-primary-300">Ząbkowicach Śląskich</strong> i na Dolnymśląsku.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#kontakt"
            className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-1"
          >
            <span className="relative z-10">Rozpocznij projekt</span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href="#kontakt"
            className="px-8 py-4 border border-primary-700 text-primary-300 font-semibold rounded-full hover:bg-primary-900/50 hover:border-primary-500 transition-all duration-300 hover:-translate-y-1"
          >
            Skontaktuj się
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-primary-500/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
