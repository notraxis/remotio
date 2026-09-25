import { Link } from 'react-router-dom'
import { MediaPlaceholder } from '../components/MediaPlaceholder'
import { PageHero } from '../components/PageHero'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'
import { practiceValues, team } from '../data/site'

export default function Practice() {
  return (
    <>
      <PageMeta
        title="Die Praxis"
        description="Lerne die Physiotherapiepraxis re:motio, unser Team und unsere Werte für eine persönliche, verständliche Behandlung kennen."
      />
      <PageHero
        eyebrow="Die Praxis"
        title={
          <>
            Hier bist du kein <span>Fall.</span>
          </>
        }
        description="Wir glauben an gute Behandlung, die den Menschen in den Mittelpunkt stellt: aufmerksam, alltagsnah und auf Augenhöhe."
        aside={
          <div className="page-hero__marker" aria-hidden="true">
            <span>01</span>
            <i />
            <span>Praxis</span>
          </div>
        }
      />

      <section className="section section--story">
        <div className="container split-intro">
          <Reveal>
            <p className="section-index">01 — Unsere Idee</p>
          </Reveal>
          <Reveal delay={80}>
            <h2>Physiotherapie, die nicht bei der Tür endet.</h2>
            <p className="lead">
              Eine Behandlung ist dann nachhaltig, wenn sie nicht nur im
              Behandlungsraum funktioniert. Deshalb verbinden wir professionelle
              Therapie mit verständlicher Kommunikation und Übungen, die zu deinem
              echten Alltag passen.
            </p>
            <p>
              Unser Anspruch ist bewusst einfach: gut zuhören, sorgfältig
              untersuchen, transparent erklären und gemeinsam ein realistisches
              Ziel verfolgen. So entsteht Vertrauen – und mit jedem Termin ein
              klarer nächster Schritt.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--media">
        <div className="container media-story">
          <Reveal className="media-story__visual">
            <MediaPlaceholder
              label="Behandlungsraum"
              caption="Heller, ruhiger Raum mit Platz für eine persönliche Behandlung."
              variant="practice"
            />
          </Reveal>
          <div className="media-story__notes">
            <Reveal delay={100}>
              <p className="section-index">02 — So fühlt sich die Praxis an</p>
              <ul className="check-list">
                <li>Ruhige, konzentrierte Behandlungsräume</li>
                <li>Zeit für Fragen und gemeinsame Entscheidungen</li>
                <li>Verständliche Erklärungen ohne Fachjargon</li>
                <li>Übungen für Zuhause, die in deinen Alltag passen</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--values">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-index">03 — Unsere Werte</p>
              <h2>Was unsere Arbeit ausmacht.</h2>
            </div>
            <p>
              Nicht der lauteste Moment zählt, sondern die Summe aus guter
              Beobachtung, ehrlicher Kommunikation und bestmöglicher Begleitung.
            </p>
          </div>
          <div className="value-grid">
            {practiceValues.map((value, index) => (
              <Reveal key={value.title} delay={index * 80}>
                <article className="value-card">
                  <span>0{index + 1}</span>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--team">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-index">04 — Das Team</p>
              <h2>Menschen, die zuhören.</h2>
            </div>
            <p>
              Namen, Porträts, Qualifikationen und persönliche Schwerpunkte
              werden nach dem finalen Praxisteam ergänzt.
            </p>
          </div>
          <div className="team-grid">
            {team.map((person, index) => (
              <Reveal key={person.name} delay={index * 90}>
                <article className="team-card">
                  <div className="team-card__portrait" aria-hidden="true">
                    <span>{person.initials}</span>
                    <i />
                  </div>
                  <div>
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

      <section className="closing-cta closing-cta--compact">
        <div className="container closing-cta__inner">
          <Reveal>
            <p className="eyebrow">Persönlich vorbesprechen</p>
            <h2>Lass uns über dein Anliegen sprechen.</h2>
            <p>
              Du hast Fragen zur Behandlung oder möchtest einen Termin
              vereinbaren? Melde dich gern direkt bei uns.
            </p>
            <div className="button-row">
              <Link className="button button--primary" to="/termine">
                Termin buchen <span aria-hidden="true">↗</span>
              </Link>
              <Link className="text-link" to="/kontakt">
                Kontakt <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
