import { useTranslation } from "react-i18next";
import CentredLayout from "../../ui/centredLayout";
import { Image } from "@nextui-org/react";
import { Features } from "../../../common/types";
import { useState } from "react";

export default function AboutUsSection() {
    const { t } = useTranslation()
    const features: Features[] = t('featuresSection.features', { returnObjects: true }) as Features[];
    const [selectedImage, setSelectedImage] = useState(features[1].imagePreview)
    const handlePress = (selectedImage: string) => {
        setSelectedImage(selectedImage)
    }
    return (
        <section id="about-us">
            <CentredLayout>
                <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-2 gap-x-4">
                        <div className="flex flex-col gap-8 place-self-center">
                            <h1 className="text-5xl font-bold text-left">
                                {t('aboutUsSection.title')}
                            </h1>
                            <p className="text-base text-gray-500 dark:text-white">{t('featuresSection.subtitle')}</p>
                            <div className="flex flex-col">
                                {features.map((element: Features, index: number) => (
                                    <div
                                        role="presentation"
                                        className="flex flex-row items-start gap-4 px-4 py-8 rounded-md cursor-pointer group hover:bg-gray-100 dark:hover:bg-white"
                                        key={index}
                                        onMouseEnter={() => { handlePress(element.imagePreview) }}
                                    >
                                        <img alt={element.title} src={element.icon} width={40} className="opacity-50 group-hover:opacity-100 dark:invert dark:opacity-80 dark:group-hover:invert-0 dark:group-hover:opacity-100 " />
                                        <div className="flex flex-col justify-center gap-2">
                                            <h1 className="font-bold group-hover:text-gray-600 dark:group-hover:text-black">{element.title}</h1>
                                            <p className="text-gray-700 group-hover:text-black dark:text-white">{element.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center">
                            <Image src={selectedImage} className="bg-cover" />

                        </div>
                    </div>
                </div>
            </CentredLayout>
        </section>
    )
} 
