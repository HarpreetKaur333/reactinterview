import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [time, setTime] = useState(300); // Initial time in seconds (5 minutes)

  useEffect(() => {
    // Only start the timer if time > 0
    if (time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      // Cleanup interval on unmount or when time reaches 0
      return () => clearInterval(timer);
    }
  }, [time]);

  // Format time into mm:ss
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Countdown Timer</h1>
      <h2>{formatTime(time)}</h2>
      {time === 0 && <p>Time's up!</p>}
    </div>
  );
}

export default CountdownTimer;
