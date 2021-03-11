import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 400px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${(props) => (props.dark ? "rgb(78, 88, 97)" : "white")};
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const Title = styled.p`
  color: ${({ dark }) => (dark ? "white" : "black")};
  font-weight: bold;
  font-size: 14px;
  text-align: left;
`;

const Description = styled.p`
  color: ${({ dark }) => (dark ? "white" : "black")};
  width: 100%;
  font-size: 12px;
  text-align: left;
`;

const Button = styled.button`
  color: ${({ dark }) => (dark ? "white" : "palevioletred")};
  background-color: ${({ dark }) => (dark ? "lightBlue" : "white")};

  font-size: 1em;
  margin: 4px;
  padding: 0.25em 1em;
  border: 2px solid ${({ dark }) => (dark ? "lightBlue" : "palevioletred")};
  border-radius: 3px;
  cursor: pointer;
  margin: 20px;
`;

const StyledCard = ({ image, title, description }) => {
  const [isDark, setDark] = useState(false);

  return (
    <Container dark={isDark}>
      <ProfileImage alt="profile-image" src={image} />
      <Title dark={isDark}>{title}</Title>
      <Description dark={isDark}>{description}</Description>
      <Button dark={isDark} onClick={() => setDark(!isDark)}>
        Add
      </Button>
    </Container>
  );
};

export default StyledCard;
