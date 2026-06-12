import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PageLoader from './components/ui/PageLoader'

// Lazy load page components
const Home = lazy(() => import('./pages/Home'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const TeamPage = lazy(() => import('./pages/TeamPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-on-background flex flex-col">
        <Navbar />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servicios" element={<ServicesPage />} />
                <Route path="/productos" element={<ProductsPage />} />
                <Route path="/nosotros" element={<AboutPage />} />
                <Route path="/equipo" element={<TeamPage />} />
                <Route path="/contacto" element={<ContactPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
