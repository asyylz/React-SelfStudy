import { useState, useEffect } from "react";
export default function QuestionTimer({ timeout, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    console.log('setting time out');
    setTimeout(onTimeOut, timeout);
  }, [timeout, onTimeOut]);

  useEffect(() => {
    console.log('setting interval')
    setInterval(() => {
    
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
