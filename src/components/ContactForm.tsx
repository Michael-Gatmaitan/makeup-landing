"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import { services } from "@/data/services";

type Status = "idle" | "sending" | "sent" | "error";

// NEXT_PUBLIC_ vars are inlined into the browser bundle at build time.
// That is fine for EmailJS: the public key is meant to be public, and abuse
// is limited by the allowed-origins setting in the EmailJS dashboard.
const config = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
};

const field =
  "mt-2 w-full border border-line bg-cream px-4 py-3 outline-none focus:border-ink focus-visible:outline-2 focus-visible:outline-accent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    // Honeypot: real people never see this field, bots usually fill it.
    if (data.company) return;

    if (!data.email && !data.phone) {
      setError("Please add an email or phone number so I can reply.");
      return;
    }
    if (!config.serviceId || !config.templateId || !config.publicKey) {
      setError("The form isn't configured yet. Add the EmailJS keys to .env.local.");
      return;
    }

    setError("");
    setStatus("sending");
    try {
      await emailjs.send(
        config.serviceId,
        config.templateId,
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          event_date: data.eventDate,
          service: data.service,
          message: data.message,
        },
        { publicKey: config.publicKey },
      );
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again or message me directly.");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="border border-line bg-cream p-8">
        <p className="font-serif text-2xl">Thank you!</p>
        <p className="mt-2 text-muted">Your inquiry is in. I&apos;ll reply within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className="sm:col-span-2">
        <span className="text-sm">Name *</span>
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label>
        <span className="text-sm">Email</span>
        <input name="email" type="email" autoComplete="email" className={field} />
      </label>
      <label>
        <span className="text-sm">Phone</span>
        <input name="phone" type="tel" autoComplete="tel" className={field} />
      </label>
      <label>
        <span className="text-sm">Event date *</span>
        <input name="eventDate" type="date" required className={field} />
      </label>
      <label>
        <span className="text-sm">Service *</span>
        <select name="service" required defaultValue="" className={field}>
          <option value="" disabled>
            Choose one
          </option>
          {services.map((s) => (
            <option key={s.id} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
      </label>
      <label className="sm:col-span-2">
        <span className="text-sm">Message</span>
        <textarea
          name="message"
          rows={4}
          placeholder="Number of people, location, the look you want"
          className={field}
        />
      </label>
      {/* Honeypot, hidden from people and screen readers. */}
      <input name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      <div className="sm:col-span-2">
        {error && (
          <p role="alert" className="mb-4 text-sm text-accent">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-accent px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-accent-dark disabled:opacity-60 sm:w-auto"
        >
          {status === "sending" ? "Sending…" : "Send inquiry"}
        </button>
      </div>
    </form>
  );
}
