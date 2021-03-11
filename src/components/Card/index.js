import "./style.css";
import ProfileImage from "../ProfileImage";
import Title from "../Title";
import Description from "../Description";
import ScopedButton from "../ScopedButton";

const Card = ({ image, title, description }) => (
  <div className="card-container">
    <ProfileImage image={image} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <ScopedButton>Add</ScopedButton>
  </div>
);

export default Card;
