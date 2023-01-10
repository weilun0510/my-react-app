// 2. hooks 与 闭包陷阱
// 参考: https://github.com/hacker0limbo/my-blog/issues/6
const Trap = (props) => {
  debugger
  function createIncrement(i) {
    let value = 0;
    function increment() {
      value += i;
      console.log(value);
      const message = `Current value is ${value}`;
      return function logValue() {
        console.log('value: ', value);
        console.log(message);
      };
    }

    return increment;
  }

  const inc = createIncrement(1);
  const log = inc(); // 1
  inc();             // 2
  inc();             // 3

  log();             // "Current value is 1"


  return <div>闭包陷阱</div>
}

export default Trap