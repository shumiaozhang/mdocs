useState不能在类组件中使用，在函数组件中使用hook，useState就是其中一种hook。

不能在循环，条件，嵌套函数等中调用useState()

useState方法可以定义一个`state变量`。

### 基本使用

声明一个变量
```js
const [ count, setCount ] = useState();
```
声明一个变量并初始化

```js
const [count, setCount ] = useState(1);
```

更新值
```js
// 将变量count变为2
setCount(2);

// 更新的值依赖旧值
// val为旧值
setCount((val) => val + 1);
```




### useState异步更新

使用useState是异步更新，不能立即获取到新值。

```js
const [count, setCount] = useState(0);
const handle = () => {
    console.log(count); // 0
    setCount(1);
    console.log(count); // 0
}
```
解决方法
- 使用useEffect，获取最新值

```js
const [count, setCount] = useState(0);
const handle = () => {
    console.log(count); // 0
    setCount(1);
    console.log(count); // 0
}

useEffect(() => {
    console.log(count); // 1
}, [count]);
```

- 用一个其他变量保存新值

假如变量赋值后，需要更新后的值进行逻辑修改，可以在赋值的同时生成一个新变量，用这个新变量进行逻辑修改。

```js
const [count, setCount] = useState(0);
const handle = () => {
    console.log(count); // 0
    setCount(1);
    const num = 1;
    console.log(count); // 0
    // 然后使用num进行逻辑修改
}
```

### useState对于引用数据类型更改值为该值的引用(浅拷贝)

```js
const obj = { age: 1 }
const [obj1, setObj1] = useState(obj);
const [obj2, setObj2] = useState(obj);
const objMethod = () => {
    setObj1((val) => val.age = 2);
    // 本来更改变量obj1是值，结果变量obj2也随之改变
    console.log(obj1, 'obj1'); // { age: 2 }
    console.log(obj2, 'obj2'); // { age: 2 }
}
```
解决方法

- 直接赋值一个新对象

```js
const objMethod = () => {
    setObj1(({age: 2});
    // 只更改变量obj1
    console.log(obj1, 'obj1'); // { age: 2 }
    console.log(obj2, 'obj2'); // { age: 1 }
}
```

- 深拷贝

```js
const [obj1, setObj1] = useState(obj);
const [obj2, setObj2] = useState(JSON.parse(JSON.stringify(obj)));
const objMethod = () => {
    setObj1((val) => val.age = 2);
    // 只更改变量obj1
    console.log(obj1, 'obj1'); // { age: 2 }
    console.log(obj2, 'obj2'); // { age: 1 }
}
```

### 保存引用数据类型直接返回变量本身，useEffect检测不到

```js
const objMethod = () => {
    setObj1((val) => {
       -- val.age;
       return {val};
    });
}
// 此时useEffect不会检测到obj1变化
useEffect(() => {
    console.log(obj1, 'useEffect中的obj1');
}, [obj1])
```
解决：返回一个新对象
```js
const objMethod = () => {
    setObj1((val) => {
       -- val.age;
       return {...val};
    });
}
// 此时useEffect会检测到obj1变化
useEffect(() => {
    console.log(obj1, 'useEffect中的obj1');
}, [obj1])
```

### useState不能保存函数

```js
// 函数没有返回值
const fun = () => {
  console.log('这是一个函数');
}
const [saveFun, setSaveFun] = useState(fun);
useEffect(() => {
    console.log(saveFun);
}, [saveFun])
```
打印结果：

![useState不支持保存函数](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4d30057b-f677-41d0-ae58-b333da00d9aa/d4bb2674-c092-437f-ae0a-d6a2b087ec95.png)

发现直接执行了函数，并没有打印出值，值为`undefined`。

假设函数有返回值

```js
const fun = () => {
  console.log('这是一个函数');
  console.log({age: 1});
  return {age: 2}
}
const [saveFun, setSaveFun] = useState(fun);
useEffect(() => {
    console.log(saveFun);
}, [saveFun])
```
![有返回值的函数](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4d30057b-f677-41d0-ae58-b333da00d9aa/ea244462-ab1a-4dc6-b056-7f57cecc4d5e.png)

发现也是执行了函数，并且函数返回`{age: 2}`，所以可以看出当`useState`保存函数时，函数会自己调用，并且返回函数的结果，而不是函数本身。



**{docsify-updated}**
