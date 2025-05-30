import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import './Home.css'; // Certifique-se que os novos estilos estarão aqui ou em um CSS acessível
import PageWrapper from "../../Components/PageWrapper/PageWrapper";


const Home = () => {
  const characterImg = "src/assets/Boneco.png";

  const roles = ["Front-end", "Back-end", "Web"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const pauseBetweenWords = 1000;
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        }, deletingSpeed);
      }
    } else {
      if (displayText === currentRole) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseBetweenWords);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        }, typingSpeed);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <> 
        <div className="home-container"> {/* Este é o seu conteúdo principal da Home */}
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
    </>
  );
};

export default Home;