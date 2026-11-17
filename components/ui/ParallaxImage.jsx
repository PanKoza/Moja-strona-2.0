'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap'

/** Szeroki obraz z paralaksą i odsłanianiem (clip-path) przy wejściu w widok. */
export default function ParallaxImage({ src, alt, caption, href, className = '', aspect = 'aspect-[16/9]' }) {
  const ref = useRef(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      gsap.fromTo(
        ref.current,
        { clipPath: 'inset(12% 8% 12% 8%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'top 30%', scrub: true } },
      )
      gsap.fromTo(
        '[data-parallax]',
        { yPercent: -8 },
        { yPercent: 8, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: true } },
      )
    },
    { scope: ref },
  )

  const img = (
    <div ref={ref} className={`relative overflow-hidden rounded-sm bg-paper-3 ${aspect}`}>
      <div data-parallax className="absolute -inset-y-[10%] inset-x-0">
        <Image src={src} alt={alt} fill sizes="100vw" className="object-cover object-top" />
      </div>
    </div>
  )

  return (
    <figure className={className}>
      {href ? (
        <a href={href} target="_blank" rel="noopener" className="block">
          {img}
        </a>
      ) : (
        img
      )}
      {caption && <figcaption className="label mt-3 flex justify-between gap-4 text-mute">{caption}</figcaption>}
    </figure>
  )
}
