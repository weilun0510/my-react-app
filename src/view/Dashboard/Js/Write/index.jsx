import { Input } from 'antd';

export default function Write() {

  // 防抖
  const debounce = (fn, delay) => {
    let timer = undefined

    return function() {
      if (timer) {
        clearTimeout(timer)
      }

      const context = this
      const args = arguments
      timer = setTimeout(function() {
        fn.apply(context, args)
      }, delay)
    }
  }

  // 节流
  const throttle = (fn, delay) => {
    let timer = undefined

    return function() {
      if (!timer) {
        const context = this
        const args = arguments
        timer = setTimeout(function() {
          timer = null
          fn.apply(context, args)
        }, delay)
      }
    }
  }

  const onInputChange = (e) => {
    const val = e.target.value
    console.log('val: ', val);
  }

  return (
    <div>
      <Input onChange={debounce(onInputChange, 1000)} />
      <Input onChange={throttle(onInputChange, 1000)} />
    </div>
  )
}