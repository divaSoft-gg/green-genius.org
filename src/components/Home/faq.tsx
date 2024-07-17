import FAQList from '@/components/faq/FAQList';
import { faqs } from '@/lib/constant';
import React from 'react';

export default function FAQPage() {
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
}
