import React, { useState, useCallback, useEvent } from "react";

export default function UseEvent() {
  let [count, setCount] = useState(0)

  const clickCount = useCallback(() => {
    setCount(++count)
  })

  return (
    <div>
      count: {count}
      <button onClick={clickCount}>add</button>
    </div>
  );
}