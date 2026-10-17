import { site } from "@/data/site";
import { Section } from "./Section";

export function Location() {
  const { location } = site;
  // The "output=embed" URL needs no API key. Switch to the Maps Embed API
  // if you need custom pins or styling.
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&output=embed`;

  return (
    <Section id="location" eyebrow="Location" title="Studio and service area">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Studio</h3>
            <address className="mt-3 not-italic">
              {location.street}
              <br />
              {location.city}, {location.region} {location.postalCode}
            </address>
            <p className="mt-2 text-muted">{site.hours}</p>
          </div>
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Home service areas</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {location.serviceAreas.map((area) => (
                <li key={area} className="border border-line px-3 py-1 text-sm">
                  {area}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Travel fee</h3>
            <p className="mt-3 text-muted">{location.travelFee}</p>
          </div>
        </div>
        <iframe
          title={`Map of ${location.mapQuery}`}
          src={mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="aspect-square w-full border border-line md:aspect-auto md:min-h-96"
        />
      </div>
    </Section>
  );
}
