import React from 'react';
import FAQItem from './FAQItem';
import { FAQListProps } from '@/lib/types';

const FAQList: React.FC<FAQListProps> = ({ faqs }) => {
  return (
    <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16  md:grid-cols-2">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQList;
