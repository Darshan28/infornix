import { useReveal } from '../hooks/useReveal'
import './Solutions.css'

const solutions = [
  { name: 'Printers', note: 'Office & campus fleets' },
  { name: 'Workstations', note: 'Desktops & productivity PCs' },
  { name: 'Servers', note: 'On-prem & small business' },
  { name: 'Networking', note: 'Switches, routers, cabling' },
  { name: 'Projectors', note: 'Classrooms & boardrooms' },
  { name: 'Projector screens', note: 'Fixed & portable' },
]

const brands = ['Dell', 'HP', 'Lenovo', 'Apple']

export function Solutions() {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      className="section solutions"
      id="solutions"
      ref={ref}
      aria-labelledby="solutions-heading"
    >
      <div className="wrap solutions-grid">
        <div className="solutions-copy reveal">
          <p className="section-label">Hardware &amp; support</p>
          <h2 className="section-title" id="solutions-heading">
            IT solutions your teams depend on.
          </h2>
          <p className="section-lead">
            Full coverage across new and refurbished IT hardware — from desktop
            fleets to network backbone and presentation equipment in Mysore.
          </p>

          <div className="brands reveal reveal-delay-1">
            <p className="brands-label">Brand-new systems</p>
            <ul className="brands-list">
              {brands.map((brand) => (
                <li key={brand}>{brand}</li>
              ))}
            </ul>
            <p className="brands-note">Professionally certified for deployment</p>
          </div>
        </div>

        <ul className="solutions-list reveal reveal-delay-2">
          {solutions.map((item) => (
            <li key={item.name}>
              <span>
                {item.name}
                <small className="solution-note">{item.note}</small>
              </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 9h10M10 5l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
          ))}
        </ul>
      </div>

      <div className="solutions-band">
        <div className="wrap solutions-band-inner reveal">
          <p>
            Managed IT hardware support for organisations that need steady,
            responsive care — not one-time fixes.
          </p>
        </div>
      </div>
    </section>
  )
}
