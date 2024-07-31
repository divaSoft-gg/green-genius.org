import { useState } from "react";
import SharedSection from "../../common/SharedSection";
import { FAQPage } from "../../common/FAQList";
import { faqs } from "../../../helpers/constant";
import Cta from "../Home/Sections/cta";

export default function FAQ() {
    const [activeTab, setActiveTab] = useState('Home');

    const handleTabClick = (tab: string) => {
      setActiveTab(tab);
    };

    return (
        <main className="overflow-hidden">
            <SharedSection className="flex flex-col items-center">
                <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200   w-full">
                    <ul className="flex flex-wrap -mb-px justify-left text-primary">
                        <li className="me-2">
                            <button
                                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'Home' ? 'text-blue-600 border-blue-600' : 'border-transparent hover:text-gray-600 hover:border-gray-300 '}`}
                                onClick={() => handleTabClick('Home')}
                            >
                                Home
                            </button>
                        </li>
                        <li className="me-2">
                            <button
                                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'Pricing' ? 'text-blue-600 border-blue-600' : 'border-transparent hover:text-gray-600 hover:border-gray-300 '}`}
                                onClick={() => handleTabClick('Pricing')}
                            >
                                Pricing
                            </button>
                        </li>
                        <li className="me-2">
                            <button
                                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'Contact' ? 'text-blue-600 border-blue-600' : 'border-transparent hover:text-gray-600 hover:border-gray-300 '}`}
                                onClick={() => handleTabClick('Contact')}
                            >
                                Contact
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="p-6 bg-gray-50 text-medium text-black rounded-lg w-full">
                    <div id="Home" className={activeTab === 'Home' ? '' : 'hidden'} role="tabpanel" aria-labelledby="profile-tab">
                        <FAQPage faqPage={faqs.home} faqs={[]} />
                    </div>
                    <div id="Pricing" className={activeTab === 'Pricing' ? '' : 'hidden'} role="tabpanel" aria-labelledby="dashboard-tab">
                        <FAQPage faqPage={faqs.pricing} faqs={[]} />
                    </div>
                    <div id="Contact" className={activeTab === 'Contact' ? '' : 'hidden'} role="tabpanel" aria-labelledby="settings-tab">
                        <FAQPage faqPage={faqs.contact} faqs={[]} />
                    </div>
                </div>
            </SharedSection>
            <Cta />
        </main>
    );
}
