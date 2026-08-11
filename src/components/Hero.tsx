import './Hero.css'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2400&q=80'

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Infornix Technologies introduction">
      <div className="hero-media" aria-hidden="true">
        <img
          src={HERO_IMAGE}
          alt=""
          className="hero-image"
          width={2400}
          height={1600}
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-scrim" />
        <div className="hero-grain" />
      </div>

      <div className="wrap hero-content">
        <p className="hero-brand animate-in">Infornix Technologies</p>
        <h1 className="hero-title animate-in animate-in-delay-1">
          IT hardware &amp; solutions that work when the work matters.
        </h1>
        <p className="hero-lead animate-in animate-in-delay-2">
          Sales, service, and refurbished systems for businesses, campuses,
          and institutions across Mysore — Dell, HP, Lenovo, and Apple under
          one local team.
        </p>
        <div className="hero-actions animate-in animate-in-delay-3">
          <a className="btn btn-primary" href="tel:+919739927141">
            Call +91 97399 27141
          </a>
          <a className="btn btn-ghost" href="#solutions">
            Browse IT solutions
          </a>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <i />
      </div>
    </section>
  )
}
