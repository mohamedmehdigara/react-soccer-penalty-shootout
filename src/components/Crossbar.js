import React from 'react';
import styled from 'styled-components';

const Crossbar = styled.div`
  position: absolute;
  width: 260px; /* Wider than goal */
  height: 20px; /* Thickness */
  background-color: #fff;
  top: 0;
  left: 50%;
  transform: translateX(-50%); /* Center the crossbar horizontally */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3); /* Shadow for depth */
`;

export default Crossbar;
