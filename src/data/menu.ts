export type MenuItem = {
  name: string;
  description: string;
  /** Single price, for items sold in one size */
  price?: number;
  /** Sized pricing, e.g. Pizza's Small / Medium / Large */
  sizes?: { label: string; price: number }[];
};

export function itemFromPrice(item: MenuItem): number {
  if (item.price !== undefined) return item.price;
  return Math.min(...(item.sizes ?? []).map((s) => s.price));
}

export type MenuCategory = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  items: MenuItem[];
};

// Sourced from the official Mashaal Food menu card (Total Pump, Khanpur Road, RYK).
export const menu: MenuCategory[] = [
  {
    slug: "pizza",
    name: "Pizza",
    tagline: "Freshly baked, always tasty",
    image: "/images/pizza.jpg",
    items: [
      { name: "Tikka Pizza", description: "Chicken tikka chunks, mozzarella, signature red sauce", sizes: [{ label: "S", price: 399 }, { label: "M", price: 599 }, { label: "L", price: 1099 }] },
      { name: "Fajita Pizza", description: "Chicken fajita, peppers & onions, mozzarella", sizes: [{ label: "S", price: 399 }, { label: "M", price: 599 }, { label: "L", price: 1099 }] },
      { name: "Supreme Pizza", description: "Loaded with chicken, veggies & extra cheese", sizes: [{ label: "S", price: 399 }, { label: "M", price: 599 }, { label: "L", price: 1099 }] },
      { name: "Crown Crush Pizza", description: "Stuffed crust, double cheese, chef's signature mix", sizes: [{ label: "S", price: 499 }, { label: "M", price: 699 }, { label: "L", price: 1199 }] },
      { name: "Kabab Pizza", description: "Seekh kabab crumble, onions, mozzarella", sizes: [{ label: "S", price: 499 }, { label: "M", price: 699 }, { label: "L", price: 1199 }] },
      { name: "Cheese Take Pizza", description: "Extra cheese pull on a classic base", sizes: [{ label: "S", price: 499 }, { label: "M", price: 699 }, { label: "L", price: 1199 }] },
      { name: "Mashaal Special Pizza", description: "The house special — loaded with everything", sizes: [{ label: "S", price: 499 }, { label: "M", price: 699 }, { label: "L", price: 1199 }] },
    ],
  },
  {
    slug: "fast-foods",
    name: "Fast Foods",
    tagline: "Zingers, wings, rolls & fries",
    image: "/images/burger.jpg",
    items: [
      { name: "Zinger Burger", description: "Crispy zinger fillet, mayo, fresh lettuce", price: 270 },
      { name: "Double Zinger", description: "Two crispy fillets, double the crunch", price: 500 },
      { name: "Tower Zinger", description: "Stacked high — fillet, cheese, hash brown", price: 450 },
      { name: "Wings (6 Pieces)", description: "Crispy fried wings, house spice mix", price: 250 },
      { name: "Wings (12 Pieces)", description: "Party-size crispy wings", price: 500 },
      { name: "Crispy Roll", description: "Crispy fillet strips rolled in paratha", price: 300 },
      { name: "Kabab Roll", description: "Seekh kabab rolled in paratha, chutney", price: 350 },
      { name: "Fries (Half)", description: "Golden, salted", price: 100 },
      { name: "Fries (Full)", description: "Golden, salted, full portion", price: 200 },
      { name: "Loaded Fries Cheese (Half)", description: "Fries loaded with melted cheese sauce", price: 350 },
      { name: "Loaded Fries Cheese (Full)", description: "Full portion, extra loaded", price: 600 },
    ],
  },
  {
    slug: "shawarma-burgers",
    name: "Shawarma & Burgers",
    tagline: "Rolled, stacked, and shami-style",
    image: "/images/wrap-sandwich.jpg",
    items: [
      { name: "Shawarma (S)", description: "Chicken shawarma, garlic sauce, small wrap", price: 90 },
      { name: "Shawarma (L)", description: "Chicken shawarma, garlic sauce, large wrap", price: 120 },
      { name: "Shawarma Special", description: "Loaded shawarma, extra fillings", price: 150 },
      { name: "Shawarma Vegi", description: "Vegetarian shawarma, garlic sauce", price: 120 },
      { name: "Shami Burger", description: "Shami kabab patty, bun, house sauce", price: 90 },
      { name: "Shami Egg", description: "Shami patty with a fried egg", price: 140 },
      { name: "Chicken Shami Egg", description: "Chicken shami patty with a fried egg", price: 190 },
      { name: "Double Shami Double Egg", description: "Double patty, double egg", price: 220 },
    ],
  },
];

export type Favourite = {
  number: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

// Real menu items and real prices — no invented discounts, just the picks customers order most.
export const favourites: Favourite[] = [
  {
    number: 1,
    name: "Mashaal Special Pizza (M)",
    description: "The house signature, loaded with everything",
    price: 699,
    image: "/images/pizza.jpg",
  },
  {
    number: 2,
    name: "Tower Zinger",
    description: "Stacked high — fillet, cheese, hash brown",
    price: 450,
    image: "/images/burger.jpg",
  },
  {
    number: 3,
    name: "Shawarma Special",
    description: "Loaded shawarma, extra fillings",
    price: 150,
    image: "/images/wrap-sandwich.jpg",
  },
  {
    number: 4,
    name: "Loaded Fries Cheese (Full)",
    description: "Full portion, extra loaded",
    price: 600,
    image: "/images/fries.jpg",
  },
  {
    number: 5,
    name: "Wings (12 Pieces)",
    description: "Party-size crispy wings",
    price: 500,
    image: "/images/fried-chicken.jpg",
  },
];

export type Location = {
  city: string;
  name: string;
  address: string;
  hours: string;
  phone: string;
  status: "Now Open" | "Opening Soon";
  image: string;
};

export const locations: Location[] = [
  {
    city: "Rahim Yar Khan",
    name: "Mashaal Food — Khanpur Road",
    address: "Total Pump, Khanpur Road, Near Toyota Showroom, Rahim Yar Khan",
    hours: "Daily, 12:00 PM – 2:00 AM",
    phone: "+92 315 6704501",
    status: "Now Open",
    image: "/brand/interior.jpg",
  },
  {
    city: "Lahore",
    name: "Mashaal Food — Raiwind Road",
    address: "Raiwind Road, Lahore, Punjab",
    hours: "Daily, 12:00 PM – 2:00 AM",
    phone: "+92 315 6704501",
    status: "Opening Soon",
    image: "/brand/interior.jpg",
  },
];
