export const site = {
  name: 're:motio',
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
} as const
