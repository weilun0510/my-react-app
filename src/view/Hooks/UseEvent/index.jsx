import React, { useState, useCallback, useRef, useLayoutEffect } from "react";
import { Button } from "../components";

// 模仿useEvent
function useEvent(handler) {
  const handlerRef = useRef(null);

  // In a real implementation, this would run before layout effects
  useLayoutEffect(() => {
    handlerRef.current = handler;
  });

  return useCallback((...args) => {
    // In a real implementation, this would throw if called during render
    const fn = handlerRef.current;
    return fn(...args);
  }, []);
}

export default function UseEvent() {
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);

  // 为了保持函数引用不变，依赖项为空
  const stableClickFn = useCallback(() => {
    // 访问到的总是初始值
    setCount4(count4 + 1);
  }, [])

  // 使用useEvent,保持函数引用不变的同时状态实时更新
  const stableClickFn2 = useEvent(() => {
    setCount5(count5 + 1);
  })

  return (
    <div>
      <h1>useCallback + []</h1>
      <Button onClickButton={stableClickFn}>
        stable button4
      </Button>

      <div>count 只会更新一次</div>
      <div>count4: {count4}</div>

      <h1>useEvent</h1>
      <Button onClickButton={stableClickFn2}>
        stable button4
      </Button>

      <div>count 只会更新一次</div>
      <div>count5: {count5}</div>
    </div>
  );
}