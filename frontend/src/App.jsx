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

function HomePage() {
  return (
    <>
      <HeroSection />
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
              <Route path="/uslugi/:slug" element={<ServicePage />} />
              <Route path="/lokalizacja/:city" element={<LocalCityPage />} />
              <Route path="/dlaczego-strona-internetowa" element={<WhyWebsitePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
            </Routes>
          </main>
          <Footer />
          <Analytics />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App