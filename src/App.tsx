import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Solutions } from './components/Solutions'
import { Serve } from './components/Serve'
import { Faq } from './components/Faq'
import { Visit } from './components/Visit'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Solutions />
        <Serve />
        <Faq />
        <Visit />
      </main>
      <Footer />
    </>
  )
}
