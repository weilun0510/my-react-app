import { useState } from 'react';

// hooks与闭包
// 1. 状态是如何被保存的
const HooksAndClosure = () => {
  const [count, setCount] = useState(0)

  const add = () => {
    debugger
    setCount(prev => prev + 1)
  }

  // 验证：调用setCounter时闭包产生了
  // TODO debugger
  const StateModule = (function SM() {
    let state = null
    return function useState(value) {
      state = state || value	// 第一次调用没有初始值，因此使用传入的初始值赋值

      function dispatch(newValue) {
        state = newValue
        // 假设此方法能触发页面渲染
        // render()
      }

      return [state, dispatch]
    }
  })()
  const useState2 = StateModule
  const [counter, setCounter] = useState2(0)
  setCounter(1)

  return (
    <div>
      <div>{count}</div>
      <button onClick={add}>add</button>
    </div>
  )
}
export default HooksAndClosure