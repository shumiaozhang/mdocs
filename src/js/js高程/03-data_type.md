# 数据类型

ECMAScript中有5中简单数据类型（也称为基本数据类型），分别是`Undefined`、`Null`、`Boolean`、`Number`、`String`，还有一种复杂数据类型`object`，`object`从定义上来看就是一组无序排列的键值对。

## typeof 操作符

ECMAScript是松散类型，需要一个手段来检测数据类型，这里提供`typeof`操作符。对于不同类型的数据返回的结果也是不一样的。

- 如果一个值未定义则返回`undefined`
- 如果是一个字符串则返回`string`
- 如果是一个数字则返回`number`
- 如果是一个布尔类型则返回`boolean`
- 如果是一个对象或者`null`则返回`object`

例如：

```js
typeof(11); // number
typeof 11; // number
```

`typeof`是一个操作符，并非是一个函数，带不带括号都可以，建议带一个括号。



## Undefined类型

`Undefined`类型是只有一个值的类型，那就是`undefined`，对于一个用`var`声明变量但未初始化值将返回`undefined`

```js
var message;
console.log(message); // undefined
```

对于是一个显示声明值为`undefined`是相等的

```js
var message;
var age = undefined;
console.log(message == age); // true
```

虽说是相等的，但是不建议这样声明，因为本身不初始化值也是`undefined`。

需要注意的是一个未声明的变量，将不会返回`undefined`。

```js
var message;
// var age;
console.log(message); // undefined
console.log(age); // 报错
```

但是对于**typeof**来说，未声明的变量也返回`undefined`。

## Null类型

`Null`类型是第二个只有一个类型的值，那就是`null`。`null`从定义上是一个空对象指针，也就是`typeof`检测返回`object`的原因。

如果定义一个变量准备保存对象，则做好初始化成`null`而不是其他的值，这样检查`null`值就知道相应的变量是否已经保存了一个对象的引用。

实际上`undefined`值是派生自`null`值的，因此ECMA-262规定对它们的相等性测试要返回true。

在现实使用中，如果定义的变量将要存储对象，则最好初始化成`null`，而没有要求时则不用初始化默认是`undefined`，这样有利于检测数据类型。

## Boolean类型

是最常用的一种数据类型，有两个值，包括`true`和`false`。

由其他数据类型转为`Boolean`类型规则

```js
Boolean(1); // true
```



| 数据类型  | 转为true   | 转为false |
| --------- | ---------- | --------- |
| Boolean   | true       | false     |
| String    | 非空字符串 | 空字符串  |
| Number    | 非0数字    | 0         |
| Object    | 任何对象   | null      |
| Undefined |            | undefined |



## Number类型

Number类型是JavaScript中最令人关注的数据类型，包括整数和浮点数。为了支持各种数值类型，定义了不同的数值字面量格式。有十进制、八进制、十六进制。

正常情况下都是十进制，比如：

```js
var num = 10; // 十进制 10
```

八进制：则是以`0`开头，后面包括`0-7`,就是以`8`进1，如果开头`0`后面的字面值超出了范围(也就是不是0-7的值)，则会认定为成十进制。

```js
var num = 01; // 八进制的1
var num1 = 011; // 八进制的9
var num2 = 09; // 超出了规定的范围，默认成十进制，变成十进制9
```

十六进制：则是以`0x`开头，后面字面值为`0-9`和`A-F`。

```js
var num = 0xA; // 十六进制的10
var num1 = 0x1A; // 十六进制的26 
```

### 1. 浮点数值

浮点数值就是数值中必须有一个点`.`，并且点后面必须有一位数字。虽然小数点前面可以不为整数，为0但不建议将0省略。

```js
var num = 1.1;
var num1 = 0.1;
var num2 = .1; // 正确，但不建议去掉0
```

由于存储浮点数值占的内存要大于存整数的内存，所以对于小数点后为0的浮点数将直接变成整数。例如：

```js
var num = 1.0; // 会变成1
```

对于极小数或极大数，可以使用科学计数法`e`表示

```js
var num = 100000000; // 可以写成1e8
```

### 2. 数值范围

由于内存的限制，不能保存世界上所有的数值，能够表示的最小值保存在`Number.MIN_VALUE`中，这个值是5e-324,最大值保存在`Number.MAX_VALUE`中，这个值是1.7976931348623157e+308。

如果超出范围则会转为`Infinity`正无穷，`-Infinity`负无穷。

