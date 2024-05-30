import React, { useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated } from 'react-spring';

const NetContainer = styled.div`
  position: absolute;
  width: 200px; /* Adjust width for your goal */
  height: 100px; /* Adjust height for your goal */
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const NetPost = styled.div`
  position: absolute;
  width: 10px;
  height: 100%;
  background-color: #fff;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const NetMesh = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2); /* Adjust transparency */
`;

const netAnimation = keyframes`
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  100% {
    transform: scale(1, 1);
  }
`;

const AnimatedNetMesh = styled(animated.div)`
  animation: ${netAnimation} 0.5s ease-in-out;
`;

const PostGoalAnimation = ({ isGoal }) => {
  const netRef = useRef(null);
  const netAnimation = useSpring({
    from: { scale: 1 },
    to: { scale: isGoal ? 1.1 : 1 },
    config: { duration: 500 },
    reset: !isGoal, // Reset animation when isGoal changes to false
  });

  useEffect(() => {
    if (isGoal) {
      netRef.current.classList.add('shake'); // Add a CSS shake animation (optional)
      setTimeout(() => {
        netRef.current.classList.remove('shake');
      }, 500);
    }
  }, [isGoal]);

  return (
    <NetContainer ref={netRef}>
      <NetPost />
      <AnimatedNetMesh style={netAnimation}>
        <NetMesh />
      </AnimatedNetMesh>
    </NetContainer>
  );
};

export default PostGoalAnimation;
