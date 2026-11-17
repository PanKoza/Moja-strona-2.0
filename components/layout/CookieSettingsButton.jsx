'use client'
import { openConsentSettings } from '@/lib/consent'

export default function CookieSettingsButton({ className = '', label = 'Zmień ustawienia cookies' }) {
  return (
    <button type="button" onClick={openConsentSettings} className={className}>
      {label}
    </button>
  )
}
