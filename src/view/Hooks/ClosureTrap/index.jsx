// 闭包陷阱
// 参考: https://github.com/hacker0limbo/my-blog/issues/6
import HookClosureTrap from './HookClosureTrap';
const Trap = (props) => {
  // debugger
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



  // 如果想要访问最新值，把message变量从基础数据类型改为引用类型
  // function createIncrement(i) {
  //   let value = {
  //     a: 0
  //   };
  //   function increment() {
  //     value.a += i;
  //     const message = value;

  //     return function logValue() {
  //       console.log('value: ', value);
  //       console.log('message: ', message);
  //     };
  //   }

  //   return increment;
  // }

  // const inc = createIncrement(1);
  // const log = inc(); // 1
  // inc();             // 2
  // inc();             // 3

  // log();             // "Current value is 1"

  return <>
    <div>闭包陷阱</div>

    <HookClosureTrap />
  </>
}

export default Trap