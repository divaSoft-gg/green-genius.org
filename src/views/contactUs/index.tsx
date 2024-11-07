import { InlineWidget } from "react-calendly";
import ContactUsForm from "../../components/shared/contactusForm";
import CentredLayout from "../../components/ui/centredLayout";
import { useTranslation } from "react-i18next";
import SectionTitle from "../../components/shared/sectionTitle";
export default function ContactUs() {
    const { t } = useTranslation()
    return (
        <div className="flex flex-col gap-24">
            <section id="contact-us">
                <CentredLayout>
                    <div className="flex flex-col justify-center gap-6 px-4 mt-12 lg:px-0">
                        <SectionTitle title={t('contactUs.sectionTitle')} subtitle={t('contactUs.description')} />
                        <div className="flex flex-col gap-6 lg:flex-row">
                            <div className="flex-1">
                                <ContactUsForm t={t} />
                            </div>
                            <div className="flex-1 border rounded-lg">
                                <InlineWidget url="https://calendly.com/rochdi-ktir"
                                    styles={{
                                        height: '100%',

                                    }}

                                />
                            </div>
                        </div>

                    </div>
                </CentredLayout>
            </section>
            <div></div>
        </div>
    )
}