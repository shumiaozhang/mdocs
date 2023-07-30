
在vue中除了一些内置的指令，比如`v-model`等之外，也可以自己注册自定义指令。

在vue中重用代码的方式有**组件**和**组合式函数**。组件一般是用于构建模式，也就是界面，而组合式函数注重于状态的逻辑。

而自定义指令是为了重用涉及到普通元素的底层DOM访问的逻辑。





一个自定义指令是由一个类似组件生命周期函数的对象来定义的，钩子函数会接收到指令绑定的元素作为参数。



例子：一个输入框，一进页面就能自动获取焦点。

```js
<script setup>
// 在模板中启用 v-focus
const vFocus = {
  mounted: (el) => el.focus()
}
</script>

<template>
    // 使用
  <input v-focus />
</template>

```

这里的参数`el`是DOM元素，在`script setup`模式下会认为以小写字母`v`开头的驼峰命名法是一个自定义指令。

在一个没有`script setup`的情况下，使用`directive`进行注册

```js
export default {
  setup() {
    /*...*/
  },
  directives: {
    // 在模板中启用 v-focus
    focus: {
      mounted(el) {
		el.focus();
      }
    }
  }
}
```



也可以将一个自定义指令进行全局注册

```js
const app = createApp({})

// 使 v-focus 在所有组件中都可用
app.directive('focus', {
  /* ... */
})
```



### 指令钩子

一个指令的定义对象可以有多个钩子函数 (都是可选的)：

```js
const myDirective = {
  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  created(el, binding, vnode, prevVnode) {
    // 下面会介绍各个参数的细节
  },
  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载前调用
  beforeUnmount(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载后调用
  unmounted(el, binding, vnode, prevVnode) {}
}
```

##### 钩子参数

指令的钩子会传递以下几种参数：

- `el`：指令绑定到的元素。这可以用于直接操作 DOM。
- `binding`：一个对象，包含以下属性。
  - `value`：传递给指令的值。例如在 `v-my-directive="1 + 1"` 中，值是 `2`。
  - `oldValue`：之前的值，仅在 `beforeUpdate` 和 `updated` 中可用。无论值是否更改，它都可用。
  - `arg`：传递给指令的参数 (如果有的话)。例如在 `v-my-directive:foo` 中，参数是 `"foo"`。
  - `modifiers`：一个包含修饰符的对象 (如果有的话)。例如在 `v-my-directive.foo.bar` 中，修饰符对象是 `{ foo: true, bar: true }`。
  - `instance`：使用该指令的组件实例。
  - `dir`：指令的定义对象。
- `vnode`：代表绑定元素的底层 VNode。
- `prevNode`：之前的渲染中代表指令所绑定元素的 VNode。仅在 `beforeUpdate` 和 `updated` 钩子中可用。



### 简化形式

虽然钩子函数很多，但是可能有时候我们仅需要`mounted`和`updated`，其他的钩子不需要，这时候可以简写。

例如：

```js
app.directive('color', (el, binding) => {
  // 这会在 `mounted` 和 `updated` 时都调用
  el.style.color = binding.value
})

```



### 对象字面量

如果指令需要多个值，可以直接传递一个JavaScript字面量。

```html
<div v-demo="{ color: 'white', text: 'hello!' }"></div>
```



```js
app.directive('demo', (el, binding) => {
  console.log(binding.value.color) // => "white"
  console.log(binding.value.text) // => "hello!"
})

```



### 组件上使用

在组件上使用时，指令会应用到组件的根节点元素，假如若有多个元素，并不是一个总元素包含所有的元素，则指令将不能使用并有提示。




**{docsify-updated}**




