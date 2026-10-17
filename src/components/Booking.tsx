import { bookingSteps, faq } from "@/data/faq";
import { Section } from "./Section";

export function BookingSteps() {
  return (
    <Section id="booking" eyebrow="Booking" title="How booking works">
      <ol className="grid gap-10 md:grid-cols-4">
        {bookingSteps.map((step, i) => (
          <li key={step.title} className="border-t border-ink pt-6">
            <span className="font-serif text-3xl text-accent">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 text-lg font-medium">{step.title}</h3>
            <p className="mt-2 text-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

// <details>/<summary> is a built-in accordion: keyboard and screen-reader
// friendly with zero JavaScript.
export function Faq() {
  return (
    <Section id="faq" eyebrow="FAQ" title="Policies and questions" className="bg-sand">
      <div className="max-w-3xl divide-y divide-line border-y border-line">
        {faq.map((item) => (
          <details key={item.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg [&::-webkit-details-marker]:hidden">
              {item.question}
              <span aria-hidden className="text-2xl text-accent transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
