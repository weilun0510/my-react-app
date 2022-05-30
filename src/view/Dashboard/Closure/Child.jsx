const Child = (props) => {
  return <div onClick={() => props.foo(10)}>add</div>
}

export default Child