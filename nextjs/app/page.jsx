import HeroSection from '../components/HeroSection'
import WebsiteQuiz from '../components/WebsiteQuiz'
import PromoSection from '../components/PromoSection'
import ServicesSection from '../components/ServicesSection'
import WhyWebsiteTeaser from '../components/WhyWebsiteTeaser'
import AboutSection from '../components/AboutSection'
import ProcessSection from '../components/ProcessSection'
import ContactSection from '../components/ContactSection'
import ScrollToHash from '../components/ScrollToHash'

export const metadata = {
  alternates: {
    canonical: 'https://webgoat.pl',
  },
}

export default function HomePage() {
  return (
    <>
      <ScrollToHash />
      <HeroSection />
      <WebsiteQuiz />
      <PromoSection />
      <ServicesSection />
      <WhyWebsiteTeaser />
      <AboutSection />
      <ProcessSection />
      <ContactSection />
    </>
  )
}
