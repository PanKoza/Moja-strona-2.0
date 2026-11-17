'use client'
import { MotionConfig } from 'framer-motion'

/** Animacje framer-motion respektują systemowe „ogranicz ruch". */
export default function Providers({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
