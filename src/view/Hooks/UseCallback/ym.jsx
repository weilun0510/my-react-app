/**
 * useCallback 简易实现（不考虑多个useCallbacks的情况）
 */
let memoizedState = [];
let hookIndex = 0;
function useCallbacks(callback, nextDeps) {
  // debugger
  const prevState = memoizedState[hookIndex]

  if (prevState) {
    // 更新
    let [prevCallback, prevDeps] = prevState;

    // 对比依赖项
    let same = nextDeps.every((item, index) => item === prevDeps[index]);

    // 依赖项相同
    if (same) {
      console.log('返回旧函数');
      return prevCallback;
    }
  }

  // 首次挂载时 或者 更新时但依赖项不同，都返回新函数
  memoizedState[hookIndex] = [callback, nextDeps];
  console.log('返回新函数');
  return callback;
}

export default useCallbacks