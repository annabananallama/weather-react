import React, { useState, useEffect } from "react";

export default function TimeDisplay() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateCurrentDateTime = () => {
      const now = new Date();
      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const currentDayOfWeek = daysOfWeek[now.getDay()];
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setCurrentDateTime(`${currentDayOfWeek} ${hours}:${minutes}`);
    };

    const timerId = setInterval(updateCurrentDateTime, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <h4>{currentDateTime}</h4>;
}
