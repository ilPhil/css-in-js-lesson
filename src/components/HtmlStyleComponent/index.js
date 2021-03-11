import { useState } from "react";
import ScopedButton from "../ScopedButton";

function HtmlStyleComponent({ children }) {
  const [isCoral, setCoral] = useState(false);

  return (
    <>
      <div className="html-style-component" />
      <ScopedButton onClick={() => setCoral(!isCoral)}>{children}</ScopedButton>
      <style>{`
        .html-style-component {
          width: 60px;
          height: 60px;
          background: ${isCoral ? "coral" : "springgreen"};
          margin: 20px;
        }
      `}</style>
    </>
  );
}

export default HtmlStyleComponent;
