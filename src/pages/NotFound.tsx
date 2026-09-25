import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'

export default function NotFound() {
  return (
    <>
      <PageMeta
        title="Seite nicht gefunden"
        description="Die angeforderte Seite wurde nicht gefunden."
      />
      <section className="not-found">
        <div className="container not-found__inner">
          <p className="eyebrow">Fehler 404</p>
          <span aria-hidden="true">404</span>
          <h1>Diese Seite ist gerade nicht in Bewegung.</h1>
          <p>
            Der aufgerufene Inhalt wurde verschoben oder existiert unter dieser
            Adresse nicht.
          </p>
          <div className="button-row">
            <Link className="button button--primary" to="/">
              Zur Startseite <span aria-hidden="true">→</span>
            </Link>
            <Link className="text-link" to="/kontakt">
              Kontakt <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
