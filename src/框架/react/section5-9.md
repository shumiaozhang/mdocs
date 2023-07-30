# 5.9 把 count 值的变化同步到 initcount

如果 `Counter.jsx` 组件中的 `count` 值发生了变化，想把最新的 `count` 值同步到 `TestCount` 组件中，需要涉及到子组件向父组件传值：

## 父向子传递函数的引用

在父组件中定义方法，并把方法的引用传递给子组件：

```jsx
modifyC = val => {
  this.setState({
    c: val
  })
}

render() {
  return (
    <div>
      <button onClick={() => this.addC()}>点击c+1</button>
      <hr />
      <Counter initcount={this.state.c} updatefunc={this.modifyC} />
    </div>
  )
}
```

## 子组件中调用父组件传递过来的函数

```javascript
add() {
  this.setState(
    (state, props) => {
      return {
        count: state.count + 1
      }
    },
    // 回调函数
    function() {
      this.props.updatefunc(this.state.count)
    }
  )
}
```
