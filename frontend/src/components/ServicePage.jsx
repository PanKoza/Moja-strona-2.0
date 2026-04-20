import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiArrowLeft, HiCheck, HiChevronDown } from 'react-icons/hi'
import servicesData from '../data/servicesData'
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'

function FaqItem({ q, a, index }) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <details className="group glass-card rounded-xl overflow-hidden">
        <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
          <h3 className="text-base font-semibold text-white pr-4">{q}</h3>
          <HiChevronDown className="w-5 h-5 text-primary-400 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
        </summary>
        <div className="px-6 pb-6 text-gray-400 leading-relaxed">
          {a}
        </div>
      </details>
    </AnimatedSection>
  )
}

export default function ServicePage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const service = servicesData.find((s) => s.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-bold text-white font-[family-name:var(--font-heading)]">
          Nie znaleziono usługi
        </h1>
        <Link
          to="/"
          className="px-6 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-500 transition-colors"
        >
          Wróć na stronę główną
        </Link>
      </div>
    )
  }

  // Update meta tags
  useEffect(() => {
    document.title = service.metaTitle
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', service.metaDescription)

    return () => {
      document.title = 'WebGoat - Profesjonalne Strony Internetowe | Ząbkowice Śląskie'
    }
  }, [service])

  const Icon = service.icon

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero section */}
      <section className={`relative pt-32 pb-20 overflow-hidden bg-gradient-to-b ${service.heroGradient}`}>
        {/* Dotted pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }} />

        {/* Glowing orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 bg-gradient-to-br"
          style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8 group"
            >
              <HiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Powrót
            </button>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg`}
            >
              <Icon className="w-10 h-10 text-white" />
            </motion.div>

            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white mb-4 leading-tight"
              >
                {service.headline}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-300 max-w-2xl leading-relaxed"
              >
                {service.intro}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link
                  to="/#kontakt"
                  className="group relative px-8 py-3.5 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5"
                >
                  <span className="relative z-10">Zapytaj o wycenę</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
                <Link
                  to="/#kontakt"
                  className="px-8 py-3.5 border border-primary-700 text-primary-300 font-semibold rounded-full hover:bg-primary-900/50 hover:border-primary-500 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Skontaktuj się
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)] text-white mb-3">
              Co obejmuje usługa
            </h2>
            <p className="text-gray-400 max-w-xl">
              Szczegółowy zakres tego, co dostarczamy w ramach usługi <strong className="text-primary-300">{service.title.toLowerCase()}</strong>.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {service.features.map((feature, i) => (
              <StaggerItem key={feature.title}>
                <div className="group h-full p-6 glass-card rounded-2xl hover:bg-primary-900/30 transition-all duration-400">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mt-0.5`}>
                      <HiCheck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-300 transition-colors font-[family-name:var(--font-heading)]">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/30 via-transparent to-primary-950/30" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)] text-white mb-3">
              Etapy realizacji
            </h2>
            <p className="text-gray-400 max-w-xl">
              Przejrzysty proces, dzięki któremu wiesz, co się dzieje na każdym etapie projektu.
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary-600 via-primary-700 to-transparent hidden sm:block" />

            <div className="space-y-6">
              {service.process.map((step, i) => (
                <AnimatedSection key={step} variant="fadeLeft" delay={i * 0.1}>
                  <div className="flex items-center gap-6 group">
                    <motion.div
                      whileInView={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-sm font-bold text-white shadow-lg z-10`}
                    >
                      {i + 1}
                    </motion.div>
                    <div className="flex-1 p-5 glass-card rounded-xl group-hover:bg-primary-900/30 transition-colors">
                      <p className="text-white font-medium">{step}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)] text-white mb-3">
              Narzędzia i technologie
            </h2>
          </AnimatedSection>

          <StaggerContainer className="flex flex-wrap gap-3" staggerDelay={0.05}>
            {service.technologies.map((tech) => (
              <StaggerItem key={tech} variant="scale">
                <span className="inline-block px-5 py-2.5 text-sm font-medium text-primary-300 bg-primary-900/40 border border-primary-800/50 rounded-xl hover:border-primary-600 hover:bg-primary-900/60 transition-all duration-300 cursor-default">
                  {tech}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/20 to-transparent" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)] text-white mb-3">
              Najczęściej zadawane pytania
            </h2>
            <p className="text-gray-400">
              Odpowiedzi na pytania, które najczęściej słyszymy od naszych klientów.
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {service.faq.map((item, i) => (
              <FaqItem key={item.q} q={item.q} a={item.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="scale">
            <div className={`relative p-12 rounded-3xl overflow-hidden bg-gradient-to-br ${service.heroGradient}`}>
              {/* Pattern */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }} />

              <div className="relative text-center">
                <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)] text-white mb-4">
                  Gotowy na {service.title.toLowerCase()}?
                </h2>
                <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                  Skontaktuj się z nami po bezpłatną wycenę. Odpowiemy w ciągu 24 godzin.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/#kontakt"
                    className="group relative px-8 py-4 bg-white text-dark font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Darmowa wycena
                  </Link>
                  <Link
                    to="/"
                    className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Wszystkie usługi
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
