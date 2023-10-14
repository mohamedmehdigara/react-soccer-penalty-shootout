// src/components/Shootout.js
import React, { useState } from 'react';
import styled from 'styled-components';

const ShootoutContainer = styled.div`
  text-align: center;
`;

const Button = styled.button`
  background-color: #00a0e3;
  color: #fff;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

const Shootout = ({ onGoal }) => {
  const handleGoal = () => {
    onGoal();
  };

  return (
    <ShootoutContainer>
      <Button onClick={handleGoal}>Shoot!</Button>
    </ShootoutContainer>
  );
};

export default Shootout;
