import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ExchangeRateData, FetchExchangeRates } from "./types";
const currencyLaterApiKey: string = import.meta.env.VITE_CURRENCY_API_KEY;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function scrollToTop() {
  window.scroll(0, 0);
}
export function getCurrentYear() {
  return new Date().getFullYear();
}
export const handleScrollToSection = (sectionName: string) => {
  const contactUsSection = document.getElementById(sectionName);
  if (contactUsSection) contactUsSection.scrollIntoView({ behavior: "smooth" });
};
export const getCurrentDay = (): string => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const getConvertedAmount = (
  amount: number,
  selectedCurrency: string,
  exchangeRates: ExchangeRateData
) => {
  switch (selectedCurrency) {
    case "EUR":
      return (amount * exchangeRates.eurRate).toFixed(2);
    case "USD":
      return (amount * exchangeRates.usdRate).toFixed(2);
    default:
      return amount.toFixed(2);
  }
};

export const fetchExchangeRates: FetchExchangeRates = async () => {
  const response = await fetch(
    `https://api.currencylayer.com/live?access_key=${currencyLaterApiKey}&source=TND&currencies=EUR,USD`
  );
  const data = await response.json();
  return {
    date: getCurrentDay(),
    usdRate: data.quotes.TNDUSD,
    eurRate: data.quotes.TNDEUR,
    tndRate: 1,
  };
};
