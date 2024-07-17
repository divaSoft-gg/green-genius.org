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
