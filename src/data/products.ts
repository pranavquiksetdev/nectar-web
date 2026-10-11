// Sample catalogue. Names, prices, cocoa percentages and ingredients are placeholders to be replaced
// with the real range.
export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  notes: string[];
  cocoa: number;
  weight: string;
  price: number;
  ingredients: string;
  /** Two colours for the bar illustration, light to dark. */
  tone: [string, string];
};

export const products: Product[] = [
  {
    slug: "midnight-70",
    name: "Midnight 70",
    tagline: "Deep, dark and quietly sweet.",
    description:
      "Our everyday dark chocolate. Plenty of cocoa, just enough sugar to round off the edges, and a long, smooth finish.",
    notes: ["Roasted cocoa", "Dark cherry", "Long finish"],
    cocoa: 70,
    weight: "80 g",
    price: 290,
    ingredients: "Cocoa mass, cocoa butter, cane sugar, vanilla.",
    tone: ["#4a2816", "#24120a"],
  },
  {
    slug: "velvet-milk",
    name: "Velvet Milk",
    tagline: "Soft, creamy and not too sweet.",
    description:
      "Milk chocolate for people who find most milk chocolate too sweet. Less sugar, more cocoa, and a creamy melt.",
    notes: ["Caramel", "Warm milk", "Toasted malt"],
    cocoa: 45,
    weight: "80 g",
    price: 270,
    ingredients: "Cocoa mass, cocoa butter, whole milk powder, cane sugar, vanilla.",
    tone: ["#8a5230", "#5a3018"],
  },
  {
    slug: "salted-hazelnut",
    name: "Salted Hazelnut",
    tagline: "A crunch, a pinch of salt, a smile.",
    description:
      "Roasted hazelnut pieces and a little sea salt folded into dark milk chocolate.",
    notes: ["Roasted hazelnut", "Sea salt", "Toffee"],
    cocoa: 55,
    weight: "90 g",
    price: 340,
    ingredients: "Cocoa mass, cocoa butter, hazelnuts, cane sugar, sea salt, vanilla.",
    tone: ["#7a4a28", "#3e2010"],
  },
  {
    slug: "orange-zest",
    name: "Orange Zest",
    tagline: "Bright citrus on a dark base.",
    description:
      "Dark chocolate with real orange peel. Fresh at first, then deep and cocoa-rich.",
    notes: ["Orange peel", "Dark cocoa", "Light spice"],
    cocoa: 65,
    weight: "80 g",
    price: 320,
    ingredients: "Cocoa mass, cocoa butter, cane sugar, candied orange peel, vanilla.",
    tone: ["#9a5a1e", "#3a1c0c"],
  },
  {
    slug: "pure-85",
    name: "Pure 85",
    tagline: "For the true cocoa lover.",
    description:
      "The most cocoa we make, with very little sugar. Intense, slightly bitter and very satisfying.",
    notes: ["Intense cocoa", "Earthy", "Dry finish"],
    cocoa: 85,
    weight: "80 g",
    price: 310,
    ingredients: "Cocoa mass, cocoa butter, cane sugar.",
    tone: ["#3a2010", "#1a0c06"],
  },
  {
    slug: "almond-crunch",
    name: "Almond Crunch",
    tagline: "Toasted almonds in milk chocolate.",
    description:
      "Whole toasted almond pieces in our creamy milk chocolate. A snack that feels like a treat.",
    notes: ["Toasted almond", "Cream", "Honeyed finish"],
    cocoa: 50,
    weight: "90 g",
    price: 330,
    ingredients: "Cocoa mass, cocoa butter, almonds, whole milk powder, cane sugar, vanilla.",
    tone: ["#845030", "#4a2814"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export const rupees = (n: number) => `₹${n.toLocaleString("en-IN")}`;
