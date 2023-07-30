# 5.8 监听 initcount 值的变化

## 在 `TestCounter` 组件内使用 `Counter` 组件

修改 `index.js` 组件，代码修改如下：

```jsx
import React from 'react/index'
import ReactDOM from 'react-dom'

// 导入自定义的 Counter 组件
import Counter from './components/Counter.jsx'

// 自定义 TestCounter 组件
class TestCounter extends React.Component {
  // TestCounter 组件的私有数据
  state = {
    c: -1
  }

  // 渲染 TestCounter 的 UI 结构
  render() {
    return (
      <div>
        <button onClick={() => this.addC()}>点击c+1</button>
        <hr/>
        <Counter initcount={this.state.c}/>
      </div>
    )
  }

  // 点击按钮，让 TestCounter 组件的 c 属性自增 +1
  addC = () => {
    this.setState((props, state) => {
      return {
        c: props.c + 1
      }
    })
  }
}

ReactDOM.render(<TestCounter/>, document.getElementById('app'))
```

## 监听 `initcount` 变化并更新 `Count` 值
```javascript
// 只要 props 或 state 数据发送了变化，则触发这个静态函数
// 注意：这个函数中可以 return 一个对象，表示最新的 state 值，或 return 一个 null 表示 state 数据不需要更新
static getDerivedStateFromProps(nextProps, prevState) {
  if (nextProps.initcount > prevState.count) {
    return {
      count: nextProps.initcount
    }
  }
  return null
}
```
