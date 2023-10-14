// src/components/Goalkeeper.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const GoalkeeperContainer = styled.div`
  position: relative;
  width: 100px;
  height: 200px; /* Make the goalkeeper taller */
  background-color: #ff5722;
  display: flex;
  align-items: flex-end;
`;

const GoalkeeperBody = styled.div`
  position: relative;
  width: 100%;
  height: 70%;
  background-color: #ff5722;
  border-radius: 50% 50% 0 0;
  border: 1px solid #fff;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3); /* Add a shadow for depth */
`;

const GoalkeeperArms = styled.div`
  position: absolute;
  width: 10px;
  height: 60%;
  background-color: #ff5722;
  border-radius: 0 0 50% 50%;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3); /* Add a shadow for depth */
`;

const GoalkeeperLegs = styled.div`
  position: absolute;
  width: 20px;
  height: 100px; /* Make the legs longer */
  background-color: #ff5722;
  border-radius: 50% 50% 0 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3); /* Add a shadow for depth */
`;

const goalkeeperAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-20px); /* Simulate goalkeeper movement */
  }
  100% {
    transform: translateX(0);
  }
`;

const Goalkeeper = ({ position }) => (
  <GoalkeeperContainer style={{ left: `${position}px` }}>
    <GoalkeeperBody />
    <GoalkeeperArms />
    <GoalkeeperLegs />
  </GoalkeeperContainer>
);

export default Goalkeeper;
