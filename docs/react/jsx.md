# JSX
## 1. JSX语法

JSX是JavaScript和XML(html)的缩写，是 JavaScript 语法扩展，可以使用jsx语法在JavaScript 文件中书写类似 HTML 的标签

作用：在React中创建HTML结构

**优势**

*   html的声明式模板写法
*   js的可编程能力

**JSX本质：** JSX并不是标准的JS语法，它是**JS的语法扩展**，浏览器本身不能识别，需要通过**解析工具做解析**之后才能在浏览器中运行。

## 2. JSX中使用JS表达式

在JSX中可以通过大括号语法{}识别js中的表达式，比如常量、函数调用，方法调用等。

```js
- 使用引号传递字符串
- 使用js变量
- 函数调用和方法调用
- 使用JS对象：**一般用在写行内样式**
- `{{` 和 `}}` 并不是什么特殊的语法：只是包在 JSX 大括号内的 JavaScript 对象
```

## &#x20;3. JSX列表渲染

使用数组的map方法，遍历时需要添加一个key，表示唯一值。



#### 1. 注意点

Fragment 语法的简写形式 `<> </>` 不能接受 key 值，但还是想输出多个 DOM 节点，解决方法

- 生成一个`div`
- 写明确的`<Fragment>`

```jsx
import { Fragment } from 'react';

// ...

const listItems = people.map(person =>
  <Fragment key={person.id}>
    <h1>{person.name}</h1>
    <p>{person.bio}</p>
  </Fragment>
);
```

#### 2. key 需要满足的条件 

- **key 值在兄弟节点之间必须是唯一的。** 不过不要求全局唯一，在不同的数组中可以使用相同的 key。
- **key 值不能改变**，否则就失去了使用 key 的意义！所以千万不要在渲染时动态地生成 key。



## &#x20;4. JSX的条件渲染

可以使用三元运算符、逻辑或、逻辑与**`&&`**、if判断

**注意点：**

**切勿将数字放在 `&&` 左侧.**

JavaScript 会自动将左侧的值转换成布尔类型以判断条件成立与否。然而，如果左侧是 `0`，整个表达式将变成左侧的值（`0`），React 此时则会渲染 `0` 而不是不进行渲染。

## &#x20;5. JSX样式处理

行内样式

```jsx
const styleObj = {
    color:red
}
function App() {
  return (
    <div className="App">
      <div style={{ color: 'red' }}>this is a div</div>
      <div style={styleObj}>this is a div</div>
    </div>
  )
}

export default App
```

行内动态

```js
<div className='prickOut' style={{borderColor: formInfo.isExpend === 0 ? '#00a870' : '#834ec2'}}>
  style动态写法
</div>
```

类名 - className

```css
.title {
  font-size: 30px;
  color: blue;
}
```

```js
import './app.css'
const showTitle = true
function App() {
  return (
    <div className="App">
      <div className={ showTitle ? 'title' : ''}>this is a div</div>
    </div>
  )
}
export default App
```

## &#x20;6. JSX的注意事项

#### 1. JSX必须有一个根节点，如果不想额外增加`div`，可以使用`<></>`（空标签）替代

原因：JSX 虽然看起来很像 HTML，但在底层其实被转化为了 JavaScript 对象，不能在一个函数中返回多个对象，但可以用一个数组把他们包装起来。这就是为什么多个 JSX 标签必须要用一个父元素或者 Fragment 来包裹。

#### 2. 所有标签必须形成闭合，成对闭合或者自闭合都可以

#### 3. 使用驼峰式命名法给大部分属性命名

因为JSX最终会被转化为 JavaScript，而 JSX 中的属性也会变成 JavaScript 对象中的键值对。

在组件中，经常会需要用变量的方式读取属性。但 JavaScript 对变量的命名有限制。例如，变量名称不能包含 `-` 符号或者像 `class` 这样的保留字。

#### 4. JSX支持多行（换行），如果需要换行，需使用`()` 包裹，防止bug出现