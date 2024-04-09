# 语法定义

一个 Vue 单文件组件 (SFC)，通常使用 *.vue 作为文件扩展名，它是一种使用了类似 HTML 语法的自定义文件格式，用于定义 Vue 组件。一个 Vue 单文件组件在语法上是兼容 HTML 的。

每一个 *.vue 文件都由三种顶层语言块构成：`<template>`、`<script>` 和 `<style>`


## \<template>

- 每个 `*.vue` 文件最多可以包含一个顶层 `<template>` 块。

- 语块包裹的内容将会被提取、传递给 `@vue/compiler-dom`，预编译为 JavaScript 渲染函数，并附在导出的组件上作为其 `render` 选项。


## \<script>​

- 每个 `*.vue` 文件最多可以包含一个 \<script> 块。(使用 \<script setup> 的情况除外)

- 这个脚本代码块将作为 ES 模块执行。

- 默认导出应该是 Vue 的组件选项对象，可以是一个 **对象字面量或是defineComponent 函数的返回值**。

## \<script setup>​

- 每个`*.vue`文件最多可以包含一个 \<script setup>。(不包括一般的 \<script>)

- 这个脚本块将被预处理为组件的setup()函数，这意味着它将为每一个组件实例都执行。

- \<script setup> 中的顶层绑定都将自动暴露给模板。

## \<style>​

每个`*.vue`文件可以包含多个 \<style> 标签。

一个 \<style> 标签可以使用scoped

## 预处理器​

代码块可以使用lang这个 attribute 来声明预处理器语言，最常见的用例就是在 \<script> 中使用 TypeScript