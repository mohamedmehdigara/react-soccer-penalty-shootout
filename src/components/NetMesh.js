import React from 'react';
import styled from 'styled-components';

const NetMesh = styled.div`
  position: absolute;
  width: 100%; /* Stretches across the goal */
  height: 100%;
  background-color: transparent; /* No background color */
  z-index: 2; /* Ensure net elements appear above background image (if used) */
`;

export default NetMesh;
