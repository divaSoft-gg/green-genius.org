import { useTranslation } from "react-i18next";
import SharedHeroSection from "../shared/sharedHeroSection";
import CentredLayout from "../ui/centredLayout";

export default function AboutUsSection() {
    const { t } = useTranslation()
    return (
        <section id="about-us">
            <CentredLayout>
                <SharedHeroSection title={t('aboutUsSection.title')} paragraph={t('aboutUsSection.paragraph')} imagesPath={["images/aboutUs/about-1.png", "images/aboutUs/about-2.png"]} />
            </CentredLayout>
        </section>
    )
} 
