import './CertificateCard.css';
import React from 'react';
import PropTypes from 'prop-types';

const CertificateCard = ({ title, imageUrl, certificateLink }) => {
  return (
    <div className="certificate-card-wrapper"> 
      <div className="certificate-card">
        <img src={imageUrl} className="certificate-image" alt={title} />
        {certificateLink ? (
          <a href={certificateLink} target="_blank" rel="noopener noreferrer" className="certificate-title">
            {title}
          </a>
        ) : (
          <span className="certificate-text">{title}</span>
        )}
      </div>
    </div>
  );
};

CertificateCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  certificateLink: PropTypes.string,
};

export default CertificateCard;