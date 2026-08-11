import { useReveal } from '../hooks/useReveal'
import './Visit.css'

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=47%2FD+M-block+opp+HDFC+bank+near+bus+depot+Kuvempunagar+Mysore+570023'

export function Visit() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section visit" id="visit" ref={ref}>
      <div className="visit-bg" aria-hidden="true" />

      <div className="wrap visit-layout">
        <div className="visit-copy reveal">
          <p className="section-label">Visit &amp; contact</p>
          <h2 className="section-title">Come see us in Kuvempunagar.</h2>
          <p className="section-lead">
            Walk-ins and appointments welcome. Tell us what you need — we will
            match new, service, or refurbished options that fit.
          </p>

          <address className="visit-details">
            <div>
              <p className="visit-label">CEO &amp; Founder</p>
              <p className="visit-person">Madhukar S</p>
            </div>
            <div>
              <p className="visit-label">Office</p>
              <p>
                47/D, M-block, opp. HDFC Bank,
                <br />
                near Bus Depot, Kuvempunagar,
                <br />
                Mysore — 570023
              </p>
            </div>
            <div>
              <p className="visit-label">Phone</p>
              <a href="tel:+919739927141">+91 97399 27141</a>
            </div>
            <div>
              <p className="visit-label">Email</p>
              <a href="mailto:techinfornix@gmail.com">techinfornix@gmail.com</a>
            </div>
          </address>

          <div className="visit-actions">
            <a className="btn btn-primary" href="tel:+919739927141">
              Call now
            </a>
            <a className="btn btn-outline" href="mailto:techinfornix@gmail.com">
              Email us
            </a>
            <a
              className="btn btn-outline"
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Maps
            </a>
          </div>
        </div>

        <div className="visit-visual reveal reveal-delay-2" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80"
            alt=""
            width={1400}
            height={933}
            loading="lazy"
          />
          <div className="visit-visual-overlay">
            <p>Mysore</p>
            <span>Kuvempunagar · 570023</span>
          </div>
        </div>
      </div>
    </section>
  )
}
