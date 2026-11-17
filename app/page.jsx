import HeroSection from '@/components/sections/HeroSection'
import TrustMarquee from '@/components/sections/TrustMarquee'
import ServicesSection from '@/components/sections/ServicesSection'
import PromoSection from '@/components/sections/PromoSection'
import PortfolioShowcase from '@/components/sections/PortfolioShowcase'
import WhyWebsiteTeaser from '@/components/sections/WhyWebsiteTeaser'
import ProcessSection from '@/components/sections/ProcessSection'
import AboutSection from '@/components/sections/AboutSection'
import WebsiteQuiz from '@/components/sections/WebsiteQuiz'
import ContactSection from '@/components/sections/ContactSection'
import ScrollToHash from '@/components/layout/ScrollToHash'
import { homeProjects } from '@/data/portfolioData'
import { SITE_URL } from '@/lib/seo'

// Tytuł, opis i Open Graph dziedziczone z layoutu — tu tylko kanoniczny adres.
export const metadata = {
  alternates: { canonical: SITE_URL },
}

// Kolejność sekcji = ścieżka klienta: obietnica → oferta → dowód → proces → zaufanie → kontakt
export default function HomePage() {
  return (
    <>
      <ScrollToHash />
      <HeroSection />
      <TrustMarquee />
      <ServicesSection />
      <PromoSection />
      <PortfolioShowcase pinned limit={6} items={homeProjects} />
      <WhyWebsiteTeaser />
      <ProcessSection />
      <AboutSection />
      <WebsiteQuiz />
      <ContactSection />
    </>
  )
}
