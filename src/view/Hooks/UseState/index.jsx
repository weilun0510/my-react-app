import { useEffect, useState } from 'react';

export default function UseState() {
  const [count, setCount] = useState(0)

  const [arr, setArr] = useState([1,2,3])

  const onAdd = () => {
    setCount(count + 1)
    setCount(count + 1)
    console.log('after: ', count);  // 输出 0

    // setTimeout(() => {
    //   setCount(count + 1)
    //   setCount(count + 1)
    //   console.log('after: ', count);  // 输出 0
    // })

    // setCount(prev => {
    //   return prev + 1
    // })
    // setCount(prev => {
    //   return prev + 1
    // })
    // console.log('after: ', count);  // 输出 0
  }

  useEffect(() => {
    console.log('useEffect count: ', count);
  }, [count])


  console.log('rerender: ', count); // 输出一次 1
  // console.log('rerender: ', count); // 输出两次 1 1
  // console.log('rerender: ', count); // 输出一次 2


  const changeArr = () => {
    arr.push(4)
    debugger
    setArr(arr)
  }

  console.log('arr: ', arr);

  return (
    <div>
    count: {count}
    <button onClick={onAdd}>add</button>

    <button onClick={changeArr}>change arr</button>
    <div>{arr.map(i => (
      <div>{i}</div>
    ))}</div>
  </div>
  )
}