async是为了解决异步操作，其实是一个语法糖，使代码书写更加简洁。

## 1. async介绍

async放在一个函数的前面，await则放在异步操作前面。async代表这个函数中有异步操作需要等待结果，在一个async函数中可以存在多个await，也就是多个异步操作，但是需要注意的是await是一个一个发生的，执行完一个异步操作才会执行下一个异步操作，不是并发执行的。


async结果返回一个Promise对象，async结果状态变化可以由三种情况改变

第一种：函数体内有return，return的结果可以通过then方法获取。

第二种：如果await中的异步操作状态变为reject，则会将错误外抛，改变async的状态变为reject。

第三种：当所有await都执行完，并且状态为resolved，则状态会变为resolved，也就是只有所有异步操作执行完，才会执行then方法获取。

## 2. async可以使用在哪里？

- 函数声明中

```js
async function fun() {}
```

- 函数表达式

```js
const fun = async function() {}
```

- 对象的方法

```js
let obj = { async foo() {} };
obj.foo().then()
```
- Class的方法

```js
class Person{
    async age(num) {
        const a = await foo();
    }
}
const p1 = new Person();
p1.age(10).then();
```

- 箭头函数

```js

const foo = async () => {};
```



## 3. 使用

```js
const f1 = async () => {
    await ab();
}
f1.then((resolve) => {
    console.log(resolve);
})
```

## 4. 错误处理

await后面一个Promise对象，如果不是则会立即转成Promise对象。

假如有问题的时候会向外抛出错误，会导致async状态变为reject。

假如我们不需要往外抛错误，可以使用try...catch或者在异步操作中添加catch方法，让错误及时处理掉，不往外抛。


```js

async Function f1 () {
    await Promise.reject('出错了');
    await Promise.resolve('hello word'); // 不会执行了
}

```
由于抛出错误了，会整个async函数都会中断执行。

```js

// 改成 第一种解决方法

async Function f1 () {
    try {
        await Promise.reject('出错了');
    }catch (err){
    }
    return await Promise.resolve('hello word');
}

f1.then(res => console.log(res)); // hello word

// 第二种解决方法

async Function f1 () {
    await Promise.reject('出错了').catch((err) => {
        console.log(err);
    })
    return await Promise.resolve('hello world');
}
f1.then(res => console.log(res)); // 出错了  hello word
```

## 5. 并发执行代码

正常情况下当async函数内部都多个await时，会执行完一个异步操作才会执行下一个异步操作，是继发执行，而不是并发执行，这样会很慢。

如果await后面的异步操作没有关联的话，则可以完全同时触发。

- 第一种使用Promise.all()方法

```js

let [foo, bar] = await Promise.all([getFoo(), getBar()]);

```

- 第二种执行方法后await

```js
let fooPromise = getFoo();
let barPromise = getBar();
let foo = await fooPromise();
let bar = await barPromise();
```

这样会同时触发异步操作，缩短执行时间。

- 第三种 for循环、不能map循环

```js
async function dbFuc (db) {
    let docs = [{}, {}, {}];
    let promises = docs.map(docs => db.post(doc));
    let results = [];
    for (let promise of promisees) {
        results.push(await promise);
    }
    console.log(results);
}
```

