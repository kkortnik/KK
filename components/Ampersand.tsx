import React from 'react';

interface AmpersandProps {
  className?: string;
  size?: string;
}

const Ampersand: React.FC<AmpersandProps> = ({ className = "", size = "text-inherit" }) => {
  return (
    <span 
      className={`italic ${size} ${className}`} 
      style={{ fontFamily: '"Baskervville", serif' }}
    >
      &
    </span>
  );
};

export default Ampersand;
