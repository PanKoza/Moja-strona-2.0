import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'
import servicesData from '../data/servicesData'

function TiltCard({ children, className = '' }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8])

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const xVal = (e.clientX - rect.left) / rect.width - 0.5
    const yVal = (e.clientY - rect.top) / rect.height - 0.5
    x.set(xVal)
    y.set(yVal)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function ServicesSection() {
  return (
    <section id="uslugi" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-900/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary-400 bg-primary-900/50 rounded-full border border-primary-800 mb-4">
            Nasze usługi
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white mb-4">
            Kompleksowe rozwiązania <span className="text-gradient">cyfrowe</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Od projektu graficznego po wdrożenie i pozycjonowanie — zapewniamy pełen zakres usług webowych.
          </p>
        </AnimatedSection>

        {/* Service cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {servicesData.map((service) => (
            <StaggerItem key={service.title}>
              <TiltCard className="h-full perspective-[1000px]">
                <Link to={`/uslugi/${service.slug}`} className="group relative h-full p-8 rounded-2xl glass-card hover:bg-primary-900/40 transition-all duration-500 block">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
                  />

                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-white mb-3 group-hover:text-primary-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {service.shortDesc}
                  </p>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center text-primary-400 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-2">
                    <span className="text-sm font-medium">Dowiedz się więcej</span>
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
