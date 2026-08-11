import { useReveal } from '../hooks/useReveal'
import './Services.css'

const services = [
  {
    num: '01',
    title: 'Sales',
    text: 'Brand-new systems from Dell, HP, Lenovo, and Apple — professionally certified for reliable deployment.',
  },
  {
    num: '02',
    title: 'Service',
    text: 'Repair, maintenance, and managed IT hardware support that keeps your fleet running without disruption.',
  },
  {
    num: '03',
    title: 'Refurbished',
    text: 'Professionally tested units that deliver enterprise-grade performance at a practical price.',
  },
]

export function Services() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section services" id="services" ref={ref}>
      <div className="wrap">
        <div className="services-intro reveal">
          <p className="section-label">What we do</p>
          <h2 className="section-title">Three ways we keep your IT ready.</h2>
          <p className="section-lead">
            From the first quote to ongoing support — hardware sales, service,
            and certified refurbished systems under one roof.
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
