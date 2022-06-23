import React, { useState, useEffect } from 'react';


function Counter({ value, onChange }) {
  const [count, setCount] = useState(0);

  // 将props与受控组件内部state，转化为唯一数据源。防止控制状态变化冲突（冲突问题：开发笔记/React/static getDerivedStateFromProps）
  useEffect(() => {
    value && setCount(value);
  }, [value]);

  return [
    <div key="a">{count}</div>,
    <button key="b" onClick={() => onChange(count + 1)}>
      点击+1
    </button>
  ]
}

export default function UseEffect() {
  const [count, setCount] = useState(3);

  const onChange = newCount => {
    console.log('newCount: ', newCount);
    setCount(newCount)
  }
  return (
    <Counter value={count} onChange={onChange} />
  )
}