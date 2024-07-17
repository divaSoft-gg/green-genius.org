"use client"
import About from "@/components/Home/about";
import CTA from "@/components/Home/cta";
import FAQPage from "@/components/Home/faq";
import Feature from "@/components/Home/feature";
import Hero from "@/components/Home/hero";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Feature />
      <About />
      <FAQPage />
      <CTA />
    </main>
  );
}
