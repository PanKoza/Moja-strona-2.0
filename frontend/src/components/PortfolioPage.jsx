import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const projects = [
  {
    title: 'Pogrzeby Requiem',
    url: 'https://www.pogrzebyrequiem.pl/',
    category: 'Strony WWW',
    description: 'Profesjonalna strona dla zakładu pogrzebowego. Stonowana, godna oprawa graficzna z pełnymi informacjami o usługach, cenniku i możliwością kontaktu w każdej chwili.',
    tech: ['React', 'Tailwind CSS', 'SEO'],
    gradient: 'from-slate-700 to-slate-900',
    icon: '🕊️',
    tag: 'Strona wizytówkowa',
  },
  {
    title: 'KD Active',
    url: 'https://www.kdactive.pl/',
    category: 'Strony WWW',
    description: 'Nowoczesna strona dla firmy aktywności fizycznej i eventów sportowych. Dynamiczny design podkreślający energię marki, galeria zdjęć i formularz zapisów.',
    tech: ['React', 'Animacje', 'RWD'],
    gradient: 'from-orange-700 to-red-900',
    icon: '💪',
    tag: 'Strona firmowa',
  },
  {
    title: 'Kura Detailing',
    url: 'https://www.kuradetailing.pl/',
    category: 'Strony WWW',
    description: 'Elegancka strona dla studia detailingu samochodowego. Prezentacja usług, cennik, galeria realizacji i możliwość szybkiego umówienia się na wizytę.',
    tech: ['React', 'Tailwind', 'SEO lokalny'],
    gradient: 'from-zinc-700 to-neutral-900',
    icon: '🚗',
    tag: 'Strona wizytówkowa',
  },
  {
    title: 'Wytrych',
    url: 'https://wytrych.pl/',
    category: 'Strony WWW',
    description: 'Strona dla ślusarza / serwisu awaryjnego. Przejrzysta prezentacja usług, numer telefonu zawsze widoczny i szybki czas ładowania kluczowy przy nagłych sytuacjach.',
    tech: ['React', 'Mobile-first', 'SEO'],
    gradient: 'from-yellow-700 to-amber-900',
    icon: '🔑',
    tag: 'Strona wizytówkowa',
  },
  {
    title: 'Meczomat',
    url: 'https://www.meczomat.pl/',
    category: 'Aplikacje',
    description: 'Portal sportowy z wynikami i statystykami meczów. Automatyczne aktualizacje danych, przejrzysty interfejs dla fanów sportu, responsywny na każdym urządzeniu.',
    tech: ['React', 'API', 'Real-time'],
    gradient: 'from-green-700 to-emerald-900',
    icon: '⚽',
    tag: 'Portal/Aplikacja',
  },
  {
    title: 'AS Orzeł',
    url: 'https://as-orzel.vercel.app/',
    category: 'Strony WWW',
    description: 'Strona klubu sportowego AS Orzeł. Aktualności, wyniki meczów, skład drużyny i galeria — wszystko w jednym miejscu dla kibiców i zawodników.',
    tech: ['React', 'Vercel', 'CMS'],
    gradient: 'from-blue-700 to-indigo-900',
    icon: '🦅',
    tag: 'Strona klubu',
  },
  {
    title: 'Pizza Friends',
    url: 'https://pizzafriends.vercel.app/',
    category: 'Sklepy',
    description: 'Apetyczna strona pizzerii z menu online, galerią dań i możliwością zamówienia. Szybka, estetyczna i prosta obsługa — dokładnie tego potrzebuje restauracja.',
    tech: ['React', 'Menu online', 'Vercel'],
    gradient: 'from-red-700 to-rose-900',
    icon: '🍕',
    tag: 'Strona restauracji',
  },
  {
    title: 'Goat Casino',
    url: 'https://goatcasino.onrender.com/',
    category: 'Aplikacje',
    description: 'Webowa aplikacja rozrywkowa z mechanikami kasynowymi. Projekt demonstracyjny pokazujący zaawansowane możliwości front-endu — animacje, logika gry, autoryzacja użytkowników.',
    tech: ['React', 'Node.js', 'Animacje'],
    gradient: 'from-violet-700 to-purple-900',
    icon: '🎰',
    tag: 'Aplikacja webowa',
  },
]

