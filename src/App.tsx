import { useState } from 'react';
import './App.css';
import TimerInputForm from './components/TimerInputForm';
import CountDownTimer from './components/CountDownTimer';

function App() {
  const [isStart, setIsStart] = useState(false);
  const [timeCount, setTimeCount] = useState(0);
  const setTimeCountHandler = (time: number) => {
    setIsStart(true);
    setTimeCount(time);
  };

  return (
    <div className="App">
      {!isStart ? (
        <TimerInputForm startCountDown={setTimeCountHandler}></TimerInputForm>
      ) : (
        <CountDownTimer timeCount={timeCount}></CountDownTimer>
      )}
    </div>
  );
}

export default App;
