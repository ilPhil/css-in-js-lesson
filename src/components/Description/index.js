import "./style.css";

const Description = ({ children, ...props }) => (
  <div>
    <p className="description" {...props}>
      {children}
    </p>
  </div>
);

export default Description;
