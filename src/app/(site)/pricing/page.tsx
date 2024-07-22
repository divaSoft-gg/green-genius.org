"use client"

import CTA from "@/components/Home/cta";
import { FAQPage } from "@/components/Home/faq";
import PricingCard from "@/components/PricingCard";
import { faqs, pricingPlans } from "@/lib/constant";


export default function Pricing() {
  return (
    <main className="relative ">
      <div className=" bg-whit py-8 px-4 mx-auto max-w-screen-xl lg:py-8  lg:space-y-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {pricingPlans.map((plan, index) => (
          <div className={(index == 2 ? 'md:col-span-2 lg:col-span-1': '')}>
            <PricingCard
              key={index}
              title={plan.title}
              description={plan.description}
              price={plan.price}
              features={plan.features}
              buttonText={plan.buttonText}
              buttonLink={plan.buttonLink}
            />
          </div>
        ))}
      </div>
      <FAQPage faqPage={faqs.pricing} faqs={[]} />
      <CTA />
    </main>
  );
}