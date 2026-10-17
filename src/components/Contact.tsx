import { site } from "@/data/site";
import { ContactForm } from "./ContactForm";
import { Section } from "./Section";

export function Contact() {
  const { contact, socials } = site;
  const channels = [
    { label: "WhatsApp", href: socials.whatsapp },
    { label: "Viber", href: socials.viber },
    { label: "Messenger", href: socials.facebook },
    { label: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { label: contact.email, href: `mailto:${contact.email}` },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Check my availability"
      intro={`Tell me your date and I'll confirm if I'm free. ${contact.responseTime}.`}
      className="bg-sand"
    >
      <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
        <ContactForm />
        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Prefer to message?</h3>
          <ul className="mt-4 space-y-3">
            {channels.map((c) => (
              <li key={c.label}>
                <a href={c.href} className="underline decoration-line underline-offset-4 hover:decoration-ink">
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
