import React from 'react';
import styled from 'styled-components';

const Ball = styled.div`
  position: absolute;
  width: 40px; /* Adjust size for desired ball diameter */
  height: 40px;
  background: radial-gradient(circle at 50%, white, #fff200); /* White with a yellow center */
  border-radius: 50%; /* Circle shape */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); /* Shadow for depth */
  transition: transform 0.2s ease-in-out; /* Add smooth animation for movement */
`;

export default Ball;
