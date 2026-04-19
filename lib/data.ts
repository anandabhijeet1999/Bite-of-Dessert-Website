import type { LucideIcon } from "lucide-react";
import {
  Milk,
  Sparkles,
  IceCream2,
  Sun,
  Heart,
  ShieldCheck,
} from "lucide-react";

export type MenuCategory = "drinks" | "pizza" | "grilled";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  badge?: "Signature" | "Bestseller" | "New";
}

export const MENU_CATEGORIES: { key: MenuCategory; label: string; hint: string }[] = [
  { key: "drinks", label: "Drinks & Treats", hint: "Cool, creamy, unforgettable" },
  { key: "pizza", label: "Pizza Paradise", hint: "Hot from the stone oven" },
  { key: "grilled", label: "Grilled & Burger", hint: "Buttery, melty, honest" },
];

export const MENU: Record<MenuCategory, MenuItem[]> = {
  drinks: [
    {
      id: "korean-icecream",
      name: "Special Korean Icecream",
      description:
        "Signature Korean-style rolled ice cream with rich chocolate drizzle, toasted nuts and a cherry on top.",
      price: "₹249",
      image: "/images/products/korean-icecream.svg",
      badge: "Signature",
    },
    {
      id: "special-lassi",
      name: "Special Lassi",
      description:
        "Thick, hand-churned lassi topped with malai, saffron strands and crushed pistachio.",
      price: "₹129",
      image: "/images/products/special-lassi.svg",
      badge: "Bestseller",
    },
    {
      id: "rose-lassi",
      name: "Rose Lassi",
      description:
        "Chilled yogurt whisked with gulkand and real rose syrup — summer in a glass.",
      price: "₹119",
      image: "/images/products/rose-lassi.svg",
    },
    {
      id: "mango-lassi",
      name: "Mango Lassi",
      description:
        "Seasonal Alphonso mango blended with creamy curd and a pinch of cardamom.",
      price: "₹129",
      image: "/images/products/mango-lassi.svg",
    },
    {
      id: "cold-drinks",
      name: "Cold Drinks & Coolers",
      description:
        "Refreshing sodas, iced teas and seasonal coolers — perfectly chilled.",
      price: "₹59+",
      image: "/images/products/cold-drinks.svg",
    },
  ],
  pizza: [
    {
      id: "corn-pizza",
      name: "Corn Pizza",
      description:
        "Sweet corn, mozzarella and herbs on a hand-stretched crust — crowd favourite.",
      price: "₹179",
      image: "/images/products/corn-pizza.svg",
    },
    {
      id: "capsicum-pizza",
      name: "Capsicum Pizza",
      description:
        "Tri-colour capsicum, tangy tomato sauce and a generous cheese pull.",
      price: "₹199",
      image: "/images/products/capsicum-pizza.svg",
    },
    {
      id: "onion-pizza",
      name: "Onion Pizza",
      description:
        "Caramelised red onions, oregano and mozzarella — simple, smoky, delicious.",
      price: "₹179",
      image: "/images/products/onion-pizza.svg",
    },
    {
      id: "paneer-pizza",
      name: "Paneer Pizza",
      description:
        "Tandoori-marinated paneer cubes with capsicum, onion and a cheesy base.",
      price: "₹229",
      image: "/images/products/paneer-pizza.svg",
      badge: "Bestseller",
    },
  ],
  grilled: [
    {
      id: "grilled-sandwich",
      name: "Grilled Sandwich",
      description:
        "Buttery grilled bread stuffed with cheese, veggies and our house chutney.",
      price: "₹99",
      image: "/images/products/grilled-sandwich.svg",
    },
    {
      id: "burger-regular",
      name: "Burger Regular",
      description:
        "Soft brioche, crispy patty, fresh lettuce, tomato and our signature sauce.",
      price: "₹119",
      image: "/images/products/burger-regular.svg",
    },
    {
      id: "aaloo-tikki",
      name: "Aaloo Tikki",
      description:
        "Golden-fried potato tikki with green chutney and crunchy sev — street-food classic.",
      price: "₹79",
      image: "/images/products/aaloo-tikki.svg",
      badge: "New",
    },
  ],
};

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const FEATURES: Feature[] = [
  {
    title: "Premium Ingredients",
    description:
      "Farm-fresh milk, real fruit, single-origin cocoa — sourced daily, never frozen.",
    icon: Milk,
  },
  {
    title: "Hygienic Production",
    description:
      "Food-safety protocols on every surface. Staff trained, gloved, and audited weekly.",
    icon: Sparkles,
  },
  {
    title: "Korean-Style Expertise",
    description:
      "Specialists trained in rolled and scooped Korean techniques for that signature texture.",
    icon: IceCream2,
  },
  {
    title: "Fresh Daily",
    description:
      "Every batch is churned the morning it is served — nothing sits overnight.",
    icon: Sun,
  },
  {
    title: "Made With Love",
    description:
      "Family-run kitchen. Every order is handled like it is going to our own table.",
    icon: Heart,
  },
  {
    title: "FSSAI Certified",
    description:
      "Fully licensed and compliant with India's food safety standards — quality you can trust.",
    icon: ShieldCheck,
  },
];

export interface GalleryImage {
  src: string;
  alt: string;
  span?: "tall" | "wide" | "square";
  tag?: string;
  caption?: string;
}

export const GALLERY: GalleryImage[] = [
  {
    src: "/images/gallery/g1.svg",
    alt: "Signature Korean-style ice cream scoop",
    caption: "Our Signature Scoop",
    tag: "Signature",
    span: "tall",
  },
  {
    src: "/images/gallery/g2.svg",
    alt: "Fresh pizza straight from the oven",
    caption: "Fresh From the Oven",
    tag: "Kitchen",
    span: "wide",
  },
  {
    src: "/images/gallery/g3.svg",
    alt: "Three colourful lassi pairings",
    caption: "Three Colours of Joy",
    tag: "Lassi Bar",
    span: "square",
  },
  {
    src: "/images/gallery/g4.svg",
    alt: "Crispy grilled platter with sides",
    caption: "Crispy & Golden",
    tag: "Grill",
    span: "square",
  },
  {
    src: "/images/gallery/g5.svg",
    alt: "Dessert counter at the shop",
    caption: "Dessert Counter",
    tag: "Counter",
    span: "tall",
  },
  {
    src: "/images/gallery/g6.svg",
    alt: "Our team plating an order",
    caption: "Made With Love",
    tag: "Behind the Scenes",
    span: "wide",
  },
];

export const STATS: { value: string; label: string }[] = [
  { value: "15+", label: "Flavours" },
  { value: "4", label: "Pizza Styles" },
  { value: "3", label: "Lassi Varieties" },
  { value: "10k+", label: "Happy Bites" },
];

export const NAV_LINKS: { href: string; label: string }[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];
