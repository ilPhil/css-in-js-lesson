import styled from "styled-components";

const BaseButton = styled.button`
  background-color: white;
  font-size: 1em;
  margin: 4px;
  padding: 0.25em 1em;
  border-radius: 3px;
  cursor: pointer;
  margin: 20px;
`;

export const VioletButton = styled(BaseButton)`
  color: palevioletred;
  border: 2px solid palevioletred;
`;

export const BluButton = styled(BaseButton)`
  background-color: lightblue;
  border: none;
  color: white;
`;
