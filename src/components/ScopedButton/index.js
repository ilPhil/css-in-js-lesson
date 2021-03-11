import styles from "./ScopedButton.module.css";

console.log(styles);

const ScopedButton = ({ children, ...props }) => (
  <button className={styles.myButton} {...props}>
    {children}
  </button>
);

export default ScopedButton;
