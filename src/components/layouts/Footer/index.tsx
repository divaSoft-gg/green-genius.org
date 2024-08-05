import SharedSection from '../SharedSection';
import Button from '../../common/Button';
import Instagram from '../../../assets/icons/Instagram';
import Linkedin from '../../../assets/icons/Linkedin';
import Youtube from '../../../assets/icons/Youtube';
import LanguageSwitcher from '../../common/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t , i18n} = useTranslation();
    const isRTL = i18n.language === 'ar';
    return (
        <SharedSection className="!py-0">
            {/* <!--Grid--> */}
            <div className="grid grid-cols-2  lg:grid-cols-[1fr_200px_200px] gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
                <div className="col-span-full mb-10 lg:col-span-1 lg:mb-0">
                    <Button to="#"  className="flex justify-center lg:justify-start font-bold">
                        Green Genuis
                    </Button>
                    <p className={`text-center py-8 pr-4 text-sm text-gray-500 lg:max-w-[600px] ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}>
                        {t('footer.description')}
                    </p>
                    </div>
                <div className="lg:mx-auto text-center">
                    <h4 className="text-lg text-gray-900 font-medium mb-7">{t('footer.pages')}</h4>
                    <ul className="text-sm transition-all duration-500">
                        <li className="mb-6"><Button to="/" className="text-gray-600 hover:text-gray-900">{t('footer.home')}</Button></li>
                        <li className="mb-6"><Button to="/pricing" className="text-gray-600 hover:text-gray-900">{t('footer.pricing')}</Button></li>
                        <li className="mb-6"><Button to="/contact" className="text-gray-600 hover:text-gray-900">{t('footer.contact')}</Button></li>
                    </ul>
                </div>
                <div className="lg:mx-auto text-center">
                    <h4 className="text-lg text-gray-900 font-medium mb-7">{t('footer.resources')}</h4>
                    <ul className="text-sm transition-all duration-500">
                        <li className="mb-6"><Button to="/faq" className="text-gray-600 hover:text-gray-900">{t('footer.faqs')}</Button></li>
                    </ul>
                </div>
            </div>
            <div className="py-7 border-t border-gray-200">
                <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                    <span className="text-sm text-gray-500 sm:text-center">
                        {t('footer.copyright')}
                    </span>
                    <div><LanguageSwitcher /></div>
                    <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0">
                        <Button to="#" className={`w-9 h-9 rounded-full flex justify-center items-center ${isRTL ? 'ml-4' : ''}`}>
                            <Instagram />
                        </Button>
                        <Button to="#" className="w-9 h-9 rounded-full flex justify-center items-center">
                            <Linkedin />
                        </Button>
                        <Button to="#" className="w-9 h-9 rounded-full flex justify-center items-center">
                            <Youtube />
                        </Button>
                    </div>
                </div>
            </div>
        </SharedSection>
    );
}

export default Footer;
