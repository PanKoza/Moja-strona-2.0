'use client'
import { motion, useScroll } from 'framer-motion'

/** Cienka linia postępu czytania u góry ekranu. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: scrollYProgress }}
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-signal"
    />
  )
}
