import React from 'react';
import { ArrowRight } from 'lucide-react';
import './ProjectCard.css';
import Cortina from './Cortina';

const ProjectCard = ({
  imageUrl,
  title,
  description,
  onViewMore,
  buttonText = "Ver mais" 
}) => {
  return (
    <Cortina>
      <article className="project-card">
      {imageUrl && ( 
        <div className="project-card-image-container">
          <img 
            src={imageUrl} 
            alt={title || 'Imagem do Projeto'} 
            className="project-card-image" 
          />
        </div>
      )}
      <div className="project-card-content">
        {title && <h3 className="project-card-title">{title}</h3>}
        <p className="project-card-description">{description}</p>
        {onViewMore && ( 
          <button
            onClick={onViewMore}
            className="project-card-button"
            aria-label={`Ver mais sobre ${title || 'o projeto'}`}
          >
            <span className="button-text-label">{buttonText}</span>
            <ArrowRight size={16} className="lucide-arrow-right" />
          </button>
        )}
      </div>
    </article>  
    </Cortina>
       
      
  );
};

export default ProjectCard;