import React, { useState, useEffect, useRef } from 'react'


export const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
  };

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive]);

  useEffect(() => {
    document.title = `Seconds: ${seconds}`;
  }, [seconds]);

  return (
    <div>
      <h1>Seconds: {seconds}</h1>
      <br />
      <br />
      <button className='buttom' onClick={startTimer}>Start</button>
      <button className='buttom' onClick={pauseTimer}>Pause</button>
      <button className='buttom' onClick={resetTimer}>Reset</button>
    </div>
  );
};
