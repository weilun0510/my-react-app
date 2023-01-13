import { useEffect, useState, useRef, useReducer } from "react"

function countReducer(state, { type, payload }) {
  switch (type) {
    case 'add':
      return {
        count: state.count + payload
      }
    default:
      throw new Error()
  }
}

// hooks 中的闭包陷阱
const HookClosureTrap = () => {
  let [count, setCount] = useState(0)
  console.log('count: ', count);

  const countRef = useRef(0)
  const [state, dispatch] = useReducer(countReducer, { count: 0 })

  useEffect(() => {
    // 获取到的count永远是0，这是因为闭包陷阱导致的问题
    // 当依赖项为空数组时，fn(useEffect的第一个参数)只会执行一次，useEffect永远引用着HookClosureTrap第一次执行时创建的作用域。第一次创建是count为0
    setInterval(() => {
      setCount(count + 1)
    }, 1000)
  }, [])

  // 解决办法1：添加依赖项
  // 添加count依赖项，依赖项改变时fn重新执行，因为setCount会触发重新渲染，那么我们就能获取到HookClosureTrap最新的作用域，也就能获取到最新的count
  // useEffect(() => {
  //   // 获取到的count永远是0，这是因为闭包陷阱导致的问题
  //   // 当依赖项为空数组时，fn只会执行一次，useEffect永远引用着HookClosureTrap第一次执行时创建的作用域。第一次创建是count为0
  //   setInterval(() => {
  //     setCount(count + 1)
  //   }, 1000)
  // }, [count])

  // useEffect(() => {
  //   // 获取到的count永远是0，这是因为闭包陷阱导致的问题
  //   // 当依赖项为空数组时，fn只会执行一次，useEffect永远引用着HookClosureTrap第一次执行时创建的作用域。第一次创建是count为0
  //   const timer = setInterval(() => {
  //     setCount(count + 1)
  //   }, 1000)

  //   // 虽然获取到了最新值，但是count显示结果却很混乱
  //   // 这是因为每次执行useEffect时就会创建一个定时器，下次执行时，也会执行上次创建的定时器
  //   // 所以我们需要在useEffect中返回一个回调函数，清除本次创建的定时器
  //   return () => timer && clearInterval(timer)
  // }, [count])

  // 解决办法2：使用setState函数式更新
  // 函数的参数是上一次计算后该状态的值，可以理解为最新值
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     // 这里打印的count，依旧永远是0
  //     console.log('count: ', count);

  //     setCount(prev => prev + 1)
  //   }, 1000)

  //   return () => timer && clearInterval(timer)
  // }, [])

  // 解决办法3：使用useRef
  // useRef 可以保持变量的引用不变
  // 我们修改ref的值后，setState触发更新，重新渲染时，拿到的虽然是HookClosureTrap第一次执行时创建的作用域，ref引用地址不变，但是它的值已经被改变了
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCount(++countRef.current)

  //     // 还有一种不常见的写法
  //     // 对count使用前置自增运算符，也能得到正确的效果
  //     // setCount(++count)
  //   }, 1000)

  //   return () => timer && clearInterval(timer)
  // }, [])


  // 解决办法4: 使用useReducer
  // useReducer 同 useRef 类似，使用引用数据类型解决这个问题
  // useEffect(() => {
  //   setInterval(() => {
  //     dispatch({ type: 'add', payload: 1 })
  //   }, 1000)
  // }, [])

  return (
    <>
      <h1>hooks 中的闭包陷阱</h1>
      <div>count: {count}</div>

      <div>state.count: {state.count}</div>
    </>
  )
}

export default HookClosureTrap