import styles from "./ButtonsContainer.module.css";

function ButtonsContainer({onButtonClick}) {
  const buttonsName = [
    "AC",
    "DEL",
    "+",
    "1",
    "2",
    "-",
    "3",
    "4",
    "*",
    "5",
    "6",
    "/",
    "7",
    "8",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonsName.map((btnName) => (
        <button className={styles.btn} onClick={() => onButtonClick(btnName)}>{btnName}
         
        </button>
      ))}
    </div>
  );
}

export default ButtonsContainer;
