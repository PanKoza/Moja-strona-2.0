import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const reasons = [
  { icon: '🔍', text: 'Widoczność w Google 24/7' },
  { icon: '💼', text: 'Profesjonalny wizerunek firmy' },
  { icon: '📈', text: 'Więcej klientów bez reklam' },
  { icon: '🤖', text: 'Rekomendacje przez ChatGPT i Gemini' },
]

export default function WhyWebsiteTeaser() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-900/30 via-dark to-primary-900/20" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      {/* Animated rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[300, 500, 700].map((size, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-primary-600/10"
            style={{ width: size, height: size, left: -size / 2, top: -size / 2 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20 + i * 10, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-500/30 mb-6"
          >
            <span className="text-accent-400 text-sm font-semibold">💡 Czy wiesz, że...</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white mb-5 leading-tight"
          >
            Strona internetowa to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-primary-400">
              najlepszy pracownik
            </span>{' '}
            Twojej firmy
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-10"
          >
            Pracuje 24/7, nie bierze urlopu i sprowadza klientów nawet gdy śpisz.
            Dowiedz się, ile tracisz bez profesjonalnej strony i SEO.
          </motion.p>
        </div>

        {/* Reason pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 px-5 py-3 rounded-full glass border border-white/10 text-sm text-gray-300 font-medium cursor-default"
            >
              <span className="text-lg">{r.icon}</span>
              {r.text}
            </motion.div>
          ))}
        </div>

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative max-w-2xl mx-auto"
        >
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 rounded-3xl blur-lg opacity-30 animate-pulse-glow" />
          
          <div className="relative p-8 rounded-3xl glass border border-primary-500/30 text-center">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="text-xl font-bold text-white mb-2">
              81% klientów szuka usług w internecie
            </h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Bez strony internetowej jesteś niewidoczny dla większości potencjalnych klientów.
              Sprawdź, jak dobra strona i SEO mogą zmienić Twój biznes.
            </p>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/dlaczego-strona-internetowa"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300"
              >
                <span>Dowiedz się więcej o korzyściach</span>
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  className="text-lg"
                >
                  →
                </motion.span>
              </Link>
            </motion.div>

            <p className="mt-4 text-xs text-gray-500">
              Strona wizytówkowa już od <span className="text-yellow-400 font-semibold">750 zł</span> · Realizacja 7-14 dni
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
