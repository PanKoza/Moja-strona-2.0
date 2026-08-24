import WhyWebsitePageClient from '../../components/WhyWebsitePage'
import WebsiteQuiz from '../../components/WebsiteQuiz'

export const metadata = {
  title: 'Dlaczego warto mieć stronę internetową?',
  description:
    'Strona internetowa to must-have każdej firmy. Dowiedz się, ile możesz zyskać dzięki profesjonalnej stronie WWW i SEO — więcej klientów, większa wiarygodność i przewaga nad konkurencją. Strona wizytówkowa już od 750 zł!',
  keywords: [
    'dlaczego warto mieć stronę internetową',
    'korzyści ze strony www',
    'strona internetowa dla firmy',
    'SEO dla małej firmy',
    'strona wizytówkowa 750 zł',
  ],
  alternates: {
    canonical: 'https://webgoat.pl/dlaczego-strona-internetowa',
  },
  openGraph: {
    url: 'https://webgoat.pl/dlaczego-strona-internetowa',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dlaczego warto mieć stronę internetową? Korzyści dla Twojej firmy',
  description: 'Profesjonalna strona internetowa zwiększa liczbę klientów, buduje wiarygodność i zapewnia widoczność w Google 24/7.',
  author: { '@type': 'Organization', name: 'WebGoat' },
  publisher: { '@type': 'Organization', name: 'WebGoat', url: 'https://webgoat.pl' },
  mainEntityOfPage: 'https://webgoat.pl/dlaczego-strona-internetowa',
}

export default function WhyWebsitePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <WhyWebsitePageClient />
      <WebsiteQuiz />
    </>
  )
}
