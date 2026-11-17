'use client'
import CircularText from '@/components/reactbits/CircularText'
import { Arrow } from '@/components/ui/Button'
import { openConsult } from '@/lib/consult'

/**
 * Okrągła „naklejka" z obracającym się napisem (CircularText z React Bits).
 * Klik otwiera okno konsultacji.
 */
export default function ConsultSticker({
  source = 'naklejka',
  size = 150,
  text = 'BEZPŁATNA WYCENA • ODPOWIEDŹ W 24 H • ',
  tone = 'signal',
  className = '',
}) {
  const tones = {
    signal: 'bg-signal text-ink',
    ink: 'bg-ink text-paper',
    paper: 'bg-paper text-ink',
  }
  return (
    <button
      type="button"
      onClick={() => openConsult({ source })}
      aria-label="Umów bezpłatną konsultację"
      className={`group relative block shrink-0 rounded-full ${tones[tone]} ${className}`}
      style={{ width: size, height: size }}
    >
      <CircularText
        text={text}
        size={size}
        fontSize={Math.round(size / 13)}
        fontWeight={600}
        spinDuration={18}
        onHover="speedUp"
        className="font-mono"
      >
        <span className="flex h-[38%] w-[38%] items-center justify-center rounded-full bg-current transition-transform duration-500 group-hover:scale-110">
          <Arrow className={`h-1/2 w-1/2 -rotate-45 transition-transform duration-500 group-hover:rotate-0 ${tone === 'ink' ? 'text-ink' : 'text-paper'}`} />
        </span>
      </CircularText>
    </button>
  )
}
