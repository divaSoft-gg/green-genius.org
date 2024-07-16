"use client"
import About from "@/views/Home/about";
import CTA from "@/views/Home/cta";
import FAQPage from "@/views/Home/faq";
import Feature from "@/views/Home/feature";
import Hero from "@/views/Home/hero";

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
