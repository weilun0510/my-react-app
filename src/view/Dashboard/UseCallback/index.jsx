import React, { useState, useCallback, useMemo } from "react";
import Button from "./Button";

export default function UseCallback() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  // 未使用useCallbak的情况下，当前组件的每次渲染，都会生成一个新的函数
  const handleClickButton1 = () => {
    setCount1(count1 + 1);
  };

  // 缓存函数：只有在依赖项发生改变时，才返回新的函数
  // 也就是说，依赖项没发生改变，返回的是缓存函数，那handleClickButton2就没变化，
  // 子组件发现onClickButton属性没发生改变，就不会重新渲染，从而达到优化效果
  const handleClickButton2 = useCallback(() => {
    console.log('button2 useCallback');
    setCount2(count2 + 1);
  }, [count2]);

  return (
    <div>
      <div>
        <Button onClickButton={handleClickButton1}>Button1</Button>
      </div>
      <div>
        <Button onClickButton={handleClickButton2}>Button2</Button>
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
    </div>
  );
}