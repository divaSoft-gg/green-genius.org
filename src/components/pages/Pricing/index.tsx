import { Helmet } from "react-helmet-async";
import { pricingPlans } from "../../../helpers/constant";
import PricingCard from "../../common/PricingCard";
import SharedSection from "../../layouts/SharedSection";
import Cta from "../Home/Sections/cta";

const Pricing = () => {
    return (
        <main className="relative ">
            <Helmet>
                <title>Pricing - Green Genius</title>
            </Helmet>
            <SharedSection className="lg:space-y-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pricingPlans.map((plan, index) => (
                <div key={index} className={(index == 2 ? 'md:col-span-2 lg:col-span-1': '')}>
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
