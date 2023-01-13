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
        // debugger
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



  // 如果想要访问最新值，把value 改为引用类型赋值给 message
  // function createIncrement(i) {
  //   let value = {
  //     a: 0
  //   }
  //   function increment() {
  //     value.a += i;
  //     const message = value

  //     return function logValue() {
  //       console.log('value: ', value);  // { a: 3 }
  //       console.log('message: ', message); // { a: 3 }
  //     };
  //   }

  //   return increment;
  // }

  // function createIncrement(i) {
  //   let value = {
  //     a: 0
  //   }
  //   function increment() {
  //     value.a += i;
  //     const message = `Current value is ${value.a}`

  //     return function logValue() {
  //       console.log('value: ', value); // { a: 3 }
  //       console.log('message: ', message);  // Current value is 1
  //     };
  //   }

  //   return increment;
  // }

  // function createIncrement(i) {
  //   let value = {
  //     a: 0
  //   }
  //   function increment() {
  //     value.a += i;
  //     const message = {
  //       a: value.a
  //     }

  //     return function logValue() {
  //       console.log('value: ', value); // { a: 3 }
  //       console.log('message: ', message);  // { a: 1 }
  //     };
  //   }

  //   return increment;
  // }

  // function createIncrement(i) {
  //   let value = {
  //     a: 0
  //   }
  //   function increment() {
  //     value.a += i;
  //     const message = {
  //       a: value
  //     }

  //     return function logValue() {
  //       console.log('value: ', value); // { a: 3 }
  //       console.log('message: ', message);  // { a: { a: 3 } }
  //     };
  //   }

  //   return increment;
  // }

  // const inc = createIncrement(1);
  // const log = inc(); // 1
  // inc();             // 2
  // inc();             // 3

  // log();             // message: { a: 3 }

  return <>
    <div>闭包陷阱</div>

    <HookClosureTrap />
  </>
}

export default Trap