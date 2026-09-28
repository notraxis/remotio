import { Link } from 'react-router-dom'
import { MediaPlaceholder } from '../components/MediaPlaceholder'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'
import { heroFacts, services, site, team } from '../data/site'

export default function Home() {
  return (
    <>
      <PageMeta
        title="Physiotherapie"
        description="re:motio ist Ihre Physiotherapiepraxis für mehr Beweglichkeit, weniger Beschwerden und einen belastbaren Körper. Leistungen, Team und Terminbuchung."
      />
      <section className="home-hero">
        <div className="container home-hero__inner">
          <p className="eyebrow">Physiotherapie in Bewegung</p>
          <h1>
            Bewegung ist Ihre Stärke
            <span>Wir bringen sie zurück.</span>
          </h1>
          <p className="home-hero__intro">
            Wir verbessern Ihre Beweglichkeit, reduzieren Schmerzen und machen
            Ihren Körper wieder stärker und belastbarer.
          </p>
          <div className="button-row">
            <Link className="button button--primary" to="/termine">
              Termin buchen <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" to="/leistungen">
              Leistungen ansehen <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ul className="home-hero__facts">
            {heroFacts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container practice-preview">
          <Reveal className="practice-preview__media">
            <MediaPlaceholder
              label="Foto der Praxis"
              caption="Ein ruhiger Raum für konzentrierte Behandlung und persönliche Gespräche."
              variant="practice"
            />
          </Reveal>
          <Reveal className="practice-preview__content" delay={90}>
            <p className="section-index">01 — Die Praxis</p>
            <h2>Zurück zur Bewegung.</h2>
            <p>
              re:motio bedeutet „zurück zur Bewegung“ – und genau dafür stehen
              wir. Mit moderner, evidenzbasierter Physiotherapie, aktiver Therapie
              und gezielter Kräftigung entwickeln wir eine Behandlung, die zu
              Ihnen und Ihren persönlichen Zielen passt.
            </p>
            <Link className="button button--outline" to="/praxis">
              Die Praxis kennenlernen <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-index">02 — Leistungen</p>
              <h2>Was wir anbieten.</h2>
            </div>
            <p>
              Sieben Methoden, die wir passend zu Ihren Beschwerden und Zielen
              einsetzen.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 50}>
                <article className="service-card">
                  <span className="service-card__number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              </Reveal>
            ))}
            <Reveal delay={services.length * 50}>
              <Link className="service-card service-card--link" to="/leistungen">
                <span className="service-card__number">→</span>
                <h3>Alle Leistungen</h3>
                <p>Ausführlich beschrieben</p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-index">03 — Das Team</p>
              <h2>Menschen, die zuhören.</h2>
            </div>
            <p>
              Namen, Porträts und persönliche Schwerpunkte stellen wir in Kürze
              vor.
            </p>
          </div>
          <div className="team-grid">
            {team.map((person, index) => (
              <Reveal key={person.name} delay={index * 80}>
                <article className="team-card">
                  <MediaPlaceholder
                    label={`Porträt ${index + 1}`}
                    variant="team"
                  />
                  <div className="team-card__info">
                    <p>{person.role}</p>
                    <h3>{person.name}</h3>
                    <span>{person.focus}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section closing-cta">
        <div className="container closing-cta__inner">
          <Reveal>
            <p className="eyebrow">Der erste Schritt</p>
            <h2>Bereit für mehr Bewegung im Alltag?</h2>
            <p>
              Vereinbaren Sie online einen Termin oder rufen Sie uns an. Wir
              finden gemeinsam den passenden Rahmen für Ihre Behandlung.
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
