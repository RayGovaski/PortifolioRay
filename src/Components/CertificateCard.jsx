// src/components/CertificateCard/CertificateCard.jsx
import './CertificateCard.css';
import React from 'react';
import PropTypes from 'prop-types';
import RevealWrapper from './RevealWrapper'; // ajuste o path se necessário

const CertificateCard = ({ title, imageUrl, certificateLink }) => {
  const handleClick = () => {
    if (certificateLink) {
      window.open(certificateLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <RevealWrapper>
      <div className="certificate-card-wrapper">
      <div 
        className={`certificate-card ${certificateLink ? 'clickable' : ''}`}
        onClick={handleClick}
        role={certificateLink ? 'button' : undefined}
        tabIndex={certificateLink ? 0 : undefined}
        onKeyDown={(e) => {
          if (certificateLink && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            handleClick();
          }
        }}
      >
        <div className="certificate-image-container">
          <img 
            src={imageUrl} 
            className="certificate-image" 
            alt={title}
            loading="lazy"
          />
        </div>
        <div className="certificate-content">
          <h3 className="certificate-title">{title}</h3>
          {certificateLink && (
            <span className="certificate-link-indicator">
              Clique para ver certificado
            </span>
          )}
        </div>
      </div>
    </div>
    </RevealWrapper>
    
  );
};

CertificateCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  certificateLink: PropTypes.string,
};

export default CertificateCard;