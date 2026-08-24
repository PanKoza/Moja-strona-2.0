import CertificatesPageClient from '../../components/CertificatesPage'

export const metadata = {
  title: 'Certyfikaty',
  description:
    'Certyfikaty i ukończone kursy potwierdzające kompetencje WebGoat w zakresie tworzenia stron internetowych, SEO i zarządzania projektami.',
  alternates: {
    canonical: 'https://webgoat.pl/certyfikaty',
  },
  openGraph: {
    url: 'https://webgoat.pl/certyfikaty',
  },
}

export default function CertificatesPage() {
  return <CertificatesPageClient />
}
