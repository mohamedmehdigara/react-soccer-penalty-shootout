import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Goal from './components/Goal';
import Ball from './components/Ball';
import Player from './components/Player';
import PlayerControls from './components/PlayerControls';
import Timer from './components/Timer';

const App = () => {
  const [isGoal, setIsGoal] = useState(false); // Track if a goal is scored
  const [timeLeft, setTimeLeft] = useState(5); // Timer duration (adjust as needed)
  const ballRef = useRef(null); // Reference to the ball component

  const handleShot = (power, direction) => {
    // Implement logic to calculate shot outcome based on power and direction
    // Update game state (e.g., move ball, check for goal)
    setIsGoal(true); // Example: Simulate a goal for now
    animateBall(power, direction); // Animate ball movement
  };

  const animateBall = (power, direction) => {
    // Use ballRef.current to access the ball component and animate its movement
    // based on power and direction calculations
  };

  const handleTimerEnd = () => {
    // Handle actions after timer ends (e.g., reset timer, switch players)
  };

  return ( 
  <div>
      <Goal />
      <Ball ref={ballRef} />
      <Player />
      <PlayerControls onShot={handleShot} />
      <Timer timeLeft={timeLeft} onEnd={handleTimerEnd} />
      </div>
  );
};



export default App;
