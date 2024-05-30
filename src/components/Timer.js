import React from 'react';
import styled from 'styled-components';

const Timer = styled.div`
  position: absolute;
  top: 50px; /* Adjust position */
  left: 50%;
  transform: translateX(-50%); /* Center horizontally */
  font-size: 3rem; /* Adjust font size for readability */
  color: #f00; /* Red for timer urgency */
  animation: countdown 5s linear alternate infinite; /* Countdown animation */

  @keyframes countdown {
    from { opacity: 1; }
    to { opacity: 0.2; }
  }
`;

export default Timer;
