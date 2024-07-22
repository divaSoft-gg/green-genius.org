import { PricingPlan } from "./types";
import Transportation from "@/components/icon/Transportation";
import Management from "@/components/icon/Management";
import Production from "@/components/icon/Production";
import Trash from "@/components/icon/Trash";
import Analyse from "@/components/icon/Analyse";

/**
 * @description
 * A list of pricing plans available for users. Each plan includes a title, description, price, features, button text, and a link.
 * This is used to display different pricing options on the pricing page.
 */
export const pricingPlans: PricingPlan[] = [
    {
        title: "Starter",
        description: "Best option for personal use & for your next project.",
        price: 29,
        features: [
            "Individual configuration",
            "No setup, or hidden fees",
            "Team size: 1 developer",
            "Premium support: 6 months",
            "Free updates: 6 months"
        ],
        buttonText: "Get started",
        buttonLink: "#"
    },
    {
        title: "Company",
        description: "Relevant for multiple users, extended & premium support.",
        price: 99,
        features: [
            "Individual configuration",
            "No setup, or hidden fees",
            "Team size: 10 developers",
            "Premium support: 24 months",
            "Free updates: 24 months"
        ],
        buttonText: "Get started",
        buttonLink: "#"
    },
    {
        title: "Enterprise",
        description: "Best for large scale uses and extended redistribution rights.",
        price: 499,
        features: [
            "Individual configuration",
            "No setup, or hidden fees",
            "Team size: 100+ developers",
            "Premium support: 36 months",
            "Free updates: 36 months"
        ],
        buttonText: "Get started",
        buttonLink: "#"
    }
];

/**
 * @description
 * An object representing the menu items for the website navigation. Each key is a menu item and the value is the corresponding link.
 * This is used to generate the navigation bar for the site.
 */
export const menuItems = {
    "Home":"/",
    "Pricing":"/pricing",
    // "Blog ":"#",
    "Contact ":"/contact",
};

/**
 * @description
 * A list of frequently asked questions (FAQs) with their respective answers. Each FAQ includes a question and an answer.
 * This is used to display the FAQ section on the website.
 */
export const faqs = {
  home: [
    {
      question: 'How does Green Genius help reduce my carbon footprint?',
      answer: 'Our platform provides tools to monitor and manage emissions, offering insights and reports to help you make informed decisions.',
    },
    {
      question: 'Can I customize the settings for my facility?',
      answer: 'Yes, our Settings Manager allows you to tailor the platform to your specific needs and preferences.',
    },
    {
      question: 'Is Green Genius suitable for all business sizes?',
      answer: "Absolutely. Whether you're a small business or a large corporation, our scalable solutions fit your needs.",
    }
  ],
  pricing: [
    {
      question: 'What are the pricing plans for Green Genius?',
      answer: 'We offer several pricing plans tailored to different business needs. Please visit our pricing page for detailed information.',
    },
    {
      question: 'Do you offer any discounts?',
      answer: 'Yes, we offer discounts for annual subscriptions and for non-profit organizations. Contact us for more details.',
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial so you can explore all the features before committing to a plan.',
    }
  ],
  contact: [
    {
      question: 'How can I get in touch with support?',
      answer: 'You can contact our support team via email at support@greengenius.com or call us at (123) 456-7890.',
    },
    {
      question: 'Where is Green Genius located?',
      answer: 'Our headquarters are located at 123 Green Lane, Sustainability City, Earth.',
    },
    {
      question: 'What are your customer service hours?',
      answer: 'Our customer service team is available Monday to Friday, from 9 AM to 5 PM (PST).',
    }
  ]
};

/**
 * @description
 * An array of objects representing the features offered by the Green Genius platform.
 * Each object contains the following properties:
 * - `icon`: A React component representing the SVG icon for the feature.
 * - `title`: A string representing the title of the feature.
 * - `description`: A string providing a brief description of the feature.
 * This array is used to dynamically render feature cards on the website, highlighting key functionalities of the platform.
 */
export const features = [
    {
      icon: (
        <Management />
      ),
      title: "Sustainable Supply Management",
      description: "Manage and track carbon-related purchases made by your facility, ensuring sustainable sourcing and reducing your overall carbon footprint.",
    },
    {
      icon: (
        <Production />
      ),
      title: "Emission Source Tracking",
      description: "Define and monitor the different footprints across your production chain to identify opportunities for reducing your carbon emissions.",
    },
    {
      icon: (
        <Transportation />
      ),
      title: "Track Transportation",
      description: "Optimize and manage all CO2 emissions related to your facility, focusing on reducing emissions and improving efficiency.",
    },
    {
      icon: (
        <Trash />
      ),
      title: "Comprehensive Waste Management",
      description: "Efficiently manage and reduce facility waste, ensuring proper disposal and recycling to minimize environmental impact.",
    },
    {
      icon: (
        <Analyse />
      ),
      title: "Carbon Footprint Analysis",
      description: "Calculate your facility's CO2 footprint and generate detailed reports to monitor progress towards sustainability goals and identify areas for improvement.",
    },
  ];
  