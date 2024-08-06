import React from 'react';
import { useTranslation } from 'react-i18next';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const {i18n} = useTranslation();
  const isRTL = i18n.language === 'ar';
  return (
    <div className="mb-10">
      <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
        <svg
          className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 "
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
            clipRule="evenodd"
          ></path>
        </svg>
        {question}
      </h3>
      <p className={`text-gray-500 ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}>{answer}</p>
    </div>
  );
};

export default FAQItem;