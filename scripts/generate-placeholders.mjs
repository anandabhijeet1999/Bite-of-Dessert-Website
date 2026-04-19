// Generates branded SVG placeholder images for every slot in the site.
// Uses pure SVG shapes (no emoji, no system fonts required for glyphs) so every
// placeholder renders reliably inside <img> tags.
// Run: node scripts/generate-placeholders.mjs
import fs from "node:fs";
import path from "node:path";

const root = path.join(process.cwd(), "public", "images");

const palettes = {
  drink: ["#F7A978", "#E86A3A"],
  pizza: ["#B98735", "#3A1F14"],
  grilled: ["#EE7E47", "#4D2815"],
  gallery: ["#F7A978", "#3A1F14"],
  about: ["#FFE6D1", "#E86A3A"],
  hero: ["#FFE6D1", "#F28C52"],
  rose: ["#F4B5C1", "#E86A3A"],
  mango: ["#E3BB6E", "#E86A3A"],
  mint: ["#BFE3CF", "#3A1F14"],
};

// Each motif draws into a 900x675 canvas centered around (450, 280).
const motifs = {
  icecream: `
    <g transform="translate(450 280)" stroke-linejoin="round">
      <circle cx="0" cy="-50" r="90" fill="#FFFBF4"/>
      <circle cx="-45" cy="-75" r="60" fill="#FAD1D9"/>
      <circle cx="45" cy="-75" r="60" fill="#F7A978"/>
      <circle cx="15" cy="-125" r="20" fill="#E86A3A"/>
      <rect x="10" y="-150" width="4" height="30" fill="#4D2815"/>
      <path d="M -95 30 L 95 30 L 0 190 Z" fill="#D4A24A" stroke="#8F6624" stroke-width="4"/>
      <path d="M -70 55 L 70 55 M -50 85 L 50 85 M -30 115 L 30 115 M -12 145 L 12 145" stroke="#8F6624" stroke-width="3" opacity="0.55" fill="none"/>
    </g>`,
  lassi: `
    <g transform="translate(450 280)">
      <path d="M -70 -110 L -60 170 Q 0 195 60 170 L 70 -110 Z" fill="#FFFBF4" stroke="#3A1F14" stroke-width="4"/>
      <ellipse cx="0" cy="-110" rx="70" ry="18" fill="#FFFBF4" stroke="#3A1F14" stroke-width="4"/>
      <ellipse cx="0" cy="-115" rx="60" ry="12" fill="#FAD1D9"/>
      <circle cx="-20" cy="-122" r="10" fill="#E86A3A"/>
      <rect x="-3" y="-180" width="6" height="80" rx="3" fill="#3A1F14"/>
      <path d="M 3 -180 L 26 -180" stroke="#3A1F14" stroke-width="6" stroke-linecap="round"/>
    </g>`,
  pizza: `
    <g transform="translate(450 280)">
      <circle r="150" fill="#D4A24A" stroke="#8F6624" stroke-width="8"/>
      <circle r="130" fill="#EE7E47"/>
      <circle r="118" fill="#F28C52"/>
      <g fill="#B98735" opacity="0.9">
        <circle cx="-55" cy="-45" r="14"/>
        <circle cx="60" cy="-30" r="12"/>
        <circle cx="-25" cy="60" r="13"/>
        <circle cx="50" cy="55" r="15"/>
        <circle cx="0" cy="-10" r="11"/>
      </g>
      <g stroke="#8F6624" stroke-width="3" opacity="0.6">
        <line x1="-150" y1="0" x2="150" y2="0"/>
        <line x1="0" y1="-150" x2="0" y2="150"/>
        <line x1="-106" y1="-106" x2="106" y2="106"/>
        <line x1="-106" y1="106" x2="106" y2="-106"/>
      </g>
    </g>`,
  burger: `
    <g transform="translate(450 280)">
      <path d="M -130 -20 Q 0 -180 130 -20 Z" fill="#D4A24A" stroke="#8F6624" stroke-width="4"/>
      <g fill="#FFFBF4">
        <circle cx="-60" cy="-80" r="5"/>
        <circle cx="-20" cy="-110" r="5"/>
        <circle cx="30" cy="-100" r="5"/>
        <circle cx="70" cy="-70" r="5"/>
      </g>
      <rect x="-132" y="-14" width="264" height="18" rx="4" fill="#BFE3CF"/>
      <rect x="-134" y="6" width="268" height="28" rx="6" fill="#6B3A22" stroke="#3A1F14" stroke-width="3"/>
      <rect x="-128" y="36" width="256" height="14" rx="4" fill="#FFFBF4"/>
      <path d="M -130 50 Q 0 110 130 50 L 120 80 Q 0 110 -120 80 Z" fill="#D4A24A" stroke="#8F6624" stroke-width="4"/>
    </g>`,
  sandwich: `
    <g transform="translate(450 280)">
      <path d="M -170 80 L 0 -120 L 170 80 Z" fill="#D4A24A" stroke="#8F6624" stroke-width="4"/>
      <path d="M -120 80 L 0 -60 L 120 80 Z" fill="#BFE3CF" opacity="0.9"/>
      <path d="M -150 80 L 150 80 L 140 110 L -140 110 Z" fill="#EE7E47" stroke="#8F6624" stroke-width="3"/>
      <circle cx="-70" cy="40" r="8" fill="#E86A3A"/>
      <circle cx="40" cy="30" r="9" fill="#E86A3A"/>
    </g>`,
  tikki: `
    <g transform="translate(450 280)">
      <ellipse cx="0" cy="120" rx="160" ry="20" fill="#3A1F14" opacity="0.2"/>
      <ellipse cx="0" cy="40" rx="150" ry="90" fill="#D4A24A" stroke="#8F6624" stroke-width="4"/>
      <ellipse cx="0" cy="20" rx="140" ry="80" fill="#EE7E47"/>
      <g fill="#BFE3CF">
        <path d="M -40 -20 Q -30 -40 -20 -20 Q -10 -5 -40 -20 Z"/>
        <path d="M 30 10 Q 40 -10 50 10 Q 60 25 30 10 Z"/>
      </g>
      <g fill="#F4B5C1" opacity="0.8">
        <circle cx="-60" cy="30" r="6"/>
        <circle cx="50" cy="50" r="5"/>
        <circle cx="10" cy="-10" r="5"/>
      </g>
    </g>`,
  cup: `
    <g transform="translate(450 280)">
      <path d="M -85 -100 L -70 180 Q 0 205 70 180 L 85 -100 Z" fill="#FFFBF4" stroke="#3A1F14" stroke-width="4"/>
      <ellipse cx="0" cy="-100" rx="85" ry="20" fill="#FFFBF4" stroke="#3A1F14" stroke-width="4"/>
      <path d="M -80 -90 L -68 80 Q 0 100 68 80 L 80 -90 Z" fill="#BFE3CF" opacity="0.9"/>
      <circle cx="-30" cy="-110" r="12" fill="#FFFBF4" stroke="#3A1F14" stroke-width="3"/>
      <circle cx="10" cy="-115" r="10" fill="#FFFBF4" stroke="#3A1F14" stroke-width="3"/>
      <rect x="30" y="-170" width="6" height="80" rx="3" fill="#E86A3A"/>
    </g>`,
  abstract: (seed) => {
    // Deterministic hash from seed → 3 circles offset differently per tile.
    const h = Array.from(seed).reduce((a, c) => (a * 31 + c.charCodeAt(0)) | 0, 7);
    const r = (n) => ((h >> n) & 0xff) - 128;
    return `
    <g transform="translate(450 280)" opacity="0.85">
      <circle cx="${r(0) * 0.7}" cy="${r(3) * 0.5}" r="${120 + (h & 0x3f)}" fill="#FFFBF4" fill-opacity="0.35"/>
      <circle cx="${r(5) * 0.6}" cy="${r(9) * 0.4}" r="${90 + ((h >> 6) & 0x3f)}" fill="#FAD1D9" fill-opacity="0.55"/>
      <circle cx="${r(13) * 0.5}" cy="${r(17) * 0.4}" r="${70 + ((h >> 12) & 0x3f)}" fill="#F7A978" fill-opacity="0.7"/>
      <g stroke="#FFFBF4" stroke-width="3" fill="none" opacity="0.45">
        <path d="M -180 120 Q -60 60 60 120 Q 180 180 180 180"/>
        <path d="M -180 160 Q -60 100 60 160 Q 180 220 180 220"/>
      </g>
    </g>`;
  },
  flame: `
    <g transform="translate(450 280)">
      <rect x="-160" y="90" width="320" height="24" rx="6" fill="#3A1F14"/>
      <rect x="-170" y="110" width="340" height="16" rx="4" fill="#1A0B06"/>
      <path d="M -60 90 Q -80 30 -40 0 Q -10 30 -20 -30 Q 20 0 40 -60 Q 60 -20 70 40 Q 80 80 60 90 Z" fill="#EE7E47" stroke="#3A1F14" stroke-width="3"/>
      <path d="M -30 90 Q -40 50 -20 30 Q 0 50 -5 10 Q 20 30 30 -10 Q 40 20 50 60 Q 50 85 30 90 Z" fill="#F7A978"/>
      <g fill="#FFFBF4" opacity="0.7">
        <path d="M -100 -40 Q -90 -70 -80 -40"/>
        <path d="M 80 -70 Q 90 -100 100 -70"/>
        <circle cx="-110" cy="-20" r="4"/>
        <circle cx="120" cy="-40" r="3"/>
      </g>
    </g>`,
  kitchen: `
    <g transform="translate(450 280)">
      <rect x="-180" y="100" width="360" height="20" rx="6" fill="#6B3A22"/>
      <rect x="-170" y="-80" width="120" height="180" rx="10" fill="#FFFBF4" stroke="#3A1F14" stroke-width="4"/>
      <circle cx="-110" cy="-30" r="8" fill="#3A1F14"/>
      <circle cx="-110" cy="10" r="8" fill="#3A1F14"/>
      <path d="M -40 100 L -40 -80 L 40 -80 L 40 100" fill="none" stroke="#3A1F14" stroke-width="4"/>
      <path d="M 0 -80 L 0 100" stroke="#3A1F14" stroke-width="4" opacity="0.6"/>
      <rect x="60" y="-40" width="120" height="140" rx="10" fill="#D4A24A" stroke="#8F6624" stroke-width="4"/>
      <circle cx="120" cy="30" r="34" fill="#3A1F14"/>
      <circle cx="120" cy="30" r="22" fill="#EE7E47"/>
    </g>`,
  plating: `
    <g transform="translate(450 280)">
      <ellipse cx="0" cy="60" rx="220" ry="40" fill="#3A1F14" opacity="0.2"/>
      <ellipse cx="0" cy="30" rx="210" ry="60" fill="#FFFBF4" stroke="#D4A24A" stroke-width="6"/>
      <ellipse cx="0" cy="30" rx="170" ry="50" fill="#FFE6D1"/>
      <circle cx="-40" cy="20" r="38" fill="#FAD1D9"/>
      <circle cx="30" cy="15" r="34" fill="#F7A978"/>
      <circle cx="-5" cy="-30" r="10" fill="#E86A3A"/>
      <path d="M -80 -20 Q -60 -60 -30 -40" stroke="#E86A3A" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M 60 -10 Q 80 -40 100 -20" stroke="#8F6624" stroke-width="4" fill="none" stroke-linecap="round"/>
    </g>`,
};

