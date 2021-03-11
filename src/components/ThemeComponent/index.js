import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import profileImage from "../../assets/stefano.jpg";

const lightTheme = {
  color: "palevioletred",
  cardBackground: "rgb(78, 88, 97)",
  wrapperBackground: "white",
};

const darkTheme = {
  type: "dark",
  color: "lightBlue",
  cardBackground: "white",
  wrapperBackground: "rgb(78, 88, 97)",
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => (theme.dark ? "white" : "black")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 300px;
  height: 400px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.cardBackground};
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.color};
  font-weight: bold;
  font-size: 14px;
  text-align: left;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.color};
  width: 100%;
  font-size: 12px;
  text-align: left;
`;

const Button = styled.button`
  color: white;
  background-color: ${({ theme }) => theme.color};

  font-size: 1em;
  margin: 4px;
  padding: 0.25em 1em;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin: 20px;
`;

const Card = ({ image, title, description }) => {
  return (
    <Container>
      <ProfileImage alt="profile-image" src={image} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button>Add</Button>
    </Container>
  );
};

function ThemeComponent() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div>
        <Wrapper>
          <Button onClick={themeToggler}>{theme}</Button>
          <Card
            image={profileImage}
            title="Stefano Russo"
            description="
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget
          pretium lectus. Proin sed tortor eu sapien venenatis pretium. Donec sit
          amet pulvinar justo. Suspendisse potenti."
          />
        </Wrapper>
      </div>
    </ThemeProvider>
  );
}

export default ThemeComponent;
