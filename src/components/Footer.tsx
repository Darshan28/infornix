import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <img
            className="footer-logo"
            src="/logo-128.png"
            alt="Infornix Technologies"
            width={48}
            height={48}
            decoding="async"
            loading="lazy"
          />
          <div>
            <p className="footer-name">Infornix Technologies</p>
            <p className="footer-tag">
              IT Hardware · Service · Solutions — Mysore
            </p>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <a href="#services">IT Hardware Sales</a>
          <a href="#services">IT Service</a>
          <a href="#solutions">IT Solutions</a>
          <a href="#faq">FAQs</a>
          <a href="#visit">Contact</a>
        </nav>

        <div className="footer-meta">
          <p className="footer-founder">Madhukar S · CEO &amp; Founder</p>
          <a href="tel:+919739927141">+91 97399 27141</a>
          <a href="mailto:techinfornix@gmail.com">techinfornix@gmail.com</a>
          <p>Kuvempunagar, Mysore — 570023, Karnataka</p>
        </div>

        <p className="footer-copy">
          © {year} Infornix Technologies. IT hardware sales, service &amp;
          refurbished solutions in Mysore.
        </p>
      </div>
    </footer>
  )
}
