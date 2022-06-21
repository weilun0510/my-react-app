// 2. hooks 与 闭包陷阱
// 参考: https://github.com/hacker0limbo/my-blog/issues/6
const Trap = (props) => {

  return <div onClick={() => props.foo(10)}>add</div>
}

export default Trap