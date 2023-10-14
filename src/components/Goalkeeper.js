// src/components/Goalkeeper.js
import React from 'react';
import styled from 'styled-components';

const GoalkeeperContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  background-color: #ff5722;
`;

const Goalkeeper = ({ position }) => (
  <GoalkeeperContainer style={{ left: `${position}px` }} />
);

export default Goalkeeper;
