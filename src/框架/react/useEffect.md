是函数组件中执行的副作用，副作用就是指每次组件更新都会执行的函数，可以用来取代生命周期。

### 1. 基本用法

```js
import { useEffect } from "react";
useEffect(()=>{
    console.log('副作用');   
});
```

### 2. 副作用分为需要清除的和不需要清除

假如设置一个定时器，当组件卸载时需要将定时器关闭，这就是需要清除的。

需要清除的需要在副作用中返回一个函数即可，返回的函数编写需要的代码逻辑。

```js
import { useEffect } from "react";
useEffect(()=>{
    return () => {
        console.log('执行代码逻辑');
    }
});
```

不需要清除的就是正常的。

### 3. 传入第二个参数

- 不传入，则组件更新时就会执行。

- 传入空数组[]

则代表只运行一次(仅在组件挂载和卸载时执行),当副作用没有返回函数时可以当做生命周期`componentDidMount`使用，返回函数时可以当做生命周期`componentWillUnmount`使用

```js
// 当做 componentDidMount使用
import { useEffect } from "react";
useEffect(()=>{
    console.log('页面渲染完成');
}, []);
```

```js
// 当做 componentWillUnmount使用
import { useEffect } from "react";
useEffect(()=>{
    return () => {
        console.log('组件卸载');
    }
}, []);
```
- 传入数组 [item]

```js
import { useEffect, useState } from "react";
const [ count, setCount ] = useEffect(1);
useEffect(()=>{
    console.log('执行了');
}, [count]);
```
当数组不为空时，组件更新时，会检测`count`的值，若更新后的值与旧值不一样则会调用`effect`，若相同则会跳过执行。

若数组传入多个参数，只要有一项有变更就会执行`effect`。



**{docsify-updated}**