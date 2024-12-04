import AboutUsSection from "../../components/aboutusSection";
import HeroSection from "../../components/HeroSection";
import ContactUsSection from "../../components/contactusSection";

import CTACard from "../../components/shared/CTACard";

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <HeroSection />
      <CTACard />
      <AboutUsSection />
      <CTACard />

      <ContactUsSection />
      <div></div>
    </div>
  );
}
