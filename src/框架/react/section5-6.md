# 5.6 点击按钮 count 自增长

1. 为按钮绑定单击事件：
   ```html
   <button onClick={() => this.add()}>+1</button>
   ```
2. 定义事件处理函数：

   ```javascript
   add() {
       // 如果这个被更新的数据，依赖于自己之前的旧值，为了防止数据更新异常，必须使用如下格式进行数据更新：
       this.setState((state, props) => {
           return {
             count: state.count + 1
           }
         })
     }
   ```
