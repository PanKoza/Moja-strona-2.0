'use client'
import { useState } from 'react'
import Link from 'next/link'
import { track } from '@vercel/analytics'
import SplitHeading from '@/components/motion/SplitHeading'
import Reveal from '@/components/motion/Reveal'
import { ButtonInner } from '@/components/ui/Button'
import { markLeadSent, PHONE_DISPLAY, PHONE_HREF } from '@/lib/consult'
import { EMAIL } from '@/lib/seo'

const NEXT_STEPS = [
  { title: 'Odpowiadam w 24 h', text: 'Zwykle szybciej — oddzwonię lub odpiszę osobiście.' },
  { title: 'Krótka rozmowa', text: '15 minut, żeby zrozumieć Twoją firmę i cele.' },
  { title: 'Konkretna wycena', text: 'Stała cena i termin. Decyzja należy do Ciebie.' },
]

const field =
  'peer w-full border-0 border-b border-ink/30 bg-transparent px-0 pb-3 pt-7 text-lg text-ink placeholder-transparent outline-none transition-colors focus:border-ink focus:ring-0'
const floating =
  'label pointer-events-none absolute left-0 top-7 text-mute transition-all duration-300 peer-focus:top-0 peer-focus:text-[0.65rem] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[0.65rem]'

function Field({ id, label, required, textarea, ...props }) {
  const Tag = textarea ? 'textarea' : 'input'
  return (
    <div className="relative">
      <Tag id={id} name={id} required={required} placeholder=" " className={`${field} ${textarea ? 'resize-none' : ''}`} {...props} />
      <label htmlFor={id} className={floating}>
        {label}
        {required && <span className="text-signal-deep"> *</span>}
      </label>
    </div>
  )
}

export default function ContactSection() {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')
    const form = e.currentTarget
    const data = new FormData(form)
    data.append('_subject', `Zapytanie ze strony — ${data.get('name')}`)
    data.append('zrodlo', 'formularz-kontakt')
    try {
      const res = await fetch('https://formspree.io/f/mqabjynw', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (!res.ok) throw new Error('status')
      setSent(true)
      markLeadSent()
      track('lead', { source: 'formularz-kontakt' })
      if (typeof window.fbq === 'function') window.fbq('track', 'Lead')
      form.reset()
    } catch {
      setError(`Nie udało się wysłać wiadomości. Zadzwoń: ${PHONE_DISPLAY} albo spróbuj ponownie.`)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="kontakt" className="py-24 sm:py-32">
      <div className="container-x">
        <p className="label mb-8 flex gap-3 border-t border-line pt-6 text-mute md:pt-8">
          <span>(08)</span>
          <span>Kontakt</span>
        </p>
        <SplitHeading className="display whitespace-nowrap text-[clamp(2.6rem,10.5vw,11rem)]">
          Porozmawiajmy<em className="serif-accent text-signal">.</em>
        </SplitHeading>

        <div className="mt-16 grid gap-16 lg:grid-cols-12">
          <Reveal className="space-y-12 lg:col-span-4" y={30}>
            <div>
              <p className="label mb-5 text-mute">Co się stanie po wysłaniu?</p>
              <ol className="border-t border-line">
                {NEXT_STEPS.map((s, i) => (
                  <li key={s.title} className="grid grid-cols-[2.5rem_1fr] border-b border-line py-4">
                    <span className="label pt-1 text-mute">0{i + 1}</span>
                    <span>
                      <span className="block font-display text-lg font-semibold">{s.title}</span>
                      <span className="text-sm text-mute">{s.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <dl className="space-y-6">
              <div>
                <dt className="label mb-1 text-mute">Telefon — najszybciej</dt>
                <dd>
                  <a href={PHONE_HREF} className="u-link font-display text-3xl font-semibold tracking-tight">
                    {PHONE_DISPLAY}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label mb-1 text-mute">E-mail</dt>
                <dd>
                  <a href={`mailto:${EMAIL}`} className="u-link break-all text-lg">
                    {EMAIL}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label mb-1 text-mute">Siedziba</dt>
                <dd>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Z%C4%85bkowice+%C5%9Al%C4%85skie+57-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="u-link text-lg"
                  >
                    57-200 Ząbkowice Śląskie ↗
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal className="lg:col-span-7 lg:col-start-6" y={40} delay={0.1}>
            {sent ? (
              <div className="border-t border-ink pt-10">
                <p className="label mb-4 text-moss">Wiadomość wysłana</p>
                <p className="display mb-6 text-5xl">
                  Dziękuję. <em className="serif-accent">Odezwę się</em> w 24 h.
                </p>
                <button type="button" onClick={() => setSent(false)} className="label u-link text-ink">
                  Wyślij kolejną wiadomość →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-8 sm:grid-cols-2">
                <Field id="name" label="Imię i nazwisko" required autoComplete="name" />
                <Field id="phone" label="Telefon" type="tel" autoComplete="tel" />
                <div className="sm:col-span-2">
                  <Field id="email" label="E-mail" type="email" required autoComplete="email" />
                </div>
                <div className="sm:col-span-2">
                  <Field id="message" label="Czym zajmuje się firma i czego potrzebujesz?" required textarea rows={4} />
                </div>

                {error && (
                  <p role="alert" className="text-signal-deep sm:col-span-2">
                    {error}
                  </p>
                )}

                <div className="flex flex-col items-start gap-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-sm text-mute">
                    Wysyłając formularz, przekazujesz dane w celu przygotowania odpowiedzi i wyceny.{' '}
                    <Link href="/polityka-prywatnosci" className="underline underline-offset-2 hover:text-ink">
                      Polityka prywatności
                    </Link>
                    .
                  </p>
                  <button type="submit" disabled={sending} className="btn btn-signal py-3 pl-7 pr-3 text-lg disabled:opacity-60">
                    <ButtonInner>{sending ? 'Wysyłam…' : 'Wyślij zapytanie'}</ButtonInner>
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
