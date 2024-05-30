import React, { useState } from 'react';
import styled from 'styled-components';
import Goal from './components/Goal'; // Import the Goal component
import Score from './components/Score';
import PlayerControls from './components/PlayerControls'; // Import the PlayerControls component
import Goalkeeper from './components/Goalkeeper';
import HalfLine from './components/HalfLine';
import RoundDisplay from './components/RoundDisplay';
import PostGoalAnimation from './components/PostGoalAnimation'; // Import the PostGoalAnimation component

const AppContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

function App() {
  const [score, setScore] = useState(0);
  const [goalHeight, setGoalHeight] = useState(100);
  const [goalkeeperPosition, setGoalkeeperPosition] = useState(0);
  const [round, setRound] = useState(1);
  const [isGoalAnimation, setIsGoalAnimation] = useState(false); // State for goal animation

  const handleGoal = (power, direction) => {
    // Implement logic to check if the shot is a goal
    const isGoal = Math.random() < 0.5;

    if (isGoal) {
      setScore(score + 1);
      setIsGoalAnimation(true); // Set state for goal animation
      setTimeout(() => {
        setIsGoalAnimation(false);
      }, 1000); // Adjust animation duration
    }

    // Animate the goal post (you can use CSS transitions for simplicity)
    setGoalHeight(isGoal ? 0 : 100);

    // Move the goalkeeper (you can use CSS animations for simplicity)
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
      <RoundDisplay round={round} />
      {isGoalAnimation && <PostGoalAnimation isGoal={isGoalAnimation} />} {/* Render animation conditionally */}
    </AppContainer>
  );
}

export default App;

