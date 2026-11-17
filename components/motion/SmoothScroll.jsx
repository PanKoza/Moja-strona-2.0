'use client'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ReactLenis, useLenis } from 'lenis/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

function Sync() {
  // Każdy krok Lenisa aktualizuje ScrollTrigger — animacje GSAP idą równo z płynnym przewijaniem
  useLenis(() => ScrollTrigger.update())
  return null
}

/**
 * Płynne przewijanie (Lenis) napędzane zegarem GSAP.
 * Przy „ogranicz ruch" zostaje natywne przewijanie.
 */
export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null)
  const pathname = usePathname()
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    setEnabled(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const update = (time) => lenisRef.current?.lenis?.raf(time * 1000)
    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)
    return () => gsap.ticker.remove(update)
  }, [enabled])

  // Po zmianie podstrony: na górę i przeliczenie pozycji wyzwalaczy
  useEffect(() => {
    if (!window.location.hash) lenisRef.current?.lenis?.scrollTo(0, { immediate: true })
    const t = setTimeout(() => ScrollTrigger.refresh(), 120)
    return () => clearTimeout(t)
  }, [pathname])

  // Obrazy i fonty zmieniają wysokość strony — odśwież po pełnym załadowaniu
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    document.fonts?.ready.then(refresh)
    return () => window.removeEventListener('load', refresh)
  }, [])

  if (!enabled) return children

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{ autoRaf: false, lerp: 0.11, wheelMultiplier: 1, anchors: { offset: -80 } }}
    >
      <Sync />
      {children}
    </ReactLenis>
  )
}
