// src/components/PlayerControls.js
import React, { useState } from 'react';
import styled from 'styled-components';

const ControlContainer = styled.div`
  text-align: center;
`;

const Slider = styled.input`
  width: 80%;
`;

const PlayerControls = ({ onKick }) => {
  const [power, setPower] = useState(50); // Initialize power to 50%
  const [direction, setDirection] = useState(0); // Initialize direction to 0 degrees

  const handleKick = () => {
    onKick(power, direction);
  };

  return (
    <ControlContainer>
      <h2>Player Controls</h2>
      <label>Power:</label>
      <Slider
        type="range"
        min="0"
        max="100"
        value={power}
        onChange={(e) => setPower(e.target.value)}
      />
      <br />
      <label>Direction:</label>
      <Slider
        type="range"
        min="0"
        max="360"
        value={direction}
        onChange={(e) => setDirection(e.target.value)}
      />
      <br />
      <button onClick={handleKick}>Kick!</button>
    </ControlContainer>
  );
};

export default PlayerControls;
