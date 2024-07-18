"use client"

import FAQList from "@/components/faq/FAQList";
import CTA from "@/components/Home/cta";
import { FAQPage } from "@/components/Home/faq";
import PricingCard from "@/components/PricingCard";
import { faqs, pricingPlans } from "@/lib/constant";


export default function Pricing() {
  return (
    <main className="relative ">
      <div className="relative bg-white  py-4 px-16 lg:py-16 space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
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
      <FAQPage faqPage={faqs.pricing} faqs={[]} />
      <CTA />
    </main>
  );
}