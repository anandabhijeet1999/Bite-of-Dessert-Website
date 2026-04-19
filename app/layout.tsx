import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Caveat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/ui/Loader";
import MotionProvider from "@/components/providers/MotionProvider";
import { SITE } from "@/lib/site";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const script = Caveat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://biteofdessert.in"),
  title: {
    default: `${SITE.name} — Korean Ice Cream, Lassi & Pizza | Aya Nagar, New Delhi`,
    template: `%s · ${SITE.name}`,
  },
  description: `${SITE.tagline} ${SITE.description}`,
  keywords: [
    "Bite of Dessert",
    "BOD",
    "ice cream Aya Nagar",
    "Korean ice cream Delhi",
    "lassi Aya Nagar",
    "pizza Aya Nagar",
    "dessert parlour New Delhi",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    siteName: SITE.name,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFF7EC",
  width: "device-width",
  initialScale: 1,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: SITE.name,
  image: "/images/logo.png",
  telephone: SITE.phone,
  priceRange: "₹₹",
  servesCuisine: ["Ice Cream", "Desserts", "Pizza", "Indian Street Food"],
  address: {
    "@type": "PostalAddress",
    streetAddress: `${SITE.address.line1}, ${SITE.address.line2}`,
    addressLocality: SITE.address.city,
    postalCode: SITE.address.pincode,
    addressCountry: "IN",
  },
  openingHours: "Mo-Su 11:00-23:00",
  url: "https://biteofdessert.in",
  sameAs: [SITE.socials.instagram, SITE.socials.facebook],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${script.variable}`}>
      <body className="font-sans bg-cream text-chocolate-700 antialiased">
        <Script
          id="ld-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <MotionProvider>
          <Loader />
          <Navbar />
          <main className="overflow-x-clip">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
