import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'
import { principles, services } from '../data/site'

export default function Services() {
  return (
    <>
      <PageMeta
        title="Leistungen"
        description="Physiotherapie bei re:motio: orthopädische und neurologische Behandlung, Schmerztherapie, Sporttherapie, postoperative Rehabilitation und Prävention."
      />
      <PageHero
        eyebrow="Leistungen"
        title={
          <>
            Bewegung neu <span>verstehen.</span>
          </>
        }
        description="Ob Beschwerden, Rehabilitation oder Prävention: Wir verbinden professionelle Behandlung mit einem Ziel, das zu deinem Leben passt."
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
                  <p>{service.description}</p>
                  <div className="tag-list">
                    {service.focus.map((focus) => (
                      <span key={focus}>{focus}</span>
                    ))}
                  </div>
                </div>
                <span className="service-row__arrow" aria-hidden="true">
                  ↗
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--note">
        <div className="container note-layout">
          <Reveal>
            <p className="section-index">Hinweis</p>
          </Reveal>
          <Reveal delay={80}>
            <h2>Welche Behandlung zu dir passt, klären wir gemeinsam.</h2>
            <p>
              Symptome können verschiedene Ursachen haben. Nach einer kurzen
              Beratung und examination entscheiden wir gemeinsam, welcher
              therapeutische Ansatz sinnvoll ist. Die Leistungsübernahme durch
              Krankenkassen oder private Versicherungen hängt vom jeweiligen
              Behandlungsfall ab.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--dark approach-section">
        <div className="container">
          <div className="section-heading section-heading--light">
            <div>
              <p className="section-index">So arbeiten wir</p>
              <h2>Ein klarer Rahmen. Flexible Wege.</h2>
            </div>
            <p>
              Struktur gibt Sicherheit, ohne den persönlichen Verlauf zu
              übergehen.
            </p>
          </div>
          <div className="principle-grid">
            {principles.map((principle, index) => (
              <Reveal key={principle.number} delay={index * 80}>
                <article className="principle-card">
                  <span>{principle.number}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-cta closing-cta--compact">
        <div className="container closing-cta__inner">
          <Reveal>
            <p className="eyebrow">Dein nächster Schritt</p>
            <h2>Du bist unsicher, was zu dir passt?</h2>
            <p>
              Das ist kein Problem. Nimm Kontakt mit uns auf und bringe deine
              Fragen und Beschwerden mit in das Erstgespräch.
            </p>
            <div className="button-row">
              <Link className="button button--primary" to="/termine">
                Termin buchen <span aria-hidden="true">↗</span>
              </Link>
              <Link className="text-link" to="/kontakt">
                Erst Kontakt aufnehmen <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
