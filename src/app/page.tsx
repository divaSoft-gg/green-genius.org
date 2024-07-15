"use client"
import About from "@/pages/Home/about";
import CTA from "@/pages/Home/cta";
import FAQPage from "@/pages/Home/faq";
import Feature from "@/pages/Home/feature";
import Hero from "@/pages/Home/hero";

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
