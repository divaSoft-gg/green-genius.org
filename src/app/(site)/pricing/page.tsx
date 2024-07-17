"use client"

import PricingCard from "@/components/PricingCard";
import { pricingPlans } from "@/lib/constant";


export default function Pricing() {
  return (
    <main className="relative ">
          <section>
            <div className="relative bg-white dark:bg-gray-900 py-4 px-8 lg:py-16 space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                {pricingPlans.map((plan, index) => (
                    <PricingCard
                        key={index}
                        title={plan.title}
                        description={plan.description}
                        price={plan.price}
                        features={plan.features}
                        buttonText={plan.buttonText}
                        buttonLink={plan.buttonLink}
                    />
                ))}
            </div>
        </section>
    </main>
  );
}