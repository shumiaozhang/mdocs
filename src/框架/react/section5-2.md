# 5.2 导入并渲染 Counter 组件

在 index.js 打包入口文件中导入并渲染 Counter 组件，代码如下：

```jsx
import React from 'react/index'
import ReactDOM from 'react-dom'

// 导入需要的 Counter 组件
import Counter from './components/Counter.jsx'

// 把 Counter 组件渲染到页面指定的区域中
ReactDOM.render(<Counter/>, document.getElementById('app'))
```
