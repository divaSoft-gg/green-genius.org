import AboutUsSection from "../../components/aboutusSection";
import HeroSection from "../../components/HeroSection";

export default function Home() {
    return (
        <div className="flex flex-col gap-24">
            <HeroSection />
            <AboutUsSection />
        </div>
    )
}