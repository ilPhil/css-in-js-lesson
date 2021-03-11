import { useState } from "react";

import "./style.css";
import Title from "../Title";
import Description from "../Description";

const Review = ({ title, description }) => {
  const [count, setCounter] = useState(0);

  return (
    <div className="review-container">
      <Title>{title}</Title>
      <Description>{description}</Description>
      <div>
        <div className="review-buttons">
          <div className="review-button" onClick={() => setCounter(count + 1)}>
            👍
          </div>
          <div className="review-button" onClick={() => setCounter(count - 1)}>
            👎
          </div>
        </div>
        <p className="review-count">{count}</p>
      </div>
    </div>
  );
};

export default Review;
