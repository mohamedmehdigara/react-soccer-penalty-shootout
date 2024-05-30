import React from 'react';
import styled from 'styled-components';

const Post = styled.div`
  position: absolute;
  width: 15px; /* Adjust thickness */
  height: 180px; /* Adjust height for goal size */
  background-color: #fff;
  top: 0;
  left: 50%;
  transform: translateX(-50%); /* Center the post horizontally */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3); /* Shadow for depth */
`;

export default Post;
