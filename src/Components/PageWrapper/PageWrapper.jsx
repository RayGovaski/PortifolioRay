/* eslint-disable no-unused-vars */
import React from 'react';
import { useTransition, animated, easings } from '@react-spring/web';

const PageWrapper = ({ children, show }) => {
  const transitions = useTransition(show, {
    from: {
      transform: 'translateX(100%) scale(0.5) translateZ(-400px)',
      opacity: 0,
    },
    enter: {
      transform: 'translateX(0%) scale(1) translateZ(0px)',
      opacity: 1,
      config: {
        tension: 40,
        friction: 22,
      },
    },
    leave: {
      transform: 'translateX(-100%) scale(0.9) translateZ(0px)',
      opacity: 0,
      config: {
        duration: 1200,
        easing: easings.easeInOutCubic,
      },
    },
  });

  return transitions((styles, item) =>
    item ? (
      <animated.div
        style={{
          ...styles,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflowY: 'auto',
          transformStyle: 'preserve-3d',
          perspective: '1000px',
          
        }}
      >
        {children}
      </animated.div>
    ) : null
  );
};

export default PageWrapper;