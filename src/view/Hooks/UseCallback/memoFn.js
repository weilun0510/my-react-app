export function summation(target) {
  let sum = 0;
  for(let i = 1; i <= target; i++) {
    sum += i;
  }
  console.log('sum: ', sum);
  return sum;
}



// 初始化一个非正常数字
let prevTarget = -1
let memoSum = 0

export function memoSummation(target) {
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

