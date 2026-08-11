import './Faq.css'

const faqs = [
  {
    q: 'What does Infornix Technologies do?',
    a: 'Infornix Technologies is an IT hardware and solutions company in Mysore. We sell brand-new systems, service and maintain fleets, and supply professionally refurbished computers for businesses, campuses, and institutions.',
  },
  {
    q: 'Which brands and hardware do you stock?',
    a: 'Brand-new systems from Dell, HP, Lenovo, and Apple — plus printers, workstations, servers, networking gear, projectors, and projector screens for offices and labs.',
  },
  {
    q: 'Do you offer refurbished IT systems in Mysore?',
    a: 'Yes. Every refurbished unit is professionally tested so teams get enterprise-grade performance at a practical price, with local support from our Kuvempunagar office.',
  },
  {
    q: 'Who do you serve?',
    a: 'Corporates that cannot afford downtime, schools and colleges equipping labs and classrooms, and institutions that need dependable procurement and long-term hardware care.',
  },
  {
    q: 'How do I get a quote or visit the office?',
    a: 'Call +91 97399 27141, email techinfornix@gmail.com, or walk in to 47/D, M-block, Kuvempunagar, Mysore — 570023. Appointments and walk-ins are welcome.',
  },
]

export function Faq() {
  return (
    <section className="section faq" id="faq" aria-labelledby="faq-heading">
      <div className="wrap">
        <div className="faq-intro">
          <p className="section-label">FAQs</p>
          <h2 className="section-title" id="faq-heading">
            Questions about Infornix Technologies.
          </h2>
          <p className="section-lead">
            Straight answers on our IT hardware sales, service, and solutions in
            Mysore — and how to reach us.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
