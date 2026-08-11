import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <img
            className="footer-logo"
            src="/infornix_logo.png"
            alt="Infornix"
            width={48}
            height={48}
            decoding="async"
          />
          <div>
            <p className="footer-name">Infornix Technologies</p>
            <p className="footer-tag">IT Hardware and Service Company</p>
          </div>
        </div>

        <div className="footer-meta">
          <p className="footer-founder">Madhukar S · CEO &amp; Founder</p>
          <a href="tel:+919739927141">+91 97399 27141</a>
          <a href="mailto:techinfornix@gmail.com">techinfornix@gmail.com</a>
          <p>Kuvempunagar, Mysore — 570023</p>
        </div>

        <p className="footer-copy">© {year} Infornix Technologies</p>
      </div>
    </footer>
  )
}
