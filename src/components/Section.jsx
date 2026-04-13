import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Section = ({ 
  children, 
  className = '', 
  id, 
  lightBg = false,
  noPadding = false 
}) => {
  const ref = useScrollReveal();
  
  return (
    <section 
      id={id}
      ref={ref}
      className={`
        ${noPadding ? '' : 'section'}
        ${lightBg ? 'section-light' : ''}
        ${className}
      `}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export default Section;
