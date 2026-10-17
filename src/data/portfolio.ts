import type { PortfolioCategory, PortfolioItem } from "./types";

export const portfolioCategories: { id: PortfolioCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "bridal", label: "Bridal" },
  { id: "glam", label: "Glam" },
  { id: "natural", label: "Natural" },
  { id: "editorial", label: "Editorial" },
];

// Placeholder images live in /public/images/portfolio. Swap in real
// photos (jpg/webp) and next/image will resize and compress them.
export const portfolio: PortfolioItem[] = [
  { src: "/images/portfolio/01.svg", alt: "Bride with soft glam makeup and a nude lip", category: "bridal" },
  { src: "/images/portfolio/02.svg", alt: "Evening glam with a winged liner and bold lip", category: "glam" },
  { src: "/images/portfolio/03.svg", alt: "Fresh no-makeup look with dewy skin", category: "natural" },
  { src: "/images/portfolio/04.svg", alt: "Bride with a classic red lip and updo", category: "bridal" },
  { src: "/images/portfolio/05.svg", alt: "Editorial look with graphic liner", category: "editorial" },
  { src: "/images/portfolio/06.svg", alt: "Debutante with rosy cheeks and soft curls", category: "glam" },
  { src: "/images/portfolio/07.svg", alt: "Natural makeup on mature skin", category: "natural" },
  { src: "/images/portfolio/08.svg", alt: "Morena bride with a bronzed glow", category: "bridal" },
  { src: "/images/portfolio/09.svg", alt: "Monochrome editorial look in terracotta tones", category: "editorial" },
];
