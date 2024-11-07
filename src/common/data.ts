import { AbousUsImageTypes, ILanguages } from "./types";

export const languages: ILanguages[] = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
    image: "https://flagcdn.com/fr.svg",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
    image: "https://flagcdn.com/gb.svg",
  },
];

export const aboutUsImagesPath: AbousUsImageTypes[] = [
  { imagePath: "images/aboutUs/about-1.png", alt: "About us Image 1" },
  { imagePath: "images/aboutUs/about-2.png", alt: "About us Image 2" },
];

export const currencyList = [
  { label: "TND", code: "TND" },
  { label: "USD", code: "$" },
  { label: "EUR", code: "€" },
];
