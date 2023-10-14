// src/components/Goal.js
import React from 'react';
import styled from 'styled-components';

const GoalContainer = styled.div`
  position: relative;
  width: 200px;
  height: 100px;
  background-color: #00a0e3;
  margin: 0 auto;
`;

const GoalPost = styled.div`
  position: absolute;
  width: 10px;
  height: 100px;
  background-color: #fff;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const Goal = ({ goalHeight }) => (
  <GoalContainer>
    <GoalPost style={{ height: goalHeight + 'px' }} />
  </GoalContainer>
);

export default Goal;
