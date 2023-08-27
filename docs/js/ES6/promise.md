


## Promise.all()

Promise.all方法就是将多个Promise实例包装成一个新的Promise实例。

```js
const p = Promise.all([p1, p2, p3]);
```
**要求：**

参数是一个数组形式，且每一项必须为Promise实例，假如不是实例则会调用Promise.resolve转化成Promise实例。

### 1. 新实例的状态

p的状态由参数的状态决定，分为两种情况。

第一种：所有的参数状态都变成Fulfilled（成功），则新实例变成Fulfilled，所有参数的返回值会组成一个数组，传递给新实例的回调函数。

第二种：如果有一个参数的状态变为Rejected（失败），则实例会变成Rejected，则会把这个结果传递给新实例的回调函数。

### 2. 参数实例是否有catch方法

> **如果作为参数的Promise实例自定义了catch方法，那么它被rejected时并不会触发Promise.all()的catch方法**

这是为什么？？？

因为假如参数实例有catch方法时，执行完catch方法会返回一个新的Promise实例，此时的参数实例就会变为新返回的实例，
会变成resolved状态，会将catch方法执行完返回的值传递给all方法的回调函数。

```js
// 参数p2有catch方法，最终结果为 ["hello", Error: 报错了]
const p1 = new Promise((resolve, reject) => {
        resolve('hello')
    }).then(result => result)
        .catch(e => e);

    const p2 = new Promise((resolve, reject) => {
        throw new Error('报错了');
    }).then(result => result)
        .catch(e => e);

    Promise.all([p1, p2])
        .then(result => console.log(result))  // ["hello", Error: 报错了]
        .catch(e => console.log(e));
```

```js

// 参数p2没有catch方法，会执行all的catch方法，输出Error: 报错了
const p1 = new Promise((resolve, reject) => {
    resolve('hello')
}).then(result => result)
    .catch(e => e);

const p2 = new Promise((resolve, reject) => {
    throw new Error('报错了');
}).then(result => result)

Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch(e => console.log(e)); // Error: 报错了
```




