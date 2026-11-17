import WhyWebsitePageClient from '@/components/views/WhyWebsiteView'
import WebsiteQuiz from '@/components/sections/WebsiteQuiz'
import JsonLd from '@/components/seo/JsonLd'
import { pageMetadata, breadcrumbSchema, faqSchema, absoluteUrl, BUSINESS_ID, OG_IMAGE } from '@/lib/seo'
import whyWebsiteFaq from '@/data/whyWebsiteFaq'

const PATH = '/dlaczego-strona-internetowa'
const TITLE = 'Dlaczego Warto Mieć Stronę Internetową? Korzyści dla Firmy'
const DESCRIPTION =
  'Ile może zyskać Twoja firma dzięki stronie WWW? Więcej klientów z Google, wiarygodność i przewaga nad konkurencją. Strona wizytówkowa już od 1500 zł.'

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH, type: 'article' })

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: TITLE,
  description: DESCRIPTION,
  image: absoluteUrl(OG_IMAGE.url),
  datePublished: '2026-07-06',
  dateModified: '2026-11-17',
  inLanguage: 'pl-PL',
  author: { '@id': BUSINESS_ID },
  publisher: { '@id': BUSINESS_ID },
  mainEntityOfPage: absoluteUrl(PATH),
}

export default function WhyWebsitePage() {
  return (
    <>
      <JsonLd
        data={[articleSchema, breadcrumbSchema([{ name: 'Dlaczego strona internetowa?', path: PATH }]), faqSchema(whyWebsiteFaq)]}
      />
      <WhyWebsitePageClient />
      <WebsiteQuiz />
    </>
  )
}