const categories = ['Wszystkie', 'Strony WWW', 'Sklepy', 'Aplikacje']

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('Wszystkie')
  const [hoveredIndex, setHoveredIndex] = useState(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const filtered =
    activeCategory === 'Wszystkie'
      ? projects
      : projects.filter(p => p.category === activeCategory)

  return (
    <>
      <Helmet>
        <title>Portfolio — Realizacje | WebGoat</title>
        <meta
          name="description"
          content="Zobacz nasze realizacje — strony internetowe, aplikacje webowe i sklepy online stworzone przez WebGoat. Projekty dla firm z całego Dolnego Śląska i Polski."
        />
        <meta
          name="keywords"
          content="portfolio stron internetowych, realizacje WebGoat, przykłady stron www, tworzenie stron Ząbkowice Śląskie, projekty web"
        />
        <link rel="canonical" href="https://webgoat.pl/portfolio" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Portfolio realizacji WebGoat",
          "description": "Strony internetowe, aplikacje webowe i sklepy online stworzone przez WebGoat",
          "url": "https://webgoat.pl/portfolio",
          "publisher": { "@type": "Organization", "name": "WebGoat", "url": "https://webgoat.pl" },
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-dark text-gray-200">
        {/* Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 via-dark to-dark" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary-700/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-600/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/30 mb-6"
            >
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              <span className="text-sm text-primary-300 font-medium">{projects.length} zrealizowanych projektów</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mb-5 leading-tight"
            >
              Nasze{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                realizacje
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-400 max-w-2xl mx-auto mb-8"
            >
              Każdy projekt to unikalne rozwiązanie szyte na miarę klienta. Zobacz, co możemy stworzyć dla Twojej firmy.
            </motion.p>

            {/* Category filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                      : 'text-gray-400 hover:text-white glass border border-white/10 hover:border-primary-600'
                  }`}
                >
                  {cat}
                  {cat !== 'Wszystkie' && (
                    <span className="ml-2 text-xs opacity-60">
                      ({projects.filter(p => p.category === cat).length})
                    </span>
                  )}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  variants={fadeUp}
                  onHoverStart={() => setHoveredIndex(i)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="group"
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full rounded-2xl overflow-hidden glass border border-white/10 hover:border-primary-600/50 transition-all duration-400 hover:shadow-2xl hover:shadow-primary-900/40 hover:-translate-y-2"
                  >
                    {/* Colored header */}
                    <div className={`relative h-44 bg-gradient-to-br ${project.gradient} overflow-hidden flex items-center justify-center`}>
                      {/* Grid pattern */}
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
                          backgroundSize: '24px 24px',
                        }}
                      />

                      {/* Icon */}
                      <motion.span
                        className="text-6xl relative z-10 drop-shadow-xl"
                        animate={hoveredIndex === i ? { scale: 1.2, rotate: [0, -5, 5, 0] } : { scale: 1, rotate: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        {project.icon}
                      </motion.span>

                      {/* External link indicator */}
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                          Odwiedź stronę ↗
                        </span>
                      </div>

                      {/* Tag */}
                      <div className="absolute bottom-3 left-3">
                        <span className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white/80 text-xs font-medium">
                          {project.tag}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h2 className="text-lg font-bold text-white group-hover:text-primary-300 transition-colors duration-300">
                          {project.title}
                        </h2>
                        <span className="text-xs text-gray-500 border border-white/10 px-2 py-0.5 rounded-full whitespace-nowrap ml-2">
                          {project.category}
                        </span>
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-lg bg-primary-900/40 border border-primary-800/40 text-primary-300 text-xs font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative p-10 rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/60 to-dark border border-primary-700/40 rounded-3xl" />
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary-600/20 rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="text-4xl mb-4">🚀</div>
                <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-white mb-4">
                  Chcesz dołączyć do grona naszych klientów?
                </h2>
                <p className="text-gray-400 mb-8 text-lg">
                  Strona wizytówkowa już od{' '}
                  <strong className="text-yellow-400">750 zł</strong>. Realizacja 7-14 dni.
                  Skontaktuj się — omówimy Twój projekt!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="/#kontakt"
                    className="px-10 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold text-lg rounded-full hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-1 transition-all duration-300"
                  >
                    Zamów swoją stronę
                  </a>
                  <Link
                    to="/"
                    className="px-8 py-4 border border-primary-700 text-primary-300 font-semibold rounded-full hover:bg-primary-900/50 transition-all duration-300"
                  >
                    ← Wróć na stronę główną
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
