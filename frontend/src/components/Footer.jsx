import { HiHeart } from 'react-icons/hi'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const footerLinks = {
  'Usługi': [
    { name: 'Strony internetowe', href: '/uslugi/strony-internetowe' },
    { name: 'Sklepy online', href: '/uslugi/sklepy-internetowe' },
    { name: 'Pozycjonowanie SEO', href: '/uslugi/pozycjonowanie-seo' },
    { name: 'Aplikacje webowe', href: '/uslugi/aplikacje-webowe' },
  ],
  'Firma': [
    { name: 'O nas', href: '/#o-nas' },
    { name: 'Proces', href: '/#proces' },
    { name: 'Kontakt', href: '/#kontakt' },
  ],
}

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleHashClick = (e, href) => {
    e.preventDefault()
    if (href.startsWith('/#')) {
      const hash = href.slice(1)
      if (location.pathname !== '/') {
        navigate('/' + hash)
      } else {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="relative border-t border-primary-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/#hero" onClick={(e) => handleHashClick(e, '/#hero')} className="inline-flex items-center gap-3 mb-4">
              <img src="/logo_WebGoat.png" alt="WebGoat" className="h-8 w-auto" />
              <span className="text-lg font-bold font-[family-name:var(--font-heading)] text-white">
                Web<span className="text-primary-400">Goat</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-6">
              Specjalizujemy się w <strong className="text-primary-300">tworzeniu stron internetowych</strong> w Ząbkowicach Śląskich i na Dolnym Śląsku.
              Nowoczesne technologie, kreatywny design i indywidualne podejście do każdego projektu biznesowego.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholder */}
              {['facebook', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary-900/50 border border-primary-800/50 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-600 transition-all duration-300"
                  aria-label={social}
                >
                  <span className="text-xs font-bold uppercase">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold font-[family-name:var(--font-heading)] mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('/#') ? (
                      <a
                        href={link.href}
                        onClick={(e) => handleHashClick(e, link.href)}
                        className="text-sm text-gray-400 hover:text-primary-300 transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-gray-400 hover:text-primary-300 transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-900/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} WebGoat. Wszystkie prawa zastrzeżone.
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Stworzone z <HiHeart className="w-4 h-4 text-red-500" /> w Ząbkowicach Śląskich
          </p>
        </div>
      </div>
    </footer>
  )
}
