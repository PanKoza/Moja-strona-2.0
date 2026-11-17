'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLenis } from 'lenis/react'
import { track } from '@vercel/analytics'
import { ButtonInner } from '@/components/ui/Button'
import {
  OPEN_CONSULT_EVENT,
  PHONE_DISPLAY,
  PHONE_HREF,
  markLeadSent,
  wasLeadSent,
  sessionFlag,
} from '@/lib/consult'

const FORM_ENDPOINT = 'https://formspree.io/f/mqabjynw'

const TOPICS = [
  'Strona wizytówkowa (od 1500 zł)',
  'Strona firmowa',
  'Sklep internetowy',
  'Pozycjonowanie SEO',
  'Aplikacja webowa',
  'Branding / logo',
  'Opieka nad stroną',
  'Jeszcze nie wiem — doradźcie',
]

const PERKS = ['Oddzwonię lub odpiszę w ciągu 24 h', '15 minut rozmowy, konkretne rekomendacje', 'Wycena za darmo, bez zobowiązań']

const EXIT_KEY = 'exitIntentShown'
const EXIT_MIN_TIME_MS = 15000
const EASE = [0.76, 0, 0.24, 1]

const field =
  'w-full border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-lg text-ink placeholder:text-mute outline-none transition-colors focus:border-ink focus:ring-0'

