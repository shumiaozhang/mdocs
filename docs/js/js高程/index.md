# JavaScript简介



JavaScript是由核心(ECMAScript)、文档对象模型(DOM)和浏览器对象模型(BOM)组成。

### ECMAScript

`ECMAScript`其实是定义了javascript语言的组成部分，比如语法、类型、语句、关键字、保留字、操作符和对象。

而浏览器其实是`ECMAScript`实现的一个宿主环境，它可以为`ECMAScript`提供更多的扩展，方便实现语言和浏览器的交互，像`DOM`其实就是一个扩展。

像`node`也是`ECMAScript`的一个宿主环境。



### 文档对象模型（DOM）

DOM本身是针对XML的，后来经过扩展应用在HTML的应用程序编程接口(API)，DOM就是把整个页面映射为一个多层节点结构。



### 浏览器对象模型（BOM）

就是支持访问和操作浏览器窗口的浏览器对象模型，比如提供浏览器信息的`navigator`对象等。



### 小结

JavaScript是一种专为与网页交互而设计的脚步语言，主要有三部分组成。

- ECMAScript用于提供核心语言功能
- 文档对象模型（DOM），用来提供访问和操作网页内容的方法和接口。
- 浏览器对象模型（BOM），提供与浏览器交互的方法和接口。


**{docsify-updated}**