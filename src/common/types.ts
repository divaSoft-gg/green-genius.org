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
