## computed()

介绍一个getter函数，返回一个只读的ref对象，通过ref的`.value`使用返回值。也可以接受一个get和set函数的对象来创建一个可写的ref对象。

一个只读的计算属性

```js
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // 错误

```

一个可手写的计算属性

```js
const count = ref(1)
const plusOne = computed({
  get: () => count.value + 1,
  set: (val) => {
    count.value = val - 10
  }
})

plusOne.value = 1
console.log(count.value) // -8


```

### 提取模板中的表达式

有时候模板中需要写一些表达式，逻辑多了代码不好维护可以写成一个计算属性形式。

例如：

```js
const count = ref(1);
const o = computed(() => count.value > 1 ? '大于1' : '小于1')
```

```html
<!-- 使用了计算属性o -->
<div>{{o}}</div>
```

使用闭包给计算属性传参

```js
const count = ref(1);
const o1 = computed(() => {
        return (val) => count.value > 1 && val > 1 ? '大于1' : '小于1'
    }
)
```

```html
<!-- 使用了计算属性o1 传参-->
<div>{{o1(2)}}</div>
```

### 缓存

具有缓存效果，假如依赖的相同，就不会重复执行函数，会自动返回。相比方法比性能提高。







**{docsify-updated}**

