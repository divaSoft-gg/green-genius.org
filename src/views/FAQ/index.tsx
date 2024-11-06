import { Accordion, AccordionItem, Link } from "@nextui-org/react";
import SectionTitle from "../../components/shared/sectionTitle";
import CentredLayout from "../../components/ui/centredLayout";
import { accordionMotionSettings } from "../../common/data";
import { useTranslation } from "react-i18next";
import { faqType } from "../../common/types";
import { FaChevronDown } from "react-icons/fa";

export default function FAQPage() {
    const { t } = useTranslation()
    const questions: faqType[] = t('faq.content', { returnObjects: true }) as faqType[];

    return (
        <section id="FAQ_page" className="my-24">
            <CentredLayout>
                <div className="flex flex-col gap-12">
                    <SectionTitle title={t('faq.setionTitle')} />
                    <div className="flex flex-col items-center gap-8">
                        {questions.map((element: faqType, index: number) => (
                            <Accordion key={index} motionProps={accordionMotionSettings} >
                                <AccordionItem indicator={<FaChevronDown />} title={<AccordionTitle title={element.question} />} className="px-4 bg-gray-100 border rounded-md">
                                    <p className="my-2 leading-relaxed dark:text-black">{element.answer}</p>
                                </AccordionItem>
                            </Accordion>
                        ))}

                    </div>
                    <div className="flex flex-col gap-8">
                        <h1 className="text-2xl font-bold text-center text-black dark:text-white">{t('faq.sectionFooterTitle')}</h1>
                        <p className="font-semibold text-center">{t('faq.sectionFooterDescription')}<Link className="font-bold text-black cursor-pointer dark:text-white" href="/contact-us">{t('faq.contactUsLink')}</Link></p>
                    </div>
                </div>
            </CentredLayout>
        </section>
    )
}

function AccordionTitle({ title }: Readonly<{ title: string }>) {

    return (
        <h1 className="font-bold text-black text-medium">{title}</h1>

    )
}