const items = [
  { dir: "products", file: "korean-icecream.svg", motif: "icecream", label: "Korean Icecream", pal: "drink" },
  { dir: "products", file: "special-lassi.svg", motif: "lassi", label: "Special Lassi", pal: "drink" },
  { dir: "products", file: "rose-lassi.svg", motif: "lassi", label: "Rose Lassi", pal: "rose" },
  { dir: "products", file: "mango-lassi.svg", motif: "lassi", label: "Mango Lassi", pal: "mango" },
  { dir: "products", file: "cold-drinks.svg", motif: "cup", label: "Cold Drinks", pal: "mint" },
  { dir: "products", file: "corn-pizza.svg", motif: "pizza", label: "Corn Pizza", pal: "pizza" },
  { dir: "products", file: "capsicum-pizza.svg", motif: "pizza", label: "Capsicum Pizza", pal: "pizza" },
  { dir: "products", file: "onion-pizza.svg", motif: "pizza", label: "Onion Pizza", pal: "grilled" },
  { dir: "products", file: "paneer-pizza.svg", motif: "pizza", label: "Paneer Pizza", pal: "pizza" },
  { dir: "products", file: "grilled-sandwich.svg", motif: "sandwich", label: "Grilled Sandwich", pal: "grilled" },
  { dir: "products", file: "burger-regular.svg", motif: "burger", label: "Burger Regular", pal: "grilled" },
  { dir: "products", file: "aaloo-tikki.svg", motif: "tikki", label: "Aaloo Tikki", pal: "grilled" },
  // gallery — abstract motifs with the tile filename as seed for variety
  { dir: "gallery", file: "g1.svg", motif: "icecream", label: "Our Signature Scoop", pal: "drink" },
  { dir: "gallery", file: "g2.svg", motif: "pizza", label: "Fresh From the Oven", pal: "pizza" },
  { dir: "gallery", file: "g3.svg", motif: "lassi", label: "Three Colours of Joy", pal: "rose" },
  { dir: "gallery", file: "g4.svg", motif: "tikki", label: "Crispy & Golden", pal: "grilled" },
  { dir: "gallery", file: "g5.svg", motif: "plating", label: "Dessert Counter", pal: "mint" },
  { dir: "gallery", file: "g6.svg", motif: "kitchen", label: "Made With Love", pal: "about" },
  // about
  { dir: "about", file: "kitchen.svg", motif: "kitchen", label: "Our Kitchen", pal: "about" },
  { dir: "about", file: "plating.svg", motif: "plating", label: "Every Plate, a Story", pal: "drink" },
  { dir: "about", file: "pizza.svg", motif: "flame", label: "Stone-Oven Pizza", pal: "pizza" },
  // hero
  { dir: "hero", file: "hero-scoop.svg", motif: "icecream", label: "A bite of pure happiness", pal: "hero" },
];

