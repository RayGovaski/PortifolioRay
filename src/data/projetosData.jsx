import { stacksInfo } from './stacksData';

export const projetosData = [
  {
    id: 1,
    title: 'E-commerce de Roupas',
    descricaoCompleta: 'Este projeto é um e-commerce completo...',
    tecnologias: [
      { name: 'React', icon: stacksInfo['React'] },
      { name: 'Node.js', icon: stacksInfo['Node.js'] },
      { name: 'MongoDB', icon: stacksInfo['MongoDB'] },
      { name: 'Express', icon: stacksInfo['Express'] }
    ],
    videoUrl: 'https://www.youtube.com/embed/KNtJGQkC-WI?si=vJ1nLdNrE6Fp1jfE',
    projectLink: 'https://seusite.com/ecommerce',
    repoLink: 'https://github.com/seuuser/ecommerce-repo',
    dataDesenvolvimento: '2024-01-15',
    status: 'Concluído',
  },
  {
    id: 2,
    title: 'Plataforma de Receitas',
    descricaoCompleta: 'Plataforma social para compartilhamento de receitas...',
    tecnologias: [
      { name: 'React', icon: stacksInfo['React'] },
      { name: 'Firebase', icon: stacksInfo['Firebase'] },
      { name: 'CSS3', icon: stacksInfo['CSS3'] },
      { name: 'Material-UI', icon: stacksInfo['Material-UI'] }
    ],
    videoUrl: 'https://www.youtube.com/embed/KNtJGQkC-WI?si=vJ1nLdNrE6Fp1jfE',
    projectLink: 'https://seusite.com/receitas',
    repoLink: 'https://github.com/seuuser/receitas-repo',
    dataDesenvolvimento: '2024-02-10',
    status: 'Concluído',
  },
  {
    id: 3,
    title: 'Dashboard Analytics',
    descricaoCompleta: 'Dashboard completo para análise de dados...',
    tecnologias: [
      { name: 'React', icon: stacksInfo['React'] },
      { name: 'Chart.js', icon: stacksInfo['Chart.js'] },
      { name: 'Socket.io', icon: stacksInfo['Socket.io'] },
      { name: 'Express', icon: stacksInfo['Express'] },
      { name: 'PostgreSQL', icon: stacksInfo['PostgreSQL'] }
    ],
    videoUrl: 'https://www.youtube.com/embed/KNtJGQkC-WI?si=vJ1nLdNrE6Fp1jfE',
    projectLink: 'https://seusite.com/dashboard',
    repoLink: 'https://github.com/seuuser/dashboard-repo',
    dataDesenvolvimento: '2024-03-05',
    status: 'Em desenvolvimento',
  },
  {
    id: 4,
    title: 'Sistema de Gestão',
    descricaoCompleta: 'ERP completo para pequenas e médias empresas...',
    tecnologias: [
      { name: 'React', icon: stacksInfo['React'] },
      { name: 'Node.js', icon: stacksInfo['Node.js'] },
      { name: 'MySQL', icon: stacksInfo['MySQL'] },
      { name: 'Express', icon: stacksInfo['Express'] },
      { name: 'JWT', icon: stacksInfo['JWT'] },
      { name: 'PDF-lib', icon: stacksInfo['PDF-lib'] }
    ],
    videoUrl: 'https://www.youtube.com/embed/KNtJGQkC-WI?si=vJ1nLdNrE6Fp1jfE',
    projectLink: 'https://seusite.com/gestao',
    repoLink: 'https://github.com/seuuser/gestao-repo',
    dataDesenvolvimento: '2024-04-20',
    status: 'Em desenvolvimento',
  },
];