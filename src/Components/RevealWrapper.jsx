import React, { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from 'framer-motion';
import './RevealWrapper.css';

const INITIAL_PAGE_LOAD_DELAY = 0.1;
const COVER_HOLD_DURATION = 2;

const RevealWrapper = ({ children }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const wrapperVariants = {
    hidden: {},
    visible: {},
  };

  const coverVariants = {
    hidden: { x: "0%" }, 
    visible: {
      x: "100%",       
      transition: {
        delay: INITIAL_PAGE_LOAD_DELAY + COVER_HOLD_DURATION,
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={wrapperVariants}
      className="reveal-wrapper"
    >
      <motion.div
        className="reveal-cover" 
        variants={coverVariants}
      />
      <div className="reveal-content" >
        {children}
      </div>
    </motion.div>
  );
};

export default RevealWrapper;