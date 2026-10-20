export const site = {
  name: 'Sanju Maruti Services',
  url: 'https://sanjumarutiservices.com',
  phone: '+919975049393',
  phoneDisplay: '+91 99750 49393',
  whatsapp: '919975049393',
  address: {
    line: 'Jargaon Crossing, near Hindustan Tyre, Pachora Road',
    city: 'Jalgaon',
    region: 'Maharashtra',
    country: 'IN',
  },
  areas: ['Jalgaon', 'Bhadgaon', 'Pachora', 'Chalisgaon'],
  hours: 'Mon–Sat: 9:00 AM – 6:00 PM',
  closedDay: 'Sunday: Closed',
  towing: 'Towing service available',
  // TODO: replace with Google Maps directions URL once verified
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sanju+Maruti+Services+Jalgaon',
} as const;

export const whatsappLink = (message = `Hi, I'd like to book a service at ${site.name}.`) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const navItems = [
  { href: '/services', label: 'Services' },
  { href: '/brands', label: 'Brands' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
] as const;
