# 3.3 ref 的使用

## 使用 ref 获取 DOM 元素的引用

在 Vue 中，如果想要获取元素的引用，则需要使用 `this.$refs.引用名称`

在 React 中也有 ref, 而且用法与 Vue 中的 ref 类似，例如：

1. 为元素添加 `ref` 引用的方式如下：
   ```html
   <h1 ref="myh1">这是一个h1标签</h1>
   ```
2. 如果想获取页面上对应 `ref` 的引用，代码如下：
   ```javascript
   this.refs.myh1
   ```

## 使用 ref 获取组件的引用

ref 除了可以获取 DOM 元素的引用，还可以获取组件的引用，使用步骤如下：

1. 为页面上的组件添加 `ref` 引用：

   ```html
   <MyTest ref="test" />
   ```

2. 使用 `ref` 获取组件的引用：

   ```javascript
   this.refs.test
   ```

## ref 获取组件引用的作用

只要通过 ref 拿到的组件的引用对象，是当前组件的实例对象，那么就可以调用它的实例方法，同时也能访问到它的实例属性。
