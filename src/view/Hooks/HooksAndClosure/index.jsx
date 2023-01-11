// hooks与闭包
const HooksAndClosure = () => {

  // 验证：myUseState执行时闭包产生了
  const StateModule = (function SM() {
    let state = null
    return function myUseState(value) {
      state = state || value	// 第一次调用没有初始值，因此使用传入的初始值赋值

      function dispatch(newValue) {
        state = newValue
        // 假设此方法能触发页面渲染
        // render()
      }

      return [state, dispatch]
    }
  })()

  const myUseState = StateModule
  debugger
  const [counter, setCounter] = myUseState(0)


  const addCounter = () => {
    // 调用setCounter时也会产生闭包
    debugger
    setCounter(counter + 1)
  }

  return (
    <>
      <h1>状态是如何被保存的</h1>

      <button onClick={addCounter}>add Counter</button>
    </>
  )
}
export default HooksAndClosure