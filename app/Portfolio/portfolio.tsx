'use client'
import Contact from './contact'
import About from './about'
import Header from './header'
import Footer from './footer'

export default function PortfolioPage() {
  return (
    <div className="min-h-screen   text-foreground antialiased">
      <Header />

      <About />
      <Contact />

      <Footer />
    </div>
  )
}
