# 3.2 绑定文本框与 state 中的值

1. 在 Vue 中，默认提供了 `v-model` 指令，可以很方便的实现 `数据的双向绑定`；

2. 但是，在 React 中没有双向数据绑定指令，也就是 只能把 state 上的数据绑定到 页面，无法把 页面中数据的变化，自动同步回 state ；

3. 如果需要把 页面上数据的变化，保存到 state，则需要程序员手动监听文本框的 `onChange` 事件，拿到最新的数据，手动调用 `this.setState({  })` 更改回去；

4. 页面的UI结构：
    ```html
    <input value={this.state.msg} onChange={ e => this.txtChanged(e) }></input>
    ```

5. `onChange` 的事件处理函数：
    ```javascript
    // 文本框内容改变时的处理函数
    txtChanged = e => {
      this.setState({
        msg: e.target.value
      })
    }
    ```