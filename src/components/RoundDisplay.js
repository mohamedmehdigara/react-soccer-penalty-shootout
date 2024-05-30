import React from 'react';
import styled from 'styled-components';

const RoundContainer = styled.div`
  position: absolute;
  top: 20px; /* Adjust position as desired */
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  color: #fff; /* Adjust color to match your background */
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5); /* Add a slight shadow for readability */
`;

const RoundDisplay = ({ round }) => {
  return <RoundContainer>Round: {round}</RoundContainer>;
};

export default RoundDisplay;
