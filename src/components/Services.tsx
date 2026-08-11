import { useReveal } from '../hooks/useReveal'
import './Services.css'

const services = [
  {
    num: '01',
    title: 'IT Hardware Sales',
    text: 'Brand-new desktops, laptops, and enterprise systems from Dell, HP, Lenovo, and Apple — professionally certified for reliable deployment across Mysore offices and campuses.',
  },
  {
    num: '02',
    title: 'IT Service & Support',
    text: 'Repair, maintenance, and managed IT hardware support that keeps your fleet running — printers, workstations, servers, and networking without disruption.',
  },
  {
    num: '03',
    title: 'Refurbished Systems',
    text: 'Professionally tested refurbished computers and IT systems that deliver enterprise-grade performance at a practical price for schools, institutions, and growing teams.',
  },
]

export function Services() {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      className="section services"
      id="services"
      ref={ref}
      aria-labelledby="services-heading"
    >
      <div className="wrap">
        <div className="services-intro reveal">
          <p className="section-label">What we do</p>
          <h2 className="section-title" id="services-heading">
            IT hardware sales, service, and refurbished solutions.
          </h2>
          <p className="section-lead">
            From the first quote to ongoing support — Infornix Technologies
            keeps your IT ready under one roof in Mysore.
          </p>
        </div>

        <ol className="services-list">
          {services.map((item, i) => (
            <li
              key={item.num}
              className={`service-item reveal reveal-delay-${i + 1}`}
            >
              <span className="service-num" aria-hidden="true">
                {item.num}
              </span>
              <h3 className="service-title">{item.title}</h3>
              <p className="service-text">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
