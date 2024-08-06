import { InlineWidget } from "react-calendly";
import SharedSection from "../../layouts/SharedSection";
import Button from "../../common/Button";
import Input from "../../common/Input";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
      <>
        <Helmet>
          <title>{t('contact.title')} - Green Genius</title>
        </Helmet>
        <div className="bg-gray-50">
          <SharedSection className="!bg-gray-50">
          <div className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center">
              <h2 className="text-4xl tracking-tight font-extrabold text-center text-gray-900">
                {t('contact.title')}
              </h2>
              <p className="my-4 lg:mb-8 font-light text-center text-gray-500 sm:text-xl">
                {t('contact.description')}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <form action="#" className="flex flex-col gap-4">
                <Input className="bg-white" type="input" placeholder={t('contact.form.name')} id="name" required />
                <Input className="bg-white" type="input" placeholder={t('contact.form.email')} id="email" required />
                <Input className="bg-white" type="input" placeholder={t('contact.form.company')} id="company" required />
                <Input className="bg-white" type="number" placeholder={t('contact.form.companySize')} id="company-size" required />
                <Input className="bg-white" type="input" placeholder={t('contact.form.subject')} id="subject" required />
                <Input className="bg-white" type="textarea" placeholder={t('contact.form.message')} id="message" rows={6} />
                <Button type="submit" className="w-full px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-bg-primary hover:bg-bg-primary-800 focus:ring-4 focus:ring-primary-300">
                  {t('contact.form.sendMessage')}
                </Button>
              </form>
              <InlineWidget url="https://calendly.com/firas1dahmani" />
            </div>
          </SharedSection>
        </div>
      </>
  );
}

export default Contact;
