import { Card, CardBody, Image } from "@nextui-org/react";
import SectionTitle from "../shared/sectionTitle";
import CentredLayout from "../ui/centredLayout";
import { useTranslation } from "react-i18next";
import { Features } from "../../common/types";

export default function FeaturesSection() {
    const { t } = useTranslation()
    const features: Features[] = t('featuresSection.features', { returnObjects: true }) as Features[];

    return (
        <section id="features-section" className="px-4 lg:px-0">
            <CentredLayout>
                <div className="flex flex-col gap-8">
                    <SectionTitle title={t('featuresSection.title')} subtitle={t('featuresSection.subtitle')} />

                    <div className="grid gap-4 sharedGrid">
                        {features.map((element: Features, index: number) => (
                            <FeaturesCard key={index} element={element} />
                        ))}
                    </div>
                </div>
            </CentredLayout>
        </section>
    )
}

function FeaturesCard({ element }: Readonly<{ element: Features }>) {
    return (
        <Card className="p-4 overflow-hidden cursor-pointer group" shadow="sm" >
            <CardBody className="flex flex-col gap-10 " >
                <Image src={element.icon} width={55} className="dark:invert group-hover:scale-125" />

                <div className="flex flex-col gap-4">
                    <h1 className="text-xl font-semibold text-left dark:text-white">{element.title}</h1>
                    <p className="text-base text-gray-500 ">{element.description}</p>
                </div>
            </CardBody>
        </Card>
    )
}