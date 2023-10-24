# declare关键字

## 1. 简介
declare关键字用来告诉编译器，某个类型是存在的，可以在当前文件中使用。

作用：就是让当前文件可以使用其他文件声明的类型。比如，自己的脚本使用外部库定义的函数，编译器会因为不知道外部函数的类型定义而报错，这时就可以在自己的脚本里面使用declare关键字，告诉编译器外部函数的类型，这样编译脚本就不会因为使用了外部类型而报错。

declare关键字可以描述变量、type或者interface命令声明的类型、class、Enum、函数、模块和命名空间。

declare关键字最重要的特点是，它只是通知编译器某个类型是存在的，不用给出具体实现。比如只描述函数的类型，不给出函数的实现，如果不使用declare，是做不到的。

declare只能用来描述已经存在的变量和数据结构，不能用来声明新的变量和数据结构。另外所有declare语句都不会出现在编译后的文件里面。

## 2. declare variable

可以给出外部变量的类型描述。比如当前脚本使用了其他脚本定义的全局变量x，因为当前脚本不知道它的类型，编译器会报错，而此时要是使用declare命令给出它的类型，就不会报错。

```typescript
x = 123; // 报错
declare let x:number;
x = 1;
```

如果declare关键字没有给出变量的具体类型，则变量类型为any。

如果ts没有找到declare关键字给出的变量，则假定它的类型为any。

declare 关键字只用来给出类型描述，是纯的类型代码，不允许设置变量的初始值，不涉及到值，否则会报错。

```typescript
// 报错
declare let x:number = 1;
```

## 3. declare function

declare关键字可以给出外部函数的类型。

```typescript
declare function sayHello(
  name:string
):void;

sayHello('张三');
```

在ts中不能单独的声明函数类型

```typescript
// 报错
function sayHello(
  name:string
):void;
function sayHello(name) {
  return '你好，' + name;
}
```

## 4. declare class

declare可以给出class类型的描述

```typescript
declare class Animal {
  constructor(name:string);
  eat():void;
  sleep():void;
}
```

## 5. declare module、declare namespace

如果想把变量、函数、类组织在一起，可以将declare与module或namespace一起使用。

```typescript
declare namespace AnimalLib {
  class Animal {
    constructor(name:string);
    eat():void;
    sleep():void;
  }

  type Animals = 'Fish' | 'Dog';
}

// 或者
declare module AnimalLib {
  class Animal {
    constructor(name:string);
    eat(): void;
    sleep(): void;
  }

  type Animals = 'Fish' | 'Dog';
}
```

declare module 和 declare namespace 里面，加不加 export 关键字都可以。

```typescript
declare namespace Foo {
  export var a: boolean;
}

declare module 'io' {
  export function readFile(filename:string):string;
}
```

例子：使用外部库(myLib)

```typescript
declare namespace myLib {
  function makeGreeting(s:string): string;
  let numberOfGreetings: number;
}
```

可以为外部模块添加属性和方法时，给出新增部分的类型描述。

这里从模块`moduleA`导入了`Foo`接口，将其重命名为`Bar`，并用 declare 关键字为`Bar`增加一个属性`custom`

```typescript
import { Foo as Bar } from 'moduleA';

declare module 'moduleA' {
  interface Bar extends Foo {
    custom: {
      prop1: string;
    }
  }
}
```

例子：一个项目有多个模块，可以在一个模块中，对另一个模块的接口进行类型扩展。

这里脚本`a.ts`定义了一个接口`A`，脚本`b.ts`为这个接口添加了属性`y`。`declare module './a' {}`表示对`a.ts`里面的模块，进行类型声明，而同名 interface 会自动合并，所以等同于扩展类型。**实质是新增了一个同名的接口，因为是同名会自动合并。**

```typescript
// a.ts
export interface A {
  x: number;
}

// b.ts
import { A } from './a';

declare module './a' {
  interface A {
    y: number;
  }
}

const a:A = { x: 0, y: 0 };
```

使用这种语法进行模块的类型扩展时，有两点需要注意：

（1）`declare module NAME`语法里面的模块名`NAME`，跟 import 和 export 的模块名规则是一样的，且必须跟当前文件加载该模块的语句写法（上例`import { A } from './a'`）保持一致。

（2）不能创建新的顶层类型。也就是说，只能对`a.ts`模块中已经存在的类型进行扩展，不允许增加新的顶层类型，比如新定义一个接口`B`。

（3）不能对默认的`default`接口进行扩展，只能对 export 命令输出的命名接口进行扩充。这是因为在进行类型扩展时，需要依赖输出的接口名。

对于某些第三方模块，原始作者没有提供接口类型，这时可以在自己的脚本顶部加上下面一行命令。加上上面的命令以后，外部模块即使没有类型声明，也可以通过编译。但是，从该模块输入的所有接口都将为`any`类型。

```typescript
declare module "模块名";

// 例子
declare module "hot-new-module";
```

declare module 描述的模块名可以使用通配符。模块名`my-plugin-*`表示适配所有以`my-plugin-`开头的模块名（比如`my-plugin-logger`）。

```typescript
declare module 'my-plugin-*' {
  interface PluginOptions {
    enabled: boolean;
    priority: number;
  }

  function initialize(options: PluginOptions): void;
  export = initialize;
}
```

## 6. declare global

如果要为js的原生对象添加属性和方法，可以使用declare global{}语法。只能扩充现有对象的类型描述，不能增加新的顶层类型。

这里为js原生的`String`对象添加了`toSmallString()`方法并给出这个新增方法的类型描述。

其中第一行的空导出语句`export {}`，作用是强制编译器将这个脚本当作模块处理。这是因为`declare global`必须用在模块里面。

```typescript
export {};
declare global {
  interface String {
    toSmallString(): string;
  }
}
String.prototype.toSmallString = ():string => {
  // 具体实现
  return '';
};
```

## 7. declare enum

可以给出Enum类型描述

```typescript
declare enum E1 {
  A,
  B,
}
declare enum E2 {
  A = 0,
  B = 1,
}
declare const enum E3 {
  A,
  B,
}
declare const enum E4 {
  A = 0,
  B = 1,
}
```

## 8. declare module 用于类型声明文件

可以为每个模块脚本，定义一个`.d.ts`文件，把该脚本用到的类型定义都放在这个文件里面。但是，更方便的做法是为整个项目，定义一个大的`.d.ts`文件，在这个文件里面使用`declare module`定义每个模块脚本的类型。

#### 定义

这里url和path都是单独的模块脚本，它们的类型都定义在node.d.ts这个文件中。

```typescript
// node.d.ts
declare module "url" {
  export interface Url {
    protocol?: string;
    hostname?: string;
    pathname?: string;
  }
  export function parse(
    urlStr: string,
    parseQueryString?,
    slashesDenoteHost?
  ): Url;
}
declare module "path" {
  export function normalize(p: string): string;
  export function join(...paths: any[]): string;
  export var sep: string;
}
```

#### &#x20;使用

使用时，自己的脚本使用三斜杠命令，加载这个类型声明文件。

```typescript
/// <reference path="node.d.ts"/>
```

如果没有上面这一行命令，自己的脚本使用外部模块时，就需要在脚本里面使用 declare 命令单独给出外部模块的类型。
