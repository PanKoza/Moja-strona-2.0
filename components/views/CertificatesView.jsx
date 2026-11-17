'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLenis } from 'lenis/react'
import Reveal from '@/components/motion/Reveal'
import certificates from '@/data/certificatesData'
import { Arrow } from '@/components/ui/Button'

const categories = ['Wszystkie', ...Array.from(new Set(certificates.map((c) => c.category)))]

export default function CertificatesPage() {
  const [selected, setSelected] = useState(null)
  const [activeCategory, setActiveCategory] = useState('Wszystkie')
  const lenis = useLenis()
  const filtered = activeCategory === 'Wszystkie' ? certificates : certificates.filter((c) => c.category === activeCategory)

  // Podgląd PDF blokuje przewijanie strony pod spodem
  useEffect(() => {
    if (selected) lenis?.stop()
    else lenis?.start()
    const onKey = (e) => e.key === 'Escape' && setSelected(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected, lenis])

  return (
    <>
      <section className="pt-[104px]">
        <div className="container-x">
          <p className="label fade-in border-b border-line pb-4 text-mute">Kwalifikacje — {String(certificates.length).padStart(2, '0')} certyfikatów</p>
          <h1 className="display mt-10 text-[clamp(3.2rem,11vw,11rem)]">
            <span className="line-mask">
              <span>
                Certyfikaty <em className="serif-accent">i kursy.</em>
              </span>
            </span>
          </h1>
          <div className="fade-in mt-10 grid gap-8 border-t border-line pt-8 lg:grid-cols-12" style={{ animationDelay: '0.3s' }}>
            <p className="text-lg leading-relaxed text-ink-3 lg:col-span-6">
              Stale poszerzam wiedzę z web developmentu i zarządzania projektami IT. Poniżej znajdziesz certyfikaty
              potwierdzające moje kompetencje — każdy możesz otworzyć i pobrać.
            </p>
            <div role="tablist" aria-label="Filtruj certyfikaty" className="flex flex-wrap gap-x-6 gap-y-2 lg:col-span-5 lg:col-start-8 lg:justify-end">
              {categories.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-display text-xl font-semibold tracking-tight transition-colors ${
                    activeCategory === cat ? 'text-ink underline decoration-2 underline-offset-8' : 'text-mute hover:text-ink'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <Reveal as="ul" stagger={0.05} y={24} className="border-t border-ink" key={activeCategory}>
            {filtered.map((cert, i) => (
              <li key={cert.id} className="border-b border-line">
                <button
                  type="button"
                  onClick={() => setSelected(cert)}
                  className="group relative grid w-full grid-cols-[2.5rem_1fr_auto] items-center gap-4 overflow-hidden py-6 text-left md:grid-cols-12 md:py-7"
                >
                  <span
                    className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-[650ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100"
                    aria-hidden="true"
                  />
                  <span className="label relative text-mute transition-colors group-hover:text-mute-dark md:col-span-1 md:pl-4">{String(i + 1).padStart(2, '0')}</span>
                  <span className="relative font-display text-xl font-semibold tracking-tight transition-[color,transform] duration-500 group-hover:translate-x-2 group-hover:text-paper md:col-span-6 md:text-3xl">
                    {cert.title}
                  </span>
                  <span className="label relative hidden text-mute transition-colors group-hover:text-mute-dark md:col-span-4 md:block">
                    {cert.issuer} · {cert.category}
                  </span>
                  <span className="relative flex justify-end md:col-span-1 md:pr-4">
                    <Arrow className="h-5 w-5 transition-all duration-500 group-hover:-rotate-45 group-hover:text-signal" />
                  </span>
                </button>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-ink/75 p-3 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
          >
            <motion.div
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              exit={{ clipPath: 'inset(100% 0 0 0)' }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="flex h-[90vh] w-full max-w-5xl flex-col bg-paper"
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent
            >
              <div className="flex items-start justify-between gap-4 border-b border-ink px-6 py-4">
                <div>
                  <p className="label text-mute">{selected.category} · {selected.issuer}</p>
                  <h2 className="font-display text-xl font-semibold tracking-tight">{selected.title}</h2>
                </div>
                <div className="flex items-center gap-5">
                  <a href={encodeURI(selected.file)} download className="label u-link text-ink">
                    Pobierz PDF
                  </a>
                  <button type="button" onClick={() => setSelected(null)} className="label u-link text-ink" aria-label="Zamknij podgląd certyfikatu">
                    Zamknij ✕
                  </button>
                </div>
              </div>
              <iframe
                src={encodeURI(selected.file) + '#toolbar=1&view=FitH'}
                className="min-h-0 w-full flex-1"
                title={selected.title}
                style={{ border: 'none' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
