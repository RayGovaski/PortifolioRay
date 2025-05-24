// src/components/PageWrapper.jsx
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const slideVariants = {
  initial: { 
    x: '100%', 
    opacity: 0,
    scale: 0.8,
    z: -100
  },
  animate: { 
    x: 0, 
    opacity: 1,
    scale: 1,
    z: 0,
    transition: {
      duration: 2.0,
      ease: "easeInOut",
      times: [0, 0.4, 0.7, 1],
      x: {
        type: "spring",
        stiffness: 60,
        damping: 20
      },
      scale: {
        delay: 0.6,
        duration: 1.4
      },
      opacity: {
        duration: 0.8
      }
    }
  },
  exit: { 
    x: '-100%', 
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 1.2,
      ease: "easeInOut"
    }
  },
};

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ 
        width: '100%',
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;