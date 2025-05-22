// src/components/PageWrapper.jsx
import { motion } from 'framer-motion';

const slideVariants = {
  initial: { x: '100%', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: '-100%', opacity: 0 },
};

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
