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
export const accordionMotionSettings = {
  variants: {
    enter: {
      y: 0,
      opacity: 1,
      height: "auto",
      transition: {
        height: {
          type: "spring",
          stiffness: 500,
          damping: 30,
          duration: 1,
        },
        opacity: {
          easings: "ease",
          duration: 1,
        },
      },
    },
    exit: {
      y: -10,
      opacity: 0,
      height: 0,
      transition: {
        height: {
          easings: "ease",
          duration: 0.25,
        },
        opacity: {
          easings: "ease",
          duration: 0.3,
        },
      },
    },
  },
};
