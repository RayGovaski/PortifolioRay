import React, { useState } from 'react';
import { FolderOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TabButton from '../../components/TabButton';
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import ProjectCard from '../../components/ProjectCard';
import CertificateCard from '../../components/CertificateCard';
import StackIcon from '../../Components/StackIcon';
import CertificateModal from '../../Components/CertificateModal';

import projectImg1 from '../../assets/project-images/project1.jpg';
import projectImg2 from '../../assets/project-images/project1.jpg';
import projectImg3 from '../../assets/project-images/project1.jpg';
import projectImg4 from '../../assets/project-images/project1.jpg';

import certImg1 from '../../assets/certificates/certificate1.jpg';
// Add more certificate images if needed or use a generic one
// import certImgGeneric from '../../assets/certificates/generic-cert.png';


import './Button.css';

const Projetos = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const navigate = useNavigate();

  // State for Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleTabChange = (index) => {
    setActiveTabIndex(index);
  };

  const pageTitle = "Meus Projetos";
  const tabItems = ['Projetos', 'Certificados', 'Stacks'];

  const projectsData = [
    { id: 1, title: 'E-commerce de Roupas', description: 'Projeto de e-commerce completo com funcionalidades de carrinho, checkout e autenticação.', imageUrl: projectImg1 },
    { id: 2, title: 'Plataforma de Receitas', description: 'Aplicação web para gerenciar e compartilhar receitas culinárias, com busca e favoritos.', imageUrl: projectImg2 },
    { id: 3, title: 'Dashboard Analytics', description: 'Dashboard interativo para visualização de dados com gráficos e relatórios em tempo real.', imageUrl: projectImg3 },
    { id: 4, title: 'Sistema de Gestão', description: 'Sistema completo de gestão empresarial com módulos de vendas, estoque e relatórios.', imageUrl: projectImg4 },
  ];

  const certificatesData = [
    {
      id: 1,
      title: 'React Avançado - Alura',
      imageUrl: certImg1, // Make sure this image path is correct
      // Add a more detailed description for the modal if you want
      modalDescription: 'Certificado de conclusão do curso de React Avançado na Alura, cobrindo tópicos como hooks avançados, performance e testes.',
      certificateLink: 'https://cursos.alura.com.br/certificate/seu-react-cert'
    },
    {
      id: 2,
      title: 'JavaScript Avançado - Udemy',
      imageUrl: certImg1, // Replace with actual image if different
      modalDescription: 'Curso focado em aprofundar conhecimentos em JavaScript, incluindo ES6+, programação assíncrona e padrões de projeto.',
      certificateLink: 'https://www.udemy.com/certificate/seu-js-cert'
    },
    {
      id: 3,
      title: 'HTML & CSS Fundamentos',
      imageUrl: certImg1, // Replace with actual image
      modalDescription: 'Fundamentos de HTML5 e CSS3 para construção de interfaces web responsivas e semânticas.',
      certificateLink: 'https://cursos.alura.com.br/certificate/seu-htmlcss-cert'
    },
    {
      id: 4,
      title: 'Bootstrap 5 - Desenvolve',
      imageUrl: certImg1, // Replace with actual image
      modalDescription: 'Desenvolvimento ágil de interfaces responsivas utilizando o framework Bootstrap 5.',
      certificateLink: null // Example of a certificate without a link
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


  const handleOpenCertificateModal = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };


  const renderTabContent = () => {
    switch (activeTabIndex) {
      case 0: // Projetos
        return (
          <div className="content-section aaa" style={{ height: '100%' }}>
            <PageWrapper show={true} key="page-wrapper-projetos">
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                padding: '20px',
                justifyContent: 'center'
              }}>
                {projectsData.map(project => (
                  <ProjectCard
                    key={project.id}
                    imageUrl={project.imageUrl}
                    title={project.title}
                    description={project.description}
                    onViewMore={() => {
                      navigate(`/projeto/${project.id}`);
                    }}
                  />
                ))}
              </div>
            </PageWrapper>
          </div>
        );

      case 1: // Certificados
        return (
          <div className="content-section" style={{ height: '100%' }}>
            <PageWrapper show={true} key="page-wrapper-certificados">
              <div className="certificates-container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '16px',
                padding: '20px',
                justifyItems: 'center'
              }}>
                {certificatesData.map(cert => (
                  <CertificateCard
                    key={cert.id}
                    imageUrl={cert.imageUrl}
                    certificateName={cert.title}
                    // The description on the card can be short
                    description={cert.certificateLink ? 'Verificado' : 'Concluído'}
                    altText={`Certificado ${cert.title}`}
                    certificateLink={cert.certificateLink} // Still useful for the modal logic
                    onCardClick={() => handleOpenCertificateModal(cert)} // Pass the handler
                  />
                ))}
              </div>
            </PageWrapper>
          </div>
        );

      case 2: // Stacks
        return (
          <div className="content-section" style={{ height: '100%' }}>
            <PageWrapper show={true} key="page-wrapper-stacks">
              <div className="stacks-container" style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '16px',
                padding: '20px',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                {stacksData.map(stack => (
                  <StackIcon
                    key={stack.id}
                    iconUrl={stack.icon}
                    techName={stack.name}
                    altText={`${stack.name} logo`}
                  />
                ))}
              </div>
            </PageWrapper>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <p className='Button-tamanho' style={{ flexShrink: 0, marginBottom: '20px' }}>
        {pageTitle}
        {' '}
        <FolderOpen size={25} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
      </p>

      <div style={{ flexShrink: 0, marginBottom: '20px' }}>
        <TabButton
          tabs={tabItems}
          onTabChange={handleTabChange}
          defaultTab={0}
        />
      </div>

      <div className="tab-content-display" style={{
        position: 'relative',
        flex: 1,
        overflow: 'hidden' // Be careful if modal needs to break out
      }}>
        {renderTabContent()}
      </div>

      {/* Render the Modal */}
      {selectedCertificate && (
        <CertificateModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          imageUrl={selectedCertificate.imageUrl}
          certificateName={selectedCertificate.title}
          // Use a more detailed description for the modal if available
          description={selectedCertificate.modalDescription || `Certificado de ${selectedCertificate.title}.`}
          certificateLink={selectedCertificate.certificateLink}
        />
      )}
    </div>
  );
};

export default Projetos;