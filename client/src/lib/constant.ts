interface PricingPlan {
    title: string;
    description: string;
    price: number;
    features: string[];
    buttonText: string;
    buttonLink: string;
}

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
