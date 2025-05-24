import React, { useState } from 'react';
import { FolderOpen } from 'lucide-react';
import ProjectCard from '../../components/ProjectCard';
import CertificateCard from '../../components/CertificateCard';
import StackIcon from '../../components/StackIcon';
import TabButton from '../../components/TabButton';
import PageWrapper from "../../Components/PageWrapper/PageWrapper";

import './ProjetosPage.css';
import '../../components/TabButton.css';
import '../../components/ProjectCard.css';
import '../../components/CertificateCard.css';
import '../../components/StackIcon.css';

import projectImg1 from '../../assets/project-images/project1.jpg';
import certImg1 from '../../assets/certificates/certificate1.jpg';

const Projetos = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index, tabName) => {
    setActiveTab(index);
    console.log(`Aba ativa: ${tabName}`);
  };

  const projectsData = [
    {
      id: 1,
      title: 'E-commerce de Roupas',
      description: 'Projeto de e-commerce completo com funcionalidades de carrinho, checkout e autenticação de usuário.',
      imageUrl: projectImg1,
      projectLink: 'https://seusite.com/ecommerce',
      repoLink: 'https://github.com/seuuser/ecommerce-repo',
    },
    {
      id: 2,
      title: 'Plataforma de Receitas',
      description: 'Aplicação web para gerenciar e compartilhar receitas culinárias, com busca e favoritos.',
      imageUrl: projectImg1,
      projectLink: 'https://seusite.com/receitas',
      repoLink: 'https://github.com/seuuser/receitas-repo',
    },
    {
      id: 3,
      title: 'Plataforma de Receitas',
      description: 'Aplicação web para gerenciar e compartilhar receitas culinárias, com busca e favoritos.',
      imageUrl: projectImg1,
      projectLink: 'https://seusite.com/receitas',
      repoLink: 'https://github.com/seuuser/receitas-repo',
    },
  ];

  const certificatesData = [
    {
      id: 1,
      title: 'React - Alura',
      imageUrl: certImg1,
      certificateLink: 'https://cursos.alura.com.br/certificate/seu-react-cert',
    },
    {
      id: 2,
      title: 'JavaScript Avançado - Udemy',
      imageUrl: certImg1,
      certificateLink: 'https://www.udemy.com/certificate/seu-js-cert',
    },
    {
      id: 3,
      title: 'HTML & CSS Fundamentos',
      imageUrl: certImg1,
      certificateLink: 'https://cursos.alura.com.br/certificate/seu-htmlcss-cert',
    },
    {
      id: 4,
      title: 'Bootstrap 5',
      imageUrl: certImg1,
      certificateLink: null,
    },
  ];

  const stacksData = [
    { id: 1, name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { id: 2, name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { id: 3, name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { id: 4, name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { id: 5, name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { id: 6, name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg' },
    { id: 7, name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { id: 8, name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { id: 9, name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { id: 10, name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { id: 11, name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { id: 12, name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { id: 13, name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { id: 14, name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 0: // Projetos
        return (
          <div className="content-section">
            {projectsData.map(project => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                projectLink={project.projectLink}
                repoLink={project.repoLink}
              />
            ))}
          </div>
        );
     
      case 1: // Certificados
        return (
          <div className="content-section">
            {certificatesData.map(cert => (
              <CertificateCard
                key={cert.id}
                title={cert.title}
                imageUrl={cert.imageUrl}
                certificateLink={cert.certificateLink}
              />
            ))}
          </div>
        );
     
      case 2: // Stacks
        return (
          <div className="content-section">
            {stacksData.map(stack => (
              <StackIcon
                key={stack.id}
                name={stack.name}
                iconUrl={stack.icon}
              />
            ))}
          </div>
        );
     
      default:
        return null;
    }
  };

  return (
    <div className="projetos-page-container">
      <h2 className="projetos-title">
        Projetos
        <FolderOpen
          size={25}
          color="#000"
          style={{
            marginLeft: '12px',
            transform: 'translateY(3px)',
            display: 'inline-block'
          }}
        />
      </h2>

      <div className="tab-button-section">
        <TabButton
          tabs={['Projetos', 'Certificados', 'Staks']}
          onTabChange={handleTabChange}
          defaultTab={0}
          theme="blue"
        />
      </div>

      {/* AQUI É ONDE VOCÊ COLOCA O PAGEWRAPPER */}
      <PageWrapper key={activeTab}>
        {renderContent()}
      </PageWrapper>
    </div>
  );
};

export default Projetos;