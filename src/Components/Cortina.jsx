// src/components/Cortina.jsx
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Cortina.css'; // CSS para o componente Cortina

// Duração da animação de entrada que você quer considerar antes da capa sumir (pode ser 0 se não houver)
const INITIAL_PAGE_LOAD_DELAY = 0.1;
// Duração que a capa deve permanecer visível cobrindo o conteúdo APÓS o delay inicial
const COVER_HOLD_DURATION = 2.0;

const Cortina = ({ children }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const wrapperVariants = {
    hidden: {},
    visible: {},
  };

  const coverVariants = {
    hidden: { x: "0%" }, // Estado inicial: capa cobrindo o conteúdo
    visible: {
      x: "100%",      // Estado final: capa desliza para fora, revelando o conteúdo
      transition: {
        delay: INITIAL_PAGE_LOAD_DELAY + COVER_HOLD_DURATION,
        duration: 0.7, // Duração da animação de deslize da capa
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={wrapperVariants}
      className="cortina-involucro" // Classe para o elemento principal do componente Cortina
    >
      <motion.div
        className="cortina-capa" // Classe para a capa que desliza (ainda será amarela via CSS)
        variants={coverVariants}
      />
      <div className="cortina-conteudo" /* Classe para o conteúdo revelado */ >
        {children}
      </div>
    </motion.div>
  );
};

export default Cortina;