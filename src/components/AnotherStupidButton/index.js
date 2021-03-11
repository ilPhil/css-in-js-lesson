const AnotherStupidButton = ({ children, onClick, ...props }) => (
  <button className="my-button" onClick={onClick} {...props}>
    {children}
  </button>
);

export default AnotherStupidButton;
