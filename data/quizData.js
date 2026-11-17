/** Konfigurator „Jakiej strony potrzebujesz?": pytania, rekomendacje i reguła wyboru. */
export const steps = [
  {
    question: 'Jaki jest główny cel Twojej nowej strony internetowej?',
    options: [
      { label: 'Sprzedaż produktów fizycznych lub cyfrowych online.' },
      { label: 'Zaprezentowanie firmy, usług i budowa wizerunku.' },
      { label: 'Szybkie zebranie kontaktów lub sprzedaż jednego, konkretnego produktu.' },
      { label: 'Dzielenie się wiedzą, publikacja artykułów i aktualności.' },
      { label: 'Zbudowanie nietypowego narzędzia lub platformy dla użytkowników.' },
    ],
  },
  {
    question: 'Ile podstron, zakładek lub produktów planujesz umieścić na stronie?',
    options: [
      { label: 'Całość ma się znaleźć na jednej, długiej stronie (tzw. One-Pager).' },
      { label: 'Niewiele – od 2 do 10 podstawowych zakładek lub produktów.' },
      { label: 'Średnio – od 11 do 50 zakładek lub produktów.' },
      { label: 'Bardzo dużo – rozbudowana struktura (powyżej 50).' },
      { label: 'Jeszcze nie wiem, chętnie zdam się na Wasze doradztwo.' },
    ],
  },
  {
    question: 'Z jakiej funkcji Twoi klienci będą korzystać najczęściej?',
    options: [
      { label: 'Wypełnianie formularza kontaktowego / rezerwacja usług.' },
      { label: 'Przeglądanie katalogu, dodawanie do koszyka i płatności online.' },
      { label: 'Oglądanie galerii zdjęć i portfolio Twoich dotychczasowych realizacji.' },
      { label: 'Czytanie i wyszukiwanie treści / przeglądanie bazy wiedzy.' },
      { label: 'Zaawansowane funkcje wymagające logowania lub integracji z innymi systemami.' },
    ],
  },
  {
    question: 'Czy posiadasz już materiały potrzebne do stworzenia strony?',
    note: 'To pytanie pomaga ocenić, czy potrzebujesz usług dodatkowych, jak copywriting czy branding.',
    options: [
      { label: 'Mam wszystko – profesjonalne logo, gotowe teksty i zdjęcia.' },
      { label: 'Mam logo i identyfikację wizualną, ale potrzebuję pomocy z tekstami.' },
      { label: 'Mam świetne teksty, ale brakuje mi nowoczesnego designu i zdjęć.' },
      { label: 'Mam starą stronę internetową, którą trzeba całkowicie przebudować.' },
      { label: 'Nie mam nic – zaczynamy od zera, potrzebuję kompleksowej obsługi.' },
    ],
  },
  {
    question: 'Kiedy nowa strona powinna oficjalnie wystartować?',
    note: 'Pozwala to zidentyfikować "gorące" leady.',
    options: [
      { label: 'Pilnie! Chcę ruszyć w ciągu najbliższych 2 tygodni.' },
      { label: 'Zależy mi na sprawnym wdrożeniu (1–2 miesiące).' },
      { label: 'Mamy czas na spokojną pracę (3–6 miesięcy).' },
      { label: 'Czas nie gra roli, priorytetem jest najwyższa jakość i dopracowanie detali.' },
      { label: 'Dopiero badam rynek i wyceny, nie mam sztywnego terminu.' },
    ],
  },
]

export const results = {
  A: {
    title: 'Zoptymalizowany Sklep Internetowy (E-commerce)',
    description:
      'Z Twoich odpowiedzi wynika, że potrzebujesz platformy sprzedażowej, która nie tylko świetnie wygląda, ale przede wszystkim bezpiecznie i szybko sprzedaje. Stworzymy dla Ciebie sklep internetowy wyposażony w zintegrowane płatności, wygodny koszyk i intuicyjny panel zarządzania produktami. Niezależnie od tego, czy masz kilka produktów, czy tysiące – zaprojektujemy proces zakupowy tak, aby maksymalizował Twoje zyski.',
    cta: 'Porozmawiajmy o moim sklepie',
    subject: 'Zapytanie – Sklep Internetowy (E-commerce)',
  },
  B: {
    title: 'Profesjonalna Strona Firmowa',
    description:
      'Potrzebujesz wirtualnej wizytówki, która natychmiast zbuduje zaufanie i pokaże Twój profesjonalizm. Rekomendujemy stworzenie nowoczesnej strony firmowej. Wyeksponujemy Twoje usługi, zaprezentujemy portfolio i zadbamy o to, aby formularz kontaktowy przyciągał jak najwięcej zapytań od nowych klientów. Całość zoptymalizujemy pod kątem szybkiego ładowania i widoczności w Google.',
    cta: 'Odbierz darmową koncepcję strony',
    subject: 'Zapytanie – Strona Firmowa',
  },
  C: {
    title: 'Konwertujący Landing Page',
    description:
      'Twój cel jest jasny: maksymalna konwersja. Nie potrzebujesz rozbudowanego serwisu, ale jednej, perfekcyjnie zaprojektowanej strony (One-Pager / Landing Page), która poprowadzi użytkownika prosto do celu – zapisu na newsletter, pobrania e-booka lub zakupu flagowego produktu. Skupimy się na perswazyjnym układzie, silnych wezwaniach do działania (CTA) i błyskawicznym ładowaniu.',
    cta: 'Zróbmy Landing Page, który sprzedaje',
    subject: 'Zapytanie – Landing Page',
  },
  D: {
    title: 'Nowoczesny Blog lub Portal Wizerunkowy',
    description:
      'Twój biznes opiera się na wiedzy i treściach. Zaprojektujemy dla Ciebie portal lub bloga, który będzie nie tylko przyjazny dla oka, ale przede wszystkim wygodny dla czytelników i zoptymalizowany pod wyszukiwarki (SEO). Wdrożymy czytelny podział na kategorie, szybką wyszukiwarkę artykułów oraz prosty system zarządzania treścią (CMS), aby publikacja nowych wpisów była czystą przyjemnością.',
    cta: 'Porozmawiajmy o moim portalu',
    subject: 'Zapytanie – Blog / Portal',
  },
  E: {
    title: 'Dedykowana Aplikacja Webowa',
    description:
      'Standardowe rozwiązania to dla Ciebie za mało. Twój projekt wymaga indywidualnego podejścia, specyficznych funkcjonalności (np. logowania, zaawansowanych paneli użytkownika) lub integracji z zewnętrznymi bazami danych i oprogramowaniem. Rekomendujemy stworzenie systemu "szytego na miarę", który w 100% odpowie na unikalne procesy w Twojej firmie.',
    cta: 'Umów darmową konsultację techniczną',
    subject: 'Zapytanie – Aplikacja Webowa / Projekt Dedykowany',
  },
}

export function getResult(answers) {
  const step1 = answers[0]
  const step2 = answers[1]
  const step3 = answers[2]
  if (step1 === 0 || step3 === 1) return 'A'
  if (step1 === 4 || step3 === 4) return 'E'
  if (step1 === 3 || step3 === 3) return 'D'
  if (step1 === 2 || step2 === 0) return 'C'
  return 'B'
}

export const stepLabels = ['Cel', 'Skala', 'Funkcje', 'Materiały', 'Czas']
