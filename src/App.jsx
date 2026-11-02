import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SobreMi from './components/SobreMi'
import Especialidades from './components/Especialidades'
import Metodologia from './components/Metodologia'
import FAQ from './components/FAQ'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import LegalModal from './components/LegalModal'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  const [legal, setLegal] = useState(null) // 'privacidad' | 'terminos' | 'disclaimer' | null

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SobreMi />
        <Especialidades />
        <Metodologia />
        <FAQ />
        <Contacto onOpenLegal={setLegal} />
      </main>
      <Footer onOpenLegal={setLegal} />
      <WhatsAppFloat />
      <LegalModal type={legal} onClose={() => setLegal(null)} />
    </>
  )
}
