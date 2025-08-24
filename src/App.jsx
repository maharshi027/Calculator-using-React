import styles from './App.module.css'
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';
import { useState } from 'react';

function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const onButtonClick = (buttonText) => {
     if (buttonText === 'AC') {
      setDisplayValue("");
     }
     else if (buttonText === '=') {
      const result = eval(displayValue)
      setDisplayValue(result)
     } else {
        const newDisplayValue =  displayValue + buttonText;
        setDisplayValue(newDisplayValue);
     }
  }
  
  

  return (
    <>
      <div className={styles.calculator}>
        <Display initialValue = {displayValue}/>
        <ButtonsContainer onButtonClick = {onButtonClick}/>
      </div>
    </>
  );
}

export default App
