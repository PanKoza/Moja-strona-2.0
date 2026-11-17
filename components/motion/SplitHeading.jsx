'use client'
import { useRef } from 'react'
import { gsap, SplitText, useGSAP, prefersReducedMotion } from '@/lib/gsap'

/**
 * Nagłówek odsłaniany linia po linii (GSAP SplitText z maską) przy wejściu w widok.
 * Tekst jest w HTML od początku (SEO), a dzięki [data-split] nie mruga przed animacją.
 */
export default function SplitHeading({ as: Tag = 'h2', children, className = '', delay = 0, start = 'top 85%' }) {
  const ref = useRef(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return
      if (prefersReducedMotion()) {
        el.removeAttribute('data-split')
        gsap.set(el, { opacity: 1 })
        return
      }
      const split = SplitText.create(el, {
        type: 'lines',
        mask: 'lines',
        linesClass: 'split-line',
        autoSplit: true,
        onSplit(self) {
          gsap.set(el, { opacity: 1 })
          return gsap.from(self.lines, {
            yPercent: 115,
            rotate: 2,
            duration: 1.2,
            stagger: 0.09,
            delay,
            scrollTrigger: { trigger: el, start, once: true },
          })
        },
      })
      el.removeAttribute('data-split')
      return () => split.revert()
    },
    { scope: ref },
  )

  return (
    <Tag ref={ref} data-split="" className={className}>
      {children}
    </Tag>
  )
}
