import React, { useState, useEffect } from "react";

const getOrdinalSuffix = (n: number): string => {
  const s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

const DateTime: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setCurrentDateTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const formattedDate = `${currentDateTime.toLocaleString("default", {
    month: "long",
  })} ${getOrdinalSuffix(
    currentDateTime.getDate()
  )}, ${currentDateTime.getFullYear()}`;
  const formattedTime = currentDateTime.toLocaleTimeString("en-US", {
    hour12: true,
  });

  return (
    <div className="text-sm font-mono">
      {formattedDate} - {formattedTime}
    </div>
  );
};

export default DateTime;
