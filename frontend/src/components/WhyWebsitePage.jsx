import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const stats = [
  { value: '81%', label: 'konsumentów szuka produktów i usług w internecie przed zakupem', source: 'GUS / Google' },
  { value: '75%', label: 'użytkowników ocenia wiarygodność firmy na podstawie jej strony www', source: 'Stanford Web Credibility' },
  { value: '3×', label: 'więcej zapytań generuje firma z dobrze zoptymalizowaną stroną SEO', source: 'HubSpot' },
  { value: '94%', label: 'pierwszych wrażeń o firmie jest związanych z design strony internetowej', source: 'ResearchGate' },
]

const benefits = [
  {
    icon: '🔍',
    title: 'Widoczność w Google 24/7',
    desc: 'Twoja strona pracuje dla Ciebie przez całą dobę. Klienci mogą znaleźć Twoją ofertę o każdej porze — nawet gdy śpisz. Optymalizacja SEO sprawia, że pojawiasz się wysoko w wynikach wyszukiwania na frazy, których szukają Twoi klienci.',
  },
  {
    icon: '💼',
    title: 'Profesjonalny wizerunek',
    desc: 'Firmy bez strony internetowej są postrzegane jako mniej wiarygodne. Nowoczesna, szybka strona buduje zaufanie i sprawia, że wyglądasz profesjonalnie — nawet w porównaniu z dużo większą konkurencją.',
  },
  {
    icon: '📈',
    title: 'Więcej klientów i zapytań',
    desc: 'Strona to najlepszy sprzedawca — zawsze dostępny, nigdy nie choruje, obsługuje dziesiątki klientów jednocześnie. Formularz kontaktowy, numer telefonu, mapa dojazdu — wszystko w jednym miejscu.',
  },
  {
    icon: '🎯',
    title: 'Targetowanie lokalnych klientów',
    desc: 'Lokalne SEO sprawia, że gdy ktoś w Ząbkowicach Śląskich, Kłodzku czy Dzierżoniowie szuka Twoich usług, trafia właśnie do Ciebie. Google Maps, wizytówka Google, słowa kluczowe — to wszystko działa razem.',
  },
  {
    icon: '🤖',
    title: 'Rekomendacje przez AI (ChatGPT, Gemini)',
    desc: 'Nowoczesne modele językowe jak ChatGPT i Gemini coraz częściej polecają firmy z dobrą obecnością w internecie. Dobrze zbudowana strona z wartościowymi treściami zwiększa szansę, że AI wymieni właśnie Twoją firmę.',
  },
  {
    icon: '💰',
    title: 'Zwrot z inwestycji (ROI)',
    desc: 'Jedna strona internetowa za 750 zł może przynieść Ci dziesiątki nowych klientów rocznie. Nawet jeden pozyskany klient często zwraca koszt całego projektu. To najtańsze i najskuteczniejsze narzędzie marketingowe dla małych firm.',
  },
]

const vsCompetition = [
  { feature: 'Dostępność 24/7', withSite: true, withoutSite: false },
  { feature: 'Widoczność w Google', withSite: true, withoutSite: false },
  { feature: 'Profesjonalny wizerunek', withSite: true, withoutSite: false },
  { feature: 'Możliwość recenzji online', withSite: true, withoutSite: false },
  { feature: 'Automatyczny kontakt od klientów', withSite: true, withoutSite: false },
  { feature: 'Przewaga nad lokalną konkurencją', withSite: true, withoutSite: false },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
}

