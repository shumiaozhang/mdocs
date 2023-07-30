# 5.1 创建 Counter 计数器组件

在 `components` 目录下，新建 `Counter.jsx` 组件，代码如下：

```jsx
import React from 'react/index'

export default class Counter extends React.Component {
  // 构造函数
  constructor(props) {
    super(props)
    // 定义页面的私有数据
    this.state = {
      // 计数器 count 值
      count: 0
    }
  }

  // render 函数渲染页面UI结构
  render() {
    return (
      <div>
        { /* 点击按钮 count 自增 +1 */}
        <button>+1</button>
        { /* 显示当前最新的 count 值 */}
        <h3>当前的Count值为：{this.state.count}</h3>
      </div>
    )
  }
}
```