const makeSvg = ({ motif, label, pal, file }) => {
  const [a, b] = palettes[pal];
  const motifSvg =
    typeof motifs[motif] === "function" ? motifs[motif](file) : motifs[motif];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 675" width="900" height="675" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${a}"/>
      <stop offset="1" stop-color="${b}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.35" r="0.7">
      <stop offset="0" stop-color="#FFF7EC" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#FFF7EC" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="900" height="675" fill="url(#bg)"/>
  <rect width="900" height="675" fill="url(#glow)"/>
  ${motifSvg}
  <text x="450" y="555" text-anchor="middle" font-size="40" fill="#FFF7EC" font-family="Georgia, 'Times New Roman', serif" font-weight="700" letter-spacing="1">${label}</text>
  <text x="450" y="600" text-anchor="middle" font-size="18" fill="#FFF7EC" opacity="0.75" font-family="Georgia, 'Times New Roman', serif" letter-spacing="8">BITE OF DESSERT</text>
</svg>
`;
};

for (const item of items) {
  const dir = path.join(root, item.dir);
  fs.mkdirSync(dir, { recursive: true });
  const out = path.join(dir, item.file);
  fs.writeFileSync(out, makeSvg(item));
  console.log("  wrote", path.relative(process.cwd(), out));
}

console.log(`\n✓ Generated ${items.length} shape-based placeholder SVGs (no emoji).`);
