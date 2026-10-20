export const site = {
  name: 'Sanju Maruti Services',
  url: 'https://sanjumarutiservices.com',
  phone: '+919975049393',
  phoneDisplay: '+91 99750 49393',
  whatsapp: '919975049393',
  address: {
    line: 'Anturli Rd, Jargaon',
    city: 'Pachora',
    region: 'Maharashtra',
    postalCode: '424201',
    country: 'IN',
  },
  areas: ['Jalgaon', 'Bhadgaon', 'Pachora', 'Chalisgaon'],
  hours: 'Mon–Sat: 9:00 AM – 6:00 PM',
  closedDay: 'Sunday: Closed',
  towing: 'Towing service available',
  // TODO: replace with Google Maps directions URL once verified
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sanju+Maruti+Services,+Anturli+Rd,+Jargaon,+Pachora,+Maharashtra+424201',
} as const;

export const whatsappLink = (message = `Hi, I'd like to book a service at ${site.name}.`) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const mapEmbedUrl =
  'https://www.google.com/maps?q=' +
  encodeURIComponent('Sanju Maruti Services, Anturli Rd, Jargaon, Pachora, Maharashtra 424201') +
  '&output=embed';

// Anchors on the home page. Section ids match the sections in index.astro.
export const navItems = [
  { id: 'services', label: 'Services' },
  { id: 'brands', label: 'Brands' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
] as const;
