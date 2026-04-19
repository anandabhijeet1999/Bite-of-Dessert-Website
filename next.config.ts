import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Placeholders are already-optimised SVGs (~1KB each); skip the optimiser.
    // When real JPG/PNG photography arrives, flip this to false (and keep
    // `loading="lazy"` on non-priority images — we already do that).
    unoptimized: true,
  },
  compiler: {
    // Strip console.* from production bundles except errors — keeps runtime light.
    removeConsole: { exclude: ["error", "warn"] },
  },
};

export default nextConfig;
