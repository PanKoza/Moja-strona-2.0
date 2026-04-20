import { HiCode, HiShoppingCart, HiSearchCircle, HiDeviceMobile, HiColorSwatch, HiSupport } from 'react-icons/hi'

const servicesData = [
  {
    slug: 'strony-internetowe',
    icon: HiCode,
    title: 'Strony internetowe',
    shortDesc: 'Responsywne, szybkie i nowoczesne strony WWW dopasowane do potrzeb Twojej firmy w Ząbkowicach Śląskich.',
    color: 'from-primary-500 to-primary-400',
    heroGradient: 'from-primary-800 via-primary-900 to-dark',
    metaTitle: 'Tworzenie Stron Internetowych – Ząbkowice Śląskie | WebGoat',
    metaDescription: 'Profesjonalne tworzenie stron internetowych w Ząbkowicach Śląskich. Responsywne, szybkie i zoptymalizowane pod SEO strony WWW dla Twojej firmy.',
    headline: 'Nowoczesne strony internetowe, które sprzedają',
    intro: 'Tworzymy strony internetowe, które nie tylko świetnie wyglądają, ale przede wszystkim realizują cele biznesowe. Każdy projekt to połączenie atrakcyjnego designu, najnowszych technologii i sprawdzonych praktyk SEO — szczególnie pod kątem widoczności w Ząbkowicach Śląskich i na Dolnym Śląsku.',
    features: [
      {
        title: 'Responsywny design',
        description: 'Twoja strona będzie doskonale wyglądać na każdym urządzeniu — smartfonie, tablecie i komputerze. Ponad 70% użytkowników przegląda internet na telefonach.',
      },
      {
        title: 'Błyskawiczne ładowanie',
        description: 'Optymalizujemy każdy element strony pod kątem szybkości. Czas ładowania poniżej 2 sekund to standard, który gwarantujemy.',
      },
      {
        title: 'SEO od podstaw',
        description: 'Każda strona jest budowana z myślą o wyszukiwarkach. Prawidłowa struktura nagłówków, meta tagi, Schema.org i lokalne SEO na Ząbkowice Śląskie.',
      },
      {
        title: 'System CMS',
        description: 'Intuicyjny panel administracyjny, który pozwoli Ci samodzielnie edytować treści, dodawać zdjęcia i zarządzać stroną bez wiedzy technicznej.',
      },
      {
        title: 'Certyfikat SSL',
        description: 'Bezpłatny certyfikat SSL zapewniający bezpieczeństwo danych użytkowników i lepszą pozycję w Google.',
      },
      {
        title: 'Analityka i raportowanie',
        description: 'Integracja z Google Analytics i Search Console, dzięki czemu będziesz dokładnie wiedzieć, jak Twoja strona performuje.',
      },
    ],
    process: [
      'Analiza potrzeb i briefing projektowy',
      'Projektowanie makiet UX/UI',
      'Kodowanie i implementacja',
      'Testowanie na różnych urządzeniach',
      'Optymalizacja SEO i wydajności',
      'Wdrożenie i szkolenie z obsługi',
    ],
    technologies: ['React', 'Next.js', 'WordPress', 'Tailwind CSS', 'Node.js', 'Figma'],
    faq: [
      { q: 'Ile kosztuje strona internetowa?', a: 'Cena zależy od zakresu projektu. Proste strony wizytówkowe zaczynają się od 2000 zł, a rozbudowane serwisy od 5000 zł. Każdą wycenę przygotowujemy indywidualnie.' },
      { q: 'Jak długo trwa tworzenie strony?', a: 'Typowa strona firmowa powstaje w 2-4 tygodnie. Bardziej rozbudowane projekty mogą zająć 4-8 tygodni. Zawsze ustalamy konkretny harmonogram.' },
      { q: 'Czy mogę samodzielnie edytować treści?', a: 'Oczywiście! Każda strona wyposażona jest w intuicyjny panel CMS, a do tego przeprowadzamy szkolenie z obsługi.' },
      { q: 'Czy zajmujecie się hostingiem?', a: 'Tak, oferujemy kompleksową obsługę hostingu i domeny. Możemy też wdrożyć stronę na Twoim istniejącym serwerze.' },
    ],
  },
  {
    slug: 'sklepy-internetowe',
    icon: HiShoppingCart,
    title: 'Sklepy internetowe',
    shortDesc: 'Funkcjonalne sklepy e-commerce z integracją płatności online i zarządzaniem produktami.',
    color: 'from-accent-500 to-accent-400',
    heroGradient: 'from-orange-900 via-orange-950 to-dark',
    metaTitle: 'Sklepy Internetowe – E-commerce Ząbkowice Śląskie | WebGoat',
    metaDescription: 'Tworzymy profesjonalne sklepy internetowe z integracją płatności i logistyki. Rozwiązania e-commerce dla firm z Ząbkowic Śląskich i Dolnego Śląska.',
    headline: 'Sklepy internetowe, które generują sprzedaż',
    intro: 'Projektujemy i wdrażamy sklepy internetowe z pełną integracją płatności, logistyki i systemów magazynowych. Nasze rozwiązania e-commerce są zoptymalizowane pod konwersję — każdy element interfejsu jest zaprojektowany tak, aby ułatwić klientowi zakup.',
    features: [
      {
        title: 'Integracja płatności',
        description: 'Przelewy24, PayU, BLIK, karty płatnicze — udostępniamy wszystkie popularne metody płatności, dzięki którym klienci mogą wygodnie płacić online.',
      },
      {
        title: 'Zarządzanie produktami',
        description: 'Rozbudowany panel do dodawania produktów, wariantów, zdjęć, opisów i cen. Import/eksport katalogów z plików CSV i integracja z hurtowniami.',
      },
      {
        title: 'Koszyk i checkout',
        description: 'Zoptymalizowany proces zakupowy z minimalną liczbą kroków. Porzucony koszyk? Automatyczne e-maile przypominające o dokończeniu zakupu.',
      },
      {
        title: 'Logistyka i wysyłka',
        description: 'Integracja z firmami kurierskimi (InPost, DPD, DHL), automatyczne generowanie etykiet i śledzenie przesyłek.',
      },
      {
        title: 'Programy lojalnościowe',
        description: 'Kody rabatowe, punkty lojalnościowe, zestawy produktów i promocje czasowe, które zwiększają lojalność klientów.',
      },
      {
        title: 'Raporty sprzedażowe',
        description: 'Szczegółowe statystyki sprzedaży, najpopularniejsze produkty, analiza zachowań klientów i automatyczne raporty.',
      },
    ],
    process: [
      'Analiza asortymentu i modelu biznesowego',
      'Projekt UX sklepu i ścieżki zakupowej',
      'Wdrożenie platformy e-commerce',
      'Integracja płatności i logistyki',
      'Testowanie procesu zakupowego',
      'Migracja danych i uruchomienie',
    ],
    technologies: ['Shopify', 'WooCommerce', 'React', 'Stripe', 'Przelewy24', 'Node.js'],
    faq: [
      { q: 'Jaka platforma e-commerce jest najlepsza?', a: 'To zależy od skali biznesu. Dla mniejszych sklepów polecamy WooCommerce, dla średnich Shopify, a dla dużych — rozwiązania custom. Doradzimy najlepszą opcję.' },
      { q: 'Czy mogę sprzedawać za granicą?', a: 'Tak, tworzymy sklepy wielojęzyczne i wielowalutowe z obsługą międzynarodowych metod płatności i logistyki.' },
      { q: 'Ile produktów może obsłużyć sklep?', a: 'Nasze rozwiązania obsługują od kilkudziesięciu do setek tysięcy produktów bez utraty wydajności.' },
      { q: 'Czy pomagacie z marketingiem sklepu?', a: 'Tak, oferujemy SEO dla e-commerce, kampanie Google Ads i optymalizację konwersji jako dodatkowe usługi.' },
    ],
  },
  {
    slug: 'pozycjonowanie-seo',
    icon: HiSearchCircle,
    title: 'Pozycjonowanie SEO',
    shortDesc: 'Wyższa pozycja w Google dla Twojej firmy. Lokalne SEO na Ząbkowice Śląskie i okolice.',
    color: 'from-green-500 to-emerald-400',
    heroGradient: 'from-emerald-900 via-emerald-950 to-dark',
    metaTitle: 'Pozycjonowanie SEO – Ząbkowice Śląskie | WebGoat',
    metaDescription: 'Skuteczne pozycjonowanie stron internetowych w Ząbkowicach Śląskich. Lokalne SEO, optymalizacja treści i link building. Wyższe pozycje w Google.',
    headline: 'Bądź na szczycie wyników wyszukiwania Google',
    intro: 'Pozycjonowanie SEO to inwestycja, która przynosi długoterminowe korzyści. Specjalizujemy się w lokalnym SEO na Ząbkowice Śląskie i cały Dolny Śląsk — pomagamy firmom z regionu zajmować czołowe miejsca w wynikach wyszukiwania Google i przyciągać klientów z okolicy.',
    features: [
      {
        title: 'Lokalne SEO',
        description: 'Optymalizacja pod frazy lokalne: "usługa + Ząbkowice Śląskie". Google Business Profile, lokalne katalogi, NAP consistency.',
      },
      {
        title: 'Audyt SEO',
        description: 'Kompleksowa analiza techniczna strony, struktury linków, szybkości ładowania, UX i treści. Raport z konkretnymi rekomendacjami.',
      },
      {
        title: 'Optymalizacja on-page',
        description: 'Meta tagi, nagłówki H1-H6, struktura URL, linkowanie wewnętrzne, Schema.org, optymalizacja grafik i Core Web Vitals.',
      },
      {
        title: 'Content marketing',
        description: 'Wartościowe treści blogowe zoptymalizowane pod SEO, które budują autorytet domeny i przyciągają ruch organiczny.',
      },
      {
        title: 'Link building',
        description: 'Naturalny profil linków z wartościowych źródeł. Publikacje sponsorowane, artykuły gościnne i PR cyfrowy.',
      },
      {
        title: 'Comiesięczne raporty',
        description: 'Przejrzyste raporty z pozycji fraz kluczowych, ruchu organicznego, konwersji i wykonanych działań.',
      },
    ],
    process: [
      'Audyt SEO obecnej strony',
      'Analiza słów kluczowych i konkurencji',
      'Optymalizacja techniczna strony',
      'Tworzenie i optymalizacja treści',
      'Budowanie profilu linków',
      'Monitoring i raportowanie wyników',
    ],
    technologies: ['Google Search Console', 'Google Analytics', 'Ahrefs', 'Screaming Frog', 'Schema.org', 'PageSpeed'],
    faq: [
      { q: 'Jak szybko zobaczę efekty SEO?', a: 'Pierwsze efekty pojawiają się zwykle po 2-3 miesiącach, ale pełne rezultaty widoczne są po 6-12 miesiącach. SEO to strategia długoterminowa.' },
      { q: 'Czy gwarantujecie pierwszą pozycję w Google?', a: 'Nikt uczciwy nie może tego zagwarantować. Natomiast gwarantujemy profesjonalną pracę i znaczną poprawę widoczności Twojej strony.' },
      { q: 'Ile kosztuje pozycjonowanie?', a: 'Miesięczne pakiety zaczynają się od 1500 zł dla lokalnego SEO. Wycena zależy od konkurencyjności branży i zakresu działań.' },
      { q: 'Czy SEO działa dla małych firm?', a: 'Zdecydowanie tak! Dla małych firm z Ząbkowic Śląskich lokalne SEO jest szczególnie opłacalne, bo konkurencja jest mniejsza niż w dużych miastach.' },
    ],
  },
  {
    slug: 'aplikacje-webowe',
    icon: HiDeviceMobile,
    title: 'Aplikacje webowe',
    shortDesc: 'Zaawansowane aplikacje internetowe i systemy na miarę Twoich potrzeb biznesowych.',
    color: 'from-violet-500 to-purple-400',
    heroGradient: 'from-violet-900 via-purple-950 to-dark',
    metaTitle: 'Aplikacje Webowe – Tworzenie Systemów | WebGoat Ząbkowice Śląskie',
    metaDescription: 'Projektujemy i wdrażamy zaawansowane aplikacje webowe, panele administracyjne i systemy dedykowane. Nowoczesne technologie, sprawdzone rozwiązania.',
    headline: 'Dedykowane aplikacje webowe dla Twojego biznesu',
    intro: 'Tworzymy zaawansowane aplikacje internetowe, które automatyzują procesy biznesowe, usprawniają pracę zespołów i dostarczają wartość Twoim klientom. Od paneli administracyjnych po kompleksowe systemy SaaS — realizujemy projekty każdej skali.',
    features: [
      {
        title: 'Panele administracyjne',
        description: 'Intuicyjne dashboardy z wizualizacją danych, zarządzaniem użytkownikami i konfiguracją systemu.',
      },
      {
        title: 'Systemy rezerwacji',
        description: 'Moduły do rezerwacji terminów, zasobów i usług z kalendarzem, powiadomieniami i integracją z kalendarzami zewnętrznymi.',
      },
      {
        title: 'API i integracje',
        description: 'Łączymy aplikacje z zewnętrznymi systemami — CRM, ERP, płatności, logistyka, e-mail marketing i inne.',
      },
      {
        title: 'Aplikacje w czasie rzeczywistym',
        description: 'Chat, powiadomienia push, aktualizacje na żywo — technologie WebSocket dla dynamicznych interakcji.',
      },
      {
        title: 'Autoryzacja i bezpieczeństwo',
        description: 'Wielopoziomowe systemy uprawnień, uwierzytelnianie dwuskładnikowe (2FA), szyfrowanie danych i audyt bezpieczeństwa.',
      },
      {
        title: 'Skalowalność',
        description: 'Architektura przygotowana na wzrost. Mikroserwisy, cloud hosting i load balancing zapewniają niezawodność przy dużym ruchu.',
      },
    ],
    process: [
      'Warsztaty discovery i analiza wymagań',
      'Projektowanie architektury systemu',
      'Prototypowanie i UX design',
      'Rozwój iteracyjny (Agile/Scrum)',
      'Testy jednostkowe i integracyjne',
      'Wdrożenie i szkolenie zespołu',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS'],
    faq: [
      { q: 'Czym różni się aplikacja webowa od strony?', a: 'Aplikacja webowa to interaktywny system z logiką biznesową — użytkownicy logują się, wykonują operacje, zarządzają danymi. To jak program, ale działający w przeglądarce.' },
      { q: 'Ile kosztuje aplikacja webowa?', a: 'Proste aplikacje zaczynają się od 10 000 zł, a złożone systemy mogą kosztować 50 000 zł i więcej. Wszystko zależy od zakresu funkcjonalności.' },
      { q: 'Czy mogę rozwijać aplikację etapami?', a: 'Tak! Zalecamy podejście MVP — zaczynamy od kluczowych funkcji, a potem iteracyjnie dodajemy kolejne moduły.' },
      { q: 'Kto będzie właścicielem kodu?', a: 'Ty. Po zakończeniu projektu przekazujemy pełne prawa do kodu źródłowego i dokumentację.' },
    ],
  },
  {
    slug: 'branding-design',
    icon: HiColorSwatch,
    title: 'Branding & Design',
    shortDesc: 'Identyfikacja wizualna, logotypy i spójny design, który wyróżni Twoją markę.',
    color: 'from-pink-500 to-rose-400',
    heroGradient: 'from-pink-900 via-rose-950 to-dark',
    metaTitle: 'Branding i Design – Identyfikacja Wizualna | WebGoat Ząbkowice Śląskie',
    metaDescription: 'Projektowanie logotypów, identyfikacji wizualnej i spójnego brandingu dla firm z Ząbkowic Śląskich. Wyróżnij swoją markę profesjonalnym designem.',
    headline: 'Silna marka zaczyna się od wyjątkowego designu',
    intro: 'Identyfikacja wizualna to fundament komunikacji Twojej marki. Projektujemy logotypy, systemy kolorów, typografię i materiały marketingowe, które tworzą spójny i profesjonalny wizerunek Twojej firmy w Ząbkowicach Śląskich i poza nimi.',
    features: [
      {
        title: 'Projektowanie logotypów',
        description: 'Unikalne logotypy, które oddają charakter Twojej marki. Dostarczamy pliki w formatach wektorowych, gotowe do druku i użycia online.',
      },
      {
        title: 'Księga znaku',
        description: 'Kompleksowy dokument definiujący zasady użycia logo, palety kolorów, typografii i elementów graficznych marki.',
      },
      {
        title: 'UI/UX Design',
        description: 'Projektowanie interfejsów użytkownika z naciskiem na intuicyjność, dostępność i nowoczesną estetykę.',
      },
      {
        title: 'Materiały marketingowe',
        description: 'Wizytówki, ulotki, banery, prezentacje firmowe i grafiki do social media — wszystko w spójnej stylistyce marki.',
      },
      {
        title: 'Projekt ikony i ilustracje',
        description: 'Dedykowane zestawy ikon, ilustracje i grafiki wektorowe dopasowane do tożsamości wizualnej Twojej marki.',
      },
      {
        title: 'Spójność cross-channel',
        description: 'Zapewniamy, że Twoja marka wygląda profesjonalnie i spójnie na stronie internetowej, w mediach społecznościowych i w materiałach drukowanych.',
      },
    ],
    process: [
      'Brief kreatywny i analiza marki',
      'Moodboard i koncepcje wizualne',
      'Projekt logotypu (3 propozycje)',
      'Iteracja i dopracowanie wybranego kierunku',
      'Akceptacja i przygotowanie plików',
      'Dostarczenie księgi znaku',
    ],
    technologies: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'After Effects', 'Canva Pro', 'Midjourney'],
    faq: [
      { q: 'Ile kosztuje projekt logo?', a: 'Projekt logotypu z 3 propozycjami i poprawkami zaczyna się od 1500 zł. Pełny branding z księgą znaku to od 4000 zł.' },
      { q: 'Ile propozycji logo dostaję?', a: 'Standardowo przygotowujemy 3 koncepcje. Wybierasz jedną, po czym dopracowujemy ją w ramach 2-3 rund poprawek.' },
      { q: 'W jakich formatach dostaję logo?', a: 'Dostarczamy pliki SVG, AI, EPS (wektorowe), PNG z przezroczystym tłem oraz wersje dla social media.' },
      { q: 'Czy projektujecie też materiały drukowane?', a: 'Tak, projektujemy wizytówki, ulotki, banery, foldery i inne materiały drukowane z przygotowaniem do druku.' },
    ],
  },
  {
    slug: 'wsparcie-techniczne',
    icon: HiSupport,
    title: 'Wsparcie techniczne',
    shortDesc: 'Stała opieka, aktualizacje i utrzymanie Twojej strony internetowej.',
    color: 'from-cyan-500 to-sky-400',
    heroGradient: 'from-cyan-900 via-sky-950 to-dark',
    metaTitle: 'Wsparcie Techniczne i Opieka nad Stroną | WebGoat Ząbkowice Śląskie',
    metaDescription: 'Profesjonalna opieka techniczna nad stroną internetową. Aktualizacje, monitorowanie, kopie zapasowe i szybkie naprawy. WebGoat Ząbkowice Śląskie.',
    headline: 'Twoja strona w profesjonalnych rękach',
    intro: 'Strona internetowa wymaga regularnej opieki, aby działać bezawaryjnie i pozostać bezpieczna. Oferujemy pakiety wsparcia technicznego, które obejmują aktualizacje, monitorowanie, tworzenie kopii zapasowych i szybkie reagowanie na problemy.',
    features: [
      {
        title: 'Regularne aktualizacje',
        description: 'Aktualizacja CMS, wtyczek, bibliotek i zależności. Zapobiegamy lukom bezpieczeństwa i dbamy o kompatybilność.',
      },
      {
        title: 'Monitorowanie 24/7',
        description: 'Automatyczny monitoring dostępności strony. W przypadku awarii reagujemy natychmiast — nawet zanim zauważysz problem.',
      },
      {
        title: 'Kopie zapasowe',
        description: 'Codzienne automatyczne backupy z możliwością przywrócenia strony w ciągu godziny. Bezpieczeństwo danych to priorytet.',
      },
      {
        title: 'Optymalizacja wydajności',
        description: 'Regularna analiza szybkości ładowania, optymalizacja grafik, cache\'owanie i tuning serwera dla najlepszej wydajności.',
      },
      {
        title: 'Wsparcie contentowe',
        description: 'Pomoc w aktualizacji treści, dodawanie nowych podstron, wpisów blogowych i materiałów multimedialnych.',
      },
      {
        title: 'Priorytetowe naprawy',
        description: 'Gwarantowany czas reakcji. Krytyczne problemy rozwiązujemy w ciągu 4 godzin, standardowe zgłoszenia w ciągu 24 godzin.',
      },
    ],
    process: [
      'Audyt obecnego stanu strony',
      'Konfiguracja systemów monitoringu',
      'Ustawienie automatycznych backupów',
      'Aktualizacja i optymalizacja',
      'Comiesięczny raport z wykonanych prac',
      'Stała gotowość i szybka reakcja',
    ],
    technologies: ['UptimeRobot', 'Google PageSpeed', 'WordPress', 'cPanel', 'Git', 'Cloudflare'],
    faq: [
      { q: 'Ile kosztuje opieka nad stroną?', a: 'Pakiety zaczynają się od 300 zł/miesiąc za podstawową opiekę. Pakiet premium z priorytetowym wsparciem to 800 zł/miesiąc.' },
      { q: 'Czy mogę sam zarządzać stroną?', a: 'Oczywiście! Opieka techniczna nie ogranicza Twojego dostępu. Zajmujemy się backendem, a Ty swobodnie zarządzasz treściami.' },
      { q: 'Co się stanie jak moja strona padnie?', a: 'Nasz monitoring natychmiast nas powiadomi. W ciągu 4 godzin przywrócimy stronę z kopii zapasowej. Zwykle problem rozwiązujemy szybciej.' },
      { q: 'Czy obsługujecie strony zrobione przez innych?', a: 'Tak, chętnie przejmujemy opiekę nad istniejącymi projektami. Zaczynamy od audytu technicznego, aby ocenić stan strony.' },
    ],
  },
]

export default servicesData
