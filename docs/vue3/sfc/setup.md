# \<script setup> 

\<script setup> 是在单文件组件(SFC)中使用组合式API的编译时语法糖。当同时使用 SFC 与组合式 API 时该语法是默认推荐。




相比于普通的 \<script> 语法，它具有更多优势

- 更少的样板内容，更简洁的代码。
- 能够使用纯 TypeScript 声明 props 和自定义事件。
- 更好的运行时性能 (其模板会被编译成同一作用域内的渲染函数，避免了渲染上下文代理对象)。
- 更好的 IDE 类型推导性能 (减少了语言服务器从代码中抽取类型的工作)。



## 1. 基本语法

要启用该语法，需要在 `<script>` 代码块上添加 `setup` attribute：



```js
<script setup>
console.log('hello script setup')
</script>
```



#### 顶层的绑定会被暴露给模板

当使用 `<script setup>` 的时候，任何在 `<script setup>` 声明的顶层的绑定 (包括变量，函数声明，以及 import 导入的内容) 都能在模板中直接使用





