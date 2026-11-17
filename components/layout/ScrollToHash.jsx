'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollToHash() {
  const pathname = usePathname()

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else if (pathname === '/') {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return null
}