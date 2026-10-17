import { site } from "@/data/site";

const peso = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: site.currency,
  maximumFractionDigits: 0,
});

export const formatPrice = (amount: number) => peso.format(amount);
