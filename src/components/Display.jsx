import styles from "./Display.module.css";

function Display({ initialValue }) {
  return (
    <>
      <input
        type="text"
        className={styles.display}
        value={initialValue}
        readOnly
      />
    </>
  );
}

export default Display;
