import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <p className="footer-name">Infornix Technologies</p>
          <p className="footer-tag">Sales · Service · Refurbished IT</p>
        </div>

        <div className="footer-meta">
          <a href="tel:+919739927141">+91 97399 27141</a>
          <p>Kuvempunagar, Mysore — 570023</p>
        </div>

        <p className="footer-copy">© {year} Infornix Technologies</p>
      </div>
    </footer>
  )
}
