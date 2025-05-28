import React from 'react';
import './CertificateModal.css';

const CertificateModal = ({
  isOpen,
  onClose,
  imageUrl,
  certificateName,
  description,
  certificateLink
}) => {
  if (!isOpen) {
    return null;
  }

  const handleViewCertificate = () => {
    if (certificateLink) {
      window.open(certificateLink, '_blank');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        {imageUrl && (
          <div className="modal-image-container">
            <img src={imageUrl} alt={certificateName || 'Certificate Image'} className="modal-image" />
          </div>
        )}
        <div className="modal-text-content">
          {certificateName && <h3 className="modal-title">{certificateName}</h3>}
          {description && <p className="modal-description">{description}</p>}
          {certificateLink && (
            <button
              className="modal-link-button"
              onClick={handleViewCertificate}
            >
              Ver Certificado
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;