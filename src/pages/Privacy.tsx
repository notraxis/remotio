import { LegalPage } from '../components/LegalPage'

export default function Privacy() {
  return (
    <LegalPage
      title="Datenschutz"
      description="Informationen zur Verarbeitung personenbezogener Daten beim Besuch der Website und bei der Kontaktaufnahme mit re:motio."
      updated="25. September 2026"
    >
      <section>
        <h2>1. Verantwortlicher</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist
          <span className="legal-placeholder"> [Name, Anschrift und Kontaktdaten der Praxis]</span>.
          Die abschließenden Angaben sind vor Veröffentlichung zu ergänzen.
        </p>
      </section>

      <section>
        <h2>2. Besonders sensible Daten</h2>
        <p>
          Die Website enthält bewusst kein Kontaktformular und keine
          Eingabemöglichkeit für Gesundheitsdaten. Bitte sende über E-Mail keine
          Diagnosen, Befunde oder besonders sensible Gesundheitsinformationen,
          sofern dies nicht für eine konkrete Terminorganisation erforderlich
          ist. Für eine sichere Übermittlung kann ein gesichereter Kanal der
          Praxis vereinbart werden.
        </p>
      </section>

      <section>
        <h2>3. Aufruf der Website</h2>
        <p>
          Beim Aufruf dieser Website übermittelt dein Browser technisch
          notwendige Daten an den Hosting-Anbieter. Dazu können insbesondere
          deine aufgerufene Seite, Datum und Uhrzeit, übertragene Datenmenge,
          Meldung über erfolgreichen Abruf, Browsertyp und Browserversion sowie
          Betriebssystem gehören.
        </p>
        <p>
          Die Verarbeitung erfolgt zur sicheren und fehlerfreien Bereitstellung
          der Website auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Die
          Verantwortlichkeit, Aufbewahrungsfrist und gegebenenfalls eingesetzte
          Auftragsverarbeitung sind mit dem endgültigen Hosting-Anbieter zu
          dokumentieren.
        </p>
        <p className="legal-placeholder">
          [Name, Adresse und Kontaktdaten des Hosting-Anbieters ergänzen]
        </p>
      </section>

      <section>
        <h2>4. Kontaktaufnahme</h2>
        <p>
          Wenn du uns per Telefon oder E-Mail kontaktierst, werden die von dir
          mitgeteilten Daten zur Bearbeitung der Anfrage und für den Fall von
          Anschlussfragen verarbeitet. Die Verarbeitung erfolgt auf Grundlage
          deiner Einwilligung, soweit erforderlich, oder zur Erfüllung eines
          Vertrags beziehungsweise vorvertraglicher Maßnahmen nach Art. 6 Abs. 1
          lit. a beziehungsweise lit. b DSGVO. Unsere Aufbewahrungsfristen
          richten sich nach den gesetzlichen Vorgaben und den berufs- und
          vertragsrechtlichen Erfordernissen.
        </p>
      </section>

      <section>
        <h2>5. Buchungssoftware</h2>
        <p>
          Die Website verlinkt auf eine externe Buchungssoftware. Beim Öffnen
          der verlinkten Plattform gelten deren Datenschutzhinweise und die
          Verantwortlichkeit des jeweiligen Anbieters. Welche Daten beim
          Buchungsvorgang verarbeitet werden, hängt vom endgültigen Anbieter und
          dem gewählten Buchungsprozess ab.
        </p>
        <p className="legal-placeholder">
          [Anbieter, URL, Zweck der Übermittlung und gegebenenfalls Rechtsgrundlage ergänzen]
        </p>
      </section>

      <section>
        <h2>6. Cookies und lokale Speicherung</h2>
        <p>
          Für den aktuellen Stand setzt diese Website keine nicht technisch
          notwendigen Cookies, kein Tracking und keine Analyse- oder
          Werbetechnologien. Die Schrift Source Sans 3 wird lokal ausgeliefert;
          es findet keine Verbindung zu einem externen Schrift-Dienst statt.
        </p>
        <p>
          Sollten später Analyse-, Kartendienste, eingebettete Buchungsfunktionen
          oder nicht notwendige Speicherungen ergänzt werden, ist vorher eine
          informierte Einwilligungslösung nach den geltenden Datenschutzregeln
          umzusetzen.
        </p>
      </section>

      <section>
        <h2>7. Externe Inhalte und Medien</h2>
        <p>
          Aktuell sind keine externen Karten, Videos, Social-Media-Widgets oder
          Schriftbibliotheken eingebunden. Bei späteren Einbettungen oder
          automatischen Uploads von Inhalten Dritter können Daten an deren
          Server übermittelt werden. Die Datenschutzerklärung ist entsprechend
          anzupassen.
        </p>
      </section>

      <section>
        <h2>8. Deine Rechte</h2>
        <p>
          Du hast im Rahmen der geltenden gesetzlichen Bestimmungen das Recht
          auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit und Widerspruch. Sofern eine Einwilligung
          erteilt wurde, kannst du diese jederzeit mit Wirkung für die Zukunft
          widerrufen. Eine kurze Nachricht an die Praxis genügt zur Ausübung
          der Rechte, soweit keine gesetzlichen Ausnahmen entgegenstehen.
        </p>
      </section>

      <section>
        <h2>9. Beschwerderecht</h2>
        <p>
          Du hast das Recht, dich bei einer Datenschutzaufsichtsbeschwerde zu
          beschweren, insbesondere in einer Aufsichtsbehörde deines
          Aufenthaltsorts oder Arbeitsplatzes. Die zuständige Stelle ist anhand
          des endgültigen Praxisorts zu ergänzen.
        </p>
      </section>

      <section>
        <h2>10. Aktualität</h2>
        <p>
          Diese Datenschutzerklärung wird angepasst, sobald Inhalte, Anbieter
          oder rechtliche Anforderungen geändert werden. Die jeweils aktuelle
          Fassung ist an dieser Stelle abrufbar.
        </p>
      </section>
    </LegalPage>
  )
}
