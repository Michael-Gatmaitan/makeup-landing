import Image from "next/image";
import { site } from "@/data/site";
import { ButtonLink } from "./Button";

export function Hero() {
  return (
    <section id="top" className="px-4 pt-12 pb-20 sm:px-6 md:pt-20 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">{site.availability}</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">{site.tagline}</h1>
          <p className="mt-6 max-w-md text-muted">{site.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#contact">Book now</ButtonLink>
            <ButtonLink href="#portfolio" variant="outline">
              View portfolio
            </ButtonLink>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-6">
            {site.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="text-xs text-muted">{stat.label}</dt>
                <dd className="order-first font-serif text-2xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative aspect-[4/5] w-full">
          {/* priority: the hero image is the largest above-the-fold element (LCP). */}
          <Image
            src="/images/hero.svg"
            alt={`Makeup by ${site.artist}`}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
