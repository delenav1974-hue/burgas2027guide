// Centralised site + event constants used for SEO metadata and JSON-LD.

export const SITE = {
  url: 'https://burgas2027guide.com',
  name: 'Burgas 2027 Guide',
  legalName: 'Burgas 2027 Guide',
  description:
    'Independent fan travel portal for the Eurovision Song Contest 2027 in Burgas, Bulgaria.',
  logo: '/favicon.svg',
  defaultImage: '/images/hero-bg.jpg',
  telegram: 'https://t.me/burgas2027guide',
  locale: 'en',
} as const;

// Arena Burgas — coordinates per Wikipedia. Street address intentionally omitted
// (no verified source); city-level data only, so the markup stays truthful.
export const VENUE = {
  name: 'Arena Burgas',
  addressLocality: 'Burgas',
  addressRegion: 'Burgas Province',
  addressCountry: 'BG',
  latitude: 42.5247,
  longitude: 27.4558,
} as const;

// Grand Final: 15 May 2027, per EBU host-city announcement (13 Aug 2026).
export const EVENT = {
  name: 'Eurovision Song Contest 2027 — Grand Final',
  startDate: '2027-05-15T20:00:00+03:00',
  endDate: '2027-05-15T23:59:00+03:00',
  description:
    'The Grand Final of the 71st Eurovision Song Contest, hosted at Arena Burgas on the Bulgarian Black Sea coast.',
} as const;

export const place = {
  '@type': 'Place',
  name: VENUE.name,
  address: {
    '@type': 'PostalAddress',
    addressLocality: VENUE.addressLocality,
    addressRegion: VENUE.addressRegion,
    addressCountry: VENUE.addressCountry,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: VENUE.latitude,
    longitude: VENUE.longitude,
  },
};

/** Event schema for the contest itself. The site is an independent guide,
 *  so no `offers` and no claim of organiser status are asserted. */
export const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: EVENT.name,
  startDate: EVENT.startDate,
  endDate: EVENT.endDate,
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  description: EVENT.description,
  image: [`${SITE.url}/images/hero-bg.jpg`],
  location: place,
  url: `${SITE.url}/`,
};
