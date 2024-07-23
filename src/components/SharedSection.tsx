import { SharedSectionProps } from '@/lib/types';
import React from 'react';

const SharedSection: React.FC<SharedSectionProps> = ({ children, className = '' }) => {
    return (
      <section className={`bg-white py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 ${className}`}>
        {children}
      </section>
    );
  };
  
  export default SharedSection;