// src/App.js
// src/App.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Goal from './components/Goal'; // Import the Goal component
import Score from './components/Score';
import PlayerControls from './components/PlayerControls'; // Import the PlayerControls component
import Goalkeeper from './components/Goalkeeper';
import HalfLine from './components/HalfLine';
// ... (the rest of the code)

const AppContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

// src/App.js
// ... (imports)

function App() {
  const [score, setScore] = useState(0);
  const [goalHeight, setGoalHeight] = useState(100);
  const [goalkeeperPosition, setGoalkeeperPosition] = useState(0);

  const handleGoal = (power, direction) => {
    // Implement logic to check if the shot is a goal
    const isGoal = Math.random() < 0.5;

    if (isGoal) {
      setScore(score + 1);
    }

    // Animate the goal post (you can use CSS transitions for this)
    setGoalHeight(isGoal ? 0 : 100);

    // Move the goalkeeper (you can use CSS animations for this)
    setGoalkeeperPosition(Math.random() * 200); // Adjust the range as needed
  };

  return (
    <AppContainer>
      <h1>Soccer Penalty Shootout Game</h1>
      <Goal goalHeight={goalHeight} />
      <Goalkeeper position={goalkeeperPosition} />
      <Score goals={score} />
      <PlayerControls onKick={handleGoal} />
      <HalfLine /> {/* Render the HalfLine component */}

    </AppContainer>
  );
}

export default App;
