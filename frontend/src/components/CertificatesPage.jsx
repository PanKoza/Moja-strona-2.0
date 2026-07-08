import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const certificates = [
  {
    id: 1,
    title: 'IT Project Management (eng)',
    issuer: 'Laba International Business School',
    file: '/certificate/IT Project Management (eng) - Laba International Business School.pdf',
    color: 'from-blue-600 to-blue-900',
    icon: '📊',
    category: 'Zarządzanie projektami',
  },
  {
    id: 2,
    title: 'Kierownik projektów IT',
    issuer: 'Laba International Business School',
    file: '/certificate/Kierownik projektów IT - Laba International Business School.pdf',
    color: 'from-indigo-600 to-indigo-900',
    icon: '🗂️',
    category: 'Zarządzanie projektami',
  },
  {
    id: 3,
    title: 'ABC zarządzania projektami IT',
    issuer: 'Akademia PARP',
    file: '/certificate/ABC zarządzania projektami IT - Akademia PARP.pdf',
    color: 'from-purple-600 to-purple-900',
    icon: '📋',
    category: 'Zarządzanie projektami',
  },
  {
    id: 4,
    title: 'Zarządzanie projektami',
    issuer: 'Akademia PARP',
    file: '/certificate/Zarządzanie projektami - Akademia PARP.pdf',
    color: 'from-violet-600 to-violet-900',
    icon: '📌',
    category: 'Zarządzanie projektami',
  },
  {
    id: 5,
    title: 'Frontend Web',
    issuer: 'Coursera',
    file: '/certificate/Frontend Web - Coursea.pdf',
    color: 'from-cyan-600 to-cyan-900',
    icon: '🌐',
    category: 'Programowanie',
  },
  {
    id: 6,
    title: 'Learn HTML – Build Your First Website from Scratch',
    issuer: 'Coursera',
    file: '/certificate/Learn HTML Build Your First Website from Scratch - Coursea.pdf',
    color: 'from-teal-600 to-teal-900',
    icon: '🖥️',
    category: 'Programowanie',
  },
  {
    id: 7,
    title: 'Master CSS – Responsive Websites with Flexbox, Grid & SCSS',
    issuer: 'Coursera',
    file: '/certificate/Master CSS Responsive Websites with Flexbox, Grid & SCSS - Coursea.pdf',
    color: 'from-emerald-600 to-emerald-900',
    icon: '🎨',
    category: 'Programowanie',
  },
  {
    id: 8,
    title: 'Tailwind CSS Mastery – Modern UI Design & Responsive Layouts',
    issuer: 'Coursera',
    file: '/certificate/Tailwind CSS Mastery Modern UI Design & Responsive Layouts - Coursea.pdf',
    color: 'from-sky-600 to-sky-900',
    icon: '💨',
    category: 'Programowanie',
  },
  {
    id: 9,
    title: 'JavaScript od Podstaw do Eksperta',
    issuer: 'Udemy',
    file: '/certificate/JavaScript od Podstaw do Eksperta - Udemy.pdf',
    color: 'from-yellow-600 to-orange-900',
    icon: '⚡',
    category: 'Programowanie',
  },
  {
    id: 10,
    title: 'jQuery',
    issuer: 'Biblio i Grupa Helion',
    file: '/certificate/jQuery - Biblio i Grupa Helion.pdf',
    color: 'from-rose-600 to-rose-900',
    icon: '📚',
    category: 'Programowanie',
  },
]

const categories = ['Wszystkie', ...Array.from(new Set(certificates.map(c => c.category)))]

export default function CertificatesPage() {
  const [selected, setSelected] = useState(null)
  const [activeCategory, setActiveCategory] = useState('Wszystkie')

  const filtered = activeCategory === 'Wszystkie'
    ? certificates
    : certificates.filter(c => c.category === activeCategory)

  return (
    <>
      <Helmet>
        <title>Certyfikaty | Jakub Kuzakowski – Web Developer</title>
        <meta name="description" content="Certyfikaty i ukończone kursy Jakuba Kuzakowskiego – web developera z Łodzi. Znajdź tutaj potwierdzenie kompetencji i ciągłego rozwoju zawodowego." />
      </Helmet>

      <section className="min-h-screen pt-28 pb-20 px-4 bg-dark">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-widest mb-3">
              Moje kwalifikacje
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Certyfikaty i <span className="text-accent">kursy</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Stale poszerzam swoją wiedzę i umiejętności. Poniżej znajdziesz certyfikaty potwierdzające moje kompetencje.
            </p>
          </motion.div>

          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-accent text-dark'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filtered.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-accent/50 hover:bg-white/8 transition-all duration-300"
                  onClick={() => setSelected(cert)}
                >
                  {/* Gradient banner */}
                  <div className={`h-28 bg-gradient-to-br ${cert.color} flex items-center justify-center`}>
                    <span className="text-5xl">{cert.icon}</span>
                  </div>

                  <div className="p-5">
                    <span className="text-xs text-accent font-semibold uppercase tracking-wider">{cert.category}</span>
                    <h3 className="text-white font-semibold text-base mt-1 mb-1 leading-snug group-hover:text-accent transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{cert.issuer}</p>
                  </div>

                  <div className="px-5 pb-5">
                    <span className="text-xs text-white/40 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Kliknij aby zobaczyć
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="bg-[#0f0f0f] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div>
                  <p className="text-xs text-accent font-semibold uppercase tracking-wider">{selected.category}</p>
                  <h2 className="text-white font-semibold text-lg">{selected.title}</h2>
                  <p className="text-gray-500 text-sm">{selected.issuer}</p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={selected.file}
                    download
                    className="flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg text-sm font-medium transition-colors"
                    onClick={e => e.stopPropagation()}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Pobierz
                  </a>
                  <button
                    onClick={() => setSelected(null)}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* PDF embed */}
              <div className="flex-1 min-h-0 bg-gray-900">
                <iframe
                  src={selected.file + '#toolbar=1&view=FitH&scrollbar=1'}
                  className="w-full h-full min-h-[65vh]"
                  title={selected.title}
                  style={{ border: 'none' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
