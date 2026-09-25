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
        description="Kontaktiere die Physiotherapiepraxis re:motio für Telefon, E-Mail, Praxisadresse und Öffnungszeiten."
      />
      <PageHero
        eyebrow="Kontakt"
        title={
          <>
            Wir hören <span>zu.</span>
          </>
        }
        description="Du hast eine Frage, brauchst Hilfe bei der Terminwahl oder möchtest dein Anliegen kurz schildern? Nimm gern Kontakt mit uns auf."
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
              Am einfachsten erreichst du uns während der Praxiszeiten per
              Telefon. Für schriftliche Anliegen kannst du uns eine E-Mail
              senden.
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
            <p className="draft-note">
              Telefonnummer und E-Mail-Adresse werden vor Veröffentlichung durch
              die echten Kontaktdaten ersetzt.
            </p>
          </Reveal>

          <Reveal className="contact-card" delay={90}>
            <p className="section-index">Praxis</p>
            <h2>Hier findest du uns.</h2>
            <address>
              {site.contact.street}
              <br />
              {site.contact.postalCode} {site.contact.city}
              <br />
              Deutschland
            </address>
            <p className="contact-card__meta">
              Der Routenlink und Angaben zur Barrierefreiheit werden ergänzt,
              sobald die endgültige Adresse feststeht.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--hours">
        <div className="container hours-layout">
          <Reveal>
            <p className="section-index">Öffnungszeiten</p>
            <h2>Wann wir erreichbar sind.</h2>
            <p>
              Behandlungen finden grundsätzlich nach vorheriger Terminvereinbarung
              statt.               Die endgültigen Zeiten werden vor Veröffentlichung bestätigt.
            </p>
          </Reveal>
          <Reveal delay={80}>
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

      <section className="closing-cta closing-cta--compact">
        <div className="container closing-cta__inner">
          <Reveal>
            <p className="eyebrow">Terminwunsch</p>
            <h2>Lieber direkt online?</h2>
            <p>
              Die Online-Buchung wird derzeit angebunden. Bis dahin kannst du
              deinen Terminwunsch telefonisch oder per E-Mail übermitteln.
            </p>
            <div className="button-row">
              <Link className="button button--primary" to="/termine">
                Zur Terminbuchung <span aria-hidden="true">↗</span>
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
