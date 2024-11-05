import { useTranslation } from "react-i18next";
import CentredLayout from "../ui/centredLayout";
import SharedHeroSection from "../shared/sharedHeroSection";

export default function HeroSection() {
    const { t } = useTranslation();

    return (
        <section id="hero-section">

            <CentredLayout>
                <SharedHeroSection title={t('heroSection.title')} paragraph={t('heroSection.description')} buttonText={t('heroSection.button')} imagesPath={["images/heroSection/carbon-footprint.png"]} />
            </CentredLayout>
        </section>
    )



}