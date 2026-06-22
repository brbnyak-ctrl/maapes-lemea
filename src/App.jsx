import { useEffect, useState } from 'react'
import useScrollReveal from './hooks/useScrollReveal.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Advantages from './components/Advantages.jsx'
import About from './components/About.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import AreaMap from './components/AreaMap.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  useScrollReveal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <Advantages />
        <About />
        <HowItWorks />
        <AreaMap />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
