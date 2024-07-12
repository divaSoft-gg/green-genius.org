import FAQList from '@/components/FAQList';
import React from 'react';

const faqs = [
  {
    question: 'How does Green Genius help reduce my carbon footprint?',
    answer:
      'Our platform provides tools to monitor and manage emissions, offering insights and reports to help you make informed decisions.',
  },
  {
    question: 'Can I customize the settings for my facility?',
    answer:
      'Yes, our Settings Manager allows you to tailor the platform to your specific needs and preferences.',
  },
  {
    question: 'Is Green Genius suitable for all business sizes?',
    answer:
      "Absolutely. Whether you're a small business or a large corporation, our scalable solutions fit your needs.",
  }
];

const FAQPage: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Frequently Asked Questions
        </h2>
        <FAQList faqs={faqs} />
      </div>
    </section>
  );
};

export default FAQPage;
