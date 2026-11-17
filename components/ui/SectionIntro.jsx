import SplitHeading from '@/components/motion/SplitHeading'
import Reveal from '@/components/motion/Reveal'

/**
 * Edytorski wstęp sekcji: linia, numer „(02)", etykieta w mono, duży nagłówek, opcjonalny opis.
 * dark — wersja na ciemnym tle.
 */
export default function SectionIntro({ index, label, title, children, dark = false, as = 'h2', className = '', size = 'lg' }) {
  const sizes = {
    lg: 'text-[clamp(2.6rem,6.4vw,6.4rem)]',
    md: 'text-[clamp(2.2rem,4.8vw,4.6rem)]',
  }
  return (
    <div className={`grid gap-6 border-t pt-6 md:grid-cols-12 md:pt-8 ${dark ? 'border-line-dark' : 'border-line'} ${className}`}>
      <p className={`label flex gap-3 md:col-span-3 ${dark ? 'text-mute-dark' : 'text-mute'}`}>
        {index && <span>({index})</span>}
        <span>{label}</span>
      </p>
      <div className="md:col-span-9">
        <SplitHeading as={as} className={`display ${sizes[size]} ${dark ? 'text-paper' : 'text-ink'}`}>
          {title}
        </SplitHeading>
        {children && (
          <Reveal className={`mt-7 max-w-2xl text-lg leading-relaxed ${dark ? 'text-mute-dark' : 'text-mute'}`} y={24} delay={0.15}>
            {children}
          </Reveal>
        )}
      </div>
    </div>
  )
}
