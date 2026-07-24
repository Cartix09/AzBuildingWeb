import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { ServiceDetail } from './pages/ServiceDetail'
import { Projects } from './pages/Projects'
import { ProjectDetail } from './pages/ProjectDetail'
import { Customers } from './pages/Customers'
import { Partners } from './pages/Partners'
import { Contact } from './pages/Contact'
import { WordmarkPreview } from './pages/WordmarkPreview'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-deep">
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:bg-orange-brand focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          {/* Preview-only comparison page for the 3 wordmark image options */}
          <Route path="/wordmark-preview" element={<WordmarkPreview />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
