import CenteredLayout from "../ui/centredLayout";
import { useTranslation } from "react-i18next";
import { Socials } from "../../common/types";
import { TFunction } from 'i18next';
import ContactUsForm from "../shared/contactusForm";

export default function ContactUsSection() {
    const { t }: { t: TFunction } = useTranslation()
    const socials: Socials[] = t('contactUs.socials', { returnObjects: true }) as Socials[];
    return (

        <section id="contact-us">
            <CenteredLayout>
                <div className="flex flex-col w-full gap-6 p-4 lg:gap-0 lg:p-0 lg:flex-row">
                    <div className="flex flex-col w-full gap-12 ">
                        <h6 className="font-semibold text-left text-black text-7xl dark:text-white">{t('contactUs.title')}</h6>
                        <p className="text-left text-gray-700 text-medium w-96 dark:text-white">{t('contactUs.description')}</p>
                        <ul className="flex flex-col w-full gap-4 list-none lg:pb-0">
                            <li>
                                <h6 className="text-sm font-semibold tracking-wide text-gray-500 dark:text-white">{t('contactUs.ReachUsTitle')}</h6>
                            </li>
                            {socials.map((element: Socials, index: number) => (
                                <li key={index} >
                                    <span className="text-left text-gray-700 text-medium w-96 dark:text-white">{element.answer}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <ContactUsForm t={t} />
                </div>
            </CenteredLayout>
        </section>

    )
}