export default function ConsultModal() {
  const [open, setOpen] = useState(false)
  const [variant, setVariant] = useState('default')
  const [source, setSource] = useState('')
  const [topic, setTopic] = useState(TOPICS[0])
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const firstFieldRef = useRef(null)
  const lastFocused = useRef(null)
  const pathname = usePathname()
  const lenis = useLenis()

  useEffect(() => {
    const onOpen = (e) => {
      const d = e.detail || {}
      lastFocused.current = document.activeElement
      setVariant(d.variant || 'default')
      setSource(d.source || 'strona')
      if (d.topic) setTopic(TOPICS.find((t) => t.toLowerCase().includes(d.topic.toLowerCase())) || TOPICS[0])
      setStatus((s) => (s === 'sent' ? 'sent' : 'idle'))
      setOpen(true)
      track('consult_open', { source: d.source || 'strona', variant: d.variant || 'default' })
    }
    window.addEventListener(OPEN_CONSULT_EVENT, onOpen)
    return () => window.removeEventListener(OPEN_CONSULT_EVENT, onOpen)
  }, [])

  // Exit intent (desktop): kursor ucieka nad górną krawędź, raz na sesję, po 15 s, nigdy po wysłaniu zgłoszenia
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    const start = Date.now()
    const onLeave = (e) => {
      if (e.clientY > 0 || e.relatedTarget) return
      if (Date.now() - start < EXIT_MIN_TIME_MS) return
      if (sessionFlag(EXIT_KEY) || wasLeadSent() || pathname === '/polityka-prywatnosci') return
      sessionFlag(EXIT_KEY, '1')
      window.dispatchEvent(new CustomEvent(OPEN_CONSULT_EVENT, { detail: { source: `exit-intent ${pathname}`, variant: 'exit' } }))
    }
    document.documentElement.addEventListener('mouseleave', onLeave)
    return () => document.documentElement.removeEventListener('mouseleave', onLeave)
  }, [pathname])

  // Zatrzymanie płynnego przewijania pod oknem, ESC, fokus
  useEffect(() => {
    if (!open) return
    lenis?.stop()
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    const t = setTimeout(() => firstFieldRef.current?.focus(), 400)
    return () => {
      lenis?.start()
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
      clearTimeout(t)
      lastFocused.current?.focus?.()
    }
  }, [open, lenis])

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (!data.get('phone') && !data.get('email')) {
      setError('Podaj numer telefonu lub adres e-mail, żebym mógł się odezwać.')
      return
    }
    setError('')
    setStatus('sending')
    data.append('_subject', `Konsultacja: ${data.get('temat')} — ${data.get('name')}`)
    data.append('zrodlo', `${source} (${pathname})`)
    try {
      const res = await fetch(FORM_ENDPOINT, { method: 'POST', headers: { Accept: 'application/json' }, body: data })
      if (!res.ok) throw new Error('bad status')
      setStatus('sent')
      markLeadSent()
      track('lead', { source, topic: String(data.get('temat')) })
      if (typeof window.fbq === 'function') window.fbq('track', 'Lead')
      form.reset()
    } catch {
      setStatus('error')
      setError(`Nie udało się wysłać. Zadzwoń: ${PHONE_DISPLAY} albo spróbuj ponownie.`)
    }
  }

  const isExit = variant === 'exit'

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[10000] flex items-end justify-center sm:items-center sm:p-6" initial={{ opacity: 1 }} exit={{ opacity: 1 }}>
          <motion.div
            className="absolute inset-0 bg-ink/70"
            onClick={() => setOpen(false)}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="consult-title"
            data-lenis-prevent
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={{ clipPath: 'inset(0% 0 0 0)' }}
            exit={{ clipPath: 'inset(100% 0 0 0)' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="relative grid max-h-[94vh] w-full max-w-5xl overflow-y-auto bg-paper text-ink md:grid-cols-5"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="label absolute right-5 top-5 z-10 u-link text-ink"
              aria-label="Zamknij okno"
            >
              Zamknij ✕
            </button>

            <div className="bg-ink p-7 text-paper md:col-span-2 md:p-10">
              <p className="label mb-8 flex items-center gap-2.5 text-mute-dark">
                <span className="live-dot" aria-hidden="true" />
                Przyjmuję nowe projekty
              </p>
              <h2 id="consult-title" className="display mb-5 text-[2.6rem] md:text-5xl">
                {isExit ? (
                  <>
                    Zanim wyjdziesz — <em className="serif-accent">porozmawiajmy.</em>
                  </>
                ) : (
                  <>
                    Bezpłatna <em className="serif-accent">konsultacja</em> i wycena.
                  </>
                )}
              </h2>
              <p className="mb-8 text-mute-dark">
                {isExit
                  ? 'Zostaw numer, a w 15 minut powiem Ci, jaka strona sprawdzi się w Twojej branży i ile będzie kosztować.'
                  : 'Opisz krótko, czego potrzebujesz. Odezwę się osobiście z konkretną propozycją i ceną.'}
              </p>
              <ol className="mb-10 border-t border-line-dark">
                {PERKS.map((p, i) => (
                  <li key={p} className="grid grid-cols-[2rem_1fr] border-b border-line-dark py-3 text-sm">
                    <span className="label text-mute-dark">0{i + 1}</span>
                    {p}
                  </li>
                ))}
              </ol>
              <p className="label mb-1 text-mute-dark">Wolisz zadzwonić?</p>
              <a href={PHONE_HREF} className="u-link font-display text-2xl font-semibold tracking-tight">
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="p-7 pt-16 md:col-span-3 md:p-10 md:pt-16">
              {status === 'sent' ? (
                <div className="flex h-full flex-col justify-center py-10">
                  <p className="label mb-4 text-moss">Zgłoszenie przyjęte</p>
                  <p className="display mb-6 text-5xl">
                    Dziękuję. <em className="serif-accent">Odezwę się</em> w 24 h.
                  </p>
                  <p className="mb-8 text-mute">Zwykle szybciej. Jeśli sprawa jest pilna — zadzwoń.</p>
                  <button type="button" onClick={() => setOpen(false)} className="label u-link self-start text-ink">
                    Wróć do strony →
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="c-name" className="label text-mute">
                      Imię <span className="text-signal-deep">*</span>
                    </label>
                    <input ref={firstFieldRef} id="c-name" name="name" required autoComplete="given-name" className={field} placeholder="Jak mam się do Ciebie zwracać?" />
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="c-phone" className="label text-mute">Telefon</label>
                      <input id="c-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" className={field} placeholder="600 100 200" />
                    </div>
                    <div>
                      <label htmlFor="c-email" className="label text-mute">lub e-mail</label>
                      <input id="c-email" name="email" type="email" autoComplete="email" className={field} placeholder="ty@firma.pl" />
                    </div>
                  </div>
                  <fieldset>
                    <legend className="label mb-3 text-mute">Czego potrzebujesz?</legend>
                    <div className="flex flex-wrap gap-2">
                      {TOPICS.map((t) => (
                        <label
                          key={t}
                          className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                            topic === t ? 'border-ink bg-ink text-paper' : 'border-ink/20 text-ink-3 hover:border-ink'
                          }`}
                        >
                          <input type="radio" name="temat" value={t} checked={topic === t} onChange={() => setTopic(t)} className="sr-only" />
                          {t}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <div>
                    <label htmlFor="c-msg" className="label text-mute">
                      Kilka słów o firmie (opcjonalnie)
                    </label>
                    <textarea id="c-msg" name="message" rows={2} className={`${field} resize-none`} placeholder="Np. warsztat w Kłodzku, potrzebuję strony z cennikiem" />
                  </div>

                  {error && (
                    <p role="alert" className="text-signal-deep">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn btn-signal w-full justify-between py-3 pl-7 pr-3 text-lg disabled:opacity-60"
                  >
                    <ButtonInner>{status === 'sending' ? 'Wysyłam…' : 'Chcę bezpłatną konsultację'}</ButtonInner>
                  </button>
                  <p className="text-xs text-mute">
                    Dane wykorzystam tylko do kontaktu w sprawie zapytania.{' '}
                    <Link href="/polityka-prywatnosci" className="underline" onClick={() => setOpen(false)}>
                      Polityka prywatności
                    </Link>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
