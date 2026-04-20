import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'

const categories = ['Wszystkie', 'Strony WWW', 'Sklepy', 'Aplikacje']

const projects = [
  {
    title: 'Sklep Meblowy Online',
    category: 'Sklepy',
    description: 'Nowoczesny e-commerce z konfiguratorem produktów i integracją płatności.',
    tech: ['React', 'Node.js', 'Stripe'],
    gradient: 'from-primary-700 to-primary-900',
  },
  {
    title: 'Portal Turystyczny',
    category: 'Strony WWW',
    description: 'Responsywna strona z interaktywną mapą atrakcji Dolnego Śląska.',
    tech: ['Next.js', 'Mapbox', 'CMS'],
    gradient: 'from-emerald-700 to-teal-900',
  },
  {
    title: 'System Rezerwacji',
    category: 'Aplikacje',
    description: 'Aplikacja webowa do zarządzania rezerwacjami i kalendarzem spotkań.',
    tech: ['React', 'Express', 'PostgreSQL'],
    gradient: 'from-violet-700 to-purple-900',
  },
  {
    title: 'Strona Kancelarii Prawnej',
    category: 'Strony WWW',
    description: 'Elegancka strona z blogiem prawnym i formularzem konsultacji online.',
    tech: ['WordPress', 'SEO', 'WCAG'],
    gradient: 'from-amber-700 to-orange-900',
  },
  {
    title: 'Sklep z Elektroniką',
    category: 'Sklepy',
    description: 'Zaawansowany sklep z porównywarkową produktów i systemem opinii.',
    tech: ['Shopify', 'Custom Theme', 'SEO'],
    gradient: 'from-rose-700 to-pink-900',
  },
  {
    title: 'Panel Zarządzania',
    category: 'Aplikacje',
    description: 'Dashboard do monitorowania KPI sprzedaży z wizualizacją danych.',
    tech: ['React', 'D3.js', 'REST API'],
    gradient: 'from-cyan-700 to-sky-900',
  },
]

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('Wszystkie')

  const filtered = activeCategory === 'Wszystkie'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary-900/15 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary-400 bg-primary-900/50 rounded-full border border-primary-800 mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white mb-4">
            Nasze <span className="text-gradient">realizacje</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Projekty, z których jesteśmy dumni. Każdy z nich to unikalne rozwiązanie dopasowane do klienta.
          </p>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection delay={0.2} className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                  : 'text-gray-400 hover:text-white bg-dark-card border border-primary-800/30 hover:border-primary-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              >
                <div className="group relative rounded-2xl overflow-hidden glass-card hover:shadow-xl hover:shadow-primary-900/30 transition-all duration-500 cursor-pointer">
                  {/* Colored header area */}
                  <div className={`relative h-48 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-end overflow-hidden`}>
                    {/* Decorative grid pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="w-full h-full" style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                      }} />
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium"
                      >
                        Zobacz szczegóły
                      </motion.div>
                    </div>

                    {/* Category badge */}
                    <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium text-white/80 bg-black/20 backdrop-blur-sm rounded-full">
                      {project.category}
                    </span>

                    <h3 className="text-xl font-bold text-white font-[family-name:var(--font-heading)] relative z-10 group-hover:translate-y-[-4px] transition-transform duration-300">
                      {project.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 text-xs font-medium text-primary-300 bg-primary-900/50 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
