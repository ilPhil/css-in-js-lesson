import "./style.css";

const NotScopedButton = ({ children, ...props }) => (
  <button className="my-button" {...props}>
    {children}
  </button>
);

export default NotScopedButton;
