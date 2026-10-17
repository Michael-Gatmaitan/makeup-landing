import Image from "next/image";
import { site } from "@/data/site";
import { Section } from "./Section";

export function About() {
  const { about } = site;
  return (
    <Section id="about" eyebrow="About" title={`Hi, I'm ${site.artist}`}>
      <div className="grid items-start gap-12 md:grid-cols-[2fr_3fr]">
        <div className="relative aspect-[4/5] w-full">
          <Image src={about.image} alt={`Portrait of ${site.artist}`} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
        </div>
        <div>
          {about.paragraphs.map((p) => (
            <p key={p} className="mb-4 text-lg text-muted">
              {p}
            </p>
          ))}
          <dl className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Training</dt>
              <dd className="mt-3 space-y-1">
                {about.certifications.map((c) => (
                  <p key={c}>{c}</p>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Products I use</dt>
              <dd className="mt-3">{about.brands.join(", ")}</dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  );
}
