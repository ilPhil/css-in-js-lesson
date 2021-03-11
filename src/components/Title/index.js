import "./style.css";

const Title = ({ children, ...props }) => (
  <p className="title" {...props}>
    {children}
  </p>
);

export default Title;
