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
  // ── nowe lokalizacje ─────────────────────────────────────────────────────────
  {
    slug: 'swidnica',
    name: 'Świdnica',
    nameGenitive: 'Świdnicy',
    nameLocative: 'Świdnicy',
    postalCode: '58-100',
    lat: 50.8453,
    lng: 16.4869,
    region: 'powiat świdnicki',
    population: '~56 000',
    metaTitle: 'Tworzenie Stron Internetowych Świdnica | WebGoat',
    metaDescription:
      'Profesjonalne tworzenie stron internetowych w Świdnicy. Strony WWW, sklepy online, pozycjonowanie SEO dla firm ze Świdnicy i powiatu świdnickiego. Bezpłatna wycena ☎ +48 883 821 301.',
    heroTitle: 'Strony internetowe dla firm ze Świdnicy',
    heroSubtitle:
      'WebGoat tworzy nowoczesne strony internetowe i sklepy online dla firm ze Świdnicy i powiatu świdnickiego. Lokalne SEO sprawi, że Twoja firma znajdzie się na szczycie wyników Google dla klientów ze Świdnicy.',
    whyUs: [
      'Znamy rynek biznesowy Świdnicy i powiatu świdnickiego',
      'Strony zoptymalizowane pod lokalne frazy dla Świdnicy',
      'Sklepy e-commerce dla przedsiębiorców z regionu świdnickiego',
      'Obsługa branży przemysłowej, handlowej i usługowej',
    ],
    faq: [
      {
        q: 'Jakie branże obsługujecie w Świdnicy?',
        a: 'Tworzymy strony dla firm z każdej branży — produkcja, usługi, handel, gastronomia, medycyna. Świdnica to ważny ośrodek przemysłowy Dolnego Śląska i doskonale znamy potrzeby lokalnych przedsiębiorców.',
      },
      {
        q: 'Ile kosztuje strona internetowa dla firmy ze Świdnicy?',
        a: 'Strony wizytówkowe od 2000 zł, sklepy internetowe od 4500 zł. Każdą wycenę przygotowujemy bezpłatnie i indywidualnie.',
      },
      {
        q: 'Czy pozycjonujecie strony pod frazy lokalne dla Świdnicy?',
        a: 'Tak. Optymalizujemy pod frazy takie jak "usługa + Świdnica", "firma + powiat świdnicki" oraz semantycznie powiązane zapytania lokalne.',
      },
    ],
    nearbyPlaces: ['Jaworzyna Śląska', 'Strzegom', 'Żarów', 'Dobromierz', 'Marcinowice'],
  },
  {
    slug: 'nysa',
    name: 'Nysa',
    nameGenitive: 'Nysy',
    nameLocative: 'Nysie',
    postalCode: '48-300',
    lat: 50.4742,
    lng: 17.3330,
    region: 'powiat nyski',
    population: '~43 000',
    metaTitle: 'Tworzenie Stron Internetowych Nysa | WebGoat',
    metaDescription:
      'Profesjonalne tworzenie stron internetowych w Nysie. Strony WWW, sklepy online, pozycjonowanie SEO dla firm z Nysy i powiatu nyskiego. Bezpłatna wycena ☎ +48 883 821 301.',
    heroTitle: 'Strony internetowe dla firm z Nysy',
    heroSubtitle:
      'Tworzymy profesjonalne strony internetowe dla firm z Nysy i całego powiatu nyskiego. Nowoczesny design, szybkie ładowanie i lokalne SEO — wszystko czego potrzebuje Twój biznes w Nysie.',
    whyUs: [
      'Obsługa firm z Nysy i całego powiatu nyskiego',
      'Strony zoptymalizowane pod frazy lokalne dla Nysy',
      'Doświadczenie z branżą turystyczną, usługową i handlową',
      'Szybka realizacja i bezpłatna konsultacja',
    ],
    faq: [
      {
        q: 'Czy tworzycie strony dla firm turystycznych z Nysy?',
        a: 'Tak! Nysa to "Śląski Rzym" z bogatą historią i rosnącą turystyką. Specjalizujemy się w stronach dla hoteli, pensjonatów, restauracji i atrakcji turystycznych z Nysy i okolic.',
      },
      {
        q: 'Ile czasu zajmuje stworzenie strony dla firmy z Nysy?',
        a: 'Typową stronę firmową realizujemy w 2–4 tygodnie od akceptacji projektu graficznego.',
      },
      {
        q: 'Czy wykonujecie audyt SEO dla istniejących stron z Nysy?',
        a: 'Tak. Oferujemy kompleksowy audyt SEO i wdrożenie lokalnego pozycjonowania dla stron firm z Nysy bez konieczności przebudowy całej strony.',
      },
    ],
    nearbyPlaces: ['Otmuchów', 'Paczków', 'Głuchołazy', 'Korfantów', 'Skoroszyce'],
  },
  {
    slug: 'wroclaw',
    name: 'Wrocław',
    nameGenitive: 'Wrocławia',
    nameLocative: 'Wrocławiu',
    postalCode: '50-001',
    lat: 51.1079,
    lng: 17.0385,
    region: 'Dolny Śląsk',
    population: '~640 000',
    metaTitle: 'Tworzenie Stron Internetowych Wrocław | WebGoat',
    metaDescription:
      'Profesjonalne tworzenie stron internetowych we Wrocławiu. Strony WWW, sklepy online, pozycjonowanie SEO dla firm z Wrocławia. Nowoczesny design i skuteczne SEO. Bezpłatna wycena ☎ +48 883 821 301.',
    heroTitle: 'Strony internetowe dla firm z Wrocławia',
    heroSubtitle:
      'WebGoat tworzy profesjonalne strony internetowe i sklepy online dla firm z Wrocławia. Konkurujemy jakością z największymi agencjami, oferując indywidualne podejście i ceny dostosowane do skali Twojego biznesu.',
    whyUs: [
      'Doświadczenie z firmami z Wrocławia i aglomeracji wrocławskiej',
      'Skuteczne SEO na wysoce konkurencyjnym rynku wrocławskim',
      'Nowoczesny design dopasowany do standardów dużego miasta',
      'Sklepy e-commerce, aplikacje webowe i pozycjonowanie',
    ],
    faq: [
      {
        q: 'Czy jesteście w stanie konkurować z wrocławskimi agencjami?',
        a: 'Tak. Realizujemy projekty na poziomie największych agencji we Wrocławiu, oferując przy tym bardziej elastyczne ceny i indywidualne podejście do każdego klienta.',
      },
      {
        q: 'Ile kosztuje strona internetowa dla firmy z Wrocławia?',
        a: 'Ceny zaczynają się od 2000 zł za stronę wizytówkową. Sklepy internetowe od 4500 zł. Bezpłatna wycena w ciągu 24 godzin.',
      },
      {
        q: 'Czy SEO dla firm z Wrocławia jest trudniejsze niż w mniejszych miastach?',
        a: 'Wrocław to silnie konkurencyjny rynek, ale lokalne SEO we Wrocławiu daje doskonałe rezultaty. Optymalizujemy pod frazy z dużą intencją zakupową dla wrocławskich odbiorców.',
      },
    ],
    nearbyPlaces: ['Długołęka', 'Czernica', 'Siechnice', 'Kobierzyce', 'Kąty Wrocławskie'],
  },
  {
    slug: 'olawa',
    name: 'Oława',
    nameGenitive: 'Oławy',
    nameLocative: 'Oławie',
    postalCode: '55-200',
    lat: 50.9499,
    lng: 17.2989,
    region: 'powiat oławski',
    population: '~32 000',
    metaTitle: 'Tworzenie Stron Internetowych Oława | WebGoat',
    metaDescription:
      'Profesjonalne tworzenie stron internetowych w Oławie. Strony WWW, sklepy online, pozycjonowanie SEO dla firm z Oławy i powiatu oławskiego. Bezpłatna wycena ☎ +48 883 821 301.',
    heroTitle: 'Strony internetowe dla firm z Oławy',
    heroSubtitle:
      'Obsługujemy firmy z Oławy i powiatu oławskiego. Tworzymy nowoczesne strony internetowe i sklepy online, które przyciągają klientów z Oławy, Wrocławia i całego regionu.',
    whyUs: [
      'Znamy dynamicznie rozwijający się rynek Oławy',
      'Strony zoptymalizowane pod lokalne frazy dla Oławy',
      'Sklepy e-commerce dla rosnącej bazy e-commerce w regionie',
      'Szybka realizacja i bezpośredni kontakt z projektantem',
    ],
    faq: [
      {
        q: 'Dlaczego warto mieć stronę internetową w Oławie?',
        a: 'Oława dynamicznie się rozwija, przyciągając nowe firmy i mieszkańców. Profesjonalna strona internetowa to klucz do dotarcia do lokalnych klientów i wyróżnienia się na tle konkurencji.',
      },
      {
        q: 'Ile kosztuje strona internetowa dla firmy z Oławy?',
        a: 'Strony wizytówkowe od 2000 zł, sklepy internetowe od 4500 zł. Bezpłatna wycena w ciągu 24 godzin.',
      },
      {
        q: 'Czy pozycjonujecie strony pod frazy lokalne dla Oławy?',
        a: 'Tak. Optymalizujemy pod frazy takie jak "usługa + Oława" oraz związane z powiatem oławskim, zapewniając widoczność w Google Maps i organicznych wynikach wyszukiwania.',
      },
    ],
    nearbyPlaces: ['Jelcz-Laskowice', 'Domaniów', 'Borów', 'Stary Otok'],
  },
  {
    slug: 'trzebnica',
    name: 'Trzebnica',
    nameGenitive: 'Trzebnicy',
    nameLocative: 'Trzebnicy',
    postalCode: '55-100',
    lat: 51.3100,
    lng: 17.0635,
    region: 'powiat trzebnicki',
    population: '~13 000',
    metaTitle: 'Tworzenie Stron Internetowych Trzebnica | WebGoat',
    metaDescription:
      'Profesjonalne tworzenie stron internetowych w Trzebnicy. Strony WWW, sklepy online, pozycjonowanie SEO dla firm z Trzebnicy i powiatu trzebnickiego. Bezpłatna wycena ☎ +48 883 821 301.',
    heroTitle: 'Strony internetowe dla firm z Trzebnicy',
    heroSubtitle:
      'WebGoat tworzy profesjonalne strony internetowe dla firm z Trzebnicy i powiatu trzebnickiego. Lokalne SEO, nowoczesny design i szybkie ładowanie — Twoja firma widoczna tam, gdzie szukają jej klienci.',
    whyUs: [
      'Obsługa firm z Trzebnicy i całego powiatu trzebnickiego',
      'Strony zoptymalizowane pod lokalne frazy dla Trzebnicy',
      'Doświadczenie z branżą zdrowotną, turystyczną i usługową',
      'Bezpośredni kontakt i szybka realizacja',
    ],
    faq: [
      {
        q: 'Jakie branże obsługujecie w Trzebnicy?',
        a: 'Trzebnica jest znana z uzdrowiska i pielgrzymek do bazyliki św. Jadwigi. Tworzymy strony dla SPA, uzdrowisk, pensjonatów, restauracji i każdej innej branży z Trzebnicy i okolic.',
      },
      {
        q: 'Ile kosztuje strona dla firmy z Trzebnicy?',
        a: 'Strony wizytówkowe od 2000 zł, sklepy internetowe od 4500 zł. Wycena bezpłatna i bez zobowiązań.',
      },
      {
        q: 'Czy można umówić się na spotkanie w Trzebnicy?',
        a: 'Tak, wyjeżdżamy do klientów na terenie całego Dolnego Śląska, w tym do Trzebnicy. Możliwe są też konsultacje online.',
      },
    ],
    nearbyPlaces: ['Oborniki Śląskie', 'Żmigród', 'Prusice', 'Wisznia Mała'],
  },
  {
    slug: 'prusice',
    name: 'Prusice',
    nameGenitive: 'Prusic',
    nameLocative: 'Prusic',
    postalCode: '55-110',
    lat: 51.3817,
    lng: 16.9861,
    region: 'gmina Prusice',
    population: '~3 500',
    metaTitle: 'Tworzenie Stron Internetowych Prusice | WebGoat',
    metaDescription:
      'Profesjonalne strony internetowe dla firm z Prusic. Strony WWW, SEO, sklepy online dla przedsiębiorców z gminy Prusice i powiatu trzebnickiego. Bezpłatna wycena ☎ +48 883 821 301.',
    heroTitle: 'Strony internetowe dla firm z Prusic',
    heroSubtitle:
      'Tworzymy nowoczesne strony internetowe dla firm i przedsiębiorców z Prusic i gminy Prusice. Lokalne SEO, szybkie ładowanie i profesjonalny design w zasięgu ręki.',
    whyUs: [
      'Indywidualne podejście do każdego przedsiębiorcy z Prusic',
      'Strony zoptymalizowane pod frazy lokalne dla gminy Prusice',
      'Obsługa firm rolniczych, usługowych i handlowych',
      'Konkurencyjne ceny dopasowane do małych i średnich firm',
    ],
    faq: [
      {
        q: 'Czy warto mieć stronę internetową jako mała firma z Prusic?',
        a: 'Zdecydowanie tak. Nawet niewielka firma z Prusic zyskuje dzięki stronie wiarygodność i możliwość dotarcia do klientów z Wrocławia i całego Dolnego Śląska przez internet.',
      },
      {
        q: 'Ile kosztuje strona dla małej firmy z Prusic?',
        a: 'Mamy pakiety już od 2000 zł za prostą stronę wizytówkową. Dla małych firm z Prusic i okolic oferujemy elastyczne warunki płatności.',
      },
      {
        q: 'Czy obsługujecie firmy rolnicze i agroturystyczne z Prusic?',
        a: 'Tak! Tworzymy strony dla agroturystyk, gospodarstw rolnych, sklepów ze zdrową żywnością i każdej innej działalności z gminy Prusice.',
      },
    ],
    nearbyPlaces: ['Trzebnica', 'Żmigród', 'Wisznia Mała', 'Oborniki Śląskie'],
  },
  {
    slug: 'dolnoslaskie',
    name: 'Dolnośląskie',
    nameGenitive: 'Dolnego Śląska',
    nameLocative: 'Dolnym Śląsku',
    postalCode: '50-001',
    lat: 51.1079,
    lng: 17.0385,
    region: 'województwo dolnośląskie',
    population: '~2 900 000',
    metaTitle: 'Tworzenie Stron Internetowych Dolnośląskie | WebGoat',
    metaDescription:
      'Profesjonalne tworzenie stron internetowych dla firm z województwa dolnośląskiego. Strony WWW, sklepy online, SEO lokalny. Obsługujemy Wrocław, Świdnicę, Kłodzko i cały Dolny Śląsk. ☎ +48 883 821 301.',
    heroTitle: 'Strony internetowe dla firm z Dolnego Śląska',
    heroSubtitle:
      'WebGoat to agencja webowa obsługująca firmy z całego województwa dolnośląskiego. Tworzymy nowoczesne strony internetowe, sklepy online i wdrażamy lokalne SEO dla przedsiębiorców z Wrocławia, Świdnicy, Kłodzka, Dzierżoniowa, Ząbkowic Śląskich, Nysy, Oławy, Trzebnicy i setek innych miejscowości Dolnego Śląska.',
    whyUs: [
      'Obsługujemy firmy z całego województwa dolnośląskiego',
      'Lokalne SEO dla każdego powiatu i miasta Dolnego Śląska',
      'Ponad 50 zrealizowanych projektów dla firm z regionu',
      'Znajomość specyfiki rynku dolnośląskiego — turystyka, przemysł, rolnictwo',
    ],
    faq: [
      {
        q: 'Czy obsługujecie firmy z całego Dolnego Śląska?',
        a: 'Tak. Tworzymy strony internetowe dla firm z Wrocławia, Świdnicy, Kłodzka, Dzierżoniowa, Ząbkowic Śląskich, Nysy, Oławy, Trzebnicy, Prusic i każdej innej miejscowości na Dolnym Śląsku. Działamy w całym województwie dolnośląskim.',
      },
      {
        q: 'Dlaczego wybrać WebGoat jako agencję webową na Dolny Śląsk?',
        a: 'Jesteśmy lokalną firmą z Dolnego Śląska — rozumiemy specyfikę regionalnego rynku, znamy lokalną konkurencję i możemy spotkać się z klientem osobiście. Łączymy jakość dużych agencji z elastycznością lokalnego partnera.',
      },
      {
        q: 'Jakie usługi oferujecie dla firm z Dolnego Śląska?',
        a: 'Oferujemy tworzenie stron internetowych, sklepów e-commerce, aplikacji webowych, pozycjonowanie SEO, web design i wsparcie techniczne. Każdą usługę wyceniamy indywidualnie i bezpłatnie.',
      },
    ],
    nearbyPlaces: ['Wrocław', 'Świdnica', 'Kłodzko', 'Dzierżoniów', 'Ząbkowice Śląskie', 'Nysa', 'Oława', 'Trzebnica', 'Prusice'],
  },
]

export default citiesData
