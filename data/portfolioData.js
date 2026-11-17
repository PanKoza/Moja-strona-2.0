/**
 * Prawdziwe realizacje WebGoat — używane na stronie głównej, w Portfolio i na podstronach.
 * image: zrzut strony głównej realizacji (public/portfolio, 1440×900).
 * location: miejscowość klienta, jeśli wynika z treści jego strony.
 */
const portfolioData = [
  {
    slug: 'pogrzeby-requiem',
    title: 'Pogrzeby Requiem',
    url: 'https://www.pogrzebyrequiem.pl/',
    category: 'Strony WWW',
    tag: 'Strona wizytówkowa',
    location: 'Ząbkowice Śląskie',
    description:
      'Strona zakładu pogrzebowego: stonowana, godna oprawa graficzna, pełna informacja o usługach i telefon dostępny 24 h na dobę w każdym miejscu strony.',
    tech: ['React', 'Tailwind CSS', 'SEO'],
    image: '/portfolio/pogrzeby-requiem.webp',
  },
  {
    slug: 'kd-active',
    title: 'KD Active',
    url: 'https://www.kdactive.pl/',
    category: 'Strony WWW',
    tag: 'Strona firmowa',
    description:
      'Strona firmy sportowej: sprzęt, odzież klubowa i organizacja turniejów. Dynamiczny design podkreślający energię marki i szybka ścieżka do wyceny.',
    tech: ['React', 'Animacje', 'RWD'],
    image: '/portfolio/kd-active.webp',
  },
  {
    slug: 'kura-detailing',
    title: 'Kura Detailing',
    url: 'https://www.kuradetailing.pl/',
    category: 'Strony WWW',
    tag: 'Strona wizytówkowa',
    location: 'Kamieniec Ząbkowicki',
    description:
      'Elegancka strona studia detailingu samochodowego: usługi, pakiety, karta lojalnościowa i umawianie wizyty jednym kliknięciem.',
    tech: ['React', 'Tailwind', 'SEO lokalny'],
    image: '/portfolio/kura-detailing.webp',
  },
  {
    slug: 'wytrych',
    title: 'Kancelaria Wytrych',
    url: 'https://wytrych.pl/',
    category: 'Strony WWW',
    tag: 'Strona kancelarii',
    location: 'Wrocław',
    description:
      'Strona kancelarii radcy prawnego: przejrzyście opisane specjalizacje (sprawy cywilne, rozwody, nieruchomości, obsługa firm) i szybki kontakt telefoniczny.',
    tech: ['React', 'Mobile-first', 'SEO'],
    image: '/portfolio/wytrych.webp',
  },
  {
    slug: 'meczomat',
    title: 'Meczomat',
    url: 'https://www.meczomat.pl/',
    category: 'Aplikacje',
    tag: 'Portal / aplikacja',
    description:
      'Portal z wynikami niższych lig: tabele, terminarze i wyniki na żywo dla ponad tysiąca drużyn z całej Polski. Automatyczne aktualizacje danych.',
    tech: ['React', 'API', 'Real-time'],
    image: '/portfolio/meczomat.webp',
  },
  {
    slug: 'as-orzel',
    title: 'Akademia Sportu Orzeł',
    url: 'https://as-orzel.vercel.app/',
    category: 'Strony WWW',
    tag: 'Strona klubu',
    location: 'Ząbkowice Śląskie',
    description:
      'Strona akademii sportowej: oferta treningów piłkarskich i cheerleadingu dla dzieci, kadra, aktualności i zapisy.',
    tech: ['React', 'Vercel', 'CMS'],
    image: '/portfolio/as-orzel.webp',
  },
  {
    slug: 'wzorujemy',
    title: 'Wzorujemy.com',
    url: 'https://www.wzorujemy.com/',
    category: 'Sklepy',
    tag: 'Sklep internetowy',
    description:
      'Sklep z ręcznie robionymi etui i akcesoriami z personalizacją grawerem laserowym. Konfigurator produktu, płatności Przelewy24 i dostawa InPost.',
    tech: ['React', 'Next.js', 'E-commerce'],
    image: '/portfolio/wzorujemy.webp',
  },
  {
    slug: 'pizza-friends',
    title: 'Pizza Friends',
    url: 'https://pizzafriends.vercel.app/',
    category: 'Sklepy',
    tag: 'Strona restauracji',
    location: 'Ząbkowice Śląskie',
    description:
      'Strona pizzerii z menu online i zamawianiem. Szybka, apetyczna i prosta w obsłudze — dokładnie tego potrzebuje lokalna restauracja.',
    tech: ['React', 'Menu online', 'Vercel'],
    image: '/portfolio/pizza-friends.webp',
  },
  {
    slug: 'goat-casino',
    title: 'Goat Casino',
    url: 'https://goatcasino.onrender.com/',
    category: 'Aplikacje',
    tag: 'Aplikacja webowa',
    description:
      'Projekt demonstracyjny: aplikacja rozrywkowa z logiką gier, animacjami i autoryzacją użytkowników. Pokazuje możliwości zaawansowanego front-endu.',
    tech: ['React', 'Node.js', 'Animacje'],
    image: '/portfolio/goat-casino.webp',
  },
]

// Realizacja ilustrująca daną usługę (podgląd na liście usług i obraz na podstronie)
const SERVICE_PROJECT = {
  'strony-internetowe': 'kura-detailing',
  'sklepy-internetowe': 'wzorujemy',
  'pozycjonowanie-seo': 'pogrzeby-requiem',
  'aplikacje-webowe': 'meczomat',
  'branding-design': 'kd-active',
  'wsparcie-techniczne': 'as-orzel',
}
export const projectForService = (slug) => portfolioData.find((p) => p.slug === SERVICE_PROJECT[slug]) || portfolioData[0]

// Strona główna: Wzorujemy.com w miejscu Kancelarii Wytrych (Wytrych zostaje tylko na podstronie Portfolio)
export const homeProjects = portfolioData
  .filter((p) => p.slug !== 'wzorujemy')
  .map((p) => (p.slug === 'wytrych' ? portfolioData.find((x) => x.slug === 'wzorujemy') : p))

export const portfolioCategories = ['Wszystkie', 'Strony WWW', 'Sklepy', 'Aplikacje']

export default portfolioData
