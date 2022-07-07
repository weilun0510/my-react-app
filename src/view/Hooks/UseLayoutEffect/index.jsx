import React, { useLayoutEffect, useState, useEffect } from "react";

export default () => {
  const [count, setCount] = useState(0);

  // useLayoutEffect 会在渲染前执行cb，也就是在同步的触发重新渲染
  // useEffect 会在DOM渲染之后执行cb，也就是下一轮事件循环中执行
  useLayoutEffect(() => {
    if (count === 0) {
      const randomNum = 10 + Math.random() * 200;

      const now = performance.now();

      while (performance.now() - now < 100) {
        console.log(1);
      }

      setCount(randomNum);
    }
  }, [count]);

  return <div onClick={() => setCount(0)}>{count}</div>;
};
