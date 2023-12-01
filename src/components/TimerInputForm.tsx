import { useRef } from 'react';
import classes from './TimerInputForm.module.css';

function TimerInputForm(props: any) {
  const inputElement = useRef<HTMLInputElement>(null);

  const startTimerHandler = () => {
    props.startCountDown(inputElement.current?.value);
  };

  return (
    <div className={classes.inputBar}>
      <input
        type="number" 
        ref={inputElement}
        placeholder="enter minutes"
      ></input>
      <button onClick={startTimerHandler}>Start</button>
    </div>
  );
}

export default TimerInputForm;
