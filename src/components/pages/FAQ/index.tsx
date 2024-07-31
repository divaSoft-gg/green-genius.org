import { useState } from "react";
import SharedSection from "../../common/SharedSection";
import { FAQPage } from "../../common/FAQList";
import { faqs } from "../../../helpers/constant";
import Cta from "../Home/Sections/cta";

export default function FAQ() {
    // const [activeTab, setActiveTab] = useState('Home');

    // const handleTabClick = (tab: string) => {
    // setActiveTab(tab);
    // };
    const [activeTab, setActiveTab] = useState('vertical-tab-with-border-1');

    const handleTabClick = (tabId : string) => {
        setActiveTab(tabId);
    };

    return (
        <main className="overflow-hidden">
            <SharedSection className="flex ">
                {/* <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200   w-full">
                    <ul className="flex flex-wrap -mb-px justify-left text-primary">
                        <li className="me-2">
                            <button className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab==='Home'
                                ? 'text-blue-600 border-blue-600'
                                : 'border-transparent hover:text-gray-600 hover:border-gray-300 ' }`} onClick={()=>
                                handleTabClick('Home')}
                                >
                                Home
                            </button>
                        </li>
                        <li className="me-2">
                            <button className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab==='Pricing'
                                ? 'text-blue-600 border-blue-600'
                                : 'border-transparent hover:text-gray-600 hover:border-gray-300 ' }`} onClick={()=>
                                handleTabClick('Pricing')}
                                >
                                Pricing
                            </button>
                        </li>
                        <li className="me-2">
                            <button className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab==='Contact'
                                ? 'text-blue-600 border-blue-600'
                                : 'border-transparent hover:text-gray-600 hover:border-gray-300 ' }`} onClick={()=>
                                handleTabClick('Contact')}
                                >
                                Contact
                            </button>
                        </li>
                    </ul>
                </div> */}
                <div className="flex-column space-y space-y-4 text-sm font-medium text-black  md:me-4 mb-4 md:mb-0  ">
                    <nav className="flex flex-col  p-[24px] !bg-[#fafafa] rounded-lg" aria-label="Tabs" role="tablist"
                        aria-orientation="horizontal">
                        <button type="button" className={`${ activeTab==='vertical-tab-with-border-1'
                            ? 'border-b-2 border-black text-black '
                            : 'border-b-2 border-transparent text-black hover:text-blue-600 ' } py-1 font-semibold text-[16px]
                            inline-flex items-center whitespace-nowrap focus:outline-none disabled:opacity-50
                            disabled:pointer-events-none mb-1`} id="vertical-tab-with-border-item-1"
                            aria-selected={activeTab==='vertical-tab-with-border-1' } onClick={()=>
                            handleTabClick('vertical-tab-with-border-1')}
                            role="tab"
                            >
                            General
                        </button>
                        <button type="button" className={`${ activeTab==='vertical-tab-with-border-2'
                            ? 'border-b-2 border-black text-black '
                            : 'border-b-2 border-transparent text-black hover:text-blue-600  ' } py-1 font-semibold text-[16px]
                            inline-flex items-center whitespace-nowrap focus:outline-none disabled:opacity-50
                            disabled:pointer-events-none mb-1`} id="vertical-tab-with-border-item-2"
                            aria-selected={activeTab==='vertical-tab-with-border-2' } onClick={()=>
                            handleTabClick('vertical-tab-with-border-2')}
                            role="tab"
                            >
                            Pricing
                        </button>
                        <button type="button" className={`${ activeTab==='vertical-tab-with-border-3'
                            ? 'border-b-2 border-black text-black '
                            : 'border-b-2 border-transparent text-black hover:text-blue-600  ' } py-1 font-semibold text-[16px]
                            inline-flex items-center whitespace-nowrap focus:outline-none disabled:opacity-50
                            disabled:pointer-events-none mb-1`} id="vertical-tab-with-border-item-3"
                            aria-selected={activeTab==='vertical-tab-with-border-3' } onClick={()=>
                            handleTabClick('vertical-tab-with-border-3')}
                            role="tab"
                            >
                            Contact
                        </button>
                    </nav>
                </div>
                {/* <div className="p-6 bg-gray-50 text-medium text-black rounded-lg w-full">
                    <div id="Home" className={activeTab==='Home' ? '' : 'hidden' } role="tabpanel"
                        aria-labelledby="profile-tab">
                        <FAQPage faqPage={faqs.home} faqs={[]} />
                    </div>
                    <div id="Pricing" className={activeTab==='Pricing' ? '' : 'hidden' } role="tabpanel"
                        aria-labelledby="dashboard-tab">
                        <FAQPage faqPage={faqs.pricing} faqs={[]} />
                    </div>
                    <div id="Contact" className={activeTab==='Contact' ? '' : 'hidden' } role="tabpanel"
                        aria-labelledby="settings-tab">
                        <FAQPage faqPage={faqs.contact} faqs={[]} />
                    </div>
                </div> */}
                <div className="p-6 bg-white text-medium text-black   rounded-lg w-full">
                    <div id="vertical-tab-with-border-1" className={activeTab==='vertical-tab-with-border-1' ? '' : 'hidden' }
                        role="tabpanel" aria-labelledby="vertical-tab-with-border-item-1">
                        <FAQPage faqPage={faqs.home} faqs={[]} />
                    </div>
                    <div id="vertical-tab-with-border-2" className={activeTab==='vertical-tab-with-border-2' ? '' : 'hidden' }
                        role="tabpanel" aria-labelledby="vertical-tab-with-border-item-2">
                        <FAQPage faqPage={faqs.pricing} faqs={[]} />
                    </div>
                    <div id="vertical-tab-with-border-3" className={activeTab==='vertical-tab-with-border-3' ? '' : 'hidden' }
                        role="tabpanel" aria-labelledby="vertical-tab-with-border-item-3">
                        <FAQPage faqPage={faqs.contact} faqs={[]} />
                    </div>
                </div>
            </SharedSection>
            <Cta />
        </main>
    );
}