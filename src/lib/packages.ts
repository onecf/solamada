export interface ServicePackage {
  name: string;
  slug: string;
  price: number;
  priceLabel: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export const packages: ServicePackage[] = [
  {
    name: "The Solamada Experience",
    slug: "solamada-experience",
    price: 400,
    priceLabel: "Starting at $400",
    description:
      "A curated mobile bartending experience for up to 35 guests. Everything you need for an unforgettable celebration.",
    features: [
      "Custom Solamada mobile bar setup",
      "1 professional bartender (up to 35 guests)",
      "Up to 4 signature crafted cocktails",
      "All non-alcoholic mixers, syrups, fresh juices & garnishes",
      "Coolers stocked with ice",
      "Disposable drinkware",
      "Delivery, setup & breakdown",
      "4-hour minimum service",
    ],
    highlighted: true,
  },
];

export const addOns = [
  {
    name: "Additional Service Hour",
    price: 100,
    unit: "per hour",
  },
  {
    name: "Additional Bartender",
    price: 60,
    unit: "per hour",
  },
];

export const terms = [
  "50% deposit required to secure event date; remaining 50% due 2 days before event",
  "Final cocktail selection must be confirmed at least 1 week prior to event",
  "Client provides all alcoholic beverages per the finalized cocktail menu",
  "Any beverages outside of the selected cocktail menu must be provided by client",
  "All remaining client-provided beverages retained by client after event",
  "Additional travel/delivery fee may apply based on event location",
  "Bartenders are TABC certified for responsible, professional service",
];
