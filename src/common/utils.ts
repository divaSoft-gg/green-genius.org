import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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
