// src/components/Goal.js
import React from 'react';
import styled from 'styled-components';

const GoalContainer = styled.div`
  position: relative;
  width: 200px;
  height: 100px;
  background: linear-gradient(90deg, transparent 40%, #00a0e3 40%, #00a0e3 60%, transparent 60%);
  background-size: 20px 20px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const GoalPost = styled.div`
  position: absolute;
  width: 20px; /* Thicker goal posts */
  height: 100px;
  background-color: #fff;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

const Crossbar = styled.div`
  position: absolute;
  width: 200px; /* Wider crossbar */
  height: 10px; /* Thicker crossbar */
  background-color: #fff;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

const Goal = ({ goalHeight }) => (
  <GoalContainer>
    <GoalPost style={{ height: goalHeight + 'px' }} />
    <Crossbar />
  </GoalContainer>
);

export default Goal;
