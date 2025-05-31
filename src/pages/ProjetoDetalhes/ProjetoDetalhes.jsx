import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Code, BookOpen } from 'lucide-react';
import { projetosData } from '../../data/projetosData';
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import './ProjetoDetalhes.css';
import Cortina from '../../components/Cortina'; 
import Footer from '../../Components/layout/Footer';


const ProjetoDetalhes = () => {
  const { id } = useParams();
  const projeto = projetosData.find(p => p.id === parseInt(id));

  if (!projeto) {
    return <Navigate to="/projetos" replace />;
  }

  const formatarData = (dataString) => {
    if (!dataString) return '';
    const dataObj = new Date(dataString + 'T00:00:00');
    return dataObj.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <PageWrapper show={true}>
      <div className="projeto-detalhes-container">
        <div className="projeto-header">
          <Link to="/projetos" className="btn-voltar">
            <ArrowLeft size={20} />
            Voltar aos Projetos
          </Link>
          
          <div className="header-info-badges">
            {projeto.dataDesenvolvimento && (
              <span className="data-desenvolvimento-header-badge">
                <Calendar size={16} style={{ marginRight: '0.4em' }} />
                {formatarData(projeto.dataDesenvolvimento)}
              </span>
            )}
            <div className="projeto-status-badge">
              <span className={`status-indicator ${projeto.status.toLowerCase().replace(/\s+/g, '-')}`}>
                {projeto.status}
              </span>
            </div>
          </div>
        </div>

        <div className="projeto-title-section">
          <h1 className="projeto-titulo">{projeto.title}</h1>
        </div>

        <div className="projeto-content-grid">
          <div className="projeto-video-section">
            {projeto.videoUrl ? (
              <Cortina>
                <div className="video-principal-container">
                  <iframe
                    src={projeto.videoUrl}
                    title={projeto.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="video-principal"
                  ></iframe>
                </div>
              </Cortina>
            ) : (
              <p>Vídeo não disponível.</p>
            )}
          </div>

          <div className="projeto-info-section">
            <div className="info-card">
              <h2 className="info-title">
                <BookOpen size={20} />
                Sobre o Projeto
              </h2>
              <p className="projeto-descricao-completa">
                {projeto.descricaoCompleta}
              </p>
            </div>

            <hr className="info-separator" />

            <div className="info-card">
              <h3 className="info-subtitle">
                <Code size={18} />
                Tecnologias Utilizadas
              </h3>
              <div className="tecnologias-grid">
                {projeto.tecnologias.map((tech, index) => (
                  <span 
                    key={index} 
                    className="tech-badge" 
                    title={tech.name} 
                  >
                    {tech.icon ? (
                      <img
                        src={tech.icon}
                        alt={tech.name} 
                        className="tech-icon-only" 
                      />
                    ) : (

                      <span className="tech-name-fallback" title={tech.name}>
                        {tech.name.substring(0,1)}
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            <div className="projeto-links-card info-card">
              
              <div className="projeto-links">
                {projeto.projectLink && (
                  <a
                    href={projeto.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-projeto demo"
                  >
                    <ExternalLink size={18} />
                    Ver Demo
                  </a>
                )}
                {projeto.repoLink && (
                  <a
                    href={projeto.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-projeto repositorio"
                  >
                    <Github size={18} />
                    Ver Código
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProjetoDetalhes;