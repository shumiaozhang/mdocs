>  在ES6之前JavaScript是没有真正性的模块化，导入与导出的，之前有common.Js，AMD，在ES6中引入了模块化概念,一个文件即是一个模块。

## 1. export 导出

模块功能主要有两个命令构成： `export`和 `import`。 `export`规定模块的对外接口，也就是导出， `import`规定用来输入其他模块功能，也就是导入。

一个模块就是一个文件，该文件内的所有变量对于外部都是不可见的，如果想在另一个文件内使用本文件中的变量，就要用到 `export`将文件中的变量导出。

```js
// name.js
export let firstName = 'Join';
export let lastName = 'In';
```

用 `export`导出了两个变量

以上是一种方式，还有另一种方式：

```js
let firstName = 'Join';
let lastName = 'In';
export { 
  firstName, lastName
}
```

先将要对外输出的变量声明好，然后直接用export大括号一块直接导出。除了可以导出变量外，也可以导出函数

```js
export function fun(){  
    return 1
}
```

再者可以将导出的名称重命名，使用 `as`关键字

```js
export { 
  firstName as newName
}
```

这种情况就是导出时，本来的变量或者函数名称为`firstName`,输出时改变名称为`newName`。当然也可以将导出的名称换好几个名称一块导出

```js
export { 
  firstName as lastName
}
export { 
  firstName as API 
}
```

这里就是将名称为 `firstName`的变量或者函数命为两个名称一块导出的。

特别要注意的是 `export`命令对外提供的接口一定要与模块内部的变量要建立一一对应关系 但是对于以下情况是不能导出成功的

```js
let firstName = 'Join';
export firstName;
```

因为这里的导出，导出的是变量 `firstName`，而`firstName`是值，不是接口。

#### 注意：

使用export导出的模块，当导入时的名称要和导出时的名称一致。

## 2. import 导入

使用 `export`命令定义了模块导出的接口后，可以在其他文件中使用 `import`命令加载这个模块。

```js
// main.js
import { firstName } from './name.js'
```

> 使用一个大括号的形式，里面指定从其他模块导入的变量名即可。导入的路径即可以是相当路径，也能是绝对路径，后缀名 `.js`也可以省略。

##### 重命名，as关键字

```js
import { firstName as API } from './name'
```

这里就是本将该导入的名称是 `firstName`使用 `API`进行代替。

##### import具有提升效果，就是会提升到文件的头部在执行

> 假如将导入放入底下，在上面使用也不会报错

```js
console.log(firstName);
import { firstName } from './name'
```

这种情况不会报错，代码执行时，会先执行导入，再输出 `firstName`

## 3 整体加载

再者除了可以指定加载某个输出值，也可以使用整体加载(即星号*)用来指定一个对象，将导出的内容全部加载在这个对象上

```js
import { * as All } from './name.js'
```

假如导入的里面有 `firstName` `lastName`, 使用时直接 `API.firstName`即可。





## 4. export default

上面介绍到 `export` 进行导出，导入的时候使用 `import` ，但需要知道从另一个模块导出时的变量名或者是函数名，但是有时候我们并不想要去导入文件中查看，这时候就会用到了 `export default` 导出，实际上 `export default`是默认导出，既然是默认导出也就是说一个模块使用 `export default` 方法进行导出只能使用一次，当然 `export` 、`exportdefault`两种导出方法是可以共存的。

比如：

```js
// export-default.js
export default function() { 
    console.log('这是export-default.js文件导入的内容');
}
```

这里使用的是默认导出，导出了一个为匿名函数，当导入时可以对这个匿名函数另起名字

```js
// main.js  
import fun from './export-default.js'
```

导出多个时

```js
 export default {  
     constVal,   
     constVal1,   
     constVal2 
 }
```

##### 这里有三点需要注意

- 此时导入时 `import`后不需要使用大括号
- 也不需要知道要导入的文件中的变量名或函数名，可以另起一个名称，导出的内容会是一个对象形式。
- 假如要按需求只导入某一个或某几个也可以用大括号的形式进行导入。

##### export default 与 export 区别

1.export default 属于默认导出，其实是 `export` 下有一个叫 `default` 的属性进行导出，只不过是这个 `default`属性名是开发人员可以更改的，所以在导出时跟 `export`是有所区分的。

`export` 导出

```
// a.js
export var constVal = 1;
```

`exprot default` 导出

```
// b.js
export default var constVal = 1;
```

使用 `export`导出是正确的，但是使用 `export default`就是错误的。原因是在export default 已经在export 下有这个default变量名了，而在 `export`导出时，这里的`constVal`其实就是代替`default`的，只是名称不同而已。

ES6中模块的 `module`导出的实质为 `export.default`

在`a.js`模块中其实可看作为：`export.constVal`,  这里用`constVal`代替了`default`，因为它是可修改的。

在`b.js`模块中直接导出的是：`export.default`,  这里没有对`default`进行名称更改，如果像`b.js`模块这个导出，就会变成`export.default.constVal`, 所以会出错，不符合导出的规则。

2.两种导出模式的比较

```js
// a.js
const val = 1;
export {
  val as default
}
// 等同于export default val
```



```js
// b.js
import { default as val} from './a.js'
// 等同于import val from './a.js'
```

如果想同时导入默认和其他接口也可以存在的,使用逗号 `,`区分

```js
import MoRen, { val } from 'a.js'
```

## 5. export 和import 同时存在

有时想在一个模块中导入某个接口，然后导出同样的接口名称属于同一个模块时，可以合并操作

```js
import { val, bar } from 'a.js';
export { val, bar };
```

等同于

```js
export { val, bar } from 'a.js';
```

## 6. 跨模块常量

这种情况存在于如果一个模块使用多个模块，当挺多的时候，可以创建一个 `index.js`模块，把所有的模块导入到`index.js`模块中，使用时直接导入`index.js`模块即可。

```js
// index.js
import { foo } from './a.js';
import { bar} from './b.js';
```

假如在`c.js`模块中要用到 `foo`和 `bar`即可只引入`index.js`模块就可以了。

## 7. import()

使用 `import` 导入时为静态分析，JavaScript执行时会把 `import`导入的模块直接执行出来，会提到模块的最顶端，假如需要条件进行加载不同的模块，此时就不行，不会动态去加载。而import()恰恰解决这种加载模式，可以实现动态加载。

import() 这里的括号() 填写要加载的模块路径，例如：`import('./a.js'); ``import()` 会返回一个 `Promise`对象

```js
  import('./a.js').then(result => { 
      console.log(result);  
  }).catch( error => {   
          console.log(error) 
      })
```

这里的 `.then`方法的参数(result)就是导入模块的一个对象集合，如果只想使用某一个或某几个也可以使用对象的解构赋值的语法，获取输出接口。

**{docsify-updated}**