import AboutUsSection from "../../components/aboutusSection";
import HeroSection from "../../components/HeroSection";
import ContactUsSection from "../../components/contactusSection";
import CentredLayout from "../../components/ui/centredLayout";
import { GeneralDemoCallToAction } from "@aymen_diva/diva-demo-call-to-action";

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <HeroSection />
      <CentredLayout>
        <div className="px-4 lg:px-4">
          <GeneralDemoCallToAction root="divatex" />
        </div>{" "}
      </CentredLayout>
      <AboutUsSection />
      <CentredLayout>
        <div className="px-4 lg:px-4">
          <GeneralDemoCallToAction root="divatex" />
        </div>
      </CentredLayout>{" "}
      <ContactUsSection />
      <div></div>
    </div>
  );
}
