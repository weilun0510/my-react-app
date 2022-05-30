import { useState } from 'react';

const MyClosure = () => {
  const [count, setCount] = useState(1)

  const add = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={add}>add</button>
    </div>
  )
}
export default MyClosure