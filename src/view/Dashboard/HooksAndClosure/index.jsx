import { useState, useEffect } from 'react';

// hooks与闭包
// 1. 状态是如何被保存的
const HooksAndClosure = () => {
  const [count, setCount] = useState(0)

  const add = () => {
    setCount(prev => prev + 1)
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={add}>add</button>
    </div>
  )
}
export default HooksAndClosure