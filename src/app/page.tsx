"use client"
import About from "@/components/Home/about";
import CTA from "@/components/Home/cta";
import { FAQPage } from "@/components/Home/faq";
import Feature from "@/components/Home/feature";
import Hero from "@/components/Home/hero";
import { faqs } from "@/lib/constant";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Feature />
      <About />
      <FAQPage faqPage={faqs.home} faqs={[]} />
      <CTA />
    </main>
  );
}
