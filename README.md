# WebGoat — strona studia

Strona [webgoat.pl](https://webgoat.pl): tworzenie stron internetowych, Ząbkowice Śląskie i Dolny Śląsk.

**Stack:** Next.js 15 (App Router, statyczne generowanie), React 19, Tailwind CSS 4, GSAP + ScrollTrigger + SplitText, Lenis, framer-motion, komponenty z React Bits. Formularze: Formspree. Statystyki: Vercel Analytics.

## Uruchomienie

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build produkcyjny
npm run lint    # ESLint
```

## Struktura

```
app/                    Trasy, metadane SEO, sitemap, robots, manifest, ikony
  layout.jsx            Fonty, schematy firmy (JSON-LD), warstwa konwersji, płynne przewijanie
  page.jsx              Strona główna
  uslugi/[slug]/        6 podstron usług (generowane z data/servicesData.js)
  lokalizacja/[city]/   11 stron miast (generowane z data/citiesData.js)
  portfolio/  certyfikaty/  dlaczego-strona-internetowa/  polityka-prywatnosci/

components/
  layout/               Navbar, Footer, baner i ustawienia cookies, Meta Pixel (po zgodzie)
  sections/             Sekcje strony głównej (hero, usługi, oferta, realizacje, proces, quiz, kontakt…)
  views/                Klientowe widoki podstron (usługa, miasto, portfolio, „dlaczego strona”, certyfikaty)
  conversion/           Okno konsultacji, przyklejone CTA, podpowiedź, pasek postępu
  ui/                   Przyciski, nagłówki sekcji, FAQ, blok CTA, naklejka, obraz z paralaksą
  motion/               Lenis + GSAP (SmoothScroll), odsłanianie tekstu i bloków
  reactbits/            Komponenty React Bits (licencja w nagłówku każdego pliku)
  seo/                  JSON-LD

data/                   Cała treść: usługi, miasta, realizacje, certyfikaty, quiz, FAQ
lib/                    SEO (metadane i schematy), GSAP, konsultacja, zgoda na cookies
public/                 Logo, grafika OG, zrzuty realizacji, certyfikaty PDF, llms.txt
```

## Najczęstsze zmiany

| Co zmienić | Gdzie |
|---|---|
| Cena oferty | wyszukaj `1500` (treści, `lib/seo.js`, schematy w `app/uslugi` i `app/lokalizacja`) |
| Nowa realizacja | `data/portfolioData.js` + zrzut 1440×900 w `public/portfolio/` |
| Realizacje na stronie głównej | `homeProjects` w `data/portfolioData.js` |
| Nowe miasto | `data/citiesData.js` (strona, sitemap i linki tworzą się same) |
| Dane firmy (NIP, telefon, e-mail) | `lib/seo.js`, `lib/consult.js` |
| Kolory, fonty | `app/globals.css` (`@theme`), `app/layout.jsx` |

## Wdrożenie (Vercel)

Projekt jest w katalogu głównym repozytorium — w ustawieniach projektu na Vercel **Root Directory** musi być puste (`./`).
