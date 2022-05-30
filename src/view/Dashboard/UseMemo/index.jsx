import { useMemo, useState } from 'react';
import UserCard from './UserCard';
import NoUserReactMemoChild from './NoUserReactMemoChild';

export default function UseMemo () {
  const [count, setCount] = useState(0)
  const [age, setAge] = useState(20)


  const addCount = () => {
    setCount(count + 1)
  }

  const addAge = e => {
    setAge(age + 1)
  }

  // 当前组件的重新渲染每次都会创建一个userInfo新对象，导致UserCard重新渲染
  // const userInfo = {
  //   age,
  //   name: 'Jace'
  // }

  // 1.使用useMemo，只有在age发生改变时，子组件UserCard才会重新渲染
  const userInfo = useMemo(() => {
    return {
      age,
      name: 'Jace',
    }
  }, [age])

  // 2. 缓存昂贵的计算逻辑
  // 当前组件的每次渲染都会重新计算myAge
  // const myAge = new Date().getFullYear() - userInfo.birth

  // 使用useMemo，计算逻辑将被缓存，只有依赖项改变时才会重新计算
  const memorizedBirth = useMemo(() => {
    console.log('computed age');
    // 假设这里存在一段复杂的计算
    return new Date().getFullYear() - userInfo.age
  }, [userInfo])

  console.log('memorizedBirth: ', memorizedBirth);

  return (
    <div>
      <button onClick={addCount}>change state</button>
      <span>{count}</span>

      <br />
      <button onClick={addAge}>add age</button>
      <span>{age}</span>

      <UserCard userInfo={userInfo} />

      <div>memorizedBirth: {memorizedBirth}</div>

      {/* 对于未使用React.memo的子组件，可通过这种方式减少子组件的重新渲染 */}
      {useMemo(() => (
        <NoUserReactMemoChild userInfo={userInfo} />
      ), [userInfo])}
    </div>
  )
}