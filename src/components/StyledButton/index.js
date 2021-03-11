import styled from "styled-components";

const StyledButton = styled.button`
  color: palevioletred;
  background-color: white;
  font-size: 1em;
  margin: 4px;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
  margin: 20px;

  /* &:hover {
    background-color: palevioletred;
    color: white;
  } */

  & + & {
    color: lightblue;
    border: 2px solid lightblue;
  }

  /* &:visited {
    ..:hover.
  } */

  /* &:checked {
    ....
  } */

  /* Pseudo elements */

  /* &:after {
    ..:hover.
  } */

  /* &:before {
    ....
  } */
`;

export default StyledButton;
