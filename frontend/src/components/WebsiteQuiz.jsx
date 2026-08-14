import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const steps = [
  {
    question: 'Jaki jest główny cel Twojej nowej strony internetowej?',
    icon: '🎯',
    options: [
      { label: 'Sprzedaż produktów fizycznych lub cyfrowych online.', icon: '🛒' },
      { label: 'Zaprezentowanie firmy, usług i budowa wizerunku.', icon: '🏢' },
      { label: 'Szybkie zebranie kontaktów lub sprzedaż jednego, konkretnego produktu.', icon: '⚡' },
      { label: 'Dzielenie się wiedzą, publikacja artykułów i aktualności.', icon: '📝' },
      { label: 'Zbudowanie nietypowego narzędzia lub platformy dla użytkowników.', icon: '⚙️' },
    ],
  },
  {
    question: 'Ile podstron, zakładek lub produktów planujesz umieścić na stronie?',
    icon: '📐',
    options: [
      { label: 'Całość ma się znaleźć na jednej, długiej stronie (tzw. One-Pager).', icon: '📄' },
      { label: 'Niewiele – od 2 do 10 podstawowych zakładek lub produktów.', icon: '📑' },
      { label: 'Średnio – od 11 do 50 zakładek lub produktów.', icon: '📚' },
      { label: 'Bardzo dużo – rozbudowana struktura (powyżej 50).', icon: '🗂️' },
      { label: 'Jeszcze nie wiem, chętnie zdam się na Wasze doradztwo.', icon: '🤝' },
    ],
  },
  {
    question: 'Z jakiej funkcji Twoi klienci będą korzystać najczęściej?',
    icon: '🔧',
    options: [
      { label: 'Wypełnianie formularza kontaktowego / rezerwacja usług.', icon: '📬' },
      { label: 'Przeglądanie katalogu, dodawanie do koszyka i płatności online.', icon: '💳' },
      { label: 'Oglądanie galerii zdjęć i portfolio Twoich dotychczasowych realizacji.', icon: '🖼️' },
      { label: 'Czytanie i wyszukiwanie treści / przeglądanie bazy wiedzy.', icon: '🔍' },
      { label: 'Zaawansowane funkcje wymagające logowania lub integracji z innymi systemami.', icon: '🔐' },
    ],
  },
  {
    question: 'Czy posiadasz już materiały potrzebne do stworzenia strony?',
    note: 'To pytanie pomaga ocenić, czy potrzebujesz usług dodatkowych, jak copywriting czy branding.',
    icon: '📦',
    options: [
      { label: 'Mam wszystko – profesjonalne logo, gotowe teksty i zdjęcia.', icon: '✅' },
      { label: 'Mam logo i identyfikację wizualną, ale potrzebuję pomocy z tekstami.', icon: '🎨' },
      { label: 'Mam świetne teksty, ale brakuje mi nowoczesnego designu i zdjęć.', icon: '✍️' },
      { label: 'Mam starą stronę internetową, którą trzeba całkowicie przebudować.', icon: '🔄' },
      { label: 'Nie mam nic – zaczynamy od zera, potrzebuję kompleksowej obsługi.', icon: '🚀' },
    ],
  },
  {
    question: 'Kiedy nowa strona powinna oficjalnie wystartować?',
    note: 'Pozwala to zidentyfikować "gorące" leady.',
    icon: '⏱️',
    options: [
      { label: 'Pilnie! Chcę ruszyć w ciągu najbliższych 2 tygodni.', icon: '🔥' },
      { label: 'Zależy mi na sprawnym wdrożeniu (1–2 miesiące).', icon: '⚡' },
      { label: 'Mamy czas na spokojną pracę (3–6 miesięcy).', icon: '🌿' },
      { label: 'Czas nie gra roli, priorytetem jest najwyższa jakość i dopracowanie detali.', icon: '💎' },
      { label: 'Dopiero badam rynek i wyceny, nie mam sztywnego terminu.', icon: '🔭' },
    ],
  },
]

