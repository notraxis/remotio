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
import { site } from '../data/site'

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
    { label: 'Praxis & Team', path: '/praxis' },
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
    instagram: '{name} auf Instagram',
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
      meaning: {
        nameAccent: 're:',
        name: 'motio',
        definition:
          'bedeutet „zurück zur Bewegung“ – und genau dafür stehen wir.',
      },
      goal:
        'Unser Ziel ist es, Ihre Beweglichkeit zu verbessern, Schmerzen und Beschwerden zu reduzieren und Ihren Körper wieder stärker und belastbarer zu machen.',
      facts: ['Evidenzbasiert', 'Modern', 'Individuell'],
    },
    areas: {
      index: 'Direkt weiter',
      title: 'Praxis, Leistungen, Kontakt.',
      intro: 'Diese drei Seiten führen Sie weiter – alles Weitere steht dort.',
      items: [
        {
          title: 'Praxis & Team',
          text: 'Was re:motio bedeutet, für wen wir behandeln und wer hinter der Praxis steht.',
          path: '/praxis',
        },
        {
          title: 'Leistungen',
          text: 'Von Krankengymnastik bis Hausbesuch – Unsere Leistungen im Überblick.',
          path: '/leistungen',
        },
        {
          title: 'Kontakt & Termine',
          text: 'Termine online oder telefonisch vereinbaren – Unsere Kontaktdaten und Öffnungszeiten.',
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
      title: 'Praxis & Team',
      description:
        're:motio bedeutet zurück zur Bewegung: Physiotherapie für alle, die beweglicher, stärker und selbstständiger werden möchten. Lernen Sie unsere Praxis und unser Team kennen.',
    },
    hero: {
      eyebrow: 'Praxis & Team',
      title: 'Das sind',
      titleAccent: 'wir.',
      description:
        'Persönliche Physiotherapie für alle, die schmerzfreier, aktiver, stärker und selbstständiger werden möchten.',
    },
    story: {
      index: 'Unser Ziel',
      title: 'Mehr Beweglichkeit. Weniger Schmerz.',
      audience: [
        'Bei uns ist ',
        { strong: 'jeder willkommen' },
        ' – vom Kind bis ins hohe Alter, vom Sportler bis zum Menschen, der im Alltag wieder beweglicher und sicherer werden möchte. Wir begleiten Sie ',
        { strong: 'vor und nach Operationen' },
        ', nach Verletzungen sowie bei akuten und länger bestehenden Beschwerden.',
      ],
      method: [
        'Mit moderner, evidenzbasierter Physiotherapie, aktiver Therapie und gezielter Kräftigung entwickeln wir eine Behandlung, die zu ',
        { strong: 'Ihnen und Ihren persönlichen Zielen' },
        ' passt.',
      ],
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
      index: 'Das Team',
      title: 'Menschen, die zuhören.',
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
        'Unsere Physiotherapie in der Übersicht: Krankengymnastik, Manuelle Therapie, KGG, Manuelle Lymphdrainage, Massage, Elektrotherapie, Ultraschall, Wärmetherapie, Kinesiotape und Hausbesuche.',
    },
    hero: {
      eyebrow: 'Leistungen',
      title: 'Was wir',
      titleAccent: 'anbieten.',
      description:
        'Wir bieten ein breites Spektrum physiotherapeutischer Methoden – für mehr Beweglichkeit, weniger Beschwerden und einen belastbaren Körper.',
    },
    items: [
      {
        title: 'Krankengymnastik',
        description:
          'Aktive Bewegungstherapie als Basis jeder Behandlung: mobilisieren, schmerzfreier und belastbarer werden.',
        focus: ['Mobilität', 'Kraft', 'Alltag'],
      },
      {
        title: 'Manuelle Therapie (MT)',
        description:
          'Gezielte Techniken für Gelenke und Gewebe, um Schmerzen zu lindern und Beweglichkeit wiederherzustellen.',
        focus: ['Gelenke', 'Mobilisation', 'Schmerzlinderung'],
      },
      {
        title: 'Krankengymnastik am Gerät (KGG)',
        description:
          'Kraftaufbau an speziell ausgestatteten Geräten, abgestimmt auf Ihren Heilungsverlauf und Ihre Ziele.',
        focus: ['Kraftaufbau', 'Gerätetraining', 'Begleitung'],
      },
      {
        title: 'Manuelle Lymphdrainage (MLD)',
        description:
          'Sanfte Entlastung bei Schwellungen und Ödemen, besonders nach Operationen und Verletzungen.',
        focus: ['Schwellungen', 'Nach Operationen', 'Erholung'],
      },
      {
        title: 'Massage',
        description:
          'Entspannung von Muskulatur und Bindegewebe für einen freieren, leichteren Alltag.',
        focus: ['Entspannung', 'Muskulatur', 'Erholung'],
      },
      {
        title: 'Elektrotherapie / Ultraschall',
        description:
          'Physikalische Anwendungen zur Schmerzreduktion und zur Unterstützung des Heilungsverlaufs.',
        focus: ['Schmerz', 'Heilung', 'Begleitung'],
      },
      {
        title: 'Wärmetherapie',
        description:
          'Wärme entspannt das Gewebe und macht Bewegungen angenehmer – oft der Einstieg in die aktive Behandlung.',
        focus: ['Entspannung', 'Vorbereitung', 'Beweglichkeit'],
      },
      {
        title: 'Kinesiotape',
        description:
          'Elastische Tapes unterstützen Muskeln, Gelenke und Gewebe – zur Entlastung, Stabilisierung und als Begleitung der aktiven Therapie.',
        focus: ['Stabilisierung', 'Entlastung', 'Schmerzlinderung'],
      },
      {
        title: 'Hausbesuche',
        description:
          'Physiotherapie bei Ihnen zu Hause, wenn ein Weg in die Praxis nicht möglich oder beschwerlich ist – persönlich und mit denselben Behandlungszielen.',
        focus: ['Zuhause', 'Mobilitätseingeschränkt', 'Persönlich'],
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
      text: [
        'Rufen Sie uns während der Telefonzeiten ',
        { strong: 'zwischen 8 und 12 Uhr' },
        ' an – wir vereinbaren direkt einen Termin mit Ihnen.',
      ],
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
    },
    direct: {
      index: 'Direkter Kontakt',
      title: 'Per Telefon oder E-Mail.',
      text: 'Telefonisch sind wir vormittags von 8 bis 12 Uhr für Sie da. Außerhalb dieser Zeiten können Sie jederzeit online buchen oder uns eine Terminanfrage per E-Mail senden.',
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
    socialLabel: 'Folgen',
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
      updated: 'Oktober 2026',
      sidebar: {
        label: 'Anbieterkennzeichnung',
        title: 're:motio – Physiotherapie',
        text: `Jörg Kraus · ${site.contact.street} · ${site.contact.postalCode} ${site.contact.city}`,
      },
      details: {
        heading: 'Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)',
        rows: [
          ['Praxisanschrift / Diensteanbieter', 're:motio – Physiotherapie'],
          ['Inhaber', 'Jörg Kraus'],
          [
            'Anschrift',
            `${site.contact.street}, ${site.contact.postalCode} ${site.contact.city}, Deutschland`,
          ],
          ['Telefon', site.contact.phoneDisplay],
          ['E-Mail', site.contact.email],
        ],
      },
      sections: [
        {
          heading: 'Gesetzliche Berufsbezeichnung',
          body: [
            ['Physiotherapeut (verliehen in der Bundesrepublik Deutschland)'],
            ['Erlaubnis erteilt am 06.12.2011'],
            ['Erlaubniserteilende Behörde: Kommunaler Sozialverband Sachsen, Leipzig'],
          ],
        },
        {
          heading: 'Zuständige Aufsichtsbehörde',
          body: [
            ['Landratsamt Tirschenreuth – Staatliches Gesundheitsamt'],
            ['St.-Peter-Straße 33'],
            ['95643 Tirschenreuth'],
            [
              {
                placeholder:
                  'Behördenanschrift vor Veröffentlichung nochmals prüfen.',
              },
            ],
          ],
        },
        {
          heading: 'Berufsrechtliche Regelungen',
          body: [
            [
              'Gesetz über die Berufe in der Physiotherapie (Masseur- und Physiotherapeutengesetz – MPhG):',
            ],
            ['https://www.gesetze-im-internet.de/mphg/'],
            [
              'Ausbildungs- und Prüfungsverordnung für Physiotherapeuten (PhysTh-APrV):',
            ],
            ['https://www.gesetze-im-internet.de/physth-aprv/'],
          ],
        },
        {
          heading: 'Angaben zur Berufshaftpflichtversicherung',
          body: [
            [{ placeholder: 'Versicherungsunternehmen: [Name ergänzen]' }],
            [{ placeholder: 'Anschrift des Versicherers: [Anschrift ergänzen]' }],
            [
              {
                placeholder:
                  'Räumlicher Geltungsbereich: [laut Versicherungsvertrag ergänzen]',
              },
            ],
          ],
        },
        {
          heading: 'Umsatzsteuer',
          body: [
            [
              'Eine Umsatzsteuer-Identifikationsnummer ist nicht vorhanden. Medizinisch indizierte physiotherapeutische Heilbehandlungen können nach § 4 Nr. 14 Buchst. a UStG umsatzsteuerfrei sein. Für andere Leistungen kann eine andere steuerliche Behandlung gelten.',
            ],
          ],
        },
        {
          heading: 'Heilversprechen / Heilmittelwerbegesetz',
          body: [
            [
              'Die Informationen auf dieser Website dienen der allgemeinen Information über physiotherapeutische Leistungen. Es werden keine bestimmten Behandlungserfolge oder Heilungen garantiert. Die Informationen ersetzen keine individuelle medizinische Untersuchung oder Beratung.',
            ],
          ],
        },
        {
          heading: 'Urheberrecht und Bildnachweise',
          body: [
            [
              'Die Inhalte dieser Website, insbesondere Texte, Fotografien und Grafiken, sind im Rahmen der geltenden gesetzlichen Bestimmungen geschützt. Eine Nutzung bedarf, soweit gesetzlich erforderlich, der Zustimmung der jeweiligen Rechteinhaber. Erforderliche Bildnachweise werden am Bild oder an geeigneter Stelle angegeben.',
            ],
          ],
        },
        {
          heading: 'Verbraucherstreitbeilegung',
          body: [
            [
              'Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
            ],
          ],
        },
        {
          heading:
            'Verantwortlich für journalistisch-redaktionelle Inhalte (soweit vorhanden)',
          body: [
            ['Jörg Kraus'],
            [site.contact.street],
            [`${site.contact.postalCode} ${site.contact.city}`],
          ],
        },
        {
          heading: 'Hinweis vor Veröffentlichung',
          body: [
            [
              {
                placeholder:
                  'Versicherer und Geltungsbereich vervollständigen; Aufsichtsbehörde und individuelle Pflichtangaben prüfen. Eine Berufsverbandsmitgliedschaft oder Heilpraktikererlaubnis wurde nicht unterstellt.',
              },
            ],
          ],
        },
      ],
    },
    privacy: {
      meta: {
        title: 'Datenschutzerklärung',
        description:
          'Informationen zur Verarbeitung personenbezogener Daten beim Besuch der Website und bei der Kontaktaufnahme mit re:motio.',
      },
      updated: 'Oktober 2026',
      sections: [
        {
          heading: '1. Allgemeine Hinweise',
          body: [
            [
              'Diese Datenschutzerklärung informiert über die Verarbeitung personenbezogener Daten beim Besuch unserer Website. Personenbezogene Daten sind Informationen, die sich auf eine identifizierte oder identifizierbare Person beziehen. Die Erklärung ist auf die Website bezogen; für die Verarbeitung von Patientendaten in der Praxis können ergänzende Datenschutzhinweise erforderlich sein.',
            ],
          ],
        },
        {
          heading: '2. Verantwortlicher',
          body: [
            ['Diensteanbieter: re:motio – Physiotherapie'],
            ['Inhaber: Jörg Kraus'],
            [
              `Anschrift: ${site.contact.street}, ${site.contact.postalCode} ${site.contact.city}, Deutschland`,
            ],
            [`Telefon: ${site.contact.phoneDisplay}`],
            [`E-Mail: ${site.contact.email}`],
            [
              'Für Datenschutzanfragen und die Ausübung Ihrer Rechte verwenden Sie bitte die vorstehenden Kontaktdaten.',
            ],
          ],
        },
        {
          heading: '3. Hosting',
          body: [
            [
              'Unsere Website wird nach derzeitiger Planung bei DomainFactory GmbH, c/o WeWork, Neuturmstraße 5, 80331 München, betrieben. Hierbei werden technisch notwendige Zugriffsdaten verarbeitet. Zweck ist die sichere, zuverlässige Bereitstellung der Website; Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Soweit DomainFactory als Auftragsverarbeiter tätig wird, ist eine Vereinbarung nach Art. 28 DSGVO erforderlich.',
            ],
            ['Weitere Informationen: https://www.df.eu/de/datenschutz/'],
            [
              {
                placeholder:
                  'Anbieterangaben und Vertragsstatus sind vor Veröffentlichung zu prüfen.',
              },
            ],
          ],
        },
        {
          heading: '4. Server-Logfiles',
          body: [
            [
              'Beim Zugriff können IP-Adresse, Datum und Uhrzeit, Browsertyp und -version, Betriebssystem, aufgerufene Seiten und Dateien, Referrer-URL (sofern übermittelt), Zugriffsstatus sowie übertragene Datenmenge protokolliert werden. Der Hostname ist nur aufzunehmen, falls er tatsächlich erfasst wird. Zwecke: Betrieb, Fehleranalyse und IT-Sicherheit. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.',
            ],
            [
              {
                placeholder:
                  'Tatsächlich erfasste Felder und Löschfristen sind noch anhand der Hosting-Einstellungen zu ergänzen.',
              },
            ],
          ],
        },
        {
          heading: '5. Verschlüsselte Übertragung',
          body: [
            [
              'Die Website soll über HTTPS mit TLS-Verschlüsselung bereitgestellt werden.',
            ],
            [
              {
                placeholder:
                  'Die korrekte Einrichtung muss vor Veröffentlichung technisch überprüft werden.',
              },
            ],
          ],
        },
        {
          heading: '6. Kontaktaufnahme',
          body: [
            [
              'Bei einer Kontaktaufnahme per Telefon oder E-Mail verarbeiten wir die übermittelten Kontaktdaten und den Inhalt Ihrer Anfrage zur Bearbeitung und gegebenenfalls zur Vorbereitung eines Behandlungsvertrags. Rechtsgrundlagen sind je nach Anfrage Art. 6 Abs. 1 lit. b oder f DSGVO. Für Gesundheitsdaten ist zusätzlich eine Ausnahme nach Art. 9 Abs. 2 DSGVO erforderlich, insbesondere lit. h, soweit deren Voraussetzungen erfüllt sind. Daten werden nach Wegfall des Zwecks gelöscht, soweit keine Aufbewahrungspflichten bestehen. Bitte senden Sie sensible Gesundheitsdaten möglichst nicht unverschlüsselt per E-Mail.',
            ],
          ],
        },
        {
          heading: '7. Online-Terminbuchung über Thevea',
          body: [
            [
              'Geplant ist ein externer Link zur Terminbuchung über Thevea. Beim Anklicken des Links verlassen Sie unsere Website; auf der Zielseite gelten die dortigen Datenschutzinformationen. Für die Verarbeitung von Termin- und gegebenenfalls Gesundheitsdaten im Rahmen der Behandlung kommen Art. 6 Abs. 1 lit. b und Art. 9 Abs. 2 lit. h DSGVO in Betracht, soweit die Voraussetzungen vorliegen.',
            ],
            [
              {
                placeholder:
                  'Konkreter Betreiber, Datenempfänger, Vertragsgestaltung, Speicherdauer und technische Einbindung sind vor Veröffentlichung zu prüfen und zu ergänzen.',
              },
            ],
          ],
        },
        {
          heading: '8. Cookies und ähnliche Technologien',
          body: [
            [
              'Technisch notwendige Technologien können für den Betrieb der Website eingesetzt werden. Soweit ein Zugriff auf Informationen im Endgerät unbedingt erforderlich ist, kann § 25 Abs. 2 TDDDG einschlägig sein. Für nicht notwendige Cookies oder Analyse- und Marketingtechnologien ist grundsätzlich vorab eine Einwilligung erforderlich (§ 25 Abs. 1 TDDDG und, soweit personenbezogene Daten verarbeitet werden, Art. 6 Abs. 1 lit. a DSGVO). Einwilligungen müssen widerrufbar sein.',
            ],
            [
              {
                placeholder:
                  'Konkrete Dienste, Zwecke, Laufzeiten und Widerrufsweg werden nach Festlegung der Website-Technik ergänzt.',
              },
            ],
          ],
        },
        {
          heading: '9. Externe Links und weitere Dienste',
          body: [
            [
              'Unsere Website kann auf externe Seiten verlinken. Nach dem Aufruf der Zielseite gelten deren Datenschutzinformationen. Derzeit sind kein Kontaktformular und keine eingebettete Google-Maps-Karte vorgesehen.',
            ],
            [
              {
                placeholder:
                  'Ob externe Schriftarten, Videos, Social-Media-Einbindungen oder sonstige Drittanbieterdienste eingesetzt werden, muss vor Veröffentlichung geprüft werden; bei Einsatz sind entsprechende Angaben zu ergänzen.',
              },
            ],
          ],
        },
        {
          heading: '10. Empfänger und Weitergabe',
          body: [
            [
              'Personenbezogene Daten werden nur auf geeigneter Rechtsgrundlage weitergegeben, etwa an technische Dienstleister, soweit dies für Websitebetrieb oder Anfragen erforderlich ist. Für Auftragsverarbeitung werden erforderliche Verträge nach Art. 28 DSGVO geschlossen.',
            ],
            [
              {
                placeholder:
                  'Konkrete Empfänger beziehungsweise Empfängerkategorien sind nach der technischen Einrichtung zu überprüfen.',
              },
            ],
          ],
        },
        {
          heading: '11. Übermittlungen in Drittländer',
          body: [
            [
              'Ob Daten außerhalb der EU beziehungsweise des EWR verarbeitet werden, hängt von den tatsächlich eingesetzten Dienstleistern ab. Falls dies geschieht, werden die betroffenen Dienste, die einschlägige Rechtsgrundlage und die vorgesehenen Garantien beziehungsweise Angemessenheitsbeschlüsse hier ergänzt.',
            ],
            ['Derzeit ist eine abschließende Aussage nicht möglich.'],
          ],
        },
        {
          heading: '12. Speicherdauer',
          body: [
            [
              'Wir speichern personenbezogene Daten nur so lange, wie dies für den jeweiligen Zweck erforderlich ist, sofern keine gesetzlichen Aufbewahrungspflichten oder andere rechtmäßige Gründe eine längere Speicherung verlangen.',
            ],
            [
              {
                placeholder:
                  'Konkrete Löschfristen beziehungsweise Kriterien für deren Festlegung sind je Verarbeitungsvorgang zu ergänzen, soweit bekannt.',
              },
            ],
          ],
        },
        {
          heading: '13. Rechte betroffener Personen',
          body: [
            [
              'Sie haben nach den gesetzlichen Voraussetzungen Rechte auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21 DSGVO). Eine erteilte Einwilligung können Sie nach Art. 7 Abs. 3 DSGVO jederzeit mit Wirkung für die Zukunft widerrufen. Zur Ausübung dieser Rechte wenden Sie sich an die Kontaktdaten unter Ziffer 2. Ihnen steht außerdem ein Beschwerderecht nach Art. 77 DSGVO zu.',
            ],
          ],
        },
        {
          heading: '14. Pflicht zur Bereitstellung von Daten',
          body: [
            [
              'Für den bloßen Besuch der Website besteht grundsätzlich keine gesetzliche Pflicht, uns freiwillig zusätzliche personenbezogene Daten bereitzustellen. Technisch erforderliche Verbindungsdaten fallen beim Websiteaufruf jedoch automatisch an; ohne sie ist die Bereitstellung der Website nicht möglich. Bei Termin- oder Behandlungsanfragen können bestimmte Angaben zur Bearbeitung und Durchführung erforderlich sein.',
            ],
            [
              {
                placeholder:
                  'Die genauen Pflichtfelder der externen Terminbuchung sind noch zu prüfen.',
              },
            ],
          ],
        },
        {
          heading: '15. Automatisierte Entscheidungen',
          body: [
            [
              'Nach derzeitiger Planung erfolgen im Rahmen des Websitebesuchs keine ausschließlich automatisierten Entscheidungen einschließlich Profiling mit rechtlicher oder ähnlich erheblicher Wirkung im Sinne von Art. 22 DSGVO.',
            ],
            [
              {
                placeholder:
                  'Diese Angabe ist vor Veröffentlichung anhand der tatsächlich eingesetzten Dienste zu bestätigen.',
              },
            ],
          ],
        },
        {
          heading: '16. Beschwerderecht bei der Aufsichtsbehörde',
          body: [
            [
              'Sie können sich gemäß Art. 77 DSGVO bei einer Datenschutzaufsichtsbehörde beschweren. Für die privat betriebene Praxis ist insbesondere das Bayerische Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach, zuständig. Website: https://www.lda.bayern.de.',
            ],
          ],
        },
        {
          heading: '17. Aktualisierung',
          body: [
            [
              'Diese Datenschutzerklärung wird angepasst, wenn sich rechtliche Anforderungen oder die tatsächlichen Datenverarbeitungen unserer Website ändern.',
            ],
          ],
        },
        {
          heading: 'Vor Veröffentlichung noch zu klären',
          body: [
            [
              {
                placeholder:
                  'DomainFactory-Vertrags- und Logdaten einschließlich Speicherfristen; Thevea-Betreiber und Datenflüsse; Cookie-/Tracking-Konfiguration und Widerruf; externe Schriftarten, Videos und sonstige Dienste; etwaige Drittlandübermittlungen; technische HTTPS-Einrichtung; Richtigkeit der Aussagen zu automatisierten Entscheidungen.',
              },
            ],
            [
              {
                placeholder:
                  'Dieser Entwurf ist noch nicht veröffentlichungsfertig.',
              },
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
