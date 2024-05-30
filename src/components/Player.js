import React from 'react';
import styled from 'styled-components';

const Player = styled.div`
  position: absolute;
  width: 50px; /* Adjust size for player representation */
  height: 100px; /* Adjust height for player proportions */
  background: #0000ff; /* Blue for player (change for different teams) */
  border-radius: 10px; /* Rounded corners for player outline */
  animation: running 1s infinite ease-in-out; /* Add running animation */

  @keyframes running {
    0% { transform: translateX(0); }
    100% { transform: translateX(50px); }
  }
`;

export default Player;
