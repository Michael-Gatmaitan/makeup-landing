import { reviews } from "@/data/reviews";
import { Section } from "./Section";

const dateFormat = new Intl.DateTimeFormat("en-PH", { month: "long", year: "numeric" });

function Stars({ rating }: { rating: number }) {
  return (
    <span role="img" aria-label={`${rating} out of 5 stars`} className="tracking-widest text-accent">
      {"★".repeat(rating)}
      <span className="text-line">{"★".repeat(5 - rating)}</span>
    </span>
  );
}

export function Reviews() {
  const average = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <Section
      id="reviews"
      eyebrow="Reviews"
      title="What clients say"
      intro={`${average.toFixed(1)} out of 5 from ${reviews.length} reviews`}
      className="bg-sand"
    >
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <li key={review.name + review.date} className="flex flex-col border border-line bg-cream p-8">
            <Stars rating={review.rating} />
            <blockquote className="mt-4 flex-1 font-serif text-lg">&ldquo;{review.text}&rdquo;</blockquote>
            <p className="mt-6 text-sm text-muted">
              {review.name} · {review.eventType} · {dateFormat.format(new Date(review.date))}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
