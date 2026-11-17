'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { track } from '@vercel/analytics'
import { markLeadSent } from '@/lib/consult'
import SplitHeading from '@/components/motion/SplitHeading'
import { ButtonInner } from '@/components/ui/Button'
import { steps, results, getResult, stepLabels } from '@/data/quizData'

const LETTERS = ['A', 'B', 'C', 'D', 'E']
const EASE = [0.16, 1, 0.3, 1]

const field =
  'w-full border-0 border-b border-line-dark bg-transparent px-0 py-3 text-lg text-paper placeholder:text-mute-dark outline-none transition-colors focus:border-paper focus:ring-0'

/** Konfigurator: 5 pytań → rekomendacja → krótki formularz (lead z kontekstem odpowiedzi). */
export default function WebsiteQuiz() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState([])
  const [showResult, setShowResult] = useState(false)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const resultKey = showResult ? getResult(answers) : null
  const result = resultKey ? results[resultKey] : null
  const step = steps[current]

  // Wybór od razu przechodzi dalej — mniej kliknięć, więcej ukończonych quizów
  function choose(idx) {
    const next = [...answers.slice(0, current), idx]
    setAnswers(next)
    setTimeout(() => {
      if (current + 1 < steps.length) setCurrent(current + 1)
      else {
        setShowResult(true)
        track('quiz_complete', { result: getResult(next) })
      }
    }, 220)
  }

  function back() {
    if (showResult) setShowResult(false)
    else if (current > 0) setCurrent(current - 1)
  }

  function reset() {
    setCurrent(0)
    setAnswers([])
    setShowResult(false)
    setSent(false)
    setError('')
  }

  async function submit(e) {
    e.preventDefault()
    setSending(true)
    setError('')
    const form = new FormData(e.currentTarget)
    const body = new FormData()
    body.append('name', form.get('name'))
    body.append('email', form.get('email'))
    body.append('phone', form.get('phone') || '')
    body.append('_subject', result.subject)
    body.append(
      'message',
      steps.map((s, i) => `Krok ${i + 1}: ${s.options[answers[i]].label}`).join('\n') + `\n\nRekomendacja: ${result.title}`,
    )
    try {
      const res = await fetch('https://formspree.io/f/xkjwbgze', { method: 'POST', headers: { Accept: 'application/json' }, body })
      if (!res.ok) throw new Error('status')
      setSent(true)
      markLeadSent()
      track('lead', { source: 'quiz', result: resultKey })
      if (typeof window.fbq === 'function') window.fbq('track', 'Lead')
    } catch {
      setError('Nie udało się wysłać. Spróbuj ponownie albo zadzwoń: +48 883 821 301.')
    } finally {
      setSending(false)
    }
  }

  const progress = showResult ? steps.length : current

  return (
    <section id="quiz" className="bg-ink py-24 text-paper sm:py-32">
      <div className="container-x grid gap-12 border-t border-line-dark pt-6 md:pt-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="label mb-8 flex gap-3 text-mute-dark">
            <span>(07)</span>
            <span>Konfigurator</span>
          </p>
          <SplitHeading className="display text-[clamp(2.6rem,5vw,5rem)]">
            Jakiej strony <em className="serif-accent">potrzebujesz?</em>
          </SplitHeading>
          <p className="mt-6 max-w-sm text-lg text-mute-dark">
            Pięć pytań, minuta czasu. Dostaniesz rekomendację rozwiązania — bezpłatnie i bez zobowiązań.
          </p>

          <div className="mt-10" aria-hidden="true">
            <div className="mb-3 flex gap-1.5">
              {steps.map((_, i) => (
                <span key={i} className="h-1 flex-1 overflow-hidden bg-line-dark">
                  <span
                    className="block h-full origin-left bg-signal transition-transform duration-700"
                    style={{ transform: `scaleX(${i < progress ? 1 : 0})` }}
                  />
                </span>
              ))}
            </div>
            <p className="label text-mute-dark">
              {showResult ? 'Gotowe' : `Krok ${current + 1} / ${steps.length} — ${stepLabels[current]}`}
            </p>
          </div>
        </div>

        <div className="min-h-[520px] lg:col-span-7 lg:col-start-6">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <h3 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">{step.question}</h3>
                {step.note && <p className="mt-3 text-sm text-mute-dark">{step.note}</p>}
                <ul className="mt-8 border-t border-line-dark">
                  {step.options.map((opt, idx) => {
                    const picked = answers[current] === idx
                    return (
                      <li key={opt.label} className="border-b border-line-dark">
                        <button
                          type="button"
                          onClick={() => choose(idx)}
                          className={`group relative grid w-full grid-cols-[2.5rem_1fr] items-baseline gap-3 overflow-hidden py-5 text-left transition-colors ${
                            picked ? 'text-ink' : ''
                          }`}
                        >
                          <span
                            className={`absolute inset-0 origin-left bg-signal transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                              picked ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-[0.012]'
                            }`}
                            aria-hidden="true"
                          />
                          <span className={`label relative pl-3 ${picked ? 'text-ink' : 'text-mute-dark'}`}>{LETTERS[idx]}</span>
                          <span className="relative pr-4 text-lg transition-transform duration-500 group-hover:translate-x-2">{opt.label}</span>
                        </button>
                      </li>
                    )
                  })}
                </ul>
                {current > 0 && (
                  <button type="button" onClick={back} className="label u-link mt-8 text-mute-dark hover:text-paper">
                    ← Poprzednie pytanie
                  </button>
                )}
              </motion.div>
            ) : sent ? (
              <motion.div key="sent" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}>
                <p className="label mb-5 text-signal">Zgłoszenie wysłane</p>
                <p className="display text-5xl md:text-6xl">
                  Dziękuję. <em className="serif-accent">Odezwę się</em> w 24 h z propozycją.
                </p>
                <button type="button" onClick={reset} className="label u-link mt-10 text-mute-dark hover:text-paper">
                  Rozwiąż quiz jeszcze raz
                </button>
              </motion.div>
            ) : (
              <motion.div key="result" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}>
                <p className="label mb-4 text-signal">Rekomendacja</p>
                <h3 className="display text-[clamp(2.2rem,4vw,3.6rem)]">{result.title}</h3>
                <p className="mt-6 text-lg leading-relaxed text-mute-dark">{result.description}</p>

                <form onSubmit={submit} className="mt-10 grid gap-6 sm:grid-cols-2">
                  <label className="sr-only" htmlFor="q-name">Imię</label>
                  <input id="q-name" name="name" required autoComplete="name" placeholder="Imię *" className={field} />
                  <label className="sr-only" htmlFor="q-phone">Telefon</label>
                  <input id="q-phone" name="phone" type="tel" autoComplete="tel" placeholder="Telefon" className={field} />
                  <label className="sr-only" htmlFor="q-email">E-mail</label>
                  <input id="q-email" name="email" type="email" required autoComplete="email" placeholder="E-mail *" className={`${field} sm:col-span-2`} />
                  {error && (
                    <p role="alert" className="text-signal sm:col-span-2">
                      {error}
                    </p>
                  )}
                  <div className="flex flex-col items-start gap-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                    <button type="submit" disabled={sending} className="btn btn-paper py-3 pl-7 pr-3 text-lg disabled:opacity-60">
                      <ButtonInner>{sending ? 'Wysyłam…' : result.cta}</ButtonInner>
                    </button>
                    <button type="button" onClick={back} className="label u-link text-mute-dark hover:text-paper">
                      ← Zmień odpowiedź
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
