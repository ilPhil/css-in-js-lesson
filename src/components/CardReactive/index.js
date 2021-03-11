import { useState } from "react";

import ProfileImage from "../ProfileImage";
import Title from "../Title";
import Description from "../Description";
import ScopedButton from "../ScopedButton";

import "./style.css";

const CardReactive = ({ image, title, description }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{ backgroundColor: isDarkMode && "#4e5861" }}
      className="card-container"
    >
      <ProfileImage image={image} />
      <Title style={{ color: isDarkMode && "white" }}>{title}</Title>
      <Description style={{ color: isDarkMode && "white" }}>
        {description}
      </Description>
      <ScopedButton
        style={{ background: isDarkMode && "#53b9e6" }}
        onClick={() => setDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Dark" : "Light"}
      </ScopedButton>
    </div>
  );
};

export default CardReactive;
