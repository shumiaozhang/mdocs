## 基本使用

`setup`函数在组合式API中使用。

在`setup()`函数中返回的对象会

```vue
<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    // 返回值会暴露给模板和其他的选项式 API 钩子
    return {
      count
    }
  },

  mounted() {
    console.log(this.count) // 0
  }
}
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>

```



## 访问Props

`setup`函数的第一个参数是组件的`props`的，并且`props`是响应式的，会实时更新。



```js
export default {
  props: {
    title: String
  },
  setup(props) {
    console.log(props.title)
  }
}

```

假如解构了`props`对象，则解构出的变量会变成非响应性，不能实时更新，可以使用对象`.`属性的形式使用`props`。



如果确实想解构`props`对象，则可以借助`toRefs()`或`toRef()`函数

```js
import { toRefs, toRef } from 'vue'

export default {
  setup(props) {
    // 将 `props` 转为一个其中全是 ref 的对象，然后解构
    const { title } = toRefs(props)
    // `title` 是一个追踪着 `props.title` 的 ref
    console.log(title.value)

    // 或者，将 `props` 的单个属性转为一个 ref
    const title = toRef(props, 'title')
  }
}

```



## setup上下文

`setup`函数的第二个参数是一个`setup`上下文对象，这个对象可以在`setup`中使用。这个对象是非响应式的，可以直接解构。

```js
export default {
  setup(props, context) {
    // 透传 Attributes（非响应式的对象，等价于 $attrs）
    console.log(context.attrs)

    // 插槽（非响应式的对象，等价于 $slots）
    console.log(context.slots)

    // 触发事件（函数，等价于 $emit）
    console.log(context.emit)

    // 暴露公共属性（函数）
    console.log(context.expose)
  }
}

```

`attrs` 和 `slots` 都是有状态的对象，它们总是会随着组件自身的更新而更新。这意味着你应当避免解构它们，并始终通过 `attrs.x` 或 `slots.x` 的形式使用其中的属性。此外还需注意，和 `props` 不同，`attrs` 和 `slots` 的属性都**不是**响应式的。如果你想要基于 `attrs` 或 `slots` 的改变来执行副作用，那么你应该在 `onBeforeUpdate` 生命周期钩子中编写相关逻辑。



### 暴露公共属性

`expose` 函数用于显式地限制该组件暴露出的属性，当父组件通过模板引用访问该组件的实例时，将仅能访问 `expose` 函数暴露出的内容：

```js
export default {
  setup(props, { expose }) {
    // 让组件实例处于 “关闭状态”
    // 即不向父组件暴露任何东西
    expose()

    const publicCount = ref(0)
    const privateCount = ref(0)
    // 有选择地暴露局部状态
    expose({ count: publicCount })
  }
}
```

## 与渲染函数一起使用

`setup`也可以与渲染函数一起使用，渲染函数可以直接使用同一作用域下声明的响应式状态也就是声明的变量。

返回一个渲染函数会将阻止返回其他东西，如果想暴露给父组件，可以直接使用`expose`函数。



```js
import { h, ref } from 'vue'

export default {
  setup(props, {expose}) {
    const count = ref(0);
    const increment = 1;
    // 这里将increment变量暴露给父组件，值为1；  
    expose({
      increment
    })
    // 这里将返回一个div标签，并且值是0  
    return () => h('div', count.value);
  }
}

```





**{docsify-updated}**