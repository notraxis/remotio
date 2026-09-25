export const navigation = [
  { label: 'Start', path: '/' },
  { label: 'Die Praxis', path: '/praxis' },
  { label: 'Leistungen', path: '/leistungen' },
  { label: 'Kontakt', path: '/kontakt' },
] as const

export const site = {
  name: 're:motio',
  claim: 'Physiotherapie mit Zeit für dich',
  description:
    'Persönliche Physiotherapie für mehr Beweglichkeit, Sicherheit und einen selbstständigen Alltag.',
  contact: {
    email: 'hallo@beispiel.de',
    phoneDisplay: '+49 123 4567890',
    phoneHref: 'tel:+491234567890',
    street: 'Musterweg 12',
    postalCode: '12345',
    city: 'Musterstadt',
  },
  hours: [
    { days: 'Montag – Donnerstag', time: '08:00 – 18:00' },
    { days: 'Freitag', time: '08:00 – 16:00' },
    { days: 'Samstag & Sonntag', time: 'geschlossen' },
  ],
  bookingUrl: '',
}

export const services = [
  {
    number: '01',
    title: 'Orthopädie',
    description:
      'Begleitung bei Rücken- und Gelenkbeschwerden, nach Operationen und auf dem Weg zurück zu mehr Belastbarkeit.',
    focus: ['Rücken & Gelenke', 'Mobilität', 'Kraft & Stabilität'],
  },
  {
    number: '02',
    title: 'Neurologie',
    description:
      'Individuelle Therapie für Balance, Koordination und die Verbesserung motorischer Fähigkeiten im Alltag.',
    focus: ['Balance', 'Koordination', 'Alltag'],
  },
  {
    number: '03',
    title: 'Schmerztherapie',
    description:
      'Ganzheitliche Ansätze bei chronischen und akuten Schmerzen mit Blick auf Ursachen und nachhaltige Strategien.',
    focus: ['Chronische Schmerzen', 'Bewegungsverhalten', 'Selbstständigkeit'],
  },
  {
    number: '04',
    title: 'Sporttherapie',
    description:
      'Vorbereitung auf Training und Wettkampf, Regeneration und die verletzungsfreie Rückkehr in die Bewegung.',
    focus: ['Sportunterstützung', 'Regeneration', 'Prävention'],
  },
  {
    number: '05',
    title: 'Postoperative Therapie',
    description:
      'Strukturierte Rehabilitation mit klaren Zielen, damit das operierte Gelenk schrittweise wieder Vertrauen gewinnt.',
    focus: ['Heilungsverlauf', 'Gelenkbeweglichkeit', 'Kraftaufbau'],
  },
  {
    number: '06',
    title: 'Prävention',
    description:
      'Gezieltes Training für einen stabileren, bewussteren und im Alltag resilienteren Körper.',
    focus: ['Haltung', 'Resilienz', 'Alltagsroutine'],
  },
] as const

export const principles = [
  {
    number: '01',
    title: 'Zuerst verstehen',
    text: 'Wir hören zu, ordnen ein und entwickeln gemeinsam ein Ziel, das zu deinem Alltag passt.',
  },
  {
    number: '02',
    title: 'Gezielt bewegen',
    text: 'Jede Einheit beginnt dort, wo du heute stehen möchtest – mit klaren und dosierten Reizen.',
  },
  {
    number: '03',
    title: 'Selbstständig weiter',
    text: 'Du erhältst Übungen und Impulse, die dich auch zwischen den Terminen voranbringen.',
  },
] as const

export const practiceValues = [
  {
    title: 'Zeit für dich',
    text: 'Ruhige Behandlungen, aufmerksame Gespräche und Raum für Fragen.',
  },
  {
    title: 'Klar und nachvollziehbar',
    text: 'Du verstehst, was wir tun, warum es sinnvoll ist und welches Ziel wir verfolgen.',
  },
  {
    title: 'Individuell statt standardisiert',
    text: 'Dein Körper, deine Belastbarkeit und dein Ziel bestimmen den gemeinsamen Weg.',
  },
] as const

export const team = [
  {
    name: 'Name folgt',
    role: 'Physiotherapie',
    focus: 'Schwerpunkte und Qualifikationen werden ergänzt.',
    initials: 'RM',
  },
  {
    name: 'Name folgt',
    role: 'Physiotherapie',
    focus: 'Persönliche Vorstellung und behandlungsbezogene Schwerpunkte folgen.',
    initials: 'RM',
  },
] as const
