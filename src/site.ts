/**
 * Canonical site identity — update `url` when the production domain is final.
 * Used for JSON-LD, canonical links, and open-graph absolute URLs at build time
 * (mirrored in index.html / public sitemap via the same origin).
 */
export const site = {
  name: 'Infornix Technologies',
  shortName: 'Infornix',
  legalName: 'Infornix Technologies',
  tagline: 'IT Hardware, Service & Solutions in Mysore',
  description:
    'Infornix Technologies is an IT hardware and solutions company in Mysore (Mysuru). Sales, service, and refurbished systems — Dell, HP, Lenovo, Apple — for corporates, schools, and institutions.',
  url: 'https://infornix.vercel.app',
  locale: 'en_IN',
  language: 'en',
  email: 'techinfornix@gmail.com',
  phone: '+919739927141',
  phoneDisplay: '+91 97399 27141',
  founder: 'Madhukar S',
  foundingRole: 'CEO & Founder',
  address: {
    street: '47/D, M-block, opp. HDFC Bank, near Bus Depot, Kuvempunagar',
    city: 'Mysore',
    region: 'Karnataka',
    postalCode: '570023',
    country: 'IN',
    countryName: 'India',
  },
  geo: {
    latitude: 12.3095,
    longitude: 76.6226,
  },
  areaServed: ['Mysore', 'Mysuru', 'Karnataka', 'India'],
  sameAs: [] as string[],
  keywords: [
    'Infornix',
    'Infornix Technologies',
    'IT Hardware Mysore',
    'IT Solutions Mysore',
    'IT Service Mysore',
    'computer sales Mysore',
    'laptop sales Mysore',
    'refurbished computers Mysore',
    'Dell HP Lenovo Apple Mysore',
    'workstations servers networking Mysore',
    'IT hardware Kuvempunagar',
  ],
} as const
