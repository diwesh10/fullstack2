import React, { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      setSeconds(Math.floor((Date.now() - start) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-sm text-gray-500 mt-2">
      Time Spent on this site: {seconds} seconds
    </div>
  );
};

export default Timer; 