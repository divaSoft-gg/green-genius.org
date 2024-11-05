import { useTranslation } from "react-i18next";
import CentredLayout from "../ui/centredLayout";
import { aboutUsImagesPath } from "../../common/data";
import { Image } from "@nextui-org/react";
import { useTheme } from "../../hooks/useTheme";
import { AbousUsImageTypes } from "../../common/types";

export default function AboutUsSection() {
    const { theme } = useTheme()
    const { t } = useTranslation()
    return (
        <section id="about-us">
            <CentredLayout>
                <div className="flex flex-row flex-wrap justify-center w-full gap-8 px-4 lg:flex-nowrap lg:justify-between dark lg:p-0">
                    <div className="flex flex-col gap-8 ">
                        <h1 className="text-4xl tracking-tight text-center lg:text-left lg:text-6xl lg:max-w-2xl lg:px-0 light:text-black">
                            {t('aboutUsSection.title')}
                        </h1>

                        <p className="max-w-2xl text-lg font-light text-justify lg:text-left lg:px-0 light:text-gray-300">
                            {t('aboutUsSection.paragraph')}
                        </p>
                    </div>
                    <div className="flex flex-row w-3/6 gap-4">
                        {aboutUsImagesPath.map((element: AbousUsImageTypes, index: number) => (
                            <Image key={index} src={element.imagePath} className={`!-z-10 pointer-events-none hidden lg:block grayscale w-full  ${theme === 'dark' ? 'invert' : ''}`} />
                        ))}
                    </div>
                </div>
            </CentredLayout>

        </section>
    )
} 
