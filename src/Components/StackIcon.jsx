import React from 'react';
import './StackIcon.css';
import RevealWrapper from './RevealWrapper';

const StackIcon = ({ 
  iconUrl, 
  techName, 
  altText 
}) => {
  return (
    <RevealWrapper>
      <div className="stack-icon">
            <div className="stack-icon-image-container">
              <img 
                src={iconUrl}
                alt={altText || techName || 'Tecnologia'}
                className="stack-icon-image"
              />
            </div>
            
            {techName && (
              <span className="stack-icon-name">{techName}</span>
            )}
          </div>
    </RevealWrapper>
    
      

    
  );
};

export default StackIcon;