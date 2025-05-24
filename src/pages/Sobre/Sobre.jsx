import React from 'react';
import './Sobre.css';
import PageWrapper from "../../Components/PageWrapper/PageWrapper";

const Sobre = () => {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-stone-100 p-4 md:p-8 flex items-center justify-center font-mono">
      <div className="max-w-6xl w-full bg-stone-100 p-4 md:p-6 rounded-lg shadow-sm">
        <div className="grid-container">
          <div className="img-wrapper">
            <img
              src="src\assets\Perfil.png"
              alt="Foto de perfil"
              className="profile-img"
            />
          </div>
          
          <div className="text-wrapper">
            <h1 className="sobre-title h22">Sobre mim</h1>

            <p>
              Sou estudante de Sistemas de Informação na PUCPR, entrei para essa área
              pois desde criança, sempre fui curioso sobre como as coisas
              funcionam especialmente quando se tratava de jogos. Esse interesse
              foi o ponto de partida para meu começo na área de tecnologia, que hoje
              é parte do meu objetivo profissional.
            </p>

            <p>
              Mas minha vida vai além do código. No tempo livre, gosto de colocar
              a criatividade em jogo com atividades manuais. Tenho um carinho
              especial por trabalhos feitos à mão como cerâmica, crochê e bordado,
              nada me deixa mais feliz do que presentear alguém com algo feito por
              mim mesmo, é uma forma de demonstrar cuidado e personalidade.
            </p>

            <p>
              A música também é indispensável no meu dia a dia. Seja estudando,
              desenhando, programando ou na academia, estou sempre com fones no
              ouvido; me ajudam a manter o foco e o ritmo.
            </p>

            <p>
              Me considero uma pessoa tranquila, empática e curiosa, sempre
              disposta a aprender coisas novas e compartilhar o que sei. Gosto de
              unir o lado técnico com o humano.
            </p>
          </div>
        </div>
      </div>
    </div>
    </PageWrapper>
    
  );
};

export default Sobre;