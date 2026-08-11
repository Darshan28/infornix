import { useReveal } from '../hooks/useReveal'
import './Serve.css'

const audiences = [
  {
    title: 'Corporates',
    text: 'Workstations, servers, networking, and printers sized for office teams that cannot afford downtime.',
  },
  {
    title: 'Schools & colleges',
    text: 'Lab PCs, projectors, screens, and campus-ready hardware with clear pricing and local support.',
  },
  {
    title: 'Institutions',
    text: 'Dependable procurement and service for organisations that need lasting, well-tested equipment.',
  },
]

export function Serve() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section serve" id="serve" ref={ref}>
      <div className="wrap">
        <div className="serve-intro reveal">
          <p className="section-label">Who we serve</p>
          <h2 className="section-title">Built for places where equipment is infrastructure.</h2>
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
