/**
 * Alle sichtbaren Texte der Website an einer Stelle.
 *
 * Regeln:
 * - Texte mit Hervorhebung werden als Felder getrennt (title / titleAccent),
 *   damit die Komponente die Struktur und nicht der Text vorgibt.
 * - Platzhalter in geschweiften Klammern ({name}) werden von t() ersetzt.
 * - Werte, die keine Texte sind (Telefonnummer, Adresse, bookingUrl), stehen
 *   weiterhin in src/data/site.ts.
 */
export const de = {
  common: {
    termin: 'Termin buchen',
    leistungen: 'Leistungen ansehen',
    telefon: 'Telefon',
    email: 'E-Mail',
  },

  meta: {
    titlePattern: '{page} | {name}',
    fallbackDescription:
      'Physiotherapie für mehr Beweglichkeit, weniger Beschwerden und einen belastbaren Körper.',
  },

  nav: [
    { label: 'Start', path: '/' },
    { label: 'Die Praxis', path: '/praxis' },
    { label: 'Leistungen', path: '/leistungen' },
    { label: 'Kontakt', path: '/kontakt' },
  ],

  a11y: {
    skipLink: 'Zum Inhalt springen',
    mainNavigation: 'Hauptnavigation',
    brandHome: '{name} Startseite',
    brandAlt: '{name} Physiotherapie',
    pageLoading: 'Seite wird geladen',
    menuOpen: 'Menü',
    menuClose: 'Schließen',
    navMeta: 'Persönlich. Klar. In Bewegung.',
  },

  media: {
    practice: {
      label: 'Foto der Praxis',
      caption:
        'Heller, ruhiger Behandlungsraum mit Platz für eine persönliche Behandlung.',
    },
    team: {
      label: 'Porträt {number}',
    },
  },

  home: {
    meta: {
      title: 'Physiotherapie',
      description:
        're:motio ist Ihre Physiotherapiepraxis für mehr Beweglichkeit, weniger Beschwerden und einen belastbaren Körper. Leistungen, Team und Terminbuchung.',
    },
    hero: {
      eyebrow: 'Physiotherapie in Bewegung',
      title: 'Bewegung ist Ihre Stärke',
      titleAccent: 'Wir bringen sie zurück.',
      meaning:
        're:motio bedeutet „zurück zur Bewegung“ – und genau dafür stehen wir.',
      goal:
        'Unser Ziel ist es, Ihre Beweglichkeit zu verbessern, Schmerzen und Beschwerden zu reduzieren und Ihren Körper wieder stärker und belastbarer zu machen.',
      facts: ['Evidenzbasiert', 'Jeder willkommen', 'Mit Baja'],
    },
    areas: {
      index: 'Direkt weiter',
      title: 'Drei Wege zu mehr Bewegung.',
      intro: 'Alles Weitere finden Sie auf den Seiten selbst.',
      link: 'Zur Seite',
      items: [
        {
          index: '01',
          title: 'Die Praxis',
          text: 'Was re:motio bedeutet, für wen wir behandeln und wer hinter der Praxis steht.',
          path: '/praxis',
        },
        {
          index: '02',
          title: 'Leistungen',
          text: 'Sieben Methoden von Krankengymnastik bis Wärmetherapie im Überblick.',
          path: '/leistungen',
        },
        {
          index: '03',
          title: 'Kontakt & Termine',
          text: 'Termin online buchen, anrufen oder Adresse und Öffnungszeiten nachsehen.',
          path: '/kontakt',
        },
      ],
    },
    cta: {
      eyebrow: 'Der erste Schritt',
      title: 'Bereit für mehr Bewegung im Alltag?',
      text: 'Vereinbaren Sie online einen Termin oder rufen Sie uns an. Wir finden gemeinsam den passenden Rahmen für Ihre Behandlung.',
    },
  },

  practice: {
    meta: {
      title: 'Die Praxis',
      description:
        're:motio bedeutet zurück zur Bewegung: Physiotherapie für alle, die beweglicher, stärker und selbstständiger werden möchten. Lernen Sie unsere Praxis und unser Team kennen.',
    },
    hero: {
      eyebrow: 'Die Praxis',
      title: 'Zurück zur',
      titleAccent: 'Bewegung.',
      description:
        'Persönliche Physiotherapie für alle, die wieder beweglicher, stärker und selbstständiger werden möchten.',
      marker: { number: '01', label: 'Praxis' },
    },
    story: {
      index: '01 — Unser Ziel',
      title: 'Ihre Beweglichkeit verbessern. Ihren Körper wieder belastbar machen.',
      goal: 'Unser Ziel ist es, Ihre Beweglichkeit zu verbessern, Schmerzen und Beschwerden zu reduzieren und Ihren Körper wieder stärker und belastbarer zu machen.',
      audience:
        'Bei uns ist jeder willkommen – vom Kind bis ins hohe Alter, vom Sportler bis zum Menschen, der im Alltag wieder beweglicher und sicherer werden möchte. Wir begleiten Sie vor und nach Operationen, nach Verletzungen sowie bei akuten und länger bestehenden Beschwerden.',
      method:
        'Mit moderner, evidenzbasierter Physiotherapie, aktiver Therapie und gezielter Kräftigung entwickeln wir eine Behandlung, die zu Ihnen und Ihren persönlichen Zielen passt.',
      chipsLabel: 'Für wen wir behandeln',
      statement:
        'Denn Bewegung bedeutet für uns mehr als körperliche Funktion – sie bedeutet Freiheit, Selbstständigkeit und Lebensqualität.',
      audiences: [
        'Kinder & Jugendliche',
        'Erwachsene jeden Alters',
        'Sportlerinnen & Sportler',
        'Vor & nach Operationen',
        'Nach Verletzungen',
        'Akute & chronische Beschwerden',
      ],
    },
    team: {
      index: '02 — Das Team',
      title: 'Menschen, die zuhören.',
      intro:
        'Namen, Porträts und Qualifikationen werden nach dem finalen Praxisteam ergänzt.',
    },
    cta: {
      eyebrow: 'Bewegung ist Ihre Stärke. Wir bringen sie zurück.',
      title: 'Lassen Sie uns über Ihr Anliegen sprechen.',
      text: 'Sie haben Fragen zur Behandlung oder möchten einen Termin vereinbaren? Wir freuen uns auf Sie.',
    },
  },

  services: {
    meta: {
      title: 'Leistungen',
      description:
        'Unsere Physiotherapie in der Übersicht: Krankengymnastik, Manuelle Therapie, KGG, Manuelle Lymphdrainage, Massage, Elektrotherapie, Ultraschall und Wärmetherapie.',
    },
    hero: {
      eyebrow: 'Leistungen',
      title: 'Was wir',
      titleAccent: 'anbieten.',
      description:
        'Von der aktiven Bewegungstherapie bis zur Wärmetherapie: Methoden, die wir passend zu Ihren Beschwerden und Zielen einsetzen.',
      marker: { number: '02', label: 'Leistungen' },
    },
    items: [
      {
        number: '01',
        title: 'Krankengymnastik',
        description:
          'Aktive Bewegungstherapie als Basis jeder Behandlung: mobilisieren, stabilisieren und die Belastbarkeit schrittweise steigern.',
        focus: ['Mobilität', 'Kraft', 'Alltag'],
      },
      {
        number: '02',
        title: 'Manuelle Therapie (MT)',
        description:
          'Gezielte Techniken für Gelenke und Gewebe, um Schmerzen zu lindern und Beweglichkeit wiederherzustellen.',
        focus: ['Gelenke', 'Mobilisation', 'Schmerzlinderung'],
      },
      {
        number: '03',
        title: 'Krankengymnastik am Gerät (KGG)',
        description:
          'Kraftaufbau an speziell ausgestatteten Geräten, abgestimmt auf Ihren Heilungsverlauf und Ihre Ziele.',
        focus: ['Kraftaufbau', 'Gerätetraining', 'Begleitung'],
      },
      {
        number: '04',
        title: 'Manuelle Lymphdrainage (MLD)',
        description:
          'Sanfte Entlastung bei Schwellungen und Wasserablagerungen, besonders nach Operationen und Verletzungen.',
        focus: ['Schwellungen', 'Nach Operationen', 'Erholung'],
      },
      {
        number: '05',
        title: 'Massage',
        description:
          'Entspannung von Muskulatur und Bindegewebe für einen freieren, leichteren Alltag.',
        focus: ['Entspannung', 'Muskulatur', 'Erholung'],
      },
      {
        number: '06',
        title: 'Elektrotherapie / Ultraschall',
        description:
          'Physikalische Anwendungen zur Schmerzreduktion und zur Unterstützung des Heilungsverlaufs.',
        focus: ['Schmerz', 'Heilung', 'Begleitung'],
      },
      {
        number: '07',
        title: 'Wärmetherapie',
        description:
          'Wärme entspannt das Gewebe und macht Bewegungen angenehmer – oft der Einstieg in die aktive Behandlung.',
        focus: ['Entspannung', 'Vorbereitung', 'Beweglichkeit'],
      },
    ],
    cta: {
      eyebrow: 'Ihr nächster Schritt',
      title: 'Sie sind unsicher, was zu Ihnen passt?',
      text: 'Bringen Sie Ihre Fragen und Beschwerden mit in das Erstgespräch – wir nehmen uns Zeit dafür.',
    },
  },

  appointments: {
    meta: {
      title: 'Termin buchen',
      description:
        'Termin online oder telefonisch bei der Physiotherapiepraxis re:motio vereinbaren.',
    },
    hero: {
      eyebrow: 'Termine',
      title: 'Termin',
      titleAccent: 'buchen.',
      description:
        'Wählen Sie online einen Termin oder rufen Sie uns an – wir finden gemeinsam den passenden Zeitpunkt.',
      marker: { number: '04', label: 'Termine' },
    },
    booking: {
      status: 'Vorbereitung',
      title: 'Online-Buchung folgt in Kürze.',
      text: 'Sobald die Buchungssoftware verbunden ist, wählen Sie hier Ihre Wunschtermine direkt aus und bestätigen sie.',
      action: 'Verfügbare Termine ansehen',
      disabled: 'Buchung wird vorbereitet',
      privacy:
        'Für die externe Buchungssoftware gelten deren eigene Datenschutzbestimmungen.',
    },
    alternative: {
      index: 'Direkt Kontakt aufnehmen',
      title: 'Lieber telefonisch?',
      text: 'Rufen Sie uns während der Praxiszeiten an – wir vereinbaren direkt einen Termin mit Ihnen.',
    },
  },

  contact: {
    meta: {
      title: 'Kontakt',
      description:
        'Kontaktieren Sie die Physiotherapiepraxis re:motio für Telefon, E-Mail, Praxisadresse und Öffnungszeiten.',
    },
    hero: {
      eyebrow: 'Kontakt',
      title: 'Wir hören',
      titleAccent: 'zu.',
      description:
        'Sie haben eine Frage oder möchten Ihr Anliegen kurz schildern? Nehmen Sie gern Kontakt mit uns auf.',
      marker: { number: '03', label: 'Kontakt' },
    },
    direct: {
      index: 'Direkter Kontakt',
      title: 'Per Telefon oder E-Mail.',
      text: 'Am einfachsten erreichen Sie uns während der Praxiszeiten per Telefon. Für schriftliche Anliegen senden Sie uns eine E-Mail.',
    },
    address: {
      index: 'Praxis',
      title: 'Hier finden Sie uns.',
    },
    cta: {
      eyebrow: 'Terminwunsch',
      title: 'Lieber direkt online?',
      text: 'Die Online-Buchung wird in Kürze verfügbar sein. Bis dahin übermitteln Sie Ihren Terminwunsch gern telefonisch oder per E-Mail.',
    },
  },

  team: {
    members: [
      {
        name: 'Name folgt',
        role: 'Physiotherapie',
        focus: 'Schwerpunkte und Qualifikationen werden ergänzt.',
      },
      {
        name: 'Name folgt',
        role: 'Physiotherapie',
        focus:
          'Persönliche Vorstellung und behandlungsbezogene Schwerpunkte folgen.',
      },
    ],
  },

  footer: {
    claim: 'Bewegung ist Ihre Stärke. Wir bringen sie zurück.',
    navLabel: 'Entdecken',
    contactLabel: 'Kontakt',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    toTop: 'Nach oben ↑',
  },

  legal: {
    heroLabel: 'Rechtliches',
    standLabel: 'Stand:',
    sidebar: {
      label: 'Wichtiger Hinweis',
      title: 'Diese Seite ist eine Inhaltsvorlage.',
      text: 'Verantwortliche Angaben, Rechtstexte und Kontaktdaten müssen vor der Veröffentlichung ergänzt und geprüft werden.',
    },
    imprint: {
      meta: {
        title: 'Impressum',
        description:
          'Anbieterkennzeichnung und rechtliche Hinweise für die Website der Physiotherapiepraxis re:motio.',
      },
      updated: '25. September 2026',
      details: {
        heading: 'Angaben gemäß § 5 DDG',
        rows: [
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
        ],
      },
      sections: [
        {
          heading: 'Redaktionell verantwortlich',
          body: [
            [
              'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV ist',
              { placeholder: ' [Name und ladungsfähige Anschrift]' },
              '.',
            ],
          ],
        },
        {
          heading: 'Verbraucherstreitbeilegung',
          body: [
            [
              'Die Anwendbarkeit des Verbraucherstreitbeilegungsgesetzes und eine gegebenenfalls erforderliche Erklärung sind anhand der finalen Unternehmensform und der Tätigkeit der Praxis rechtlich zu prüfen.',
            ],
          ],
        },
        {
          heading: 'Haftung für Inhalte',
          body: [
            [
              'Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 7 bis 10 DDG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
            ],
            [
              'Die Inhalte dieser Website dienen der allgemeinen Information. Sie ersetzen keine persönliche Beratung, Diagnose oder ärztliche beziehungsweise therapeutische Behandlung.',
            ],
          ],
        },
        {
          heading: 'Haftung für Links',
          body: [
            [
              'Dieses Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte und die Datenschutzpraxis verlinkter Anbieter ist ausschließlich der jeweils verantwortliche Anbieter verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden entsprechende Links umgehend entfernt.',
            ],
          ],
        },
        {
          heading: 'Urheberrecht und Bildmaterial',
          body: [
            [
              'Die durch die Betreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Durch die Vervielfältigung, Verbreitung und Verwertung außerhalb der Grenzen des Urheberrechts bedarf es der schriftlichen Zustimmung der jeweils berechtigten Person oder des Anbieters.',
            ],
            [
              'Für eingesetzte Fotos, Videos und Logos müssen passende Nutzungsrechte bestehen und entsprechende Bildnachweise vorliegen.',
            ],
          ],
        },
      ],
    },
    privacy: {
      meta: {
        title: 'Datenschutz',
        description:
          'Informationen zur Verarbeitung personenbezogener Daten beim Besuch der Website und bei der Kontaktaufnahme mit re:motio.',
      },
      updated: '25. September 2026',
      sections: [
        {
          heading: '1. Verantwortlicher',
          body: [
            [
              'Verantwortlich für die Datenverarbeitung auf dieser Website ist',
              { placeholder: ' [Name, Anschrift und Kontaktdaten der Praxis]' },
              '. Die abschließenden Angaben sind vor Veröffentlichung zu ergänzen.',
            ],
          ],
        },
        {
          heading: '2. Besonders sensible Daten',
          body: [
            [
              'Die Website enthält bewusst kein Kontaktformular und keine Eingabemöglichkeit für Gesundheitsdaten. Bitte senden Sie über E-Mail keine Diagnosen, Befunde oder besonders sensible Gesundheitsinformationen, sofern dies nicht für eine konkrete Terminorganisation erforderlich ist. Für eine sichere Übermittlung kann ein gesicherter Kanal der Praxis vereinbart werden.',
            ],
          ],
        },
        {
          heading: '3. Aufruf der Website',
          body: [
            [
              'Beim Aufruf dieser Website übermittelt Ihr Browser technisch notwendige Daten an den Hosting-Anbieter. Dazu können insbesondere Ihre aufgerufene Seite, Datum und Uhrzeit, übertragene Datenmenge, Meldung über erfolgreichen Abruf, Browsertyp und Browserversion sowie Betriebssystem gehören.',
            ],
            [
              'Die Verarbeitung erfolgt zur sicheren und fehlerfreien Bereitstellung der Website auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Die Verantwortlichkeit, Aufbewahrungsfrist und gegebenenfalls eingesetzte Auftragsverarbeitung sind mit dem endgültigen Hosting-Anbieter zu dokumentieren.',
            ],
            [
              {
                placeholder:
                  '[Name, Adresse und Kontaktdaten des Hosting-Anbieters ergänzen]',
              },
            ],
          ],
        },
        {
          heading: '4. Kontaktaufnahme',
          body: [
            [
              'Wenn Sie uns per Telefon oder E-Mail kontaktieren, werden die von Ihnen mitgeteilten Daten zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen verarbeitet. Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung, soweit erforderlich, oder zur Erfüllung eines Vertrags beziehungsweise vorvertraglicher Maßnahmen nach Art. 6 Abs. 1 lit. a beziehungsweise lit. b DSGVO. Unsere Aufbewahrungsfristen richten sich nach den gesetzlichen Vorgaben und den berufs- und vertragsrechtlichen Erfordernissen.',
            ],
          ],
        },
        {
          heading: '5. Buchungssoftware',
          body: [
            [
              'Die Website verlinkt auf eine externe Buchungssoftware. Beim Öffnen der verlinkten Plattform gelten deren Datenschutzhinweise und die Verantwortlichkeit des jeweiligen Anbieters. Welche Daten beim Buchungsvorgang verarbeitet werden, hängt vom endgültigen Anbieter und dem gewählten Buchungsprozess ab.',
            ],
            [
              {
                placeholder:
                  '[Anbieter, URL, Zweck der Übermittlung und gegebenenfalls Rechtsgrundlage ergänzen]',
              },
            ],
          ],
        },
        {
          heading: '6. Cookies und lokale Speicherung',
          body: [
            [
              'Für den aktuellen Stand setzt diese Website keine nicht technisch notwendigen Cookies, kein Tracking und keine Analyse- oder Werbetechnologien. Die Schrift Source Sans 3 wird lokal ausgeliefert; es findet keine Verbindung zu einem externen Schrift-Dienst statt.',
            ],
            [
              'Sollten später Analyse-, Kartendienste, eingebettete Buchungsfunktionen oder nicht notwendige Speicherungen ergänzt werden, ist vorher eine informierte Einwilligungslösung nach den geltenden Datenschutzregeln umzusetzen.',
            ],
          ],
        },
        {
          heading: '7. Externe Inhalte und Medien',
          body: [
            [
              'Aktuell sind keine externen Karten, Videos, Social-Media-Widgets oder Schriftbibliotheken eingebunden. Bei späteren Einbettungen oder automatischen Uploads von Inhalten Dritter können Daten an deren Server übermittelt werden. Die Datenschutzerklärung ist entsprechend anzupassen.',
            ],
          ],
        },
        {
          heading: '8. Ihre Rechte',
          body: [
            [
              'Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Sofern eine Einwilligung erteilt wurde, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen. Eine kurze Nachricht an die Praxis genügt zur Ausübung der Rechte, soweit keine gesetzlichen Ausnahmen entgegenstehen.',
            ],
          ],
        },
        {
          heading: '9. Beschwerderecht',
          body: [
            [
              'Sie haben das Recht, sich bei einer Datenschutzaufsichtsbeschwerde zu beschweren, insbesondere in einer Aufsichtsbehörde Ihres Aufenthaltsorts oder Arbeitsplatzes. Die zuständige Stelle ist anhand des endgültigen Praxisorts zu ergänzen.',
            ],
          ],
        },
        {
          heading: '10. Aktualität',
          body: [
            [
              'Diese Datenschutzerklärung wird angepasst, sobald Inhalte, Anbieter oder rechtliche Anforderungen geändert werden. Die jeweils aktuelle Fassung ist an dieser Stelle abrufbar.',
            ],
          ],
        },
      ],
    },
  },

  notFound: {
    meta: {
      title: 'Seite nicht gefunden',
      description: 'Die angeforderte Seite wurde nicht gefunden.',
    },
    eyebrow: 'Fehler 404',
    title: 'Diese Seite ist gerade nicht in Bewegung.',
    text: 'Der aufgerufene Inhalt wurde verschoben oder existiert unter dieser Adresse nicht.',
    home: 'Zur Startseite',
    contact: 'Kontakt',
  },
} as const
