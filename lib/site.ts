export const SITE = {
  name: "Bite of Dessert",
  short: "BOD",
  tagline: "A bite of pure happiness.",
  description:
    "Handcrafted Korean-style ice cream, fresh lassi, wood-fire pizzas and more — made fresh daily in our Aya Nagar kitchen.",
  phone: "+91 98353 68284",
  phoneHref: "tel:+919835368284",
  whatsapp: "https://wa.me/919835368284",
  email: "hello@biteofdessert.in",
  address: {
    line1: "House No-37, Ghoda Mohalla",
    line2: "Aya Nagar Phase-1, Near Phulwari Kids School",
    city: "New Delhi",
    pincode: "110047",
    full: "House No-37, Ghoda Mohalla, Aya Nagar Phase-1, New Delhi 110047",
  },
  mapsUrl: "https://maps.app.goo.gl/f2qh4RpSLBmAYDd88?g_st=aw",
  mapsEmbed:
    "https://www.google.com/maps?q=Aya+Nagar+Phase-1,+New+Delhi+110047&output=embed",
  socials: {
    instagram: "https://instagram.com/biteofdessert",
    facebook: "https://facebook.com/biteofdessert",
  },
  hours: "11:00 AM – 11:00 PM · Open Daily",
} as const;

export type SiteConfig = typeof SITE;
