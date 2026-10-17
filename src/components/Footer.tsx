import { site } from "@/data/site";

export function Footer() {
  return (
    // Bottom padding leaves room for the fixed mobile Book bar.
    <footer className="border-t border-line px-4 pt-12 pb-28 sm:px-6 md:pb-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-lg text-ink">{site.name}</p>
          <p className="mt-1">{site.hours}</p>
        </div>
        <ul className="flex gap-6">
          <li>
            <a href={site.socials.instagram} className="hover:text-ink">
              Instagram
            </a>
          </li>
          <li>
            <a href={site.socials.facebook} className="hover:text-ink">
              Facebook
            </a>
          </li>
        </ul>
        <p>
          © {site.name}. {site.location.city}, {site.location.region}.
        </p>
      </div>
    </footer>
  );
}
