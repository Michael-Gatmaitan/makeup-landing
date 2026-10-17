"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { portfolio, portfolioCategories } from "@/data/portfolio";
import type { PortfolioCategory } from "@/data/types";
import { Section } from "./Section";

export function Portfolio() {
  const [filter, setFilter] = useState<PortfolioCategory | "all">("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // Native <dialog> gives us Esc-to-close, focus trapping and a backdrop for free.
  const dialogRef = useRef<HTMLDialogElement>(null);

  const items = filter === "all" ? portfolio : portfolio.filter((item) => item.category === filter);
  const current = openIndex === null ? null : items[openIndex];

  const open = (index: number) => {
    setOpenIndex(index);
    dialogRef.current?.showModal();
  };
  const step = (delta: number) =>
    setOpenIndex((i) => (i === null ? i : (i + delta + items.length) % items.length));

  return (
    <Section
      id="portfolio"
      eyebrow="Portfolio"
      title="Recent work"
      intro="Every skin tone, texture and age. Filter by style to find looks like yours."
      className="bg-sand"
    >
      <div role="group" aria-label="Filter portfolio" className="flex flex-wrap gap-2">
        {portfolioCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            aria-pressed={filter === category.id}
            onClick={() => setFilter(category.id)}
            className="border border-ink px-4 py-2 text-sm transition-colors hover:bg-ink hover:text-cream aria-pressed:bg-ink aria-pressed:text-cream"
          >
            {category.label}
          </button>
        ))}
      </div>

      <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {items.map((item, index) => (
          <li key={item.src}>
            <button
              type="button"
              onClick={() => open(index)}
              className="group relative block aspect-[4/5] w-full overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setOpenIndex(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        aria-label="Portfolio image viewer"
        className="m-auto max-h-[90vh] w-[min(90vw,40rem)] bg-cream p-0 backdrop:bg-ink/80"
      >
        {current && (
          <figure>
            <div className="relative aspect-[4/5] w-full">
              <Image src={current.src} alt={current.alt} fill sizes="40rem" className="object-cover" />
            </div>
            <figcaption className="flex items-center justify-between gap-4 p-4 text-sm">
              <span className="text-muted">{current.alt}</span>
              <span className="flex shrink-0 gap-2">
                <button type="button" onClick={() => step(-1)} aria-label="Previous image" className="px-2">
                  ←
                </button>
                <button type="button" onClick={() => step(1)} aria-label="Next image" className="px-2">
                  →
                </button>
                <button type="button" onClick={() => dialogRef.current?.close()} className="px-2 underline">
                  Close
                </button>
              </span>
            </figcaption>
          </figure>
        )}
      </dialog>
    </Section>
  );
}
