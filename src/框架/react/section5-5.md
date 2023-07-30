# 5.4 指定默认值

如果外界没有指定 `initcount` 默认值，则 `Counter.jsx` 组件内部，可以使用静态属性 `defaultProps` 定义默认属性值，代码如下：

```javascript
static defaultProps = {
  initcount: 0
}
```
