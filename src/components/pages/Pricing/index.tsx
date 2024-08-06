import { Helmet } from "react-helmet-async";
import { useTranslation } from 'react-i18next';
import PricingCard from "../../common/PricingCard";
import SharedSection from "../../layouts/SharedSection";
import Cta from "../Home/Sections/cta";
import { pricingPlans } from "../../../helpers/constant"; // Ensure this is typed correctly
import { TranslatedPricingPlan } from "../../../helpers/types";

const Pricing = () => {
    const { t } = useTranslation();

    // Translate pricing plans
    const translatedPricingPlans: TranslatedPricingPlan[] = pricingPlans.map(plan => ({
        title: t(`pricingPlans.${plan.title}.title`),
        description: t(`pricingPlans.${plan.title}.description`),
        price: plan.price,
        features: plan.features.map(feature => t(`pricingPlans.${plan.title}.features.${feature}`)),
        buttonText: t(`pricingPlans.${plan.title}.buttonText`),
        buttonLink: plan.buttonLink
    }));

    return (
        <main className="relative ">
            <Helmet>
                <title>{t('pricingPlans.title')} - Green Genius</title>
            </Helmet>
            <SharedSection className="lg:space-y-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {translatedPricingPlans.map((plan, index) => (
                <div key={index} className={(index === 2 ? 'md:col-span-2 lg:col-span-1': '')}>
                    <PricingCard
                        key={index}
                        title={plan.title}
                        description={plan.description}
                        price={plan.price}
                        features={plan.features}
                        buttonText={plan.buttonText}
                        buttonLink={plan.buttonLink}
                    />
                </div>
                ))}
            </SharedSection>
            <Cta />
        </main>
    );
}

export default Pricing;
