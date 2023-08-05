# 6个实用的JavaScript技巧

#### 1. 过滤某些错误值

如何想过滤数组中的0、false、undefined、''、null等值，可以使用`filter`方法

```js
const array = [1, 0, undefined, 6, 7, '', false];
const result = array.filter(Boolean);
console.log('result', result);
```

解释：

filter方法，返回一个新数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。

```js
array.filter(function(currentValue,index,arr), thisValue)
```

返回数组，包含了符合条件的所有元素。如果没有符合条件的元素则返回空数组。

简单说filter就是一个数组过滤器，参数接收一个函数，数组的每一项经过函数过滤，返回一个符合过滤条件的新数组

函数接收三个参数：

item （当前遍历的数组项）

i （当前项索引）

arr （调用filter函数的数组本身）

例如：

```js
const arr = [{id: 1}, {id: 2}, {id: 1}];
const arr1 = arr.filter((item) => item.id > 1);
console.log('arr1', arr1);
```

1

#### 2. 判断简化

如果有这样的判断：

```js
if(a === undefined || a === 1 || a=== 15 || a === null) { //… }
```

可以使用数组来简化这个判断逻辑：

```js
if([undefined, 10, 15, null].includes(a)) { //… }
```

这样，代码会更简单，更容易扩展。如果还有判断需要等于a，也可以直接加到数组中。

解释：

includes用于判断一个数组是否包含一个值，存在则返回`true`，否则返回`false`。

```js
array.includes(ele, index)
```

参数1：指定的值

参数2：从那个下标开始，默认为0，若为负值，则从array.length+index开始

例如：

```js
const array = [1, 2, 3, 4];
const a = array.includes(1);
const b = array.includes(1);
const b = array.includes(5);
console.log('a', a);
console.log('b', b);
```

1

#### 3. 清空数组

直接将数组长度赋值为0

```js
const array = ['a', 'b', 'c', 'd'];
array.length = 0;
console.log('array', array);
```

#### 4. 将一个数组转为数字

```js
const array = ['2', '9', '2.5', '-1.01'];
const a = array.map(Number);
console.log(a);   // [2, 9, 2.5, -1.01]
```

#### 5. 检查对象是否为空

我们需要检查对象是否为空，我们可以使用如下：

```js
Object.keys({}).length // 0
Object.keys({key: 1}).length // 1
```

`Object.keys() `方法用于获取对象的键并返回包含这些键值的数组。如果返回的数组长度为 0，则对象必须为空。

例子：

```js
const arr = {a: 1, b: 2, c: 3};
const b = Object.keys(arr);
console.log(b); // ['a', 'b', 'c']
```

#### 6. 将类数组转换为数组

可以使用以下方法将类似数组的参数转换为数组：

```js
Array.prototype.slice.call(arguments);
```

除此之外，还可以使用展开运算符来实现：`[…arguments]`