可以使用`isFinite()`函数进行检测，返回布尔值。

```js
var res = Number.MIN_VALUE + Number.MAX_VALUE;
console.log(isFInite(res)); // false
```

### 3. NaN

NaN，即非数值是一个特殊的数值，这个数值用于表示一个本来要返回数值的操作数结果未返回数值的情况。就是说白了本来结果应该是一个数值，结果却变成了其他的（比如一个数字除以一个对象，就不会有任何结果）就会返回NaN。

特点：

- 涉及到任何的操作，只要包含NaN都会返回NaN。
- NaN与任何值都不相等，包括本身。

```js
NaN === NaN // false
```

`isNaN()`函数，传入一个参数，用来检测参数**是否不是数值**，如果不是数值返回`true`,否则返回`false`

```js
isNaN(NaN); // true 于本身都不相同
isNaN(1); // false
isNaN('1'); // false  可以转为数字
isNaN({}); // true 对象不能转为数字
```

### 数值转化

可以使用`Number()`、`parseInt()`和`parseFloat()`进行转换

- Number()

如果是布尔类型，true返回1，false返回0

如果是数字，返回原值

如果是null，返回0

如果是undefined，返回NaN

如果是字符串都是数字，则将其转为十进制返回。比如022，返回22，前面的0将会省略。空字符串则返回0。如果是浮点数，则转为对应的浮点数值。其他的字符串则返回NaN

如果是对象，则调用对象的valueof()方法，然后按照前面的规则进行转换返回值。如果转换的结果是NaN，则调用对象的toString()方法，然后再依照前面的规则转换返回的字符串值。

- parseInt()

如果第一个字符不是数字或者负号，将直接返回NaN，也就是说对于空字符将转换为NaN，而Number()则转为0。

如果第一个字符是数字字符，将会继续解析，直到解析为非数字字符，例如122a1,则返回122。

接收两个参数，第一个参数是要转化的值，第二个参数是基数，几进制。

例如：

```js
parseInt(0x2f, 16); // 告诉parseInt是16进制的值
```



- parseFloat()

只转化十进制数值，也是从第一个字符开始转化，直到遇到非数字为止。

```js
parseFloat('123blue'); // 123
parseFloat('1.2.3'); // 1.2
parseFloat(0x3); // 0
```



## String类型

String类型用于表示由0或者多个16位的Unicode字符组成的字符序列，即字符串。可以由单引号或多引号表示。

```js
var str = 'a';
var str1 = '1q';
```

### 转义字符

- \n  换行
- \\\  斜线
- \b 退格
- \r 回车
- \f 进纸
- \\' 单引号
- \\" 双引号

### 特点

声明之后字符串是不可变的，若要修改则要先销毁旧的再填充新值。

```js
var str = 'java';
str = str + 'script';
```

首先先创建字符串`java`给`str`，之后再将字符串`java`和`script`赋值给`str`，最后销毁字符串`java`



### 转化为字符串

可以使用`toString()`和`String()`方法

数字、布尔值、对象和字符串都有`toString()`方法，但是`null`和`undefined`没有这个方法。

如果使用`toString()`方法并且是数字转化，则可以传入一个参数，表示基数，转化后的基数。

```js
'11'.toString(); // '11'
'10'.toString(16); // 'a'
```

如果在不知道转化的值是不是null或undefined情况下，可以使用String()方法。

如果值是null，则返回null

如果值是undefined，则返回undefined

如果有toString()则返回相应的结果



## Object类型

对象其实就是一组数据和功能的集合。对象可以通过执行new 操作符后跟要创建的对象类型的名称来创建。而创建Object类型的实例并为其添加属性或方法，就能创建自定义对象

```js
var o = new Object();
```

Object的每个实例都具有以下属性和方法

- constructor：保存着用于创建当前对象的函数。构造函数就是Object()
- hasOwnProperty(propertyName)：用于检查给定的属性在当前对象实例中是否存在

```js
o.hasOwnProperty('b'); // 检查属性b是否存在对象o中
```

- isPrototypeof(object)：用于检查传入的对象是否是当前对象的原型
- propertyIsEnumerable(propertyName)：用于检查给定的属性是否能够使用for-in语句
- toLocaleString()：返回对象的字符串表示
- toString()：返回字符串表示
- valueOf()：返回对象的字符串、数值或布尔值表示，通常与toString()方法返回值相同。













**{docsify-updated}**

