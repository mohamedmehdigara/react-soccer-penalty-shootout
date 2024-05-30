import React from 'react';
import styled from 'styled-components';

const GoalContainer = styled.div`
  position: relative;
  width: 240px; /* Increased width for better proportions */
  height: 180px; /* Increased height for realistic size */
  background: linear-gradient(90deg, #d2d2d2 40%, #fff 40%, #fff 60%, #d2d2d2 60%); /* Light gray background with white center */
  background-size: 40px 40px; /* Adjust for larger background pattern */
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5); /* Stronger shadow for depth */
`;

const GoalPost = styled.div`
  position: absolute;
  width: 15px; /* Thicker posts */
  height: 180px;
  background-color: #fff;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 10px; /* Rounded corners for posts */
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3); /* Additional shadow for posts */
`;

const Crossbar = styled.div`
  position: absolute;
  width: 260px; /* Wider than goal for better visuals */
  height: 20px; /* Thicker crossbar */
  background-color: #fff;
  top: 0;
  left: -10px; /* Adjust for slight overhang on posts */
  right: -10px;
  margin: 0 auto;
  border-radius: 10px; /* Rounded corners for crossbar */
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3); /* Additional shadow for crossbar */
`;

const NetMeshImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1; /* Ensure net appears behind posts and crossbar */
`;

const NetMesh = styled.div`
  position: absolute;
  width: 100%; /* Adjust width to cover goal area */
  height: 100%;
  background-color: transparent; /* Remove background color */
  z-index: 2; /* Ensure net elements appear above background image (if used) */
`;

const NetCord = styled.div`
  position: absolute;
  width: 2px; /* Thin net cords */
  background-color: #000;
  opacity: 0.5; /* Semi-transparent cords */
  z-index: 3; /* Ensure net cords appear above net mesh */
`;

const Goal = ({ goalHeight }) => (
  <GoalContainer>
    <GoalPost style={{ height: goalHeight + 'px' }} />
    <Crossbar />
    <NetMesh>
      {/* Optionally add a net texture image here: */}
      {/* <NetMeshImage src="path/to/net-texture.png" alt="Net Texture" /> */}
      {/* Draw net mesh lines using NetCord elements */}
      <NetCord style={{ top: '0%', height: '100%' }} />
      <NetCord style={{ top: '20%', height: '80%' }} />
      <NetCord style={{ top: '40%', height: '60%' }} />
      <NetCord style={{ top: '60%', height: '40%' }} />
      <NetCord style={{ top: '80%', height: '20%' }} />
    </NetMesh>
  </GoalContainer>
);

export default Goal;
