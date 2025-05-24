import './ProjectCard.css';
import React from 'react';
import PropTypes from 'prop-types';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ title, description, imageUrl, projectLink, repoLink }) => {
  return (
    <div className="modern-project-card">
      <div className="project-image-section">
        <img src={imageUrl} className="project-main-image" alt={title} />
      </div>
      
      <div className="project-info-section">
        <div className="project-header">
          <h4 className="project-title">{title}</h4>
        </div>
        
        <p className="project-description">{description}</p>
        
        <div className="project-actions">
          {projectLink && (
            <a href={projectLink} target="_blank" rel="noopener noreferrer" className="action-button primary single-button">
              Ver mais <ArrowRight size={20} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  projectLink: PropTypes.string,
  repoLink: PropTypes.string,
};

export default ProjectCard;