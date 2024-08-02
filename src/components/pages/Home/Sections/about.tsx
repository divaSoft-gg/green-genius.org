import { useTranslation } from 'react-i18next';
import SharedSection from '../../../layouts/SharedSection';

const About = () => {
    const { t } = useTranslation();

    return (
        <SharedSection className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="font-light text-gray-500 sm:text-lg lg:w-1/2">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                    {t('about.title')}
                </h2>
                <p className="mb-4">
                    {t('about.description')}
                </p>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:w-1/2">
                <img className="w-full rounded-lg" src="/about-1.png" alt="office content 1" />
                <img className="mt-4 w-full lg:mt-10 rounded-lg" src="/about-2.png" alt="office content 2" />
            </div>
        </SharedSection>
    );
}

export default About;
