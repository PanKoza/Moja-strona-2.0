'use client'
import { useRef } from 'react'
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap'

/**
 * Odsłania blok (albo jego bezpośrednie dzieci, gdy stagger) przy wejściu w widok.
 * y — przesunięcie startowe, stagger — odstęp między dziećmi.
 */
export default function Reveal({
  as: Tag = 'div',
  children,
  className = '',
  y = 48,
  stagger = 0,
  delay = 0,
  start = 'top 88%',
  ...props
}) {
  const ref = useRef(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return
      const targets = stagger ? Array.from(el.children) : [el]
      if (prefersReducedMotion()) {
        el.removeAttribute('data-reveal')
        return
      }
      if (stagger) {
        gsap.set(el, { opacity: 1 })
        gsap.set(targets, { opacity: 0, y })
      } else {
        gsap.set(el, { opacity: 0, y })
      }
      el.removeAttribute('data-reveal')
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay,
        stagger,
        scrollTrigger: { trigger: el, start, once: true },
      })
    },
    { scope: ref },
  )

  return (
    <Tag ref={ref} data-reveal="" className={className} {...props}>
      {children}
    </Tag>
  )
}
