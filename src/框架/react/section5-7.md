# 5.7 偶数更新，奇数不更新

借助于生命周期函数 `shouldComponentUpdate` 可以实现页面的按需渲染：

```javascript
// 判断组件页面是否需要重新渲染
shouldComponentUpdate(nextProps, nextState) {
  // 注意1：这里不能直接使用 this.state.count 进行判断，因为它是旧值，
  //        需要通过形参中的 nextProps.count 访问到最新的 count 值
  // 注意2：shouldComponentUpdate 函数中必须返回布尔值：
  //        返回 true 表示页面需要被重新渲染；
  //        返回 false 表示页面不需要被重新渲染
  if (nextState.count % 2 === 0) {
    return true
  }
  return false
}
```
