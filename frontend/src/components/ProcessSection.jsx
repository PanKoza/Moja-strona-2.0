import { motion } from 'framer-motion'
import { HiChat, HiPencil, HiCode as HiCodeIcon, HiLightningBolt } from 'react-icons/hi'
import AnimatedSection from './AnimatedSection'

const steps = [
  {
    icon: HiChat,
    number: '01',
    title: 'Konsultacja',
    description: 'Poznajemy Twoje potrzeby, cele biznesowe i wizję projektu. Analizujemy rynek i konkurencję w Ząbkowicach Śląskich.',
  },
  {
    icon: HiPencil,
    number: '02',
    title: 'Projektowanie',
    description: 'Tworzymy makiety i projekt graficzny. Iterujemy do momentu, aż będziesz w pełni zadowolony.',
  },
  {
    icon: HiCodeIcon,
    number: '03',
    title: 'Rozwój',
    description: 'Kodujemy z wykorzystaniem najnowszych technologii. Testujemy na każdym etapie i dbamy o wydajność.',
  },
  {
    icon: HiLightningBolt,
    number: '04',
    title: 'Wdrożenie',
    description: 'Uruchamiamy projekt, konfigurujemy SEO i monitorujemy działanie. Zapewniamy pełne wsparcie.',
  },
]

export default function ProcessSection() {
  return (
    <section id="proces" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[600px] bg-gradient-to-r from-primary-950/50 via-dark to-primary-950/50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary-400 bg-primary-900/50 rounded-full border border-primary-800 mb-4">
            Proces
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white mb-4">
            Jak <span className="text-gradient">pracujemy</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Przejrzysty proces, który gwarantuje terminowość i najwyższą jakość realizacji.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary-600 to-transparent" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <AnimatedSection
                key={step.number}
                variant={index % 2 === 0 ? 'fadeLeft' : 'fadeRight'}
                delay={index * 0.15}
              >
                <div className={`relative lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center ${
                  index !== steps.length - 1 ? 'lg:mb-16' : ''
                }`}>
                  {/* Timeline node */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      whileInView={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      viewport={{ once: true }}
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center border-4 border-dark shadow-lg shadow-primary-600/30"
                    >
                      <span className="text-sm font-bold text-white">{step.number}</span>
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <div className={`${index % 2 === 0 ? 'lg:col-start-1 lg:pr-16' : 'lg:col-start-2 lg:pl-16'}`}>
                    <div className="group glass-card p-8 rounded-2xl hover:bg-primary-900/30 transition-all duration-500">
                      <div className="flex items-start gap-4">
                        {/* Mobile number */}
                        <div className="lg:hidden w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center">
                          <span className="text-sm font-bold text-white">{step.number}</span>
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <step.icon className="w-6 h-6 text-primary-400" />
                            <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-white group-hover:text-primary-300 transition-colors">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-gray-400 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
