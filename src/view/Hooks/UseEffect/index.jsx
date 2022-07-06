import React, { useState, useEffect, useLayoutEffect } from 'react';


function Counter({ value, onChange }) {
  const [count, setCount] = useState(0);

  // 将props与受控组件内部state，转化为唯一数据源。防止控制状态变化冲突（冲突问题：开发笔记/React/static getDerivedStateFromProps）
  useEffect(() => {
    value && setCount(value);
  }, [value]);

  // useLayoutEffect 和 useEffect 都可以获取到DOM元素
  useLayoutEffect(() => {
    const el = document.getElementById('count')
    console.log('el: ', el);
  }, [])

  useEffect(() => {
    const el = document.getElementById('count')
    console.log('el: ', el);
  }, [])

  return [
    <div key="a" id="count">{count}</div>,
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


// 思考题：思考console.log的打印顺序
// export default function AnimateDemo() {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setCounter(counter + 1);
//     }, 3000);
//     console.log('effect:', timer);

//     return () => {
//       console.log('clear:', timer);
//       clearTimeout(timer);
//     }
//   });

//   console.log('before render');

//   return (
//     <div className="container">
//       <div className="el">{counter}</div>
//     </div>
//   )
// }