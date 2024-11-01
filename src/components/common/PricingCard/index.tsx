import { useTranslation } from "react-i18next";
import { PricingCardProps } from "../../../helpers/types";

const PricingCard : React.FC<PricingCardProps> = ({ title, description, price, features, buttonText, buttonLink }) => {
    const { t } = useTranslation();
    return (
        <div
            className="lg:min-w-[320px] h-full w-full flex  flex-col p-6 text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow   xl:p-8 ">
            <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
            <p className="font-light text-gray-500 sm:text-lg ">{description}</p>
            <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">${price}</span>
                <span className="text-gray-500 ">/{t('pricingPlans.month')}</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
                {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"></path>
                    </svg>
                    <span>{feature}</span>
                </li>
                ))}
            </ul>
            <a href={buttonLink}
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-bg-primary hover:bg-bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
                {buttonText}
            </a>
        </div>
    );
}

export default PricingCard;