# 组件作用域 CSS

当 \<style> 标签带有 scoped attribute 的时候，它的 CSS 只会影响当前组件的元素

### 1. 子组件的根元素​

使用 scoped 后，父组件的样式将不会渗透到子组件中。不过，**子组件的根节点会同时被父组件的作用域样式和子组件的作用域样式影响**。

这样设计是为了让父组件可以从布局的角度出发，调整其子组件根元素的样式。

### 2. 深度选择器​

处于 scoped 样式中的选择器如果想要做更“深度”的选择，也即：影响到子组件，可以使用 `:deep()` 这个伪类

```css
<style scoped>
.a :deep(.b) {
  /* ... */
}
</style>
```

上面的代码会被编译成
```css
.a[data-v-f3f3eg9] .b {
  /* ... */
}
```

### 3. 插槽选择器

默认情况下，作用域样式不会影响到 \<slot/> 渲染出来的内容，因为它们被认为是父组件所持有并传递进来的。

使用 `:slotted` 伪类以明确地将插槽内容作为选择器的目标：

```css
<style scoped>
:slotted(div) {
  color: red;
}
</style>
```

### 4. 全局选择器

如果想让**其中一个样式规则应用到全局**，比起另外创建一个 \<style>，可以使用`:global`伪类来实现

```css
<style scoped>
    :global(.red) {
      color: red;
    }
</style>
```

### 5. 混合使用局部与全局样式​

也可以在同一个组件中同时包含作用域样式和非作用域样式：

```css
<style>
/* 全局样式 */
</style>

<style scoped>
/* 局部样式 */
</style>
```

# 2. CSS 中的 v-bind()

单文件组件的 \<style> 标签支持使用 v-bind CSS 函数将 CSS 的值链接到动态的组件状态

```js
<template>
  <div class="text">hello</div>
</template>

<script>
export default {
  data() {
    return {
      color: 'red'
    }
  }
}
</script>

<style>
.text {
  color: v-bind(color);
}
</style>
```
这个语法同样也适用于 \<script setup>，且支持 JavaScript 表达式 (需要用引号包裹起来)

```js
<script setup>
const theme = {
  color: 'red'
}
</script>

<template>
  <p>hello</p>
</template>

<style scoped>
p {
  color: v-bind('theme.color');
}
</style>
```

