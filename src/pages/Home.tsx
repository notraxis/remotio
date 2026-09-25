import { Link } from 'react-router-dom'
import { MediaPlaceholder } from '../components/MediaPlaceholder'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'
import { principles, services } from '../data/site'

const featuredServices = services.slice(0, 4)

export default function Home() {
  return (
    <>
      <PageMeta
        title="Physiotherapie mit Zeit für dich"
        description="Persönliche Physiotherapie für mehr Beweglichkeit, Sicherheit und einen selbstständigen Alltag. Behandlungsangebot und Kontakt der Praxis re:motio."
      />
      <section className="home-hero">
        <div className="container home-hero__grid">
          <div className="home-hero__content">
            <p className="eyebrow">Physiotherapie in Bewegung</p>
            <h1>
              Bewegung ist deine Stärke
              <span>Wir bringen sie zurück</span>
            </h1>
            <p className="home-hero__intro">
              Persönliche Behandlung, klare Ziele und ein Plan, der im
              wirklichen Alltag weitergeht.
            </p>
            <div className="button-row">
              <Link className="button button--primary" to="/termine">
                Termin buchen <span aria-hidden="true">↗</span>
              </Link>
              <Link className="text-link" to="/leistungen">
                Leistungen ansehen <span aria-hidden="true">→</span>
              </Link>
            </div>
            <ul className="home-hero__facts" aria-label="Unsere Grundsätze">
              <li>Individuell</li>
              <li>Verständlich</li>
              <li>Alltagsorientiert</li>
            </ul>
          </div>
          <Reveal className="home-hero__visual-wrap" delay={120}>
            <div
              className="home-hero__visual"
              role="img"
              aria-label="Abstrakte, ruhige Darstellung einer bewegten Körperlinie"
            >
              <span className="home-hero__orb home-hero__orb--outer" />
              <span className="home-hero__orb home-hero__orb--inner" />
              <span className="home-hero__figure">
                <i />
                <i />
                <i />
              </span>
              <span className="home-hero__wordmark">re:motion</span>
              <span className="home-hero__caption">Nähe. Verstehen. Fortschritt.</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--intro">
        <div className="container split-intro">
          <Reveal>
            <p className="section-index">01 — Was uns leitet</p>
          </Reveal>
          <Reveal delay={80}>
            <h2>Dein Körper. Dein Tempo. Dein Ziel.</h2>
            <p className="lead">
              Physiotherapie beginnt nicht mit einem starren Ablauf, sondern mit
              deiner individuellen Geschichte. Wir hören zu, finden gemeinsam
              einen passenden Ansatz und geben dir Werkzeuge für mehr
              Selbstständigkeit.
            </p>
            <Link className="text-link" to="/praxis">
              Mehr über die Praxis <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--services">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-index">02 — Leistungen</p>
              <h2>Genau dort, wo du Unterstützung brauchst.</h2>
            </div>
            <Link className="text-link" to="/leistungen">
              Alle Leistungen <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="service-grid">
            {featuredServices.map((service, index) => (
              <Reveal key={service.title} delay={index * 70}>
                <article className="service-card">
                  <div className="service-card__top">
                    <span>{service.number}</span>
                    <span aria-hidden="true">↗</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="tag-list">
                    {service.focus.map((focus) => (
                      <span key={focus}>{focus}</span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section-heading section-heading--light">
            <div>
              <p className="section-index">03 — Unser Ansatz</p>
              <h2>Verstehen. Bewegen. Anwenden.</h2>
            </div>
            <p>
              Kein Handlungsrezept für alle. Sondern ein transparenter Prozess,
              der deine Belastbarkeit berücksichtigt.
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

      <section className="section section--practice">
        <div className="container practice-preview">
          <Reveal className="practice-preview__media">
            <MediaPlaceholder
              label="Foto der Praxis"
              caption="Ein ruhiger Ort für konzentrierte Behandlung und persönliche Gespräche."
              variant="practice"
            />
          </Reveal>
          <Reveal className="practice-preview__content" delay={100}>
            <p className="section-index">04 — Die Praxis</p>
            <h2>Raum für dich. Klarheit für deinen Weg.</h2>
            <p>
              Bei re:motio steht nicht die schnellste Technik im Mittelpunkt,
              sondern der Mensch vor dir. Wir nehmen uns Zeit, teilen unser Wissen
              und schaffen eine ruhige Atmosphäre, in der Fragen willkommen sind.
            </p>
            <Link className="button button--outline" to="/praxis">
              Die Praxis kennenlernen <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section closing-cta">
        <div className="container closing-cta__inner">
          <Reveal>
            <p className="eyebrow">Der erste Schritt</p>
            <h2>Bereit für mehr Bewegung im Alltag?</h2>
            <p>
              Vereinbare online einen Termin oder ruf uns direkt an. Wir finden
              gemeinsam den passenden Rahmen für deine Behandlung.
            </p>
            <div className="button-row">
              <Link className="button button--primary" to="/termine">
                Termin buchen <span aria-hidden="true">↗</span>
              </Link>
              <Link className="text-link" to="/kontakt">
                Kontakt aufnehmen <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
