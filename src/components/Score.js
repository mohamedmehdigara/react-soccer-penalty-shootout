// src/components/Score.js
import React from 'react';
import styled from 'styled-components';

const ScoreContainer = styled.div`
  text-align: center;
  font-size: 24px;
  color: #333;
`;

const Score = ({ goals }) => (
  <ScoreContainer>
    Score: {goals}
  </ScoreContainer>
);

export default Score;
