import { useEffect, useState } from 'react'
import './Header.css'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="wrap header-inner">
        <a href="#top" className="brand" onClick={close} aria-label="Infornix Technologies — home">
          <img
            className="brand-mark"
            src="/logo-64.png"
            alt="Infornix Technologies logo"
            width={40}
            height={40}
            decoding="async"
          />
          <span className="brand-text">
            <span className="brand-name">Infornix</span>
            <span className="brand-sub">Technologies</span>
          </span>
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#solutions">Solutions</a>
          <a href="#serve">Who we serve</a>
          <a href="#faq">FAQs</a>
          <a href="#visit">Visit</a>
        </nav>

        <a className="header-cta btn btn-dark" href="tel:+919739927141">
          Call us
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <nav id="mobile-nav" className="nav-mobile" aria-label="Mobile">
        <a href="#services" onClick={close}>
          Services
        </a>
        <a href="#solutions" onClick={close}>
          Solutions
        </a>
        <a href="#serve" onClick={close}>
          Who we serve
        </a>
        <a href="#faq" onClick={close}>
          FAQs
        </a>
        <a href="#visit" onClick={close}>
          Visit
        </a>
        <a className="btn btn-primary" href="tel:+919739927141" onClick={close}>
          +91 97399 27141
        </a>
      </nav>
    </header>
  )
}