const results = {
  A: {
    title: 'Zoptymalizowany Sklep Internetowy (E-commerce)',
    emoji: '🛒',
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
    glowColor: 'shadow-violet-500/20',
    borderColor: 'border-violet-500/40',
    badgeColor: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
    description:
      'Z Twoich odpowiedzi wynika, że potrzebujesz platformy sprzedażowej, która nie tylko świetnie wygląda, ale przede wszystkim bezpiecznie i szybko sprzedaje. Stworzymy dla Ciebie sklep internetowy wyposażony w zintegrowane płatności, wygodny koszyk i intuicyjny panel zarządzania produktami. Niezależnie od tego, czy masz kilka produktów, czy tysiące – zaprojektujemy proces zakupowy tak, aby maksymalizował Twoje zyski.',
    cta: 'Porozmawiajmy o moim sklepie',
    subject: 'Zapytanie – Sklep Internetowy (E-commerce)',
  },
  B: {
    title: 'Profesjonalna Strona Firmowa',
    emoji: '🏢',
    gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
    glowColor: 'shadow-blue-500/20',
    borderColor: 'border-blue-500/40',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    description:
      'Potrzebujesz wirtualnej wizytówki, która natychmiast zbuduje zaufanie i pokaże Twój profesjonalizm. Rekomendujemy stworzenie nowoczesnej strony firmowej. Wyeksponujemy Twoje usługi, zaprezentujemy portfolio i zadbamy o to, aby formularz kontaktowy przyciągał jak najwięcej zapytań od nowych klientów. Całość zoptymalizujemy pod kątem szybkiego ładowania i widoczności w Google.',
    cta: 'Odbierz darmową koncepcję strony',
    subject: 'Zapytanie – Strona Firmowa',
  },
  C: {
    title: 'Konwertujący Landing Page',
    emoji: '⚡',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    glowColor: 'shadow-amber-500/20',
    borderColor: 'border-amber-500/40',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    description:
      'Twój cel jest jasny: maksymalna konwersja. Nie potrzebujesz rozbudowanego serwisu, ale jednej, perfekcyjnie zaprojektowanej strony (One-Pager / Landing Page), która poprowadzi użytkownika prosto do celu – zapisu na newsletter, pobrania e-booka lub zakupu flagowego produktu. Skupimy się na perswazyjnym układzie, silnych wezwaniach do działania (CTA) i błyskawicznym ładowaniu.',
    cta: 'Zróbmy Landing Page, który sprzedaje',
    subject: 'Zapytanie – Landing Page',
  },
  D: {
    title: 'Nowoczesny Blog lub Portal Wizerunkowy',
    emoji: '📝',
    gradient: 'from-green-500/20 via-emerald-500/10 to-transparent',
    glowColor: 'shadow-green-500/20',
    borderColor: 'border-green-500/40',
    badgeColor: 'bg-green-500/20 text-green-300 border-green-500/30',
    description:
      'Twój biznes opiera się na wiedzy i treściach. Zaprojektujemy dla Ciebie portal lub bloga, który będzie nie tylko przyjazny dla oka, ale przede wszystkim wygodny dla czytelników i zoptymalizowany pod wyszukiwarki (SEO). Wdrożymy czytelny podział na kategorie, szybką wyszukiwarkę artykułów oraz prosty system zarządzania treścią (CMS), aby publikacja nowych wpisów była czystą przyjemnością.',
    cta: 'Porozmawiajmy o moim portalu',
    subject: 'Zapytanie – Blog / Portal',
  },
  E: {
    title: 'Dedykowana Aplikacja Webowa',
    emoji: '⚙️',
    gradient: 'from-rose-500/20 via-pink-500/10 to-transparent',
    glowColor: 'shadow-rose-500/20',
    borderColor: 'border-rose-500/40',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    description:
      'Standardowe rozwiązania to dla Ciebie za mało. Twój projekt wymaga indywidualnego podejścia, specyficznych funkcjonalności (np. logowania, zaawansowanych paneli użytkownika) lub integracji z zewnętrznymi bazami danych i oprogramowaniem. Rekomendujemy stworzenie systemu "szytego na miarę", który w 100% odpowie na unikalne procesy w Twojej firmie.',
    cta: 'Umów darmową konsultację techniczną',
    subject: 'Zapytanie – Aplikacja Webowa / Projekt Dedykowany',
  },
}

