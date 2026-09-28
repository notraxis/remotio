export const navigation = [
  { label: 'Start', path: '/' },
  { label: 'Die Praxis', path: '/praxis' },
  { label: 'Leistungen', path: '/leistungen' },
  { label: 'Kontakt', path: '/kontakt' },
] as const

export const site = {
  name: 're:motio',
  claim: 'Bewegung ist Ihre Stärke. Wir bringen sie zurück.',
  description:
    're:motio ist Ihre Physiotherapiepraxis für mehr Beweglichkeit, weniger Beschwerden und einen belastbaren Körper.',
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

export const heroFacts = [
  'Evidenzbasiert',
  'Jeder willkommen',
  'Vor & nach Operationen',
]

export const audiences = [
  'Kinder & Jugendliche',
  'Erwachsene jeden Alters',
  'Sportlerinnen & Sportler',
  'Vor & nach Operationen',
  'Nach Verletzungen',
  'Akute & chronische Beschwerden',
]

export const services = [
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
] as const

export const team = [
  {
    name: 'Name folgt',
    role: 'Physiotherapie',
    focus: 'Schwerpunkte und Qualifikationen werden ergänzt.',
  },
  {
    name: 'Name folgt',
    role: 'Physiotherapie',
    focus: 'Persönliche Vorstellung und behandlungsbezogene Schwerpunkte folgen.',
  },
] as const
