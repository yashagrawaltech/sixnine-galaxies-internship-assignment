'use client';

import { useEffect, useState } from 'react';

const LoadingUI = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count <= 0) return;
    const timer = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);

  return (
    <div className="w-dvw h-dvh flex items-center justify-center text-5xl font-bold">
      {count}
    </div>
  );
};

export default LoadingUI;
