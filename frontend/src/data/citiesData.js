/**
 * Dane dla lokalnych stron lądowania (local landing pages).
 * Każde miasto ma własne: slug, treści SEO, opis, FAQ.
 * Strategia: Google indeksuje oddzielną stronę dla każdego miasta
 * z unikalnymi treściami — to kluczowy element lokalnego SEO.
 */
const citiesData = [
  {
    slug: 'zabkowice-slaskie',
    name: 'Ząbkowice Śląskie',
    nameGenitive: 'Ząbkowic Śląskich',
    nameLocative: 'Ząbkowicach Śląskich',
    postalCode: '57-200',
    lat: 50.5906,
    lng: 16.8114,
    region: 'powiat ząbkowicki',
    population: '~16 000',
    metaTitle: 'Tworzenie Stron Internetowych Ząbkowice Śląskie | WebGoat',
    metaDescription:
      'Profesjonalne tworzenie stron internetowych w Ząbkowicach Śląskich. Strony WWW, sklepy online, SEO dla firm z Ząbkowic Śląskich. Bezpłatna wycena ☎ +48 883 821 301.',
    heroTitle: 'Strony internetowe dla firm z Ząbkowic Śląskich',
    heroSubtitle:
      'Jako lokalna agencja webowa z Ząbkowic Śląskich rozumiemy potrzeby Twojego biznesu. Tworzymy strony WWW, sklepy online i wdrażamy SEO, które przyciągają klientów z całego powiatu ząbkowickiego.',
    whyUs: [
      'Lokalny zespół — spotkamy się osobiście w Ząbkowicach Śląskich',
      'Znamy lokalny rynek i konkurencję w powiecie ząbkowickim',
      'Szybki kontakt — odpowiadamy w ciągu kilku godzin',
      'Referencje od firm z Ząbkowic Śląskich i okolic',
    ],
    faq: [
      {
        q: 'Czy obsługujecie firmy tylko z Ząbkowic Śląskich?',
        a: 'Nie — nasza siedziba jest w Ząbkowicach Śląskich, ale obsługujemy firmy z całego powiatu ząbkowickiego, Kłodzka, Dzierżoniowa i Dolnego Śląska.',
      },
      {
        q: 'Ile kosztuje strona internetowa dla firmy z Ząbkowic Śląskich?',
        a: 'Ceny zaczynają się od 2000 zł za stronę wizytówkową. Każdą wycenę przygotowujemy bezpłatnie i indywidualnie.',
      },
      {
        q: 'Czy można spotkać się z Wami osobiście?',
        a: 'Oczywiście! Jesteśmy z Ząbkowic Śląskich i chętnie spotkamy się na konsultacji w Twoim biurze lub naszej siedzibie.',
      },
    ],
    nearbyPlaces: ['Kamieniec Ząbkowicki', 'Ziębice', 'Bardo', 'Stoszowice'],
  },
  {
    slug: 'klodzko',
    name: 'Kłodzko',
    nameGenitive: 'Kłodzka',
    nameLocative: 'Kłodzku',
    postalCode: '57-300',
    lat: 50.4367,
    lng: 16.6579,
    region: 'powiat kłodzki',
    population: '~26 000',
    metaTitle: 'Tworzenie Stron Internetowych Kłodzko | WebGoat',
    metaDescription:
      'Profesjonalne tworzenie stron internetowych w Kłodzku. Strony WWW, sklepy online, pozycjonowanie SEO dla firm z Kłodzka i powiatu kłodzkiego. Bezpłatna wycena ☎ +48 883 821 301.',
    heroTitle: 'Strony internetowe dla firm z Kłodzka',
    heroSubtitle:
      'Obsługujemy firmy z Kłodzka i całego powiatu kłodzkiego. Tworzymy nowoczesne strony internetowe i sklepy online, które pojawiają się wysoko w Google dla fraz lokalnych.',
    whyUs: [
      'Znamy rynek turystyczny i usługowy powiatu kłodzkiego',
      'Strony zoptymalizowane pod lokalne frazy w Kłodzku',
      'Obsługa branży turystycznej, gastronomicznej i zdrowotnej',
      'Szybka realizacja i bezpłatna konsultacja',
    ],
    faq: [
      {
        q: 'Czy tworzycie strony dla firm turystycznych z Kłodzka?',
        a: 'Tak! Powiat kłodzki to jeden z najważniejszych regionów turystycznych Dolnego Śląska. Specjalizujemy się w stronach dla hoteli, pensjonatów i atrakcji turystycznych z Kłodzka i okolic.',
      },
      {
        q: 'Ile czasu zajmuje stworzenie strony dla firmy z Kłodzka?',
        a: 'Typową stronę firmową realizujemy w 2–4 tygodnie od akceptacji projektu.',
      },
      {
        q: 'Czy SEO obejmuje frazy lokalne dla Kłodzka?',
        a: 'Tak. Optymalizujemy pod frazy takie jak "usługa + Kłodzko", "firma + powiat kłodzki" i semantycznie powiązane.',
      },
    ],
    nearbyPlaces: ['Polanica-Zdrój', 'Duszniki-Zdrój', 'Kudowa-Zdrój', 'Bystrzyca Kłodzka', 'Lądek-Zdrój'],
  },
  {
    slug: 'dzierzoniow',
    name: 'Dzierżoniów',
    nameGenitive: 'Dzierżoniowa',
    nameLocative: 'Dzierżoniowie',
    postalCode: '58-200',
    lat: 50.7278,
    lng: 16.6539,
    region: 'powiat dzierżoniowski',
    population: '~31 000',
    metaTitle: 'Tworzenie Stron Internetowych Dzierżoniów | WebGoat',
    metaDescription:
      'Profesjonalne tworzenie stron internetowych w Dzierżoniowie. Strony WWW, sklepy internetowe, SEO dla firm z Dzierżoniowa i powiatu dzierżoniowskiego. Bezpłatna wycena ☎ +48 883 821 301.',
    heroTitle: 'Strony internetowe dla firm z Dzierżoniowa',
    heroSubtitle:
      'Tworzymy strony internetowe i sklepy online dla firm z Dzierżoniowa i powiatu dzierżoniowskiego. Lokalne SEO sprawi, że Twoja firma pojawi się na pierwszej stronie Google dla klientów z Dzierżoniowa.',
    whyUs: [
      'Doświadczenie z firmami z powiatu dzierżoniowskiego',
      'Strony pod frazy lokalne w Dzierżoniowie',
      'Sklepy e-commerce dla przedsiębiorców z Dzierżoniowa',
      'Obsługa branży produkcyjnej, usługowej i handlowej',
    ],
    faq: [
      {
        q: 'Czy tworzycie sklepy internetowe dla firm z Dzierżoniowa?',
        a: 'Tak. Tworzymy sklepy na WooCommerce, Shopify i innych platformach. Dla firm z Dzierżoniowa oferujemy pakiety dopasowane do lokalnego rynku.',
      },
      {
        q: 'Jak szybko strona z Dzierżoniowa pojawi się w Google?',
        a: 'Pierwsze efekty SEO widoczne są zwykle po 4–8 tygodniach. Lokalne pozycjonowanie na Dzierżoniów daje efekty szybciej niż ogólnopolskie frazy.',
      },
      {
        q: 'Czy mogę zamówić samą optymalizację SEO dla istniejącej strony?',
        a: 'Tak! Oferujemy audyt i wdrożenie lokalnego SEO dla stron firm z Dzierżoniowa bez konieczności przebudowy strony.',
      },
    ],
    nearbyPlaces: ['Bielawa', 'Pieszyce', 'Niemcza', 'Piława Górna'],
  },
  {
    slug: 'kamieniec-zabkowicki',
    name: 'Kamieniec Ząbkowicki',
    nameGenitive: 'Kamieńca Ząbkowickiego',
    nameLocative: 'Kamieńcu Ząbkowickim',
    postalCode: '57-230',
    lat: 50.5344,
    lng: 16.8641,
    region: 'gmina Kamieniec Ząbkowicki',
    population: '~4 000',
    metaTitle: 'Tworzenie Stron Internetowych Kamieniec Ząbkowicki | WebGoat',
    metaDescription:
      'Profesjonalne strony internetowe dla firm z Kamieńca Ząbkowickiego. Strony WWW, SEO, sklepy online. Lokalny partner webowy z sąsiednich Ząbkowic Śląskich. Bezpłatna wycena ☎ +48 883 821 301.',
    heroTitle: 'Strony internetowe dla firm z Kamieńca Ząbkowickiego',
    heroSubtitle:
      'Jesteśmy z sąsiednich Ząbkowic Śląskich — Kamieniec Ząbkowicki to nasz lokalny rynek. Tworzymy profesjonalne strony internetowe dla firm i przedsiębiorców z gminy Kamieniec Ząbkowicki.',
    whyUs: [
      'Dosłownie sąsiedzi — siedziba w pobliskich Ząbkowicach Śląskich',
      'Znamy specyfikę i potrzeby biznesu w gminie Kamieniec Ząbkowicki',
      'Strony dla branży turystycznej wokół Zamku Kamieniec',
      'Osobiste spotkania i szybki kontakt',
    ],
    faq: [
      {
        q: 'Czy obsługujecie firmy z branży turystycznej z Kamieńca Ząbkowickiego?',
        a: 'Tak! Gmina Kamieniec Ząbkowicki to atrakcja turystyczna z zamkiem Marianny Orańskiej. Tworzymy strony dla obiektów turystycznych, agroturystyki i lokalnych firm usługowych.',
      },
      {
        q: 'Jak szybko mogę mieć stronę dla firmy z Kamieńca Ząbkowickiego?',
        a: 'Proste strony wizytówkowe możemy dostarczyć nawet w tydzień. Bardziej rozbudowane projekty zajmują 2–4 tygodnie.',
      },
      {
        q: 'Czy wyjeżdżacie do klientów z Kamieńca Ząbkowickiego?',
        a: 'Oczywiście! Kamieniec Ząbkowicki jest kilka minut od naszej siedziby w Ząbkowicach Śląskich. Chętnie spotkamy się na miejscu.',
      },
    ],
    nearbyPlaces: ['Ząbkowice Śląskie', 'Ziębice', 'Złoty Stok'],
  },
]

export default citiesData
