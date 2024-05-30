import React from 'react';
import styled from 'styled-components';

const NetCord = styled.div`
  position: absolute;
  width: 2px; /* Thin net cords */
  background-color: #000;
  opacity: 0.5; /* Semi-transparent cords */
  z-index: 3; /* Ensure net cords appear above net mesh */
`;

export default NetCord;
