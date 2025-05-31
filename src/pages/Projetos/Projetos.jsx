import React, { useState } from 'react';
import { FolderOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TabButton from '../../Components/TabButton';
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import ProjectCard from '../../Components/ProjectCard';
import CertificateCard from '../../Components/CertificateCard';
import StackIcon from '../../Components/StackIcon';
import CertificateModal from '../../Components/CertificateModal';

import projectImg1 from '../../assets/project-images/project1.jpg';
import projectImg2 from '../../assets/project-images/project1.jpg';
import projectImg3 from '../../assets/project-images/project1.jpg';
import projectImg4 from '../../assets/project-images/project1.jpg';

import certImg1 from '../../assets/certificates/certificate1.jpg';

import './button.css';

const Projetos = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleTabChange = (index) => setActiveTabIndex(index);
  const pageTitle = "Meus Projetos";
  const tabItems = ['Projetos', 'Certificados', 'Stacks'];

  const projectsData = [
    { id: 1, title: 'E-commerce de Roupas', description: 'Projeto de e-commerce completo com funcionalidades de carrinho, checkout e autenticação.', imageUrl: projectImg1 },
    { id: 2, title: 'Plataforma de Receitas', description: 'Aplicação web para gerenciar e compartilhar receitas culinárias, com busca e favoritos.', imageUrl: projectImg2 },
    { id: 3, title: 'Dashboard Analytics', description: 'Dashboard interativo para visualização de dados com gráficos e relatórios em tempo real.', imageUrl: projectImg3 },
    { id: 4, title: 'Sistema de Gestão', description: 'Sistema completo de gestão empresarial com módulos de vendas, estoque e relatórios.', imageUrl: projectImg4 },
  ];

  const certificatesData = [
    { id: 1, title: 'React Avançado - Alura', imageUrl: certImg1, modalDescription: 'Certificado de conclusão do curso de React Avançado na Alura...', certificateLink: 'https://cursos.alura.com.br/certificate/seu-react-cert' },
    { id: 2, title: 'JavaScript Avançado - Udemy', imageUrl: certImg1, modalDescription: 'Curso focado em aprofundar conhecimentos em JavaScript...', certificateLink: 'https://www.udemy.com/certificate/seu-js-cert' },
    { id: 3, title: 'HTML & CSS Fundamentos', imageUrl: certImg1, modalDescription: 'Fundamentos de HTML5 e CSS3...', certificateLink: 'https://cursos.alura.com.br/certificate/seu-htmlcss-cert' },
    { id: 4, title: 'Bootstrap 5 - Desenvolve', imageUrl: certImg1, modalDescription: 'Desenvolvimento ágil de interfaces responsivas...', certificateLink: null },
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
    // Adicione mais stacks conforme necessário
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
    // A lógica interna de renderTabContent permanece a mesma.
    // O importante é que o .content-section e o PageWrapper permitam crescimento.
    let content;
    switch (activeTabIndex) {
      case 0:
        content = (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', padding: '20px', justifyContent: 'center', flexGrow: 1, overflowY: 'auto' }}>
            {projectsData.map(project => (
              <ProjectCard key={project.id} imageUrl={project.imageUrl} title={project.title} description={project.description} onViewMore={() => navigate(`/projeto/${project.id}`)} />
            ))}
          </div>
        );
        break;
      case 1:
        content = (
          <div className="certificates-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', padding: '20px', justifyItems: 'center', flexGrow: 1, overflowY: 'auto' }}>
            {certificatesData.map(cert => (
              <CertificateCard key={cert.id} imageUrl={cert.imageUrl} certificateName={cert.title} description="Ver sobre" altText={`Certificado ${cert.title}`} onCardClick={() => handleOpenCertificateModal(cert)} />
            ))}
          </div>
        );
        break;
      case 2:
        content = (
          <div className="stacks-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start', gap: '16px', padding: '20px', maxWidth: '800px', margin: '0 auto', flexGrow: 1, overflowY: 'auto' }}>
            {stacksData.map(stack => (
              <StackIcon key={stack.id} iconUrl={stack.icon} techName={stack.name} altText={`${stack.name} logo`} />
            ))}
          </div>
        );
        break;
      default:
        content = null;
    }
    // O .content-section precisa permitir que PageWrapper (e seu conteúdo) cresça.
    return (
      <div className="content-section" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <PageWrapper show={true} stylePropForRoot={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {content}
        </PageWrapper>
      </div>
    );
  };

  return (
    // Contêiner raiz da página Projetos
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh', // Garante que o contêiner ocupe pelo menos a altura da tela
      // Sem padding aqui
    }}>
      {/* Contêiner que vai crescer para empurrar o Footer para baixo */}
      <div style={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        // overflowY: 'auto', // Se este nível precisar de scroll, mas o conteúdo da aba já tem
      }}>
        {/* Contêiner interno para o padding e todo o conteúdo visível ANTES do Footer */}
        <div style={{
          padding: '20px', // Padding aplicado aqui
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1, // Faz este contêiner com padding preencher o espaço do pai que cresceu
          // Se o conteúdo interno for menor, este div ainda ocupará o espaço
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

          {/* Área onde o conteúdo da aba selecionada é renderizado */}
          <div className="tab-content-display" style={{
            position: 'relative', // Mantido
            flex: 1, // Faz esta área de conteúdo crescer para preencher o contêiner com padding
            overflow: 'hidden', // Mantido, mas pode ser 'visible' se o modal tiver problemas
            display: 'flex', // Para que .content-section com height:100% funcione
            flexDirection: 'column'
          }}>
            {renderTabContent()}
          </div>
        </div> {/* Fim do contêiner com padding */}
      </div> {/* Fim do contêiner que cresce */}

      {/* Modal de Certificado (fora do fluxo principal de conteúdo que cresce) */}
      {selectedCertificate && (
        <CertificateModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          imageUrl={selectedCertificate.imageUrl}
          certificateName={selectedCertificate.title}
          description={selectedCertificate.modalDescription || `Certificado de ${selectedCertificate.title}.`}
          certificateLink={selectedCertificate.certificateLink}
        />
      )}
      
      {/* Footer como último filho do contêiner raiz da página */}
      
    </div>
  );
};

export default Projetos;