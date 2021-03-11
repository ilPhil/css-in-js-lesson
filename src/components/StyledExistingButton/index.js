import styled from "styled-components";

/* Unstyled boring Button */

export const BoringButton = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

const StyledButton = styled(BoringButton)`
  color: white;
  background-color: palevioletred;
  font-size: 1em;
  margin: 4px;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
  margin: 20px;
`;

/* Awesome button */

const StyledExistingButton = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export default StyledExistingButton;
