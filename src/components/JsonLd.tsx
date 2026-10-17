import { reviews } from "@/data/reviews";
import { site } from "@/data/site";

// Structured data so Google can show the business (address, rating, hours)
// in search results. Validate with https://search.google.com/test/rich-results
export function JsonLd() {
  const ratingValue = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  const data = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.contact.phone,
    email: site.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.location.street,
      addressLocality: site.location.city,
      addressRegion: site.location.region,
      postalCode: site.location.postalCode,
      addressCountry: site.location.country,
    },
    areaServed: site.location.serviceAreas,
    sameAs: [site.socials.instagram, site.socials.facebook],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue.toFixed(1),
      reviewCount: reviews.length,
    },
  };

  return (
    <script
      type="application/ld+json"
      // Escaping "<" stops a stray "</script>" in data from breaking out of the tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
