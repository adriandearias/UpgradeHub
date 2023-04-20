import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const date = new Date();
  const [clockState, setClockState] = useState(date.toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div className="digital-clock">
      <h2>Local time {clockState} 🕒</h2>
      <h1>TRAVEL COUNTDOWN</h1>
    </div>
  );
};

export default DigitalClock;