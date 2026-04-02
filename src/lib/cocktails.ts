export type CocktailCategory = "classic" | "spritz" | "sangria";

export interface Cocktail {
  name: string;
  slug: string;
  category: CocktailCategory;
  baseSpirit: string;
  ingredients: string[];
  variant?: string;
  image?: string;
}

export const cocktails: Cocktail[] = [
  // Classic Cocktails
  {
    name: "Cuba Libre",
    slug: "cuba-libre",
    category: "classic",
    baseSpirit: "Dark Rum",
    ingredients: ["Dark rum", "Lime juice", "Bitters", "Coke"],
  },
  {
    name: "Paloma",
    slug: "paloma",
    category: "classic",
    baseSpirit: "Tequila",
    ingredients: [
      "Tequila",
      "Grapefruit liqueur",
      "Lime juice",
      "Grapefruit soda",
      "Tajin",
    ],
  },
  {
    name: "Margarita",
    slug: "margarita",
    category: "classic",
    baseSpirit: "Tequila",
    ingredients: [
      "Tequila",
      "Orange liqueur",
      "Lime juice",
      "Agave syrup",
      "Salt",
    ],
  },
  {
    name: "Spicy Passion",
    slug: "spicy-passion",
    category: "classic",
    baseSpirit: "Varies",
    ingredients: ["Mango or guava"],
    variant: "Mango or Guava",
  },
  {
    name: "Old Fashioned",
    slug: "old-fashioned",
    category: "classic",
    baseSpirit: "Bourbon",
    ingredients: ["Bourbon", "Bitters", "Honey syrup"],
  },
  {
    name: "Carajillo",
    slug: "carajillo",
    category: "classic",
    baseSpirit: "Coffee",
    ingredients: ["Coffee", "Licor 43", "Orange liqueur", "Piloncillo"],
  },
  {
    name: "Mojito",
    slug: "mojito",
    category: "classic",
    baseSpirit: "White Rum",
    ingredients: [
      "White rum",
      "Lime juice",
      "Mint",
      "Simple syrup",
      "Soda water",
    ],
    variant: "Passion or Coconut",
  },
  {
    name: "Moscow Mule",
    slug: "moscow-mule",
    category: "classic",
    baseSpirit: "Vodka",
    ingredients: [
      "Cucumber-mint vodka",
      "Lime juice",
      "Simple syrup",
      "Ginger beer",
    ],
    variant: "Pineapple or Watermelon",
  },
  {
    name: "Negroni",
    slug: "negroni",
    category: "classic",
    baseSpirit: "Gin",
    ingredients: ["Campari", "Sweet vermouth", "Gin"],
  },
  {
    name: "Cielito Anaranjado",
    slug: "cielito-anaranjado",
    category: "classic",
    baseSpirit: "Gin",
    ingredients: [
      "Aperol",
      "Gin",
      "Sweet vermouth",
      "Lime juice",
      "Simple syrup",
      "Egg white",
      "Bitters",
    ],
  },

  // Spritz Collection
  {
    name: "Aperol Spritz",
    slug: "aperol-spritz",
    category: "spritz",
    baseSpirit: "Aperol",
    ingredients: ["Aperol", "Prosecco", "Soda water"],
  },
  {
    name: "Limoncello Spritz",
    slug: "limoncello-spritz",
    category: "spritz",
    baseSpirit: "Limoncello",
    ingredients: ["Limoncello", "Prosecco", "Soda water"],
  },
  {
    name: "Sunday Passion Spritz",
    slug: "sunday-passion-spritz",
    category: "spritz",
    baseSpirit: "Passion Fruit Liqueur",
    ingredients: [
      "Passion fruit liqueur",
      "Aperol",
      "Orange liqueur",
      "Lime juice",
      "Prosecco",
      "Soda water",
    ],
  },
  {
    name: "Midnight Grapes Spritz",
    slug: "midnight-grapes-spritz",
    category: "spritz",
    baseSpirit: "Cassis Liqueur",
    ingredients: [
      "Cassis liqueur",
      "Sweet vermouth",
      "Lime juice",
      "Prosecco",
      "Soda water",
    ],
  },

  // Sangria
  {
    name: "Sangria Roja",
    slug: "sangria-roja",
    category: "sangria",
    baseSpirit: "Dark Rum",
    ingredients: [
      "Dark rum",
      "Orange liqueur",
      "Red wine",
      "Orange juice",
      "Sprite",
      "Fresh fruits",
    ],
  },
  {
    name: "Sangria Blanca",
    slug: "sangria-blanca",
    category: "sangria",
    baseSpirit: "Vermouth",
    ingredients: [
      "Vermouth",
      "Orange liqueur",
      "White wine",
      "Moscato",
      "Sprite",
      "Fresh fruits",
    ],
  },
];

export function getCocktailsByCategory(
  category: CocktailCategory
): Cocktail[] {
  return cocktails.filter((c) => c.category === category);
}
