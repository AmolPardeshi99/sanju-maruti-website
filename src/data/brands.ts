export interface BrandGroup {
  segment: string;
  blurb: string;
  brands: string[];
}

// Owner to confirm this list before launch. Logos are added per brand once cleared.
export const brandGroups: BrandGroup[] = [
  {
    segment: 'Everyday & hatchbacks',
    blurb: 'Daily drivers that need reliable, affordable care.',
    brands: ['Maruti Suzuki', 'Tata', 'Hyundai', 'Renault', 'Nissan'],
  },
  {
    segment: 'SUVs & family cars',
    blurb: 'Space, comfort and road-ready maintenance.',
    brands: ['Mahindra', 'Kia', 'Toyota', 'Honda', 'Skoda', 'Volkswagen', 'MG', 'Jeep', 'Citroën'],
  },
  {
    segment: 'Premium & luxury',
    blurb: 'Precision work with the right diagnostics and care.',
    brands: ['Mercedes-Benz', 'BMW', 'Audi', 'Volvo', 'Jaguar Land Rover', 'Lexus', 'Porsche', 'MINI'],
  },
  {
    segment: 'Electric & hybrid',
    blurb: 'Battery checks, coating and servicing for EVs and hybrids.',
    brands: ['Tata', 'MG', 'Hyundai', 'Kia', 'Mahindra', 'BYD'],
  },
];
