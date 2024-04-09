# defineExpose

**作用：用于在`<script setup>`显式地定义组件需要暴露给外部的属性和方法**


在 Vue 3 的 `<script setup>` 语法糖中，可以直接声明响应式状态和其他组合式函数，而不需要显式地通过 `export default` 来暴露它们。因为`<script setup>` 会自动处理这些导出，使得在模板中可以直接访问这些响应式状态和函数。

但是有时候需要显式地暴露一些内容给父组件或其他部分（比如其他的 `<script>` 标签），可以使用 defineExpose 函数。defineExpose 是一个特殊的函数，只在 `<script setup>` 上下文中有效，**用于显式地定义组件需要暴露给外部的属性和方法**

可以通过 defineExpose 编译器宏来显式指定在 `<script setup>` 组件中要暴露出去的属性

```js
<script setup>
    import { ref } from 'vue'
    const a = 1
    const b = ref(2)
    defineExpose({
        a,
        b
    })
</script>
```
当父组件通过模板引用的方式获取到当前组件的实例，获取到的实例会像这样 `{ a: number, b: number }`

##  使用场景

- script setup 如果返回一个渲染函数h时，如果需要在模板中使用就必须显式进行暴露
- 暴露属性方法给父组件时



