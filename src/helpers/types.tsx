import { InputHTMLAttributes, ReactNode } from "react";

/**
 * Props for the Button component.
 * 
 * @property {React.ReactNode} children - The content to be displayed inside the button. It can be text, elements, or components.
 * @property {string} [form] - The form attribute specifies one or more forms the button belongs to.
 * @property {string} [className] - Additional CSS classes to apply to the button for styling.
 * @property {string} [to] - If provided, the button will be rendered as a React Router Link.
 * @property {'button' | 'submit' | 'reset'} [type='button'] - Specifies the type of the button. It can be 'button', 'submit', or 'reset'.
 * @property {(event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void} [onClick] - An optional click handler function that will be called when the button is clicked.
 * @property {boolean} [disabled] - Specifies whether the button should be disabled.
 */

export interface ButtonProps {
    children: React.ReactNode;
    form?: string;
    className?: string;
    to?: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    disabled?: boolean;
  }


/**
 * @description
 * Represents a pricing plan with details such as title, description, price, features, button text, and button link.
 * This can be used to display pricing options on a webpage.
 */
export interface PricingPlan {
    title: string;
    description: string;
    price: number;
    features: string[];
    buttonText: string;
    buttonLink: string;
}

/**
 * @description
 * Props for the PricingCard component. Includes details such as title, description, price, features, button text, and button link.
 * This is used to pass the necessary data to the PricingCard component for rendering.
 */
export interface PricingCardProps {
    title: string;
    description: string;
    price: number;
    features: string[];
    buttonText: string;
    buttonLink: string;
}

/**
 * @description
 * Props for the FeatureCard component. Includes title, description, and an icon.
 * This is used to pass the necessary data to the FeatureCard component for rendering feature information.
 */
export interface FeatureCardProps {
    title: string;
    description: string;
    icon: JSX.Element; // This will accept SVG icons directly
}

/**
 * @description
 * Interface representing a single FAQ item.
 * Each FAQ item consists of a question and an answer.
 */
export interface FAQ {
    question: string;
    answer: string;
  }
  
  /**
   * @description
   * Props for the FAQList component.
   * `faqs` is an array of FAQ items to be rendered in the FAQList component.
   */

  export interface FAQListProps {
    faqs: FAQ[] | [];
    faqPage?: FAQ[] ;
  }

  /**
 * Props for the SharedSection component.
 * 
 * @property {ReactNode} children - The content to be displayed within the section.
 * @property {string} [className] - Optional additional CSS classes to apply to the section.
 */

  export interface SharedSectionProps {
    children: ReactNode;
    className?: string;
  }

  /**
 * Props for the Input component.
 *
 * @property {string} label - The label text that will be displayed inside the input field.
 * @property {string} id - The unique identifier for the input field.
 * @property {string} [className] - Optional additional CSS classes to apply to the input container.
 * @extends {InputHTMLAttributes<HTMLInputElement>} - Extends the standard input attributes.
 */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  className?: string;
}


export interface TranslatedPricingPlan {
  title: string; // The translated title of the pricing plan, representing the plan's name or type.
  description: string; // The translated description of the pricing plan, providing details about the plan's features and benefits.
  price: number; // The cost of the pricing plan. This value remains unchanged and is represented as a number.
  features: string[]; // An array of strings, each representing a translated feature included in the pricing plan.
  buttonText: string; // The translated text for the button associated with the pricing plan, typically used for call-to-action.
  buttonLink: string; // The URL or link associated with the button, directing users to further action or information.
}