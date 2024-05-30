import React from 'react';
import styled from 'styled-components';
import Post from './Post'; // Import the Post component
import Crossbar from './Crossbar'; // Import the Crossbar component
import NetMesh from './NetMesh'; // Import the NetMesh component
import NetCord from './NetCord'; // Import the NetCord component

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

const Goal = ({ goalHeight }) => (
  <GoalContainer>
    <Post style={{ height: goalHeight + 'px' }} /> {/* Pass height prop to Post */}
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
)

export default Goal;