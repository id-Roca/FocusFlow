import { useState, useEffect } from "react";
import PlayPauseBtn from "./PlayPauseBtn.config";

export default function CountDown() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [isRunning]);

  function start() {
    setIsRunning(true);
  }

  function pause() {
    setIsRunning(false);
  }

  function reset() {
    setIsRunning(false);
    setSeconds(0);
  }

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const remainingSeconds = String(seconds % 60).padStart(2, "0");

  return (
      <div className="flex items-center gap-3">
      <span className="font-mono text-l font-bold tabular-nums">
        {minutes}:{remainingSeconds}
      </span>

      <PlayPauseBtn onClick={start}>▶</PlayPauseBtn>
      <PlayPauseBtn onClick={pause}>⏸</PlayPauseBtn>
      <PlayPauseBtn onClick={reset}>↺</PlayPauseBtn>
    </div>
  );
}