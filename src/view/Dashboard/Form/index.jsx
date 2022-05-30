const Form = () => {
  return (
    <div>
      <form>
        <label>
          名字:
          <input type="text" name="name" />
        </label>
        {/* disabled：该表单数据不会被发送 */}
        <label>
          age:
          <input type="text" value="1" disabled name="age" />
        </label>
        <label>
        search:
          <input type="search" name="search" />
        </label>
        <label>
          tel:
          <input type="tel" name="tel" />
        </label>
        <label>
          url:
          <input type="url" name="url" />
        </label>
        <input type="range" name="beans" id="beans" min="0" max="500" step="10" />

        {/* <input type="submit" value="提交" /> */}
        <button type="submit">
          This a <br /><strong>submit button</strong>
        </button>
      </form>
    </div>
  )
}

export default Form