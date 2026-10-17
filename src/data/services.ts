import type { AddOn, Service } from "./types";

export const services: Service[] = [
  {
    id: "bridal",
    name: "Bridal",
    description: "Wedding-day makeup and hair, built to last from ceremony to reception.",
    duration: "2 to 3 hours",
    startingPrice: 12000,
    inclusions: ["Makeup and hair styling", "Lashes", "Touch-up kit", "On-site touch-up until the ceremony"],
  },
  {
    id: "debut",
    name: "Debut",
    description: "A polished look for your 18th, with time for photos before the program.",
    duration: "1.5 to 2 hours",
    startingPrice: 6500,
    inclusions: ["Makeup and hair styling", "Lashes", "Touch-up kit"],
  },
  {
    id: "event",
    name: "Event / Party",
    description: "Glam or soft makeup for formals, galas, birthdays and nights out.",
    duration: "1 hour",
    startingPrice: 3500,
    inclusions: ["Makeup", "Lashes"],
  },
  {
    id: "photoshoot",
    name: "Photoshoot",
    description: "Camera-ready looks for portraits, prenups and brand shoots.",
    duration: "1 to 1.5 hours",
    startingPrice: 4500,
    inclusions: ["Makeup", "Lashes", "One look change"],
  },
  {
    id: "lessons",
    name: "Lessons",
    description: "One-on-one session to learn an everyday look using your own kit.",
    duration: "2 hours",
    startingPrice: 3000,
    inclusions: ["Kit review", "Step-by-step face chart"],
  },
];

export const addOns: AddOn[] = [
  { name: "Trial session", price: 3500 },
  { name: "Airbrush finish", price: 1500 },
  { name: "Hair styling (event)", price: 1500 },
  { name: "Entourage, per person", price: 2500 },
];
