export type ServiceCategory = "bridal" | "debut" | "event" | "photoshoot" | "lessons";

export type Service = {
  id: ServiceCategory;
  name: string;
  description: string;
  duration: string;
  startingPrice: number;
  inclusions: string[];
};

export type AddOn = {
  name: string;
  price: number;
};

export type PortfolioCategory = "bridal" | "glam" | "natural" | "editorial";

export type PortfolioItem = {
  src: string;
  alt: string;
  category: PortfolioCategory;
};

export type Review = {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  eventType: string;
  date: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type BookingStep = {
  title: string;
  description: string;
};
