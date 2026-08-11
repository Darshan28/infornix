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
        <a href="#top" className="brand" onClick={close} aria-label="Infornix Technologies home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" rx="5" fill="currentColor" />
              <path
                d="M9 25V11h3.6l3.85 9.3L20.3 11H24v14h-2.9V16.6L17.6 25h-2.95L11.15 16.6V25H9z"
                fill="#eef2f4"
              />
              <path d="M26 25v-3.2h2V25h-2z" fill="#3db8a8" />
            </svg>
          </span>
          <span className="brand-text">
            <span className="brand-name">Infornix</span>
            <span className="brand-sub">Technologies</span>
          </span>
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#solutions">Solutions</a>
          <a href="#serve">Who we serve</a>
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