export default function WhyWebsitePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      <Helmet>
        <title>Dlaczego warto mieć stronę internetową? | WebGoat</title>
        <meta
          name="description"
          content="Strona internetowa to must-have każdej firmy. Dowiedz się, ile możesz zyskać dzięki profesjonalnej stronie WWW i SEO — więcej klientów, większa wiarygodność i przewaga nad konkurencją. Strona wizytówkowa już od 750 zł!"
        />
        <meta
          name="keywords"
          content="dlaczego warto mieć stronę internetową, korzyści ze strony www, strona internetowa dla firmy, SEO dla małej firmy, strona wizytówkowa 750 zł, tworzenie stron Ząbkowice Śląskie"
        />
        <link rel="canonical" href="https://webgoat.pl/dlaczego-strona-internetowa" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Dlaczego warto mieć stronę internetową? Korzyści dla Twojej firmy",
          "description": "Profesjonalna strona internetowa zwiększa liczbę klientów, buduje wiarygodność i zapewnia widoczność w Google 24/7.",
          "author": { "@type": "Organization", "name": "WebGoat" },
          "publisher": { "@type": "Organization", "name": "WebGoat", "url": "https://webgoat.pl" },
          "mainEntityOfPage": "https://webgoat.pl/dlaczego-strona-internetowa",
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-dark text-gray-200">
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 via-dark to-dark" />
          <div className="absolute top-20 -right-20 w-96 h-96 bg-primary-700/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-80 h-80 bg-accent-600/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <span className="text-sm text-primary-300 font-medium">Poradnik dla przedsiębiorców</span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mb-6 leading-tight"
            >
              Dlaczego{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                każda firma
              </span>{' '}
              potrzebuje strony internetowej?
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUp}
              className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              W 2024 roku brak strony internetowej to jak brak szyldu nad drzwiami sklepu.
              Sprawdź, ile tracisz i jak szybko możesz to zmienić — nawet za{' '}
              <strong className="text-yellow-400">750 zł</strong>.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="/#kontakt"
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-1 transition-all duration-300"
              >
                Zamów stronę za 750 zł
              </a>
              <a
                href="#korzyści"
                className="px-8 py-4 border border-primary-700 text-primary-300 font-semibold rounded-full hover:bg-primary-900/50 transition-all duration-300"
              >
                Poznaj korzyści ↓
              </a>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-white/3">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="p-6 rounded-2xl glass text-center"
                >
                  <div className="text-4xl font-bold text-primary-400 mb-3">{stat.value}</div>
                  <div className="text-sm text-gray-300 leading-snug mb-2">{stat.label}</div>
                  <div className="text-xs text-gray-500">źródło: {stat.source}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="korzyści" className="py-20">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-14"
            >
              <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-white mb-4">
                Co zyskujesz dzięki stronie internetowej?
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Profesjonalna strona to inwestycja, która zwraca się wielokrotnie.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-6 rounded-2xl glass border border-white/10 hover:border-primary-600/50 transition-colors duration-300"
                >
                  <div className="text-3xl mb-3">{b.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{b.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Deep Dive */}
        <section className="py-20 bg-gradient-to-br from-primary-900/20 via-dark to-dark">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-white mb-4">
                Jak SEO przyciąga klientów automatycznie?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                SEO (Search Engine Optimization) to optymalizacja strony tak, aby Google wyświetlał ją wysoko
                w wynikach wyszukiwania. Klient wpisuje frazę — Twoja firma pojawia się pierwsza.
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: 'Klient szuka usługi w Google',
                  desc: 'Np. "mechanik Ząbkowice Śląskie" albo "catering na wesele Kłodzko". Dziennie w Polsce takich zapytań są miliony.',
                },
                {
                  step: '02',
                  title: 'Google pokazuje firmy z dobrym SEO',
                  desc: 'Strony zoptymalizowane pod dane frazy pojawiają się na górze. Pierwsze 3 wyniki otrzymują ponad 60% kliknięć.',
                },
                {
                  step: '03',
                  title: 'Klient trafia na Twoją stronę i dzwoni',
                  desc: 'Profesjonalna strona przekonuje go do kontaktu. Bez strony — klient idzie do konkurencji.',
                },
                {
                  step: '04',
                  title: 'Zysk — nowi klienci bez kosztów reklamy',
                  desc: 'W przeciwieństwie do płatnych reklam, ruch organiczny z SEO jest bezpłatny i rośnie z czasem.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="flex gap-5 p-6 rounded-2xl glass"
                >
                  <div className="text-3xl font-bold text-primary-500/50 font-[family-name:var(--font-heading)] shrink-0 w-12">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-white mb-4">
                Firma ze stroną vs. bez strony
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-2xl overflow-hidden border border-white/10"
            >
              <div className="grid grid-cols-3 bg-white/5 px-6 py-4 font-semibold text-sm">
                <div className="text-gray-400">Cecha</div>
                <div className="text-center text-primary-400">Z WebGoat ✓</div>
                <div className="text-center text-gray-500">Bez strony ✗</div>
              </div>
              {vsCompetition.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 px-6 py-4 text-sm border-t border-white/5 ${i % 2 === 0 ? 'bg-white/2' : ''}`}
                >
                  <div className="text-gray-300">{row.feature}</div>
                  <div className="text-center text-green-400 text-lg">✓</div>
                  <div className="text-center text-red-500 text-lg">✗</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ for AI/LLM optimization */}
        <section className="py-20 bg-white/3">
          <div className="max-w-3xl mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-white mb-4">
                Najczęstsze pytania
              </h2>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  q: 'Ile kosztuje strona internetowa dla małej firmy?',
                  a: 'Strona wizytówkowa w WebGoat kosztuje 750 zł. To jednorazowy koszt, który obejmuje projektowanie, kodowanie, podstawowe SEO i wdrożenie. Nie ma ukrytych opłat.',
                },
                {
                  q: 'Jak długo trwa wykonanie strony?',
                  a: 'Standardowa strona wizytówkowa jest gotowa w ciągu 7-14 dni roboczych. Zależy to od złożoności projektu i szybkości dostarczenia materiałów.',
                },
                {
                  q: 'Czy strona internetowa naprawdę pomoże mi zdobyć klientów?',
                  a: 'Tak. Ponad 80% konsumentów szuka usług w internecie przed podjęciem decyzji zakupowej. Firma bez strony jest niewidoczna dla tej grupy. Profesjonalna strona z SEO to najtańszy sposób na stałe pozyskiwanie klientów.',
                },
                {
                  q: 'Co to jest SEO i czy jest mi potrzebne?',
                  a: 'SEO (pozycjonowanie) to zestaw działań, które sprawiają, że Twoja strona pojawia się wysoko w wynikach Google. Podstawowe SEO jest wliczone w każdą stronę wizytówkową. Dzięki temu klienci z Twojego miasta mogą Cię łatwo znaleźć.',
                },
                {
                  q: 'Jakie firmy z Dolnego Śląska obsługuje WebGoat?',
                  a: 'Obsługujemy firmy z Ząbkowic Śląskich, Kłodzka, Dzierżoniowa, Kamieńca Ząbkowickiego i całego Dolnego Śląska. Jesteśmy lokalną firmą — rozumiemy specyfikę regionalnego rynku.',
                },
              ].map((item, i) => (
                <motion.details
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="group p-5 rounded-2xl glass border border-white/10 cursor-pointer"
                >
                  <summary className="font-semibold text-white list-none flex items-center justify-between">
                    {item.q}
                    <span className="text-primary-400 text-xl group-open:rotate-45 transition-transform duration-300">+</span>
                  </summary>
                  <p className="mt-3 text-gray-400 text-sm leading-relaxed">{item.a}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-10 rounded-3xl bg-gradient-to-br from-primary-900/50 to-dark border border-primary-700/40"
            >
              <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-white mb-4">
                Gotowy na więcej klientów?
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Strona wizytówkowa za{' '}
                <strong className="text-yellow-400">750 zł</strong> — zrealizowana w 7-14 dni.
                Skontaktuj się z nami i zacznij przyciągać klientów online.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/#kontakt"
                  className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold text-lg rounded-full hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1 transition-all duration-300"
                >
                  Zamów teraz — 750 zł
                </a>
                <Link
                  to="/"
                  className="px-8 py-4 border border-primary-700 text-primary-300 font-semibold rounded-full hover:bg-primary-900/50 transition-all duration-300"
                >
                  ← Wróć na stronę główną
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
