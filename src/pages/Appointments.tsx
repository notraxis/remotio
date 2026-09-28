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
            Termin <span>buchen.</span>
          </>
        }
        description="Wählen Sie online einen Termin oder rufen Sie uns an – wir finden gemeinsam den passenden Zeitpunkt."
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
              Sobald die Buchungssoftware verbunden ist, wählen Sie hier Ihre
              Wunschtermine direkt aus und bestätigen sie.
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

          <Reveal className="booking-alternative" delay={90}>
            <p className="section-index">Direkt Kontakt aufnehmen</p>
            <h2>Lieber telefonisch?</h2>
            <p>
              Rufen Sie uns während der Praxiszeiten an – wir vereinbaren
              direkt einen Termin mit Ihnen.
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
    </>
  )
}
