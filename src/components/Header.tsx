import { navLinks, site } from "@/data/site";
import { ButtonLink } from "./Button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-serif text-xl">
          {site.name}
        </a>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-8 text-sm text-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block">
          <ButtonLink href="#contact">Book now</ButtonLink>
        </div>
      </div>
    </header>
  );
}

// Mobile visitors mostly arrive from Instagram links, so the booking CTA
// stays pinned to the bottom of the screen below the md breakpoint.
export function MobileBookBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-cream p-3 md:hidden">
      <ButtonLink href="#contact" className="w-full">
        Book now
      </ButtonLink>
    </div>
  );
}
