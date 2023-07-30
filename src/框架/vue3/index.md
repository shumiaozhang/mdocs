
### 1. createApp()

创建一个应用实例。

类型：

```ts
function createApp(rootComponent: Component, rootProps?: object): App
```

第一个参数是根组件。第二个参数可选，它是要传递给根组件的 props

例如：

```js
import { createApp } from 'vue'

const app = createApp({
  setup() {},
  data(){}  
})

```

声明变量`app`为一个应用实例

### 2. createSSRApp()

以SSR创建一个应用实例，和`createApp()`用法一样。

### 3. app.mount(msg)

将一个应用实例挂载到某个元素上。

参数：一个CSS选择器或者一个DOM

在一个实例上只能调用一个`mount`，返回实例本身。

例如：

```js
import { createApp } from 'vue'
const app = createApp(/* ... */)

app.mount('#app');
```



### 4. app.unmount()

卸载一个已经挂载的应用实例，会触发这个实例内所有组件的卸载生命周期函数

### 5. app.provide(key, value) 注入

用来提供一个值,可以让应用所有的后代组件都可以使用。

参数：

`key`注入一个key

`value`注入的值

例如：

```js
// 提供组件
import { createApp } from 'vue'
const app = createApp(/* ... */)
app.provide('message', 'hello')

```

```js
// 注入(接受)组件
import { inject } from 'vue'
const message = inject('message'); // hello
```

### 6. app.component()

定义一个全局组件，或返回一个组件。

假如传入两个参数，第一个参数是字符串，第二个是组件定义，则是注册一个全局组件。

假如只传入一个组件名称，则会返回对应的组件。

例如:

```js
import { createApp } from 'vue'

const app = createApp({})

// 注册一个选项对象
app.component('my-component', {
  /* ... */
})

// 得到一个已注册的组件
const MyComponent = app.component('my-component')

```

### 7. app.directive()

如果同时传递一个名字和一个指令定义，则会注册一个全局指令；如果只传递一个名字，会返回用该名字注册的指令 (如果存在的话)。

例如：
```js
import { createApp } from 'vue'

const app = createApp({
  /* ... */
})

// 注册（对象形式的指令）
app.directive('my-directive', {
  /* 自定义指令钩子 */
})

// 注册（函数形式的指令）
app.directive('my-directive', () => {
  /* ... */
})

// 得到一个已注册的指令
const myDirective = app.directive('my-directive');

```

### 8. app.use()

安装一个插件

第一个参数应是插件本身，第二个参数可选是要传递给插件的选项。

插件可以是一个带 `install()` 方法的对象，亦或直接是一个将被用作 `install()` 方法的函数。插件选项 (`app.use()` 的第二个参数) 将会传递给插件的 `install()` 方法。

若 `app.use()` 对同一个插件多次调用，该插件只会被安装一次。

```js
import { createApp } from 'vue'
import MyPlugin from './plugins/MyPlugin'

const app = createApp({
  /* ... */
})

app.use(MyPlugin)
```
比如像常见的`vuex`，`vue-router`都是插件。

### 9. app.version

版本号，查询该应用的版本号。可以在插件中使用，比较这个插件满足那个版本才能使用。

例如：
```js
export default {
  install(app) {
    const version = Number(app.version.split('.')[0])
    if (version < 3) {
      console.warn('This plugin requires Vue 3')
    }
  }
}
```




**{docsify-updated}**

