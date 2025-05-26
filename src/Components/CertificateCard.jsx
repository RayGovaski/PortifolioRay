import React from 'react';
import './CertificateCard.css';
import Cortina from './Cortina';
import RevealWrapper from './RevealWrapper';

const CertificateCard = ({
  imageUrl,
  certificateName,
  description,
  altText,
  certificateLink
}) => {
  const handleCardClick = () => {
    if (certificateLink) {
      window.open(certificateLink, '_blank');
    }
  };

  return (
    <RevealWrapper>
      <div 
      className={`certificate-card ${certificateLink ? 'certificate-card-clickable' : ''}`}
      onClick={handleCardClick}
      style={{ cursor: certificateLink ? 'pointer' : 'default' }}
    >
      {imageUrl && (
        <div className="certificate-card-image-container">
          <img 
            src={imageUrl} 
            alt={altText || certificateName || 'Certificado'} 
            className="certificate-card-image" 
          />
        </div>
      )}
      
      <div className="certificate-card-content">
        {certificateName && (
          <h3 className="certificate-card-title">{certificateName}</h3>
        )}
        
        {description && (
          <p className="certificate-card-description">{description}</p>
        )}
        
        {certificateLink && (
          <div className="certificate-card-link-indicator">
            
          </div>
        )}
      </div>
    </div>
    </RevealWrapper>
         
  );
};

export default CertificateCard;