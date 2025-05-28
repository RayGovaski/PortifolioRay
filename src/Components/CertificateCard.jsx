import React from 'react';
import './CertificateCard.css';
import RevealWrapper from './RevealWrapper';

const CertificateCard = ({
  imageUrl,
  certificateName,
  description,
  altText,
  certificateLink, 
  onCardClick 
}) => {
  return (
    <RevealWrapper>
      <div
        className={`certificate-card ${onCardClick ? 'certificate-card-clickable' : ''}`}
        onClick={onCardClick}
        style={{ cursor: onCardClick ? 'pointer' : 'default' }}
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
        </div>
      </div>
    </RevealWrapper>
  );
};

export default CertificateCard;