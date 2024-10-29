import React from 'react';
import { SharedSectionProps } from '../../../helpers/types';

const SharedSection: React.FC<SharedSectionProps> = ({ children, className = '' }) => {
  return (
    <section className={` bg-white py-10  mx-auto max-w-screen-xl sm:py-16  ${className}`}>
      {children}
    </section>
  );
};

export default SharedSection;