import CertificatesPageClient from '@/components/views/CertificatesView'
import JsonLd from '@/components/seo/JsonLd'
import CTABand from '@/components/ui/CTABand'
import { pageMetadata, breadcrumbSchema } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Certyfikaty i Kursy – Kompetencje Web Developera',
  description:
    'Certyfikaty WebGoat z zakresu tworzenia stron (HTML, CSS, JavaScript, Tailwind) i zarządzania projektami IT. Sprawdź kwalifikacje przed zamówieniem strony.',
  path: '/certyfikaty',
})

export default function CertificatesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Certyfikaty', path: '/certyfikaty' }])} />
      <CertificatesPageClient />
      <CTABand
        eyebrow="Wiedza w praktyce"
        title="Przekuję te kompetencje w stronę dla Twojej firmy"
        description="Nowoczesne technologie, dobre praktyki i zarządzanie projektem — bez przekraczania terminów i budżetu. Porozmawiajmy o Twoim projekcie."
        source="certyfikaty"
      />
    </>
  )
}
