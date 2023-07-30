# 5.3 指定初始值

1. 在 index.js 组件中使用 `<Counter/>` 组件时，可以指定 `count` 初始值，代码如下：
   ```jsx
   <Counter initcount={9} />
   ```
2. 在 `Counter.jsx` 组件中接收外界指定的初始值，赋值给 state 中的 count，代码如下：

   ```javascript
   constructor(props) {
     super(props)
     this.state = {
       // 把外界指定的 initcount 赋值给 count，供页面使用
       count: props.initcount
     }
   }
   ```

3. 在页面上渲染私有数据的 count 值：

   ```html
   <h3>当前的Count值为：{this.state.count}</h3>
   ```
