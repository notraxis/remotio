export const site = {
  name: 're:motio',
  contact: {
    email: 'info@remotio-physio.de',
    phoneDisplay: '+49 9631 7259432',
    phoneHref: 'tel:+4996317259432',
    street: 'Maximilianplatz 31',
    postalCode: '95643',
    city: 'Tirschenreuth',
  },
  hours: [
    { days: 'Montag', time: '08:00 – 18:00' },
    { days: 'Dienstag', time: '08:00 – 17:00' },
    { days: 'Mittwoch', time: '08:00 – 18:00' },
    { days: 'Donnerstag', time: '08:00 – 17:00' },
    { days: 'Freitag', time: '08:00 – 14:00' },
    { days: 'Samstag & Sonntag', time: 'geschlossen' },
  ],
  bookingUrl: '',
  social: {
    instagram: {
      url: 'https://instagram.com/remotiophysiotherapie',
      handle: '@remotiophysiotherapie',
    },
  },
} as const
