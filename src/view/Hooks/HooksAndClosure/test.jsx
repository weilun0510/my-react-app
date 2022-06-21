const StateModule = (function() {
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

const [counter, setCounter] = useState(0)

setCounter(1)