"use client"
import Footer from "@/components/Footer";
import CTA from "@/components/Home/cta";
import SharedSection from "@/components/SharedSection";
import { useState } from "react";
import { FAQPage } from "./faq";
import { faqs } from "@/lib/constant";

export default function page() {
    const [activeTab, setActiveTab] = useState('vertical-tab-with-border-1');

    const handleTabClick = (tabId : string) => {
        setActiveTab(tabId);
    };

    return (
        <main className="overflow-hidden">
            <SharedSection className="flex">
                    <div className="flex-column space-y space-y-4 text-sm font-medium text-black  md:me-4 mb-4 md:mb-0  ">
                        <nav className="flex flex-col  p-[32px] !bg-gray-100 rounded-lg" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                            <button type="button" className={`${ activeTab==='vertical-tab-with-border-1'
                                ? 'border-b-2 border-blue-500 text-blue-600 '
                                : 'border-b-2 border-transparent text-black hover:text-blue-600 '
                                } py-1 font-semibold text-[16px] inline-flex   items-center  whitespace-nowrap focus:outline-none
                                disabled:opacity-50  disabled:pointer-events-none`} id="vertical-tab-with-border-item-1"
                                aria-selected={activeTab==='vertical-tab-with-border-1' } onClick={()=>
                                handleTabClick('vertical-tab-with-border-1')}
                                role="tab"
                                >
                                General
                            </button>
                            <button type="button" className={`${ activeTab==='vertical-tab-with-border-2'
                                ? 'border-b-2 border-blue-500 text-blue-600 '
                                : 'border-b-2 border-transparent text-black hover:text-blue-600  '
                                } py-1  font-semibold text-[16px] inline-flex items-center    whitespace-nowrap focus:outline-none
                                disabled:opacity-50 disabled:pointer-events-none`} id="vertical-tab-with-border-item-2"
                                aria-selected={activeTab==='vertical-tab-with-border-2' } onClick={()=>
                                handleTabClick('vertical-tab-with-border-2')}
                                role="tab"
                                >
                                Pricing
                            </button>
                            <button type="button" className={`${ activeTab==='vertical-tab-with-border-3'
                                ? 'border-b-2 border-blue-500 text-blue-600 '
                                : 'border-b-2 border-transparent text-black hover:text-blue-600  '
                                } py-1  font-semibold text-[16px] inline-flex items-center  whitespace-nowrap focus:outline-none
                                disabled:opacity-50 disabled:pointer-events-none`} id="vertical-tab-with-border-item-3"
                                aria-selected={activeTab==='vertical-tab-with-border-3' } onClick={()=>
                                handleTabClick('vertical-tab-with-border-3')}
                                role="tab"
                                >
                                Contact
                            </button>
                        </nav>
                    </div>

                    <div className="p-6 bg-gray-50 text-medium text-black   rounded-lg w-full">
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
            <CTA />
            <Footer />
        </main>
    );
}