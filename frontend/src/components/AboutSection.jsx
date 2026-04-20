import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const stats = [
  { value: 150, suffix: '+', label: 'Zrealizowanych projektów' },
  { value: 98, suffix: '%', label: 'Zadowolonych klientów' },
  { value: 8, suffix: '+', label: 'Lat doświadczenia' },
  { value: 24, suffix: '/7', label: 'Wsparcie techniczne' },
]

function StatCounter({ value, suffix, label, delay }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-heading)] text-white mb-2">
        {count}
        <span className="text-primary-400">{suffix}</span>
      </div>
      <p className="text-gray-400 text-sm">{label}</p>
    </motion.div>
  )
}

export default function AboutSection() {
  return (
    <section id="o-nas" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary-800/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary-400 bg-primary-900/50 rounded-full border border-primary-800 mb-4">
                O nas
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
                Twój lokalny partner{' '}
                <span className="text-gradient">technologiczny</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                <strong className="text-white">WebGoat</strong> to zespół pasjonatów technologii z{' '}
                <strong className="text-primary-300">Ząbkowic Śląskich</strong>. Specjalizujemy się
                w tworzeniu nowoczesnych stron internetowych, sklepów online i aplikacji webowych,
                które realnie przekładają się na rozwój biznesu naszych klientów.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Łączymy <strong className="text-white">kreatywny design</strong> z{' '}
                <strong className="text-white">najnowszymi technologiami</strong>, aby dostarczać
                rozwiązania, które nie tylko świetnie wyglądają, ale też doskonale działają
                i generują wymierne rezultaty.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'Node.js', 'Tailwind', 'WordPress', 'Shopify'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-medium text-primary-300 bg-primary-900/40 border border-primary-800/50 rounded-lg hover:border-primary-600 hover:bg-primary-900/60 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Visual */}
          <AnimatedSection variant="fadeRight" delay={0.2}>
            <div className="relative">
              {/* Animated morphing shape background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-700/30 to-primary-900/30 animate-morph blur-xl scale-110" />

              {/* Code editor mockup */}
              <div className="relative glass-card rounded-2xl overflow-hidden">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-dark-light/80 border-b border-primary-800/30">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 text-xs text-gray-500 font-mono">webgoat-project.jsx</span>
                </div>

                {/* Code content */}
                <div className="p-6 font-mono text-sm leading-relaxed">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <p><span className="text-purple-400">const</span> <span className="text-blue-300">webgoat</span> <span className="text-white">=</span> {'{'}</p>
                    <p className="ml-4"><span className="text-green-300">lokalizacja</span>: <span className="text-amber-300">"Ząbkowice Śląskie"</span>,</p>
                    <p className="ml-4"><span className="text-green-300">specjalizacja</span>: <span className="text-amber-300">"Web Development"</span>,</p>
                    <p className="ml-4"><span className="text-green-300">pasja</span>: <span className="text-amber-300">"Tworzenie WOW"</span>,</p>
                    <p className="ml-4"><span className="text-green-300">cel</span>: <span className="text-amber-300">"Twój sukces online"</span></p>
                    <p>{'}'}</p>
                    <p className="mt-2"><span className="text-purple-400">export default</span> <span className="text-blue-300">webgoat</span></p>
                  </motion.div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 px-4 py-2 glass rounded-xl text-sm font-medium text-green-400 border border-green-500/30"
              >
                ✓ 100% Responsywne
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 glass rounded-xl text-sm font-medium text-primary-400 border border-primary-500/30"
              >
                ⚡ Błyskawiczne ładowanie
              </motion.div>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 glass-card rounded-2xl">
          {stats.map((stat, i) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
