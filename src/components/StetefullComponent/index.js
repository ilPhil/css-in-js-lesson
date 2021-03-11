import { useState } from "react";
import { randomEmoji } from "../../utils";

import ScopedButton from "../ScopedButton";

import "./style.css";

function StatefullComponent({ children }) {
  const [currentEmoji, setCurrentEmoji] = useState(randomEmoji());

  const onClick = () => {
    setCurrentEmoji(randomEmoji());
  };

  return (
    <>
      <div className="stateful-component-emoji">{currentEmoji}</div>
      <ScopedButton onClick={onClick}>{children}</ScopedButton>
    </>
  );
}

export default StatefullComponent;
