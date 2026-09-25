import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'
import { site } from '../data/site'

export default function Appointments() {
  return (
    <>
      <PageMeta
        title="Termin buchen"
        description="Termin online oder telefonisch bei der Physiotherapiepraxis re:motio vereinbaren."
      />
      <PageHero
        eyebrow="Termine"
        title={
          <>
            Dein Weg zu <span>mehr Beweglichkeit.</span>
          </>
        }
        description="Die Online-Terminbuchung wird in Kürze verfügbar sein. Bis dahin erreichst du uns gern direkt."
        aside={
          <div className="page-hero__marker" aria-hidden="true">
            <span>04</span>
            <i />
            <span>Termine</span>
          </div>
        }
      />

      <section className="section booking-section">
        <div className="container booking-layout">
          <Reveal className="booking-card">
            <span className="booking-card__status">Vorbereitung</span>
            <h2>Online-Buchung folgt in Kürze.</h2>
            <p>
              Sobald die Buchungssoftware verbunden ist, kannst du hier
              verfügbare Termine direkt auswählen und bestätigen.
            </p>
            {site.bookingUrl ? (
              <a
                className="button button--primary"
                href={site.bookingUrl}
                target="_blank"
                rel="noreferrer"
              >
                Verfügbare Termine ansehen
                <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span className="button button--disabled" aria-disabled="true">
                Buchung wird vorbereitet
              </span>
            )}
            <p className="booking-card__privacy">
              Für die externe Buchungssoftware gelten deren eigene
              Datenschutzbestimmungen.
            </p>
          </Reveal>

          <Reveal className="booking-alternative" delay={100}>
            <p className="section-index">Alternativ direkt</p>
            <h2>Lieber telefonisch?</h2>
            <p>
              Wenn du lieber direkt sprechen möchtest, ruf uns während der
              Praxiszeiten an. Wir finden gemeinsam einen passenden Termin.
            </p>
            <a className="contact-tile" href={site.contact.phoneHref}>
              <span>Telefon</span>
              <strong>{site.contact.phoneDisplay}</strong>
              <i aria-hidden="true">↗</i>
            </a>
            <a className="contact-tile" href={`mailto:${site.contact.email}`}>
              <span>E-Mail</span>
              <strong>{site.contact.email}</strong>
              <i aria-hidden="true">↗</i>
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section section--booking-info">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-index">Gut vorbereitet</p>
              <h2>Was du für deinen Termin wissen solltest.</h2>
            </div>
            <p>
              Diese Hinweise ersetzen keine individuelle Beratung. Fragen kannst
              du jederzeit im Praxisgespräch klären.
            </p>
          </div>
          <div className="info-grid">
            <article>
              <span>01</span>
              <h3>Beschwerden</h3>
              <p>
                Überlege vorab, wo deine Beschwerden auftreten und wodurch sie
                besser oder schlechter werden.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Unterlagen</h3>
              <p>
                Nimm vorhandene Befunde, Verordnungen oder relevante
                Gesundheitsinformationen mit, wenn sie für die Behandlung
                hilfreich sind.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Kleidung</h3>
              <p>
                Trage gut bewegliche Kleidung, die auch im Bereich des Körpers
                bequem und zugänglich ist.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="closing-cta closing-cta--compact">
        <div className="container closing-cta__inner">
          <Reveal>
            <p className="eyebrow">Noch unsicher?</p>
            <h2>Du musst vorab alles wissen.</h2>
            <p>
              Eine kurze Anfrage zur Praxis oder zum Ablauf genügt. Den Rest
              klären wir gemeinsam.
            </p>
            <div className="button-row">
              <Link className="button button--primary" to="/kontakt">
                Zur Kontaktseite <span aria-hidden="true">→</span>
              </Link>
              <Link className="text-link" to="/leistungen">
                Leistungen ansehen <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
