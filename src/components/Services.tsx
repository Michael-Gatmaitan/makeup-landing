import { addOns, services } from "@/data/services";
import { formatPrice } from "@/lib/format";
import { Section } from "./Section";

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="Services and pricing"
      intro="Prices are starting rates for one person. Final quotes depend on location, headcount and add-ons."
    >
      <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <li key={service.id} className="flex flex-col bg-cream p-8">
            <h3 className="font-serif text-2xl">{service.name}</h3>
            <p className="mt-1 text-sm text-muted">{service.duration}</p>
            <p className="mt-4 text-muted">{service.description}</p>
            <ul className="mt-6 space-y-1 text-sm">
              {service.inclusions.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
            <p className="mt-auto pt-8 text-sm text-muted">
              Starts at <span className="font-serif text-2xl text-ink">{formatPrice(service.startingPrice)}</span>
            </p>
          </li>
        ))}
        <li className="flex flex-col bg-sand p-8">
          <h3 className="font-serif text-2xl">Add-ons</h3>
          <ul className="mt-6 space-y-3 text-sm">
            {addOns.map((addOn) => (
              <li key={addOn.name} className="flex justify-between gap-4 border-b border-line pb-3">
                <span>{addOn.name}</span>
                <span className="text-muted">{formatPrice(addOn.price)}</span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </Section>
  );
}
