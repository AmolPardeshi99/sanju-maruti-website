export interface Service {
  slug: string;
  name: string;
  summary: string;
}

// Draft descriptions. Owner to review wording and add real starting prices.
export const services: Service[] = [
  { slug: 'periodic-service', name: 'Periodic service', summary: 'Scheduled maintenance by mileage or time, with a written checklist of work done.' },
  { slug: 'ac-service', name: 'AC service & repair', summary: 'AC check, gas top-up, cleaning and repair for cooling problems.' },
  { slug: 'denting-painting', name: 'Denting & painting', summary: 'Dent removal, touch-ups and full panel painting.' },
  { slug: 'car-wash', name: 'Car wash & cleaning', summary: 'Exterior wash, interior cleaning and vacuuming.' },
  { slug: 'coating-detailing', name: 'Ceramic coating & detailing', summary: 'Paint correction, detailing and ceramic coating for lasting shine and protection.' },
  { slug: 'tyres-alignment', name: 'Tyres & wheel alignment', summary: 'Tyre fitting, balancing, wheel alignment and rotation.' },
  { slug: 'battery', name: 'Battery service & replacement', summary: 'Battery testing, charging and replacement.' },
  { slug: 'clutch-engine', name: 'Clutch & engine repair', summary: 'Diagnosis and repair of clutch and engine faults.' },
  { slug: 'insurance-claims', name: 'Insurance claim assistance', summary: 'Help with repair estimates and paperwork for insurance claims.' },
  { slug: 'pickup-towing', name: 'Pickup, drop & towing', summary: 'Pickup and drop service, plus towing for breakdowns.' },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