function getResult(answers) {
  const step1 = answers[0]
  const step2 = answers[1]
  const step3 = answers[2]
  if (step1 === 0 || step3 === 1) return 'A'
  if (step1 === 4 || step3 === 4) return 'E'
  if (step1 === 3 || step3 === 3) return 'D'
  if (step1 === 2 || step2 === 0) return 'C'
  return 'B'
}

const stepLabels = ['Cel', 'Skala', 'Funkcje', 'Materiały', 'Czas']

function GlowOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 25, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-10 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"
      />
    </div>
  )
}

export default function WebsiteQuiz() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState([])
  const [selected, setSelected] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [direction, setDirection] = useState(1)

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const resultKey = showResult ? getResult(answers) : null
  const result = resultKey ? results[resultKey] : null

  function handleSelect(idx) {
    setSelected(idx)
  }

  function handleNext() {
    if (selected === null) return
    setDirection(1)
    const newAnswers = [...answers, selected]
    setAnswers(newAnswers)
    setSelected(null)
    if (current + 1 < steps.length) {
      setCurrent(current + 1)
    } else {
      setShowResult(true)
    }
  }

  function handleReset() {
    setDirection(-1)
    setCurrent(0)
    setAnswers([])
    setSelected(null)
    setShowResult(false)
    setShowForm(false)
    setSent(false)
    setFormData({ name: '', email: '', phone: '' })
  }

  function buildMessage(ans, res) {
    const lines = steps.map((s, i) => `Krok ${i + 1}: ${s.options[ans[i]].label}`)
    return lines.join('\n') + `\n\nRekomendacja: ${results[res].title}`
  }

  async function handleFormSubmit(e) {
    e.preventDefault()
    setSending(true)
    const message = buildMessage(answers, resultKey)
    const body = new FormData()
    body.append('name', formData.name)
    body.append('email', formData.email)
    body.append('phone', formData.phone)
    body.append('_subject', result.subject)
    body.append('message', message)
    try {
      const res = await fetch('https://formspree.io/f/xkjwbgze', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body,
      })
      if (res.ok) setSent(true)
      else alert('Wystąpił błąd. Spróbuj ponownie.')
    } catch {
      alert('Nie udało się wysłać. Sprawdź połączenie i spróbuj ponownie.')
    } finally {
      setSending(false)
    }
  }

  const slideVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60, scale: 0.97 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60, scale: 0.97 }),
  }

  return (
    <section ref={sectionRef} className="relative py-24 px-4 bg-dark overflow-hidden">
      <GlowOrbs />

      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-5"
          >
            <motion.span
              animate={{ rotate: [0, 15, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              ✨
            </motion.span>
            Dopasujemy rozwiązanie do Twoich potrzeb
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
          >
            Jakiej strony{' '}
            <span className="relative inline-block">
              <span className="text-primary">potrzebujesz?</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary/50 origin-left rounded-full block"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-gray-400 text-base max-w-xl mx-auto"
          >
            Odpowiedz na kilka pytań, a my polecimy Ci optymalne rozwiązanie – bezpłatnie i bez zobowiązań.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            {!showResult ? (
              <motion.div
                key={`step-${current}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative bg-white/[0.04] border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                <div className="flex items-center gap-2 mb-8">
                  {steps.map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        width: i === current ? 28 : 8,
                      }}
                      transition={{ duration: 0.3 }}
                      className="h-2 rounded-full"
                      style={{
                        backgroundColor:
                          i < current ? '#6366f1' : i === current ? '#6366f1' : 'rgba(255,255,255,0.1)',
                        width: i === current ? 28 : 8,
                      }}
                    />
                  ))}
                  <span className="ml-auto text-xs text-gray-500 font-medium">{current + 1} / {steps.length}</span>
                </div>

                <div className="flex items-start gap-4 mb-7">
                  <motion.div
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
                    className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-2xl"
                  >
                    {steps[current].icon}
                  </motion.div>
                  <div>
                    <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-1">
                      Krok {current + 1} — {stepLabels[current]}
                    </p>
                    <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                      {steps[current].question}
                    </h3>
                    {steps[current].note && (
                      <p className="text-gray-500 text-xs mt-1 italic">{steps[current].note}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2.5">
                  {steps[current].options.map((opt, idx) => (
                    <motion.button
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.06, duration: 0.3 }}
                      whileHover={{ scale: 1.01, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSelect(idx)}
                      className={`w-full text-left px-4 py-3.5 rounded-2xl border transition-all duration-200 flex items-center gap-3 group ${
                        selected === idx
                          ? 'border-primary bg-primary/12 text-white shadow-lg shadow-primary/15'
                          : 'border-white/8 bg-white/[0.03] text-gray-400 hover:border-primary/40 hover:bg-white/[0.07] hover:text-white'
                      }`}
                    >
                      <span className="text-lg shrink-0 transition-transform duration-200 group-hover:scale-110">
                        {opt.icon}
                      </span>
                      <span className="text-sm md:text-base leading-snug flex-1">{opt.label}</span>
                      <motion.div
                        animate={selected === idx ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                        className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0"
                      >
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                    </motion.button>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <div className="hidden sm:flex gap-3">
                    {steps.map((s, i) => (
                      <span
                        key={i}
                        className={`text-xs transition-colors duration-200 ${
                          i < current ? 'text-primary/70' : i === current ? 'text-primary font-semibold' : 'text-gray-700'
                        }`}
                      >
                        {s.icon}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    onClick={handleNext}
                    disabled={selected === null}
                    whileHover={selected !== null ? { scale: 1.04 } : {}}
                    whileTap={selected !== null ? { scale: 0.97 } : {}}
                    className={`relative ml-auto overflow-hidden px-8 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                      selected !== null
                        ? 'bg-primary text-white shadow-lg shadow-primary/40'
                        : 'bg-white/8 text-gray-600 cursor-not-allowed'
                    }`}
                  >
                    {selected !== null && (
                      <motion.span
                        className="absolute inset-0 bg-white/10"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1.5 }}
                      />
                    )}
                    <span>{current + 1 < steps.length ? 'Następny krok' : 'Zobacz wynik'}</span>
                    <motion.span
                      animate={selected !== null ? { x: [0, 4, 0] } : {}}
                      transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.5 }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              </motion.div>

            ) : !showForm ? (
              <motion.div
                key="result"
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`relative rounded-3xl p-6 md:p-10 shadow-2xl border overflow-hidden ${result.borderColor} ${result.glowColor}`}
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${result.gradient} pointer-events-none`} />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, y: 0 }}
                    animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], y: -60 - i * 10 }}
                    transition={{ delay: i * 0.12, duration: 1.2 }}
                    className="absolute text-xl pointer-events-none"
                    style={{ left: `${15 + i * 14}%`, top: '20%' }}
                  >
                    ✨
                  </motion.div>
                ))}

                <div className="relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold mb-6 ${result.badgeColor}`}
                  >
                    <span>Twoja rekomendacja</span>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 250, damping: 18, delay: 0.15 }}
                    className="text-6xl mb-4 block"
                  >
                    {result.emoji}
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                    className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight"
                  >
                    Idealne rozwiązanie dla Ciebie:
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-2xl md:text-3xl font-bold text-primary mb-5"
                  >
                    {result.title}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-gray-300 leading-relaxed mb-8 text-base"
                  >
                    {result.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-2 mb-8"
                  >
                    {answers.map((ans, i) => (
                      <span key={i} className="inline-flex items-center gap-1 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">
                        <span>{steps[i].icon}</span>
                        <span className="max-w-[120px] truncate">{steps[i].options[ans].label}</span>
                      </span>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 }}
                    className="flex flex-col sm:flex-row gap-3"
                  >
                    <motion.button
                      onClick={() => setShowForm(true)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="relative flex-1 overflow-hidden px-6 py-4 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/30 text-center group"
                    >
                      <motion.span
                        className="absolute inset-0 bg-white/10"
                        initial={{ x: '-100%' }}
                        animate={{ x: '200%' }}
                        transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2 }}
                      />
                      <span className="relative flex items-center justify-center gap-2">
                        {result.cta}
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </span>
                    </motion.button>

                    <motion.button
                      onClick={handleReset}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-6 py-4 border border-white/15 text-gray-400 font-semibold rounded-2xl hover:border-white/30 hover:text-white transition-all text-sm backdrop-blur-sm"
                    >
                      ↺ Zacznij od nowa
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>

            ) : (
              <motion.div
                key="form"
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative bg-white/[0.04] border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="sent"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      className="text-center py-10"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 250, damping: 15, delay: 0.1 }}
                        className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/15 border border-primary/30 text-4xl mb-6"
                      >
                        🎉
                      </motion.div>
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="text-2xl font-bold text-white mb-2"
                      >
                        Wiadomość wysłana!
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35 }}
                        className="text-gray-400 mb-8"
                      >
                        Dziękujemy! Odezwiemy się do Ciebie najszybciej jak to możliwe.
                      </motion.p>
                      <motion.button
                        onClick={handleReset}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45 }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="px-6 py-3 border border-white/20 text-gray-300 rounded-2xl hover:border-primary/50 hover:text-white transition-all text-sm"
                      >
                        ↩ Wróć do początku
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.div key="formfields" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <motion.button
                        onClick={() => setShowForm(false)}
                        whileHover={{ x: -3 }}
                        className="text-gray-500 hover:text-gray-300 text-sm mb-6 flex items-center gap-1.5 transition-colors"
                      >
                        ← Wróć do wyników
                      </motion.button>

                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-xl">
                          {result?.emoji}
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                            Porozmawiajmy o Twoim projekcie
                          </h3>
                          <p className="text-gray-500 text-xs">Skontaktujemy się z Tobą bezpłatnie</p>
                        </div>
                      </div>

                      <form onSubmit={handleFormSubmit} className="space-y-4">
                        {[
                          { key: 'name', label: 'Imię i Nazwisko', type: 'text', placeholder: 'Jan Kowalski', required: true },
                          { key: 'email', label: 'Adres e-mail', type: 'email', placeholder: 'jan@firma.pl', required: true },
                          { key: 'phone', label: 'Numer telefonu', type: 'tel', placeholder: '+48 123 456 789', required: false },
                        ].map(({ key, label, type, placeholder, required }, i) => (
                          <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08 }}
                          >
                            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                              {label} {required && <span className="text-primary">*</span>}
                            </label>
                            <input
                              type={type}
                              required={required}
                              value={formData[key]}
                              onChange={e => setFormData(p => ({ ...p, [key]: e.target.value }))}
                              placeholder={placeholder}
                              className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary/60 focus:bg-white/8 transition-all duration-200 text-sm"
                            />
                          </motion.div>
                        ))}

                        <input type="hidden" name="_subject" value={result?.subject ?? ''} />

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.28 }}
                        >
                          <motion.button
                            type="submit"
                            disabled={sending}
                            whileHover={!sending ? { scale: 1.02 } : {}}
                            whileTap={!sending ? { scale: 0.98 } : {}}
                            className="relative w-full overflow-hidden py-4 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                          >
                            {!sending && (
                              <motion.span
                                className="absolute inset-0 bg-white/10"
                                initial={{ x: '-100%' }}
                                animate={{ x: '200%' }}
                                transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 2 }}
                              />
                            )}
                            <span className="relative flex items-center justify-center gap-2">
                              {sending ? (
                                <>
                                  <motion.span
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                    className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                                  />
                                  Wysyłanie...
                                </>
                              ) : (
                                <>
                                  Wyślij wiadomość
                                  <motion.span
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                  >
                                    →
                                  </motion.span>
                                </>
                              )}
                            </span>
                          </motion.button>
                        </motion.div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
