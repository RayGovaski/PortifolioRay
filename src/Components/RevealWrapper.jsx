// src/components/RevealWrapper.jsx
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
// Não precisamos mais do useInView para este comportamento
// import { useInView } from 'react-intersection-observer';
import './RevealWrapper.css'; // Mantenha seu CSS

// Duração da animação de entrada que você quer considerar antes da capa sumir (pode ser 0 se não houver)
const INITIAL_PAGE_LOAD_DELAY = 0.1; // Exemplo: pequeno delay para a página "assentar"
// Duração que a capa deve permanecer visível cobrindo o conteúdo APÓS o delay inicial
const COVER_HOLD_DURATION = 2.0;

const RevealWrapper = ({ children }) => {
  const controls = useAnimation();

  useEffect(() => {
    // Inicia a animação para 'visible' assim que o componente é montado.
    // Todas as instâncias de RevealWrapper farão isso simultaneamente.
    controls.start("visible");
  }, [controls]); // Executa apenas uma vez após a montagem inicial

  const wrapperVariants = {
    hidden: {},
    visible: {},
  };

  const coverVariants = {
    hidden: { x: "0%" }, // Estado inicial: capa cobrindo o conteúdo
    visible: {
      x: "100%",       // Estado final: capa desliza para fora, revelando o conteúdo
      transition: {
        // O delay total para a capa começar a deslizar:
        delay: INITIAL_PAGE_LOAD_DELAY + COVER_HOLD_DURATION,
        duration: 0.7, // Duração da animação de deslize da capa
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      // Não precisamos mais do 'ref' do useInView
      initial="hidden"
      animate={controls}
      variants={wrapperVariants}
      className="reveal-wrapper" // CSS: position: relative; overflow: hidden;
    >
      <motion.div
        className="reveal-cover" // CSS: position: absolute; ..., z-index: 2;
        variants={coverVariants}
        // initial/animate são herdados do motion.div pai
      />
      <div className="reveal-content" /* CSS: z-index: 1; */ >
        {children}
      </div>
    </motion.div>
  );
};

export default RevealWrapper;