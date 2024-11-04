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
