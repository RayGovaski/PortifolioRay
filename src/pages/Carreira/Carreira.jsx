import React from 'react';
import { FiBriefcase, FiBookOpen, FiTarget, FiAward, FiGlobe, FiSettings, FiDownload } from 'react-icons/fi';
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import './Carreira.css';



const resumo = "Sou estudante de Sistemas de Informação, atualmente cursando o 5º período na PUCPR. Além disso, atuo como diretor de mídias sociais do Centro Acadêmico do meu curso, onde desenvolvo habilidades em gestão de comunicação, organização, trabalho em equipe e design de produtos.\n\nMinha trajetória profissional inclui experiência como designer gráfico em uma gráfica, onde aprimorei minhas habilidades em criação visual, utilizando Photoshop e CorelDRAW, design de materiais, atendimento ao público e gerenciamento de pedidos. Com o tempo, meu interesse por tecnologia cresceu, especialmente por sempre ter sido apaixonado por jogos. Foi assim que descobri a área de desenvolvimento de software, que hoje é o meu foco, tanto no front-end quanto no back-end.\n\nTenho experiência em desenvolvimento web completo, utilizando React, Bootstrap, HTML, CSS e JavaScript. Em projetos universitários, costumo assumir a responsabilidade pelo desenvolvimento front-end e também tenho familiaridade com outras tecnologias para tornar as soluções mais completas e eficientes.";

const objetivo = "Estágio na área de TI – Desenvolvimento de Software\nMelhorar minhas noções de trabalho em equipe e desenvolver meu conhecimento na área.";

const educacao = [
  "5º Período: Sistemas de Informação | Cursando | Pontifícia Universidade Católica do Paraná",
  "Ensino médio completo | 2022 | Colégio Estadual Pinheiro do Paraná"
];

const idiomas = [
  "Português – Língua materna",
  "Inglês – Intermediário"
];

const habilidades = [
  "Proatividade, Flexibilidade e adaptabilidade, Resiliência, Empatia, Habilidade de trabalhar em equipe, Capacidade de aprendizado",
  "Python (Avançado) | CSS, HTML, JavaScript (Avançado)",
  "Banco de dados MySQL (Intermediário) | Java (Intermediário)",
  "React (Intermediário) | Familiaridade com Angular e PHP"
];

const experiencia = [
  {
    title: "IMPRESSOR GRÁFICO/DESIGNER",
    company: "CONTROL C",
    years: "2020 - 2024",
    description: "Designer Gráfico, Impressor, Atendimento, Caixa, Gestor de encomendas",
  },
  {
    title: "DIRETOR DE MÍDIA SOCIAL",
    company: "CENTRO ACADÊMICO DE SISTEMAS DE INFORMAÇÃO",
    years: "2024",
    description: "Responsável pela gestão da parte visual e de produtos do Centro Acadêmico de Sistemas de Informação",
  },
  {
    title: "DIRETOR DE COMUNICAÇÃO E IMPRENSA",
    company: "GRÊMIO ESTUDANTIL",
    years: "2022 - 2023",
    description: "Eu era responsável pela gestão da parte visual e de comunicação do grêmio estudantil.",
  },
];

export default function Carreira() {
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/public/curriculo.pdf';
    link.download = 'Curriculo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
    <PageWrapper show={true}>
      <>
       <div className="curriculo-container">
        <div className="pdf-button-container">
          <button className="custom-btn" onClick={downloadPDF}>
            Ver currículo em PDF
          </button>
        </div>

        <div className="section">
          <h2 className="section-title">
            <FiBookOpen size={24} /> Resumo
          </h2>
          <p className="section-content">{resumo}</p>
        </div>

        <div className="section">
          <h2 className="section-title">
            <FiTarget size={24} /> Objetivo
          </h2>
          <p className="section-content">{objetivo}</p>
        </div>

        <div className="section">
          <h2 className="section-title">
            <FiAward size={24} /> Educação
          </h2>
          <ul className="section-list">
            {educacao.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>

        <div className="section">
          <h2 className="section-title">
            <FiGlobe size={24} /> Idiomas
          </h2>
          <ul className="section-list">
            {idiomas.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>

        <div className="section">
          <h2 className="section-title">
            <FiSettings size={24} /> Habilidades e Competências
          </h2>
          <ul className="section-list">
            {habilidades.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>

        <div className="section">
          <h2 className="section-title">
            <FiBriefcase size={24} /> Experiência
          </h2>
          <div className="experience-grid">
            {experiencia.map((job, index) => (
              <div key={index} className="career-card">
                <h5 className="career-title">{job.title}</h5>
                <p className="career-company">{job.company}</p>
                <p className="career-years">{job.years}</p>
                <p className="career-description">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </>
    </PageWrapper>
    </>
  );
}