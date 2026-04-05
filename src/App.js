import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { create } from 'zustand';

// --- ZUSTAND STORE ---
const useGameStore = create((set) => ({
  score: 0,
  attempts: 0,
  gameState: 'idle', // 'idle', 'moving', 'result'
  message: 'CHOOSE YOUR SPOT',
  ballPos: { x: 50, y: 85, scale: 1 },
  keeperPos: 50,
  lastResult: null,

  shoot: (targetX, targetY) => {
    // Logic: Keeper dives toward the shot but can be beaten by speed/placement
    const keeperTarget = Math.max(30, Math.min(70, targetX + (Math.random() * 16 - 8)));
    
    set({ 
      gameState: 'moving', 
      ballPos: { x: targetX, y: targetY, scale: 0.5 },
      keeperPos: keeperTarget 
    });

    // Resolution Logic
    setTimeout(() => {
      let result = 'GOAL!';
      const isSaved = Math.abs(targetX - keeperTarget) < 7 && targetY > 15;
      const hitPost = (Math.abs(targetX - 22) < 2 || Math.abs(targetX - 78) < 2) && targetY < 45;
      const isWide = targetX < 20 || targetX > 80 || targetY < 10;

      if (isSaved) result = 'SAVED!';
      else if (hitPost) result = 'POST!';
      else if (isWide) result = 'WIDE!';

      set((state) => ({
        gameState: 'result',
        lastResult: result,
        score: result === 'GOAL!' ? state.score + 1 : state.score,
        attempts: state.attempts + 1,
        message: result === 'GOAL!' ? 'WHAT A STRIKE!' : `UNLUCKY: ${result}`
      }));
    }, 700);
  },

  resetBall: () => set({
    gameState: 'idle',
    ballPos: { x: 50, y: 85, scale: 1 },
    keeperPos: 50,
    message: 'READY FOR THE NEXT?'
  })
}));

// --- ANIMATIONS ---
const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
`;

// --- STYLED COMPONENTS ---
const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #111;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', system-ui, sans-serif;
  color: white;
  overflow: hidden;
`;

const Scoreboard = styled.div`
  display: flex;
  gap: 40px;
  background: #222;
  padding: 15px 50px;
  border-radius: 15px;
  border: 2px solid #333;
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  
  div { text-align: center; }
  span { display: block; font-size: 0.7rem; color: #888; text-transform: uppercase; letter-spacing: 1px; }
  strong { font-size: 2.5rem; color: #fff; font-weight: 900; }
`;

const Pitch = styled.div`
  position: relative;
  width: 900px;
  height: 550px;
  background: #27ae60;
  background-image: repeating-linear-gradient(
    90deg,
    #2ecc71,
    #2ecc71 60px,
    #27ae60 60px,
    #27ae60 120px
  );
  border: 8px solid white;
  border-bottom: none;
  border-radius: 15px 15px 0 0;
  overflow: hidden;
  cursor: crosshair;
  box-shadow: 0 40px 100px rgba(0,0,0,0.6);
`;

const PenaltySpot = styled.div`
  position: absolute;
  bottom: 12%;
  left: 50%;
  transform: translateX(-50%);
  width: 15px;
  height: 15px;
  background: rgba(255,255,255,0.7);
  border-radius: 50%;
`;

const GoalFrame = styled.div`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 220px;
  border: 12px solid white;
  border-bottom: 2px solid rgba(255,255,255,0.2);
  background: rgba(255, 255, 255, 0.1);
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, #ffffff22 1px, transparent 1px);
    background-size: 15px 15px;
  }
`;

const KeeperBody = styled.div.attrs(props => ({
  style: { left: `${props.pos}%` }
}))`
  position: absolute;
  top: 170px;
  width: 70px;
  height: 100px;
  transform: translateX(-50%);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;

  .jersey {
    width: 55px;
    height: 75px;
    background: #e74c3c;
    border-radius: 8px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
    &::after { content: '1'; color: white; display: block; text-align: center; font-weight: 900; margin-top: 10px;}
  }
  .gloves { font-size: 40px; margin-top: -25px; }
`;

const BallWrapper = styled.div.attrs(props => ({
  style: { 
    left: `${props.x}%`, 
    top: `${props.y}%`,
    transform: `translate(-50%, -50%) scale(${props.scale})`
  }
}))`
  position: absolute;
  width: 50px;
  height: 50px;
  z-index: 5;
  transition: all 0.7s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => props.state === 'idle' && css`animation: ${pulse} 2s infinite;`}
`;

const BallVisual = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 50%;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset -5px -5px 10px rgba(0,0,0,0.2), 0 10px 20px rgba(0,0,0,0.4);
`;

const ResultOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  backdrop-filter: blur(5px);
  
  h2 { font-size: 6rem; margin: 0; font-style: italic; text-transform: uppercase; }
  p { font-size: 1.5rem; color: #aaa; margin-bottom: 2rem; }
`;

const ResetButton = styled.button`
  background: white;
  color: black;
  border: none;
  padding: 15px 50px;
  font-size: 1.4rem;
  font-weight: 800;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.2s;
  &:hover { transform: scale(1.05); background: #eee; }
`;

// --- MAIN COMPONENT ---
export default function App() {
  const { 
    score, attempts, gameState, message, 
    ballPos, keeperPos, shoot, resetBall, lastResult 
  } = useGameStore();

  const handlePitchClick = (e) => {
    if (gameState !== 'idle') return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    // Constraint: Can only shoot towards the top half of the pitch
    if (y < 65) shoot(x, y);
  };

  return (
    <AppContainer>
      <Scoreboard>
        <div><span>Goals</span><strong>{score}</strong></div>
        <div style={{ color: '#444', fontSize: '2.5rem' }}>:</div>
        <div><span>Misses</span><strong>{attempts - score}</strong></div>
      </Scoreboard>

      <Pitch onClick={handlePitchClick}>
        <div style={{ position: 'absolute', top: '15px', width: '100%', textAlign: 'center', opacity: 0.5, letterSpacing: '2px' }}>
          {message}
        </div>
        
        <PenaltySpot />
        <GoalFrame />

        <KeeperBody pos={keeperPos}>
          <div className="gloves">🧤</div>
          <div className="jersey" />
        </KeeperBody>

        <BallWrapper x={ballPos.x} y={ballPos.y} scale={ballPos.scale} state={gameState}>
          <BallVisual>⚽</BallVisual>
        </BallWrapper>

        {gameState === 'result' && (
          <ResultOverlay>
            <h2 style={{ color: lastResult === 'GOAL!' ? '#2ecc71' : '#e74c3c' }}>
              {lastResult}
            </h2>
            <p>{message}</p>
            <ResetButton onClick={resetBall}>CONTINUE</ResetButton>
          </ResultOverlay>
        )}
      </Pitch>

      <div style={{ marginTop: '25px', color: '#555', fontSize: '0.9rem' }}>
        TIPS: Aim for the top corners. The keeper reacts to your mouse position!
      </div>
    </AppContainer>
  );
}