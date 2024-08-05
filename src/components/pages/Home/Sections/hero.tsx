import { useTranslation } from 'react-i18next';
import ArrowLeft from '../../../../assets/icons/ArrowLeft';
import Button from '../../../common/Button';
import SharedSection from '../../../layouts/SharedSection';
import ArrowRight from '../../../../assets/icons/ArrowRight';

const Hero = () => {
    const { t,i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    return (
        <section className="relative bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover">
            <SharedSection className="text-black overflow-hidden !bg-transparent">
                <div className="container mx-auto px-4 md:pb-32 z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Left Side: Company Info */}
                    <div className="w-full md:w-1/2 mb-12 md:mb-0">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-pr" dangerouslySetInnerHTML={{ __html: t('heroSection.h1') }}>
                        </h1>
                        <p className="text-xl mb-8 text-gray-500">
                        {t('heroSection.description')}
                        </p>
                        <Button to='/contact' className="bg-bg-primary text-white font-semibold rounded-lg mx-auto inline-flex items-center justify-center py-4 px-9 hover:bg-opacity-90">
                        {t('heroSection.button')}
                        <div className={` ${isRTL ? 'mr-5' : 'ml-5'} `}>
                            {isRTL ? <ArrowLeft /> : <ArrowRight />} 
                        </div>
                        </Button>
                    </div>
                    
                    {/* Right Side: Features */}
                    <div className="w-full md:w-1/2 md:pl-12">
                        <div className="mt-4 md:mt-6 lg:mt-12 lg:col-span-5 lg:flex">
                        <img src="/carbon-footprint.png" className="h-full w-full object-contain" alt="Carbon Footprint Icon" />
                        </div>
                    </div>
                    </div>
                </div>
                
                {/* Decorative Element */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
                    </svg>
                </div>
            </SharedSection>
        </section>
    );
}

export default Hero;

