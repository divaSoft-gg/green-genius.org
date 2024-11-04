import { useTranslation } from "react-i18next";
import { useTheme } from "../../hooks/useTheme";
import { Button, Image, Link } from "@nextui-org/react";
import { handleScrollToSection } from "../../common/utils";
import CentredLayout from "../ui/centredLayout";

export default function HeroSection() {
    const { t } = useTranslation();
    const { theme } = useTheme()

    return (
        <section id="hero-section">

            <CentredLayout>
                <div className="flex flex-row justify-between w-full gap-8 px-4 my-16 dark lg:p-0">
                    <div className="flex flex-col gap-8">
                        <h1 className="text-4xl tracking-tight text-left lg:text-6xl lg:max-w-2xl lg:px-0 light:text-black">
                            {t('heroSection.title')}
                        </h1>

                        <p className="max-w-2xl text-lg font-light text-justify lg:text-left lg:px-0 light:text-gray-300">
                            {t('heroSection.description')}
                        </p>
                        <Button variant="shadow" color="default" size="md" className="self-center lg:self-start w-min" as={Link}
                            onClick={() => { handleScrollToSection('hero-section') }}
                        >
                            {t('heroSection.button')}
                        </Button>
                    </div>
                    <Image src="images/heroSection/carbon-footprint.png" alt="Hero Section Image" className={`!-z-10 pointer-events-none hidden lg:block grayscale w-full  ${theme === 'dark' ? 'invert' : ''}`} />
                </div>
            </CentredLayout>
        </section>
    )



}