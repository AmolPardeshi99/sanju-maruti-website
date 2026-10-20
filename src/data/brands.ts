export interface Brand {
  name: string;
  logo?: string;
}

export interface BrandGroup {
  segment: string;
  blurb: string;
  brands: Brand[];
}

// Owner to confirm this list before launch. Logos are public-domain files from Wikimedia Commons; brands without one show as text.
export const brandGroups: BrandGroup[] = [
  {
    segment: 'Everyday & hatchbacks',
    blurb: 'Daily drivers that need reliable, affordable care.',
    brands: [
      { name: 'Maruti Suzuki', logo: '/brands/maruti-suzuki.svg' },
      { name: 'Tata', logo: '/brands/tata.svg' },
      { name: 'Hyundai', logo: '/brands/hyundai.svg' },
      { name: 'Renault', logo: '/brands/renault.svg' },
      { name: 'Nissan', logo: '/brands/nissan.svg' },
    ],
  },
  {
    segment: 'SUVs & family cars',
    blurb: 'Space, comfort and road-ready maintenance.',
    brands: [
      { name: 'Mahindra', logo: '/brands/mahindra.webp' },
      { name: 'Kia', logo: '/brands/kia.svg' },
      { name: 'Toyota', logo: '/brands/toyota.svg' },
      { name: 'Honda', logo: '/brands/honda.svg' },
      { name: 'Skoda', logo: '/brands/skoda.svg' },
      { name: 'Volkswagen', logo: '/brands/volkswagen.svg' },
      { name: 'MG', logo: '/brands/mg.svg' },
      { name: 'Jeep', logo: '/brands/jeep.svg' },
      { name: 'Citroën', logo: '/brands/citroen.svg' },
    ],
  },
  {
    segment: 'Premium & luxury',
    blurb: 'Precision work with the right diagnostics and care.',
    brands: [
      { name: 'Mercedes-Benz', logo: '/brands/mercedes-benz.svg' },
      { name: 'BMW', logo: '/brands/bmw.svg' },
      { name: 'Audi', logo: '/brands/audi.svg' },
      { name: 'Volvo', logo: '/brands/volvo.svg' },
      { name: 'Jaguar Land Rover' },
      { name: 'Lexus', logo: '/brands/lexus.svg' },
      { name: 'Porsche', logo: '/brands/porsche.svg' },
      { name: 'MINI' },
    ],
  },
  {
    segment: 'Electric & hybrid',
    blurb: 'Battery checks, coating and servicing for EVs and hybrids.',
    brands: [
      { name: 'Tata', logo: '/brands/tata.svg' },
      { name: 'MG', logo: '/brands/mg.svg' },
      { name: 'Hyundai', logo: '/brands/hyundai.svg' },
      { name: 'Kia', logo: '/brands/kia.svg' },
      { name: 'Mahindra', logo: '/brands/mahindra.webp' },
      { name: 'BYD', logo: '/brands/byd.svg' },
    ],
  },
];
