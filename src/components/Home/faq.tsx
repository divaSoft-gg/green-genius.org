import FAQList from '@/components/faq/FAQList';
import { faqs } from '@/lib/constant';
import { FAQListProps } from '@/lib/types';
import React from 'react';

export  const FAQPage :  React.FC<FAQListProps> = ({ faqPage }) =>  {
  return (
    <section className="bg-white py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 ">
      <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 ">
          Frequently Asked Questions
      </h2>
      <FAQList faqs={faqPage ? faqPage : []} />
    </section>
  );
}
