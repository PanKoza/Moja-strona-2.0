'use client'
import Magnet from '@/components/reactbits/Magnet'
import { ButtonInner, SIZES, SIZES_NO_ICON } from '@/components/ui/Button'
import { openConsult } from '@/lib/consult'

// Zgodność ze starymi nazwami wariantów
const VARIANT_MAP = { primary: 'signal', secondary: 'ghost', light: 'paper' }

/**
 * Przycisk otwierający okno bezpłatnej konsultacji.
 * Bez JS działa jak link do formularza na stronie głównej.
 * Wariant „signal" przyciąga się do kursora (Magnet z React Bits).
 */
export default function ConsultButton({
  children = 'Bezpłatna konsultacja',
  source = 'przycisk',
  topic = '',
  variant = 'signal',
  size = 'md',
  icon = true,
  magnet,
  className = '',
}) {
  const v = VARIANT_MAP[variant] || variant
  const useMagnet = magnet ?? v === 'signal'
  const full = className.includes('w-full')

  const button = (
    <a
      href="/#kontakt"
      onClick={(e) => {
        e.preventDefault()
        openConsult({ source, topic })
      }}
      className={`btn btn-${v} ${icon ? SIZES[size] : SIZES_NO_ICON[size]} ${className}`}
    >
      <ButtonInner icon={icon}>{children}</ButtonInner>
    </a>
  )

  if (!useMagnet) return button

  return (
    <Magnet
      padding={70}
      magnetStrength={4}
      maxOffset={14}
      wrapperClassName={full ? 'w-full' : ''}
      innerClassName={full ? 'w-full' : ''}
      style={full ? { display: 'block' } : undefined}
    >
      {button}
    </Magnet>
  )
}
