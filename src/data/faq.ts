import type { BookingStep, FaqItem } from "./types";

export const bookingSteps: BookingStep[] = [
  { title: "Inquire", description: "Send the form with your date and service. I reply within 24 hours." },
  { title: "Confirm", description: "A 30% deposit locks in your date. The rest is due on the day." },
  { title: "Trial", description: "Optional for brides. We test the look and adjust before the big day." },
  { title: "Event day", description: "I arrive on time with a sanitized kit and stay for touch-ups if booked." },
];

export const faq: FaqItem[] = [
  {
    question: "How much is the deposit?",
    answer: "30% of the total, paid when you confirm. Your date is only reserved once the deposit is in.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "Deposits are non-refundable. Cancel at least 30 days ahead and you can apply it to a new date within six months.",
  },
  {
    question: "Can I reschedule?",
    answer: "Yes, once, with at least 14 days' notice, subject to availability.",
  },
  {
    question: "What if I'm running late?",
    answer: "Delays past 30 minutes may shorten your session or incur a waiting fee of PHP 500 per hour.",
  },
  {
    question: "Do you do trials?",
    answer: "Yes. Trials are recommended for brides and are booked as an add-on, ideally 1 to 2 months before the event.",
  },
  {
    question: "How do you keep your kit clean?",
    answer: "Brushes are washed and sanitized between clients, and lips, lashes and mascara use disposable applicators.",
  },
];
