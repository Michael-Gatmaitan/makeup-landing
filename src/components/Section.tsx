type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, eyebrow, title, intro, className = "", children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`px-4 py-20 sm:px-6 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        <h2 id={`${id}-title`} className="mt-3 font-serif text-3xl md:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-4 max-w-2xl text-muted">{intro}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
