export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface ChildrenProps {
  label: string;
  link: string;
  websiteLogo: string;
  websiteTitle: string;
  websiteDescription: string;
}
export interface NavItemsProps {
  label: string;
  link: string;
}

export interface ILanguages {
  code: string;
  name: string;
  country_code: string;
  image: string;
}
export interface FooterItems {
  title: string;
  sections: NavItemsProps[];
}

export interface Features {
  icon: string;
  title: string;
  description: string;
  imagePreview: string;
}

export interface AbousUsImageTypes {
  imagePath: string;
  alt: string;
}
export interface Socials {
  question: string;
  answer: string;
}
export interface faqType {
  question: string;
  answer: string;
  category: string;
}
export interface currencyListType {
  label: string;
  code: string;
}
export interface ExchangeRateData {
  date: string;
  usdRate: number;
  eurRate: number;
  tndRate: number;
}

export type FetchExchangeRates = () => Promise<ExchangeRateData>;

export interface pricingPlansType {
  title: string;
  subtitle: string;
  icon: string;
  amount: number;
  services: string[];
  buttonText: string;
  duration: string;
}
