# namesapce

它是在ES模块诞生前，ts自己发明的模块功能，目前已经不推荐使用了，namespace意为**命名空间，就是模块化的意思。**
## &#x20;1. 基本用法
namespace用来建立一个容器，内部的所有变量和函数只能在容器内部才能使用。

```typescript
namespace Utils {
  function isString(value:any) {
    return typeof value === 'string';
  }

  // 正确
  isString('yes');
}

Utils.isString('no'); // 报错
```

如果想让命名空间以外的使用内部成员，可以再该成员前面加上export，用来对外输出该成员，外部就能访问。

```typescript
namespace Utility {
  export function log(msg:string) {
    console.log(msg);
  }
  export function error(msg:string) {
    console.error(msg);
  }
}

Utility.log('Call me');
Utility.error('maybe!');
```

编译出来的 JavaScript 代码如下。

```typescript
var Utility;

(function (Utility) {
  function log(msg) {
    console.log(msg);
  }
  Utility.log = log;
  function error(msg) {
    console.error(msg);
  }
  Utility.error = error;
})(Utility || (Utility = {}));
```

命名空间`Utility`变成了 JavaScript 的一个对象，凡是`export`的内部成员，都成了该对象的属性。

**这就是说，namespace 会变成一个值，保留在编译后的代码中。这一点要小心，它不是纯的类型代码。**

namespace 内部还可以使用`import`命令输入外部成员，相当于为外部成员起别名。当外部成员的名字比较长时，别名能够简化代码

```typescript
namespace Utils {
  export function isString(value:any) {
    return typeof value === 'string';
  }
}

namespace App {
  import isString = Utils.isString;

  isString('yes');
  // 等同于
  Utils.isString('yes');
}
```

import命令也可以在namespace外部为成员指定别名。

```typescript
namespace Shapes {
  export namespace Polygons {
    export class Triangle {}
    export class Square {}
  }
}

import polygons = Shapes.Polygons;

// 等同于 new Shapes.Polygons.Square()
let sq = new polygons.Square();
```

namespace 可以嵌套。如果要在外部使用`Messaging`，必须在它前面加上`export`命令。使用嵌套的命名空间，必须从最外层开始引用，比如`Utils.Messaging.log()`。

```typescript
namespace Utils {
  export namespace Messaging {
    export function log(msg:string) {
      console.log(msg);
    }
  }
}

Utils.Messaging.log('hello') // "hello"
```

namespace 不仅可以包含实义代码，还可以包括类型代码。

```typescript
namespace N {
  export interface MyInterface{}
  export class MyClass{}
}
```

namespace 与模块的作用是一致的，都是把相关代码组织在一起，对外输出接口。区别是一个文件只能有一个模块，但可以有多个 namespace。由于模块可以取代 namespace，而且是 JavaScript 的标准语法，还不需要编译转换，所以建议总是使用模块，替代 namespace。

如果 namespace 代码放在一个单独的文件里，那么引入这个文件需要使用三斜杠的语法。

```typescript
/// <reference path = "SomeFileName.ts" />
```

## &#x20;2. namespace的输出

namespace本身也可以使用export命令输出，从而让其他文件使用。

```typescript
// shapes.ts
export namespace Shapes {
  export class Triangle {
    // ...
  }
  export class Square {
    // ...
  }
}
```

其他脚本文件使用`import`命令，加载这个命名空间。

```typescript
// 写法一
import { Shapes } from './shapes';
let t = new Shapes.Triangle();

// 写法二
import * as shapes from "./shapes";
let t = new shapes.Shapes.Triangle();
```

## &#x20;3. namespace的合并

多个同名的namespace会自动合并，跟interface一样。

这样做：比较容易扩展别人的代码，因为可能分别在不同的文件中。

```typescript
namespace Animals {
  export class Cat {}
}
namespace Animals {
  export interface Legged {
    numberOfLegs: number;
  }
  export class Dog {}
}

// 等同于
namespace Animals {
  export interface Legged {
    numberOfLegs: number;
  }
  export class Cat {}
  export class Dog {}
}
```

合并命名空间时，命名空间中的非export的成员不会合并，它们只能在各自的命名空间中使用。

```typescript
namespace N {
  const a = 0;

  export function foo() {
    console.log(a);  // 正确
  }
}

namespace N {
  export function bar() {
    foo(); // 正确
    console.log(a);  // 报错
  }
}
```

命名空间还可以跟同名函数合并，但是同名函数必须在命名空间之前声明，这个因为为了确保先创建出一个函数对象，然后同名的命名空间就相当于给这个函数对象添加额外的属性。

```typescript
function f() {
  return f.version;
}

namespace f {
  export const version = '1.0';
}

f()   // '1.0'
f.version // '1.0'
```

命名空间也能与同名 class 合并，同样要求class 必须在命名空间之前声明，原因同上。

```typescript
class C {
  foo = 1;
}

namespace C {
  export const bar = 2;
}

C.bar // 2
```

命名空间还能与同名 Enum 合并，但是导出时不能导出同名的成员。

```typescript
enum E {
  A,
  B,
  C,
}

namespace E {
  export function foo() {
    console.log(E.C);
  }
}

E.foo() // 2
```

```ts
 enum E {
      A, // 报错
      B,
    }

namespace E {
    export function A() {} // 报错
}
```    

