import { useState } from "react";
import SharedSection from "../../layouts/SharedSection";
import { FAQPage } from "../../common/FAQList";
import { faqs } from "../../../helpers/constant";
import Cta from "../Home/Sections/cta";
import { Helmet } from "react-helmet-async";

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
            <Helmet>
                <title>FAQ - Green Genius</title>
            </Helmet>
            <SharedSection className="flex ">
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