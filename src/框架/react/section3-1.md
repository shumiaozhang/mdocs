# 3.1 事件绑定语法

1. 事件的名称都是 React 提供的，因此名称的首字母必须大写，例如：`onClick`、`onMouseOver`、`onMouseEnter`、`onChange` 等。

2. 为事件提供的处理函数，必须是如下格式

   ```javascript
   onClick = { function }
   ```

3. 用的最多的事件绑定形式为：

   ```jsx
   <button onClick={ () => this.show('传参') }>按钮</button>

   // 事件的处理函数，需要定义为 一个箭头函数，然后赋值给 函数名称
   show = (arg) => {
       console.log('show方法' + arg)
   }
   ```

4. 在React中，如果想要修改 state 中的数据，推荐使用 `this.setState({ })`

