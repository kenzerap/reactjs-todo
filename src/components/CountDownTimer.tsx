import React, { Fragment, useEffect, useState } from 'react';
import classes from './CountDownTimer.module.css';

const CountDownTimer: React.FC<{ timeCount: number }> = (props) => {
  const [timeCount, setTimeCount] = useState<number>(0);
  const [countDownInterval, setCountDownInterval] = useState<NodeJS.Timer>();
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    const timer = new Date();
    timer.setMinutes(props.timeCount, 0, 0);
    setTimeCount(timer.getTime());
  }, [props.timeCount]);

  const getTimer = () => {
    const minutes = new Date(timeCount).getMinutes();
    const seconds = new Date(timeCount).getSeconds();

    return (
      <h1>
        {minutes < 10 ? `0${minutes}` : minutes} :{' '}
        {seconds < 10 ? `0${seconds}` : seconds}
      </h1>
    );
  };

  const startCountDown = () => {
    const countDownInterval = setInterval(() => {
      setTimeCount((oldTimeCount) => {
        const newTimeCount = new Date(oldTimeCount);
        newTimeCount.setSeconds(newTimeCount.getSeconds() - 1);
        return newTimeCount.getTime();
      });
    }, 1000);

    setIsStart(true);
    setCountDownInterval(countDownInterval);
  };

  const pauseCountDown = () => {
    setIsStart(false);
    clearInterval(countDownInterval);
  };

  const resetCountDown = () => {
    const timer = new Date();
    timer.setMinutes(props.timeCount, 0, 0);
    setTimeCount(timer.getTime());
  };

  return (
    <Fragment>
      {getTimer()}

      <div className={classes['button-Bar']}>
        <button disabled={isStart} onClick={startCountDown}>Start</button>
        <button disabled={!isStart} onClick={pauseCountDown}>Pause</button>
        <button onClick={resetCountDown}>Reset</button>
      </div>
    </Fragment>
  );
};

export default CountDownTimer;
