import JsonLd from '@/components/seo/JsonLd'
import CookieSettingsButton from '@/components/layout/CookieSettingsButton'
import { pageMetadata, breadcrumbSchema, EMAIL, PHONE } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Polityka Prywatności i Cookies',
  description:
    'Polityka prywatności WebGoat: jakie dane zbieramy przez formularz kontaktowy, w jakim celu, jak używamy plików cookie oraz jakie prawa przysługują Ci na mocy RODO.',
  path: '/polityka-prywatnosci',
})

const UPDATED = '17 listopada 2026'

function Section({ title, children }) {
  return (
    <section className="grid gap-6 border-t border-line py-10 md:grid-cols-12">
      <h2 className="font-display text-2xl font-semibold tracking-tight md:col-span-4">{title}</h2>
      <div className="space-y-3 text-lg leading-relaxed text-ink-3 md:col-span-7 md:col-start-6">{children}</div>
    </section>
  )
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Polityka prywatności', path: '/polityka-prywatnosci' }])} />
      <article className="container-x pb-24 pt-[104px]">
        <p className="label border-b border-line pb-4 text-mute">Dokument · ostatnia aktualizacja: {UPDATED}</p>
        <h1 className="display mb-16 mt-10 max-w-[14ch] text-[clamp(2.8rem,7vw,6.5rem)]">
          Polityka prywatności <em className="serif-accent">i plików cookie.</em>
        </h1>

        <Section title="1. Administrator danych">
          <p>
            Administratorem Twoich danych osobowych jest <strong className="text-ink">Jakub Kuzakowski WebGoat</strong>, NIP: 8871830447, z siedzibą w Ząbkowicach Śląskich (57-200), województwo dolnośląskie. Kontakt w sprawach danych osobowych:{' '}
            <a href={`mailto:${EMAIL}`} className="text-ink underline underline-offset-2">{EMAIL}</a>, tel.{' '}
            <a href="tel:+48883821301" className="text-ink underline underline-offset-2">+48 883 821 301</a>.
          </p>
        </Section>

        <Section title="2. Jakie dane zbieramy i po co">
          <p>
            <strong className="text-ink">Formularz kontaktowy</strong> — imię i nazwisko, adres e-mail, numer telefonu
            (opcjonalnie) oraz treść wiadomości. Przetwarzamy je, aby odpowiedzieć na zapytanie i przygotować wycenę
            (art. 6 ust. 1 lit. b RODO — działania przed zawarciem umowy, oraz lit. f — prawnie uzasadniony interes
            polegający na obsłudze korespondencji).
          </p>
          <p>
            <strong className="text-ink">Kontakt telefoniczny, SMS i e-mail</strong> — dane, które sam przekazujesz,
            wykorzystujemy wyłącznie do prowadzenia rozmowy i realizacji zlecenia.
          </p>
          <p>
            Dane z zapytań przechowujemy przez czas potrzebny do ich obsługi, a jeśli dojdzie do współpracy — przez
            okres wymagany przepisami podatkowymi i rachunkowymi.
          </p>
        </Section>

        <Section title="3. Odbiorcy danych">
          <p>Twoje dane mogą być przekazywane podmiotom, które pomagają nam prowadzić stronę:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-ink">Formspree, Inc.</strong> (USA) — obsługa wysyłki formularza kontaktowego.
            </li>
            <li>
              <strong className="text-ink">Vercel Inc.</strong> (USA) — hosting strony i anonimowe statystyki odwiedzin.
            </li>
            <li>
              <strong className="text-ink">Google LLC</strong> (USA) — poczta e-mail, w której otrzymujemy wiadomości.
            </li>
            <li>
              <strong className="text-ink">Meta Platforms Ireland Ltd.</strong> — wyłącznie po wyrażeniu zgody na
              cookies marketingowe (Meta Pixel).
            </li>
          </ul>
          <p>
            Przekazanie danych do USA odbywa się na podstawie standardowych klauzul umownych Komisji Europejskiej lub
            programu EU-US Data Privacy Framework.
          </p>
        </Section>

        <Section title="4. Pliki cookie i podobne technologie">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-ink">Niezbędne</strong> — zapis Twojej decyzji dotyczącej cookies w pamięci
              przeglądarki (localStorage). Nie wymagają zgody.
            </li>
            <li>
              <strong className="text-ink">Statystyczne</strong> — Vercel Web Analytics zbiera zagregowane,
              anonimowe dane o odwiedzinach bez użycia plików cookie.
            </li>
            <li>
              <strong className="text-ink">Marketingowe</strong> — Meta Pixel (Facebook) służy do mierzenia
              skuteczności reklam. Uruchamiamy go <strong className="text-ink">tylko po kliknięciu „Akceptuj”</strong>{' '}
              (art. 6 ust. 1 lit. a RODO). Zgodę możesz w każdej chwili wycofać.
            </li>
          </ul>
          <p>
            <CookieSettingsButton className="text-ink underline underline-offset-2 hover:text-ink" />
          </p>
        </Section>

        <Section title="5. Twoje prawa">
          <p>Przysługuje Ci prawo do:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>dostępu do swoich danych i otrzymania ich kopii,</li>
            <li>sprostowania, usunięcia lub ograniczenia przetwarzania danych,</li>
            <li>przenoszenia danych,</li>
            <li>wniesienia sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie,</li>
            <li>wycofania zgody w dowolnym momencie (bez wpływu na zgodność z prawem wcześniejszego przetwarzania),</li>
            <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa).</li>
          </ul>
          <p>
            Aby skorzystać z praw, napisz na{' '}
            <a href={`mailto:${EMAIL}`} className="text-ink underline underline-offset-2">{EMAIL}</a>.
          </p>
        </Section>

        <Section title="6. Dobrowolność podania danych">
          <p>
            Podanie danych jest dobrowolne, ale bez adresu e-mail lub numeru telefonu nie będziemy mogli odpowiedzieć na
            Twoje zapytanie. Nie podejmujemy wobec Ciebie decyzji w sposób zautomatyzowany ani nie profilujemy Cię w
            rozumieniu RODO.
          </p>
        </Section>
      </article>
    </>
  )
}
