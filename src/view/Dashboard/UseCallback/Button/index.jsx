
import React from "react";

const Button = ({ onClickButton, children, count }) => {
  return (
    <>
      <button onClick={onClickButton}>{children}</button>
      <span>{Math.random()}</span>
      {count && <span>count: {count}</span>}
    </>
  );
};

// 注意，useCallback一定要配合React.memo一起使用，否则就是反向优化
export default React.memo(Button);

// 如果子组件没有使用React.memo，父组件使用了useCallback，每次执行到这里内部都要对比一下handleClickButton2是否发生改变，反而增加了对比成本
// export default Button;
