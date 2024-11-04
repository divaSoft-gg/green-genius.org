import { Card, CardBody, Image } from "@nextui-org/react";
import SectionTitle from "../shared/sectionTitle";
import CentredLayout from "../ui/centredLayout";
import { useTranslation } from "react-i18next";
import { Features } from "../../common/types";

export default function FeaturesSection() {
    const { t } = useTranslation()
    const features: Features[] = t('featuresSection.features', { returnObjects: true }) as Features[];

    return (
        <section id="features-section" className="px-4 my-6 lg:px-0">
            <CentredLayout>
                <SectionTitle title={t('featuresSection.title')} subtitle={t('featuresSection.subtitle')} />
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {features.map((element: Features, index: number) => (

                        <FeaturesCard key={index} element={element} />
                    ))}
                </div>
            </CentredLayout>
        </section>
    )
}

function FeaturesCard({ element }: Readonly<{ element: Features }>) {
    return (
        <Card className="p-4" shadow="sm" >
            <CardBody className="flex flex-col gap-10 " >
                <Image src={element.icon} width={55} className="cursor-pointer dark:invert hover:scale-95" />

                <h1 className="text-xl font-semibold text-left dark:text-white">{element.title}</h1>
                <p className="text-lg">{element.description}</p>
            </CardBody>
        </Card>
    )
}