# vue3中的provide/inject(提供注入)

在说`provide/inject`先说一下**prop逐级穿透问题**。

通常我们从父组件向子组件传递数据时，会用到`props`。对于只需要传递一层或二层时还行，假如需要传递多层嵌套的组件，此时一级一级传递数据就会很繁琐，不利于编码，因此产生了`provide/inject`，从而解决此类问题。

有了`provide/inject`不用一级一级传递，只要是父组件提供了某个数据，隔代组件就能直接获取都数据，从而很方便。

## provide()提供

为后代组件提供数据

```js
import { provide } from 'vue';
export default {
  setup() {
    provide('message', 'hello!');
  }
}

```

接受两个参数，第一个参数称为注入名，也就是key，可以是字符串或者Symbol。第二个参数是值，要传递的数据，任意类型的数据。

## 应用层的provide()

传递的数据，整个实例的组件都能使用。

例如：

```js
import { createApp } from 'vue'

const app = createApp({})

app.provide('message', 'hello!')

```



## Inject()注入

用来接收`provide`传递过来的数据

参数是注入名，也就是key。

```js
<script setup>
import { inject } from 'vue'

const message = inject('message')
</script>

```

如果提供的值是一个 ref，注入进来的会是该 ref 对象，**不会**自动解包为其内部的值，具有响应式。

### 注入默认值

就是key可能并没有任何父组件提供，而却注入此时就会发生错误，这个时候可以设置一个默认值。

```js
// 如果没有祖先组件提供 "message"
// `value` 会是 "这是默认值"
const value = inject('message', '这是默认值')

```



### 和响应式数据配合使用

意思是加入注入组件想操作注入的数据的时候，尽可能的使其操作在父组件内，这样声明和变更操作都在父组件内，更容易维护。

```js
<!-- 在父组件内 -->
<script setup>
import { provide, ref } from 'vue'

const location = ref('North Pole')
// 修改值
function updateLocation() {
  location.value = 'South Pole'
}
provide('location', {
  location,
  updateLocation
})
</script>

```



```js
<!-- 在注入方组件 -->
<script setup>
import { inject } from 'vue'

const { location, updateLocation } = inject('location')
</script>

<template>
      // 点击事件修改
  <button @click="updateLocation">{{ location }}</button>
</template>

```



假如提供的数据不想让子组件去修改，则可以使用`readonly()`,这样后代就不能操作此数据。

```js
<script setup>
import { ref, provide, readonly } from 'vue'

const count = ref(0)
provide('read-only-count', readonly(count))
</script>

```



### 使用Symbol作为注入名

如果一个大型项目，有很多的依赖项，可以使用Symbol作为注入名，可以避免注入名冲突。

例如：

```js
// keys.js
export const myInjectionKey = Symbol()
```



```js
// 在供给方组件中
import { provide } from 'vue'
import { myInjectionKey } from './keys.js'

provide(myInjectionKey, { /*
  要提供的数据
*/ });

```



```js
// 注入方组件
import { inject } from 'vue'
import { myInjectionKey } from './keys.js'

const injected = inject(myInjectionKey)

```







**{docsify-updated}**





