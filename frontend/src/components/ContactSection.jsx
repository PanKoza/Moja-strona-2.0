import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import AnimatedSection from './AnimatedSection'

const contactInfo = [
  {
    icon: HiLocationMarker,
    label: 'Adres',
    value: 'Ząbkowice Śląskie, Dolny Śląsk',
    href: null,
  },
  {
    icon: HiMail,
    label: 'Email',
    value: 'kontakt@webgoat.pl',
    href: 'mailto:kontakt@webgoat.pl',
  },
  {
    icon: HiPhone,
    label: 'Telefon',
    value: '+48 123 456 789',
    href: 'tel:+48123456789',
  },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)

    try {
      const res = await fetch('https://formspree.io/f/mqabjynw', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(e.target),
      })

      if (res.ok) {
        setSent(true)
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        alert('Wystąpił błąd. Spróbuj ponownie.')
      }
    } catch {
      alert('Nie udało się wysłać wiadomości. Sprawdź połączenie i spróbuj ponownie.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="kontakt" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/15 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary-400 bg-primary-900/50 rounded-full border border-primary-800 mb-4">
            Kontakt
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white mb-4">
            Rozpocznijmy <span className="text-gradient">współpracę</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Opisz swój projekt, a my przygotujemy bezpłatną wycenę. Odpowiadamy w ciągu 24 godzin.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <AnimatedSection variant="fadeLeft" delay={0.2} className="lg:col-span-2 space-y-8">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4 group">
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-primary-900/50 border border-primary-800/50 flex items-center justify-center group-hover:bg-primary-800/50 transition-colors">
                  <item.icon className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-white hover:text-primary-300 transition-colors font-medium">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="mt-8 rounded-2xl overflow-hidden glass-card h-48 flex items-center justify-center">
              <div className="text-center">
                <HiLocationMarker className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                <p className="text-sm text-gray-400">Ząbkowice Śląskie</p>
                <p className="text-xs text-gray-500">Dolnośląskie, Polska</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection variant="fadeRight" delay={0.3} className="lg:col-span-3">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-2xl p-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center"
                >
                  <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-heading)]">Dziękujemy!</h3>
                <p className="text-gray-400">Twoja wiadomość została wysłana. Odezwiemy się wkrótce.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 px-6 py-2.5 text-sm text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Wyślij kolejną wiadomość
                </button>
              </motion.div>
            ) : (
              <form id="contact-form" action="https://formspree.io/f/mqabjynw" method="POST" onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                      Imię i Nazwisko *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-card/80 border border-primary-800/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-card/80 border border-primary-800/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                      placeholder="jan@firma.pl"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-card/80 border border-primary-800/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                    placeholder="+48 123 456 789"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Opisz swój projekt *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-card/80 border border-primary-800/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none"
                    placeholder="Opowiedz nam o swoim projekcie..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="group relative w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {sending ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Wysyłanie...
                      </>
                    ) : (
                      'Wyślij wiadomość'
                    )}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
