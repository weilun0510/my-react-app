import React, { useState, useCallback, useMemo } from "react";
import Button from "./Button";

export default function UseCallback() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

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

  return (
    <div>
      <h1>未使用useCallback</h1>
      <div>
        <Button onClickButton={handleClickButton1}>Button1</Button>
      </div>
      <div>
        <Button onClickButton={handleClickButton2}>Button2</Button>
        <p>Button2 上的on函数使用了useCallback</p>
      </div>
      <div>
        <Button
          onClickButton={() => {
            setCount3(count3 + 1);
          }}
        >
          Button3
        </Button>
      </div>
      <h1>缓存函数引用保持稳定时状态不更新问题</h1>
      <Button onClickButton={stableClickFn}>
        stable button4
      </Button>
      <div>count 只会更新一次</div>
      <div>count4: {count4}</div>
    </div>
  );
}