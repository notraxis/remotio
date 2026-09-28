import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'
import { site } from '../data/site'

export default function Contact() {
  return (
    <>
      <PageMeta
        title="Kontakt"
        description="Kontaktieren Sie die Physiotherapiepraxis re:motio für Telefon, E-Mail, Praxisadresse und Öffnungszeiten."
      />
      <PageHero
        eyebrow="Kontakt"
        title={
          <>
            Wir hören <span>zu.</span>
          </>
        }
        description="Sie haben eine Frage oder möchten Ihr Anliegen kurz schildern? Nehmen Sie gern Kontakt mit uns auf."
        aside={
          <div className="page-hero__marker" aria-hidden="true">
            <span>03</span>
            <i />
            <span>Kontakt</span>
          </div>
        }
      />

      <section className="section contact-section">
        <div className="container contact-grid">
          <Reveal className="contact-card contact-card--primary">
            <p className="section-index">Direkter Kontakt</p>
            <h2>Per Telefon oder E-Mail.</h2>
            <p>
              Am einfachsten erreichen Sie uns während der Praxiszeiten per
              Telefon. Für schriftliche Anliegen senden Sie uns eine E-Mail.
            </p>
            <div className="contact-links">
              <a href={site.contact.phoneHref}>
                <span>Telefon</span>
                <strong>{site.contact.phoneDisplay}</strong>
                <i aria-hidden="true">↗</i>
              </a>
              <a href={`mailto:${site.contact.email}`}>
                <span>E-Mail</span>
                <strong>{site.contact.email}</strong>
                <i aria-hidden="true">↗</i>
              </a>
            </div>
          </Reveal>

          <Reveal className="contact-card" delay={80}>
            <p className="section-index">Praxis</p>
            <h2>Hier finden Sie uns.</h2>
            <address>
              {site.contact.street}
              <br />
              {site.contact.postalCode} {site.contact.city}
            </address>
            <div className="hours-list">
              {site.hours.map((item) => (
                <div key={item.days}>
                  <span>{item.days}</span>
                  <strong>{item.time}</strong>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section closing-cta closing-cta--compact">
        <div className="container closing-cta__inner">
          <Reveal>
            <p className="eyebrow">Terminwunsch</p>
            <h2>Lieber direkt online?</h2>
            <p>
              Die Online-Buchung wird in Kürze verfügbar sein. Bis dahin
              übermitteln Sie Ihren Terminwunsch gern telefonisch oder per
              E-Mail.
            </p>
            <div className="button-row">
              <Link className="button button--primary" to="/termine">
                Termin buchen <span aria-hidden="true">↗</span>
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
