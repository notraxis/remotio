import { Link } from 'react-router-dom'
import { MediaPlaceholder } from '../components/MediaPlaceholder'
import { PageHero } from '../components/PageHero'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'
import { audiences, site, team } from '../data/site'

export default function Practice() {
  return (
    <>
      <PageMeta
        title="Die Praxis"
        description="re:motio bedeutet zurück zur Bewegung: Physiotherapie für alle, die beweglicher, stärker und selbstständiger werden möchten. Lernen Sie unsere Praxis und unser Team kennen."
      />
      <PageHero
        eyebrow="Die Praxis"
        title={
          <>
            Zurück zur <span>Bewegung.</span>
          </>
        }
        description="re:motio bedeutet „zurück zur Bewegung“ – und genau dafür stehen wir."
        aside={
          <div className="page-hero__marker" aria-hidden="true">
            <span>01</span>
            <i />
            <span>Praxis</span>
          </div>
        }
      />

      <section className="section">
        <div className="container practice-story">
          <Reveal className="practice-story__media">
            <MediaPlaceholder
              label="Foto der Praxis"
              caption="Heller, ruhiger Behandlungsraum mit Platz für eine persönliche Behandlung."
              variant="practice"
            />
          </Reveal>
          <div className="practice-story__text">
            <Reveal>
              <p className="section-index">01 — Unser Ziel</p>
            </Reveal>
            <Reveal delay={70}>
              <h2>
                Ihre Beweglichkeit verbessern. Ihren Körper wieder belastbar
                machen.
              </h2>
              <p className="lead">
                Unser Ziel ist es, Ihre Beweglichkeit zu verbessern, Schmerzen und
                Beschwerden zu reduzieren und Ihren Körper wieder stärker und
                belastbarer zu machen.
              </p>
              <p>
                Bei uns ist jeder willkommen – vom Kind bis ins hohe Alter, vom
                Sportler bis zum Menschen, der im Alltag wieder beweglicher und
                sicherer werden möchte. Wir begleiten Sie vor und nach
                Operationen, nach Verletzungen sowie bei akuten und länger
                bestehenden Beschwerden.
              </p>
              <p>
                Mit moderner, evidenzbasierter Physiotherapie, aktiver Therapie
                und gezielter Kräftigung entwickeln wir eine Behandlung, die zu
                Ihnen und Ihren persönlichen Zielen passt.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ul className="chip-list" aria-label="Für wen wir behandeln">
                {audiences.map((audience) => (
                  <li key={audience}>{audience}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={160}>
              <p className="statement">
                Denn Bewegung bedeutet für uns mehr als körperliche Funktion –
                sie bedeutet Freiheit, Selbstständigkeit und Lebensqualität.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-index">02 — Das Team</p>
              <h2>Menschen, die zuhören.</h2>
            </div>
            <p>
              Namen, Porträts und Qualifikationen werden nach dem finalen
              Praxisteam ergänzt.
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
            <p className="eyebrow">{site.claim}</p>
            <h2>Lassen Sie uns über Ihr Anliegen sprechen.</h2>
            <p>
              Sie haben Fragen zur Behandlung oder möchten einen Termin
              vereinbaren? Wir freuen uns auf Sie.
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
