"use client";
import React from "react";

export default function Clock() {
  const [currentTime, setCurrentTime] = React.useState("");

  React.useEffect(() => {
    const timer = setInterval(() => {
      const d = new Date();
      const hoursGMT3 = (d.getUTCHours() - 3 + 24) % 24; // Adjust for GMT-3
      const minutes = d.getUTCMinutes(); // Minutes are the same in GMT-3
      const formattedTime = `${hoursGMT3.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}`;

      setCurrentTime(formattedTime);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <>{currentTime}</>;
}
