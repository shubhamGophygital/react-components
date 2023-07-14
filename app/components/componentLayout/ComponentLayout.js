import styles from "./ComponentLayout.module.css";

const ComponentLayout = ({ children, label }) => {
  return (
    <div className={styles.container}>
      <p className={styles.label}>{label}</p>
      {children}
    </div>
  );
};
export default ComponentLayout;
