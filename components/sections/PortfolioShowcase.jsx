'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'
import portfolioData from '@/data/portfolioData'
import SectionIntro from '@/components/ui/SectionIntro'
import Button from '@/components/ui/Button'
import { gsap, useGSAP } from '@/lib/gsap'

function ProjectCard({ p, i, large }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener"
      data-project
      className={`group block shrink-0 ${large ? 'w-[min(56vw,calc((100vh-250px)*1.6))]' : 'w-full'}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-ink-2">
        <Image
          src={p.image}
          alt={`Strona ${p.title} — realizacja WebGoat`}
          fill
          sizes={large ? '64vw' : '(min-width: 768px) 33vw, 100vw'}
          className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
        />
      </div>
      <div className="mt-4 grid grid-cols-[auto_1fr_auto] items-baseline gap-4 border-t border-line-dark pt-4">
        <span className="label text-mute-dark">{String(i + 1).padStart(2, '0')}</span>
        <span className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{p.title}</span>
        <span className="label text-right text-mute-dark">
          {p.tag}
          {p.location ? ` · ${p.location}` : ''}
        </span>
      </div>
      {large && <p className="mt-3 max-w-xl text-mute-dark">{p.description}</p>}
    </a>
  )
}

/**
 * Realizacje. pinned — na desktopie sekcja przypina się i przewija w poziomie;
 * inaczej siatka (na podstronach).
 */
export default function PortfolioShowcase({
  limit,
  items,
  pinned = false,
  index = '03',
  title,
  description = 'Każda z tych stron jest online — kliknij i sprawdź, jak działa na Twoim telefonie.',
}) {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const cursorRef = useRef(null)
  const [hover, setHover] = useState(false)
  const source = items || portfolioData
  const projects = limit ? source.slice(0, limit) : source

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
        if (pinned) {
          const track = trackRef.current
          const distance = () => track.scrollWidth - window.innerWidth
          gsap.to(track, {
            x: () => -distance(),
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: () => `+=${distance()}`,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          })
        }
        const xTo = gsap.quickTo(cursorRef.current, 'x', { duration: 0.5, ease: 'power3' })
        const yTo = gsap.quickTo(cursorRef.current, 'y', { duration: 0.5, ease: 'power3' })
        const move = (e) => {
          xTo(e.clientX)
          yTo(e.clientY)
        }
        window.addEventListener('pointermove', move)
        return () => window.removeEventListener('pointermove', move)
      })
      return () => mm.revert()
    },
    { scope: sectionRef, dependencies: [pinned] },
  )

  const heading = title || (
    <>
      Strony, które już <em className="serif-accent">pracują</em> dla klientów.
    </>
  )

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden bg-ink text-paper ${pinned ? 'lg:flex lg:h-screen lg:items-center lg:py-0' : 'lg:py-32'} py-24 sm:py-32`}
      onPointerOver={(e) => setHover(Boolean(e.target.closest?.('[data-project]')))}
      onPointerLeave={() => setHover(false)}
    >
      {/* Okrągły kursor „Zobacz" (desktop) */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-50 hidden lg:block"
        aria-hidden="true"
      >
        <span
          className={`label -ml-12 -mt-12 flex h-24 w-24 items-center justify-center rounded-full bg-signal text-ink transition-[transform,opacity] duration-300 ${
            hover ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
        >
          Zobacz ↗
        </span>
      </div>

      <div className={`container-x ${pinned ? 'lg:sr-only' : ''}`}>
        <SectionIntro index={index} label="Realizacje" title={heading} dark size="md">
          {description}
        </SectionIntro>
      </div>

      {pinned ? (
        <>
          <div ref={trackRef} className="hidden w-max items-center gap-10 pl-[max(2.5rem,calc((100vw-1440px)/2+2.5rem))] pr-[10vw] lg:flex">
            {/* Pierwszy panel toru: nagłówek sekcji */}
            <div className="w-[34vw] shrink-0 pr-10" aria-hidden="true">
              <p className="label mb-6 flex gap-3 text-mute-dark">
                <span>({index})</span>
                <span>Realizacje</span>
              </p>
              <p className="display mb-6 text-[clamp(2.8rem,4.6vw,4.8rem)]">{heading}</p>
              <p className="max-w-md text-lg text-mute-dark">{description}</p>
              <p className="label mt-10 text-mute-dark">Przewiń →</p>
            </div>
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} p={p} i={i} large />
            ))}
            <div className="flex w-[30vw] shrink-0 flex-col justify-center">
              <p className="display mb-8 text-6xl">
                Twoja firma <em className="serif-accent">może być następna.</em>
              </p>
              <Button href="/portfolio" variant="paper" size="lg">
                Wszystkie realizacje
              </Button>
            </div>
          </div>
          <div className="container-x mt-14 grid gap-12 lg:hidden">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} p={p} i={i} />
            ))}
            <Button href="/portfolio" variant="paper" size="lg" className="justify-self-start">
              Wszystkie realizacje
            </Button>
          </div>
        </>
      ) : (
        <div className="container-x mt-14">
          <div className="grid gap-x-6 gap-y-12 md:grid-cols-3">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} p={p} i={i} />
            ))}
          </div>
          <Button href="/portfolio" variant="paper" size="lg" className="mt-12">
            Wszystkie realizacje
          </Button>
        </div>
      )}
    </section>
  )
}
