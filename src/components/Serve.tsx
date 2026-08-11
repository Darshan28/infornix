import { useReveal } from '../hooks/useReveal'
import './Serve.css'

const audiences = [
  {
    title: 'Corporates',
    text: 'Workstations, servers, networking, and printers sized for office teams that cannot afford downtime — with local IT hardware support in Mysore.',
  },
  {
    title: 'Schools & colleges',
    text: 'Lab PCs, projectors, screens, and campus-ready hardware with clear pricing and responsive service from Infornix Technologies.',
  },
  {
    title: 'Institutions',
    text: 'Dependable procurement and ongoing service for organisations that need lasting, well-tested IT equipment and solutions.',
  },
]

export function Serve() {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      className="section serve"
      id="serve"
      ref={ref}
      aria-labelledby="serve-heading"
    >
      <div className="wrap">
        <div className="serve-intro reveal">
          <p className="section-label">Who we serve</p>
          <h2 className="section-title" id="serve-heading">
            Built for places where IT equipment is infrastructure.
          </h2>
          <p className="section-lead serve-lead">
            Infornix Technologies partners with organisations across Mysore
            (Mysuru) that need reliable hardware, not one-off gadgets.
          </p>
        </div>

        <ul className="serve-list">
          {audiences.map((item, i) => (
            <li key={item.title} className={`reveal reveal-delay-${i + 1}`}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
