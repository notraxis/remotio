import { LegalPage } from '../components/LegalPage'

const providerDetails = [
  ['Diensteanbieter', '[Vor- und Nachname oder Firma der Praxisinhaberin / des Praxisinhabers]'],
  ['Anschrift', '[Ladungsfähige Straße, Hausnummer, PLZ und Ort]'],
  ['Telefon', '[Telefonnummer]'],
  ['E-Mail', '[E-Mail-Adresse]'],
  ['Berufsbezeichnung', '[Berufsbezeichnung und staatliche Verleihung, sofern zutreffend]'],
  ['Zuständige Kammer', '[Name der Kammer, zuständige Stelle und Anschrift]'],
  ['Berufsrechtliche Regelungen', '[Verwendete Regelungen mit Fundstelle]'],
  ['Berufshaftpflichtversicherung', '[Versicherer, Anschrift und räumlicher Geltungsbereich]'],
  ['Umsatzsteuer-Identifikationsnummer', '[USt-IdNr., sofern vorhanden]'],
  ['Wirtschafts-Identifikationsnummer', '[W-IdNr., sofern vorhanden]'],
] as const

export default function Imprint() {
  return (
    <LegalPage
      title="Impressum"
      description="Anbieterkennzeichnung und rechtliche Hinweise für die Website der Physiotherapiepraxis re:motio."
      updated="25. September 2026"
    >
      <section>
        <h2>Angaben gemäß § 5 DDG</h2>
        <div className="legal-details">
          {providerDetails.map(([label, value]) => (
            <div key={label}>
              <strong>{label}</strong>
              <span className="legal-placeholder">{value}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Redaktionell verantwortlich</h2>
        <p>
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV ist
          <span className="legal-placeholder"> [Name und ladungsfähige Anschrift]</span>.
        </p>
      </section>

      <section>
        <h2>Verbraucherstreitbeilegung</h2>
        <p>
          Die Anwendbarkeit des Verbraucherstreitbeilegungsgesetzes und eine
          gegebenenfalls erforderliche Erklärung sind anhand der finalen
          Unternehmensform und der Tätigkeit der Praxis rechtlich zu prüfen.
        </p>
      </section>

      <section>
        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten
          nach den allgemeinen Gesetzen verantwortlich. Nach §§ 7 bis 10 DDG
          sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte
          fremde Informationen zu überwachen oder nach Umständen zu forschen,
          die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p>
          Die Inhalte dieser Website dienen der allgemeinen Information. Sie
          ersetzen keine persönliche Beratung, Diagnose oder ärztliche
          beziehungsweise therapeutische Behandlung.
        </p>
      </section>

      <section>
        <h2>Haftung für Links</h2>
        <p>
          Dieses Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Für die Inhalte und die
          Datenschutzpraxis verlinkter Anbieter ist ausschließlich der jeweils
          verantwortliche Anbieter verantwortlich. Bei Bekanntwerden von
          Rechtsverletzungen werden entsprechende Links umgehend entfernt.
        </p>
      </section>

      <section>
        <h2>Urheberrecht und Bildmaterial</h2>
        <p>
          Die durch die Betreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind
          als solche gekennzeichnet. Durch die Vervielfältigung, Verbreitung und
          Verwertung außerhalb der Grenzen des Urheberrechts bedarf es der
          schriftlichen Zustimmung der jeweils berechtigten Person oder des
          Anbieters.
        </p>
        <p>
          Für eingesetzte Fotos, Videos und Logos müssen passende Nutzungsrechte
          bestehen und entsprechende Bildnachweise vorliegen.
        </p>
      </section>
    </LegalPage>
  )
}
