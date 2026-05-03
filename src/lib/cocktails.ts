export type CocktailCategory = "classic" | "spritz" | "sangria";

export interface Cocktail {
  name: string;
  slug: string;
  category: CocktailCategory;
  baseSpirit: string;
  ingredients: string[];
  /** Selectable flavor variations for this cocktail (if any) */
  variants?: string[];
  image?: string;
  placeholderGradient: [string, string];
  emoji: string;
}

export const cocktails: Cocktail[] = [
  // ── Classic ──────────────────────────────────────────────
  {
    name: "Cuba Libre",
    slug: "cuba-libre",
    category: "classic",
    baseSpirit: "Dark Rum",
    ingredients: ["Dark rum", "Lime juice", "Bitters", "Coke"],
    placeholderGradient: ["#3D1A00", "#7B4500"],
    emoji: "🥃",
  },
  {
    name: "Paloma",
    slug: "paloma",
    category: "classic",
    baseSpirit: "Tequila",
    ingredients: ["Tequila", "Grapefruit liqueur", "Lime juice", "Grapefruit soda", "Tajin"],
    placeholderGradient: ["#FF6B6B", "#FFB347"],
    emoji: "🍊",
  },
  {
    name: "Margarita",
    slug: "margarita",
    category: "classic",
    baseSpirit: "Tequila",
    ingredients: ["Tequila", "Orange liqueur", "Lime juice", "Agave syrup", "Salt"],
    variants: ["Classic", "Spicy", "Guava"],
    placeholderGradient: ["#2D8A4E", "#7EC8A0"],
    emoji: "🍹",
  },
  {
    name: "Spicy Passion",
    slug: "spicy-passion",
    category: "classic",
    baseSpirit: "Varies",
    ingredients: ["Fresh fruit purée", "Lime juice", "Tajin rim"],
    variants: ["Mango", "Guava"],
    placeholderGradient: ["#FF6B35", "#FFB347"],
    emoji: "🥭",
  },
  {
    name: "Old Fashioned",
    slug: "old-fashioned",
    category: "classic",
    baseSpirit: "Bourbon",
    ingredients: ["Bourbon", "Bitters", "Honey syrup"],
    placeholderGradient: ["#6B3A2A", "#C17D24"],
    emoji: "🥃",
  },
  {
    name: "Carajillo",
    slug: "carajillo",
    category: "classic",
    baseSpirit: "Coffee",
    ingredients: ["Coffee", "Licor 43", "Orange liqueur", "Piloncillo"],
    placeholderGradient: ["#1A0800", "#4A2500"],
    emoji: "☕",
  },
  {
    name: "Mojito",
    slug: "mojito",
    category: "classic",
    baseSpirit: "White Rum",
    ingredients: ["White rum", "Lime juice", "Mint", "Simple syrup", "Soda water"],
    variants: ["Original", "Passion Fruit", "Coconut"],
    placeholderGradient: ["#1A7A4A", "#56CCB2"],
    emoji: "🌿",
  },
  {
    name: "Moscow Mule",
    slug: "moscow-mule",
    category: "classic",
    baseSpirit: "Vodka",
    ingredients: ["Cucumber-mint vodka", "Lime juice", "Simple syrup", "Ginger beer"],
    variants: ["Original", "Pineapple", "Watermelon"],
    placeholderGradient: ["#B8860B", "#D4A017"],
    emoji: "🫚",
  },
  {
    name: "Negroni",
    slug: "negroni",
    category: "classic",
    baseSpirit: "Gin",
    ingredients: ["Campari", "Sweet vermouth", "Gin"],
    placeholderGradient: ["#7B1010", "#CC3333"],
    emoji: "🍸",
  },
  {
    name: "Cielito Anaranjado",
    slug: "cielito-anaranjado",
    category: "classic",
    baseSpirit: "Gin",
    ingredients: ["Aperol", "Gin", "Sweet vermouth", "Lime juice", "Simple syrup", "Egg white", "Bitters"],
    placeholderGradient: ["#C44B1A", "#F4956A"],
    emoji: "🌅",
  },

  // ── Spritz ───────────────────────────────────────────────
  {
    name: "Aperol Spritz",
    slug: "aperol-spritz",
    category: "spritz",
    baseSpirit: "Aperol",
    ingredients: ["Aperol", "Prosecco", "Soda water"],
    placeholderGradient: ["#E05A10", "#FFB347"],
    emoji: "🍊",
  },
  {
    name: "Limoncello Spritz",
    slug: "limoncello-spritz",
    category: "spritz",
    baseSpirit: "Limoncello",
    ingredients: ["Limoncello", "Prosecco", "Soda water"],
    placeholderGradient: ["#C8A800", "#F7E474"],
    emoji: "🍋",
  },
  {
    name: "Sunday Passion Spritz",
    slug: "sunday-passion-spritz",
    category: "spritz",
    baseSpirit: "Passion Fruit Liqueur",
    ingredients: ["Passion fruit liqueur", "Aperol", "Orange liqueur", "Lime juice", "Prosecco", "Soda water"],
    placeholderGradient: ["#C2185B", "#FF80AB"],
    emoji: "🌸",
  },
  {
    name: "Midnight Grapes Spritz",
    slug: "midnight-grapes-spritz",
    category: "spritz",
    baseSpirit: "Cassis Liqueur",
    ingredients: ["Cassis liqueur", "Sweet vermouth", "Lime juice", "Prosecco", "Soda water"],
    placeholderGradient: ["#3A0070", "#8E24AA"],
    emoji: "🍇",
  },

  // ── Sangria ──────────────────────────────────────────────
  {
    name: "Sangria Roja",
    slug: "sangria-roja",
    category: "sangria",
    baseSpirit: "Dark Rum",
    ingredients: ["Dark rum", "Orange liqueur", "Red wine", "Orange juice", "Sprite", "Fresh fruits"],
    placeholderGradient: ["#6A1010", "#B52A2D"],
    emoji: "🍷",
  },
  {
    name: "Sangria Blanca",
    slug: "sangria-blanca",
    category: "sangria",
    baseSpirit: "Vermouth",
    ingredients: ["Vermouth", "Orange liqueur", "White wine", "Moscato", "Sprite", "Fresh fruits"],
    placeholderGradient: ["#A07820", "#E8D5A3"],
    emoji: "🥂",
  },
];

export function getCocktailsByCategory(category: CocktailCategory): Cocktail[] {
  return cocktails.filter((c) => c.category === category);
}
