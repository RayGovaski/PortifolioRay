// Em Home.js (e em outra página de teste)
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import './Home.css';
import PageWrapper from "../../Components/PageWrapper/PageWrapper"; // COMENTE OU REMOVA

const Home = () => {
  const characterImg = "src/assets/Boneco.png";
  const roles = ["Front-end", "Back-end", "Web"];
  const [roleIndex] = useState(0);
  const [displayText] = useState("");
  const [isDeleting] = useState(false);

  useEffect(() => {
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <>
      <PageWrapper show={true}>
        <div className="home-container">
          <div className="home-content">
            <div className="home-text">
              <h1 className="home-title">
                Olá, Bem-vindo! Sou o <span className="home-highlight">Ray</span>
              </h1>
              <h2 className="home-subtitle">Desenvolvedor</h2>
              <h3 className="home-role">
                {displayText}
                <span className="cursor">|</span>
              </h3>
              <div className="social-icons">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaGithub size={60} />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaLinkedin size={60} />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaWhatsapp size={60} />
                </a>
              </div>
            </div>
            <div className="image-container">
              <div className="image-shadow"></div>
              <img
                src={characterImg}
                alt="Ray - Desenvolvedor"
                className="character-image"
              />
            </div>
          </div>
        </div>
      </PageWrapper>
      
    </>
  );
};

export default Home;