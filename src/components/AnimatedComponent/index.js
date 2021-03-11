import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const AnimatedComponent = styled.div`
  display: inline-block;
  font-size: 50px;
  animation: ${rotate} 2s linear infinite;
`;

export default AnimatedComponent;
