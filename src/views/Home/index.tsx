import { useMediaQuery } from "react-responsive";
import AboutUsSection from "../../components/aboutusSection/desktop";
import HeroSection from "../../components/HeroSection";
import AboutUsSectionMobile from "../../components/aboutusSection/mobile";

export default function Home() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    return (
        <div className="flex flex-col gap-24">
            <HeroSection />
            {
                isMobile ? <AboutUsSectionMobile /> : <AboutUsSection />
            }

        </div>
    )
}