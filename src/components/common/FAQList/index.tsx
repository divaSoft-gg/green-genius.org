import React from 'react';
import FAQItem from './FAQItem';
import { FAQListProps } from '../../../helpers/types';

export  const FAQPage :  React.FC<FAQListProps> = ({ faqPage }) =>  {
  return (
      <>
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 ">
          Frequently Asked Questions
      </h2>
      <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16  md:grid-cols-2">
        {faqPage?.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      </>
  );
}