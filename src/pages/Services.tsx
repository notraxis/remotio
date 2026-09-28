import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'
import { services, site } from '../data/site'

export default function Services() {
  return (
    <>
      <PageMeta
        title="Leistungen"
        description="Unsere Physiotherapie in der Übersicht: Krankengymnastik, Manuelle Therapie, KGG, Manuelle Lymphdrainage, Massage, Elektrotherapie, Ultraschall und Wärmetherapie."
      />
      <PageHero
        eyebrow="Leistungen"
        title={
          <>
            Was wir <span>anbieten.</span>
          </>
        }
        description="Von der aktiven Bewegungstherapie bis zur Wärmetherapie: Methoden, die wir passend zu Ihren Beschwerden und Zielen einsetzen."
        aside={
          <div className="page-hero__marker" aria-hidden="true">
            <span>02</span>
            <i />
            <span>Leistungen</span>
          </div>
        }
      />

      <section className="section service-list-section">
        <div className="container service-list">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 45}>
              <article className="service-row">
                <div className="service-row__number">{service.number}</div>
                <div className="service-row__content">
                  <h2>{service.title}</h2>
                  <div>
                    <p>{service.description}</p>
                    <div className="tag-list">
                      {service.focus.map((focus) => (
                        <span key={focus}>{focus}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--tint">
        <div className="container note-layout">
          <Reveal>
            <p className="section-index">Hinweis</p>
          </Reveal>
          <Reveal delay={70}>
            <h2>Welche Behandlung zu Ihnen passt, klären wir gemeinsam.</h2>
            <p>
              Symptome können verschiedene Ursachen haben. Nach einer kurzen
              Beratung und Untersuchung entscheiden wir gemeinsam, welcher
              Ansatz sinnvoll ist. Ob eine Leistung von der Krankenkasse
              übernommen wird, hängt vom jeweiligen Behandlungsfall ab.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section closing-cta">
        <div className="container closing-cta__inner">
          <Reveal>
            <p className="eyebrow">Ihr nächster Schritt</p>
            <h2>Sie sind unsicher, was zu Ihnen passt?</h2>
            <p>
              Bringen Sie Ihre Fragen und Beschwerden mit in das Erstgespräch –
              wir nehmen uns Zeit dafür.
            </p>
            <div className="button-row">
              <Link className="button button--primary" to="/termine">
                Termin buchen <span aria-hidden="true">↗</span>
              </Link>
              <a className="text-link" href={site.contact.phoneHref}>
                {site.contact.phoneDisplay} <span aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
