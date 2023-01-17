import React, { useState, useCallback } from "react";
import { Button } from "../components";

import myUseCallback from './ym';
import { summation } from './memoFn';
// import { memoSummation } from './memoFn';

// summation(10)
// summation(100)
// summation(100)
// summation(100)
// summation(100)

const memoFn = (function(){
  let prevTarget = -1
  let memoSum = 0
  return function memoFn(target) {
    // 传入参数与上次一样，直接返回缓存结果
    if (prevTarget > 0 && prevTarget === target) {
      return memoSum
    }

    // 缓存本次传入的参数
    prevTarget = target
    let sum = 0
    console.log('我出现，表示又重新计算了一次');
    for(let i = 1; i <= target; i++) {
      sum += i;
    }
    // 缓存本次计算结果
    memoSum = sum;
    return sum
  }
})()

const memoSummation = memoFn
memoSummation(10)
memoSummation(50)
memoSummation(100)
memoSummation(50)
memoSummation(100)
memoSummation(100)
memoSummation(100)
memoSummation(100)
memoSummation(100)




export default function UseCallback() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [value, setValue] = useState(100)




  // 未使用useCallback的情况下，handleClickButton1 函数引用每次都会变化
  // 这会破坏子组件 memo 效果
  const handleClickButton1 = () => {
    setCount1(count1 + 1);
  };

  // 缓存函数：只有在依赖项发生改变时，才返回新的函数，否则返回缓存函数
  // 子组件发现onClickButton属性没发生改变，就不会重新渲染，从而达到优化效果

  // 使用useCallback，如果 count2 不变，handleClickButton2 引用不变
  const handleClickButton2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  // 缓存函数引用保持稳定时状态不更新问题
  const stableClickFn = useCallback(() => {
    console.log(count4);
    // 访问到的总是初始值
    setCount4(count4 + 1);
  }, [])

  const memoFn = myUseCallback(() => {
    console.log('count1', count1)
  }, [count1])

  const inputChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <div>
      <h1>记忆函数</h1>

      <h1>useCallback 伪代码</h1>

      <h1>适用场景</h1>

      <h3>当函数（或子组件）非常复杂时</h3>
      <div>
        <b>未使用useCallback</b>
        <Button onClickButton={handleClickButton1}>Button1</Button>
      </div>
      <div>
        <b>Button2 上的函数使用了useCallback</b>
        <Button onClickButton={handleClickButton2}>Button2</Button>
      </div>
      <div>
        <b>触发 re-render</b>
        <Button
          onClickButton={() => {
            setCount3(count3 + 1);
          }}
        >
          Button3
        </Button>
      </div>

      <h3>会多次re-render的组件中，且函数没有任何依赖时</h3>
      <input type="text" onChange={inputChange} />
      <div>value: {value}</div>


      <h1>闭包问题（缓存函数引用保持稳定时状态不更新问题）</h1>
      <Button onClickButton={stableClickFn}>
        stable button4
      </Button>
      <div>count 只会更新一次</div>
      <div>count4: {count4}</div>

    </div>
  );
}