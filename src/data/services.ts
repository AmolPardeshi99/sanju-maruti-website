export interface Service {
  slug: string;
  name: string;
  summary: string;
  detail: string;
  featured?: boolean;
}

export const services: Service[] = [
  {
    slug: 'periodic-service',
    name: 'Periodic service',
    summary: 'Scheduled care that keeps your engine healthy and your warranty intact.',
    detail: 'Oil and filter change, multi-point inspection and a written report of what we checked, what we changed and what needs attention next. Done on schedule, with your car back on time.',
    featured: true,
  },
  {
    slug: 'ac-service',
    name: 'AC service & repair',
    summary: 'Cold air fast, with gas top-up, cleaning and repair when it is needed.',
    detail: 'Cooling check, gas level test, filter and evaporator cleaning, and repair of blower, compressor and leak issues. Built for Jalgaon summers.',
    featured: true,
  },
  {
    slug: 'denting-painting',
    name: 'Denting & painting',
    summary: 'Dents, scratches and full repaints that match the original finish.',
    detail: 'Dent removal, panel beating, colour matching and full-panel painting. We show you the finished car before we hand it back.',
  },
  {
    slug: 'car-wash',
    name: 'Car wash & cleaning',
    summary: 'A thorough wash inside and out, every time.',
    detail: 'Exterior hand wash, wheel and tyre cleaning, interior vacuum and wipe-down. Quick washes for busy days, deep cleans when the car needs more.',
    featured: true,
  },
  {
    slug: 'coating-detailing',
    name: 'Ceramic coating & detailing',
    summary: 'Paint correction and ceramic coating for a deep, lasting shine.',
    detail: 'Paint correction to remove swirls and light scratches, then ceramic coating that repels water and dirt and keeps the finish glossy for longer.',
    featured: true,
  },
  {
    slug: 'tyres-alignment',
    name: 'Tyres & wheel alignment',
    summary: 'Smoother rides, even tyre wear and safer handling.',
    detail: 'Tyre fitting, balancing, wheel alignment and rotation. Alignment checks help your car drive straight and save tyres.',
  },
  {
    slug: 'battery',
    name: 'Battery service & replacement',
    summary: 'Battery testing, charging and replacement when it is time.',
    detail: 'Load and health test, terminal cleaning, charging and replacement with the right battery for your car.',
  },
  {
    slug: 'clutch-engine',
    name: 'Clutch & engine repair',
    summary: 'Honest diagnosis and repair of clutch and engine faults.',
    detail: 'Computerised diagnosis, a clear explanation of the fault, and a quote before any repair begins.',
  },
  {
    slug: 'insurance-claims',
    name: 'Insurance claim assistance',
    summary: 'We handle the estimate and paperwork so your claim moves faster.',
    detail: 'Damage assessment, repair estimate and the documents your insurer needs. We keep you updated at each step.',
  },
  {
    slug: 'pickup-towing',
    name: 'Pickup, drop & towing',
    summary: 'We collect your car and bring it back, or tow it in if it will not start.',
    detail: 'Pickup and drop for service visits, plus towing for breakdowns within our service area.',
    featured: true,
  },
];

export const featuredServices = services.filter((s) => s.featured);
export const getService = (slug: string) => services.find((s) => s.slug === slug);
