import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Solutions } from './components/Solutions'
import { Serve } from './components/Serve'
import { Visit } from './components/Visit'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Solutions />
        <Serve />
        <Visit />
      </main>
      <Footer />
    </>
  )
}
