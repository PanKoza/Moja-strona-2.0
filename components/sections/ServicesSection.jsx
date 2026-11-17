'use client'
import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import servicesData from '@/data/servicesData'
import { projectForService } from '@/data/portfolioData'
import SectionIntro from '@/components/ui/SectionIntro'
import ConsultButton from '@/components/ui/ConsultButton'
import Reveal from '@/components/motion/Reveal'
import { Arrow } from '@/components/ui/Button'
import { gsap, useGSAP } from '@/lib/gsap'

const imageFor = (slug) => projectForService(slug).image

export default function ServicesSection() {
  const listRef = useRef(null)
  const previewRef = useRef(null)
  const [active, setActive] = useState(-1)
  const quick = useRef({})

  useGSAP(
    () => {
      if (!window.matchMedia('(pointer: fine)').matches) return
      quick.current.x = gsap.quickTo(previewRef.current, 'x', { duration: 0.6, ease: 'power3' })
      quick.current.y = gsap.quickTo(previewRef.current, 'y', { duration: 0.6, ease: 'power3' })
    },
    { scope: listRef },
  )

  const onMove = (e) => {
    const r = listRef.current.getBoundingClientRect()
    quick.current.x?.(e.clientX - r.left)
    quick.current.y?.(e.clientY - r.top)
  }

  return (
    <section id="uslugi" className="py-24 sm:py-32">
      <div className="container-x">
        <SectionIntro
          index="01"
          label="Usługi"
          title={
            <>
              Wszystko, czego Twoja firma potrzebuje <em className="serif-accent">w sieci.</em>
            </>
          }
        >
          Tworzenie stron internetowych, sklepy e-commerce, SEO i aplikacje webowe dla firm z Ząbkowic Śląskich, Kłodzka,
          Dzierżoniowa i całego Dolnego Śląska — od jednej osoby, w jednym miejscu.
        </SectionIntro>

        <div ref={listRef} onMouseMove={onMove} onMouseLeave={() => setActive(-1)} className="relative mt-16 md:mt-24">
          {/* Podgląd realizacji podążający za kursorem (desktop) */}
          <div
            ref={previewRef}
            className="pointer-events-none absolute left-0 top-0 z-20 hidden lg:block"
            aria-hidden="true"
          >
            <div
              className={`relative -ml-[170px] -mt-[110px] h-[220px] w-[340px] overflow-hidden rounded-sm shadow-2xl transition-[opacity,transform] duration-500 ${
                active >= 0 ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
              }`}
            >
              {servicesData.map((s, i) => (
                <Image
                  key={s.slug}
                  src={imageFor(s.slug)}
                  alt=""
                  fill
                  sizes="340px"
                  className={`object-cover object-top transition-opacity duration-300 ${active === i ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>
          </div>

          <Reveal as="ul" stagger={0.07} y={30} className="border-t border-ink">
            {servicesData.map((service, i) => (
              <li key={service.slug} className="border-b border-ink" onMouseEnter={() => setActive(i)}>
                <Link
                  href={`/uslugi/${service.slug}`}
                  className="group relative grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 overflow-hidden py-7 md:grid-cols-12 md:gap-6 md:py-9"
                >
                  {/* Wypełnienie tuszem od dołu */}
                  <span
                    className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-[650ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100"
                    aria-hidden="true"
                  />
                  <span className="label relative text-mute transition-colors duration-500 group-hover:text-mute-dark md:col-span-1 md:pl-4">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="relative md:col-span-6">
                    <span className="display block text-[clamp(2rem,4.2vw,4.25rem)] transition-[color,transform] duration-500 group-hover:translate-x-3 group-hover:text-paper">
                      {service.title}
                    </span>
                  </span>
                  <span className="relative hidden text-mute transition-colors duration-500 group-hover:text-mute-dark md:col-span-4 md:block">
                    {service.shortDesc}
                  </span>
                  <span className="relative flex items-center justify-end gap-3 md:col-span-1 md:pr-4">
                    {i === 0 && (
                      <span className="label hidden whitespace-nowrap rounded-full bg-signal px-2.5 py-1 text-ink xl:inline">od 1500 zł</span>
                    )}
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-current transition-all duration-500 group-hover:rotate-[-45deg] group-hover:border-signal group-hover:bg-signal group-hover:text-ink">
                      <Arrow className="h-4 w-4" />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </Reveal>
        </div>

        <Reveal className="mt-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center" y={24}>
          <p className="max-w-xl text-lg text-ink-3">
            Nie wiesz, czego potrzebujesz? Opowiedz mi o firmie — doradzę rozwiązanie dopasowane do budżetu.
          </p>
          <ConsultButton variant="ink" source="uslugi-niezdecydowany" magnet={false}>
            Doradź mi
          </ConsultButton>
        </Reveal>
      </div>
    </section>
  )
}
