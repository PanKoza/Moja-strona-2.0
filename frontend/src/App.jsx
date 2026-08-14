import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import AboutSection from './components/AboutSection'
import ProcessSection from './components/ProcessSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import ServicePage from './components/ServicePage'
import LocalCityPage from './components/LocalCityPage'
import ScrollToHash from './components/ScrollToHash'
import PromoSection from './components/PromoSection'
import WhyWebsiteTeaser from './components/WhyWebsiteTeaser'
import WhyWebsitePage from './components/WhyWebsitePage'
import PortfolioPage from './components/PortfolioPage'
import CertificatesPage from './components/CertificatesPage'
import FloatingContact from './components/FloatingContact'
import CookieConsent from './components/CookieConsent'
import WebsiteQuiz from './components/WebsiteQuiz'

function HomePage() {
  return (
    <>
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

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-dark text-gray-200">
          <Navbar />
          <ScrollToHash />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/uslugi/:slug" element={<><ServicePage /><WebsiteQuiz /></>} />
              <Route path="/lokalizacja/:city" element={<><LocalCityPage /><WebsiteQuiz /></>} />
              <Route path="/dlaczego-strona-internetowa" element={<><WhyWebsitePage /><WebsiteQuiz /></>} />
              <Route path="/portfolio" element={<><PortfolioPage /><WebsiteQuiz /></>} />
              <Route path="/certyfikaty" element={<><CertificatesPage /><WebsiteQuiz /></>} />
            </Routes>
          </main>
          <Footer />
          <FloatingContact />
          <CookieConsent />
          <Analytics />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App