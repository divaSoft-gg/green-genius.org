import React from 'react';
import { SharedSectionProps } from '../../../helpers/types';

const SharedSection: React.FC<SharedSectionProps> = ({ children, className = '' }) => {
    return (
      <section className={` bg-white py-10 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 ${className}`}>
        {children}
      </section>
    );
  };
  
  export default SharedSection;