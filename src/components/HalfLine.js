import React from 'react';
import styled from 'styled-components';

const HalfLineContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%; /* Adjust width for desired line thickness */
  height: 2px; /* Adjust height for desired line thickness */
  background-color: #fff; /* Adjust color to match your field background */
`;

const HalfLine = () => {
  return <HalfLineContainer />;
};

export default HalfLine;
