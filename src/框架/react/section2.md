# 为组件设置样式

## 1. 使用行内 style 样式

语法格式：

```html
<div style={{ color: 'red', fontSize: 12 }}>使用 style 行内样式</div>
```

## 2. 使用外联样式表

### 配置对应的 loader 规则

1. 使用 `.css` 样式：
   - 运行 `npm i style-loader css-loader -D` 命令安装 loader；
   - 在 `webpack.config.js` 的 `module -> rules` 数组中，添加 loader 规则如下：
     ```javascript
     { test: /\.css$/, use: ['style-loader', 'css-loader'] }
     ```
2. 使用 `.less` 样式：
   - 运行 `npm i style-loader css-loader less-loader less -D` 命令安装 loader；
   - 在 `webpack.config.js` 的 `module -> rules` 数组中，添加 loader 规则如下：
     ```javascript
     { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }
     ```
3. 使用 `.scss` 样式：
   - 运行 `npm i style-loader css-loader sass-loader node-sass -D` 命令安装 loader；
   - 在 `webpack.config.js` 的 `module -> rules` 数组中，添加 loader 规则如下：
     ```javascript
     { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
     ```

### 加载外联样式

1. 在需要的组件内，使用 `import '外联样式表相对路径'` 语法导入外联的样式表；
2. 使用 `className` 属性为对应的组件添加样式类：

   ```html
   <div className="font12 colorRed">使用外联样式表</div>
   ```

### 注意：

- 默认情况下，react 组件中使用 import 导入的样式表会在全局生效，并不存在模块作用域！
- 同时，react 中并没有类似于 vue 的 `scoped` 指令；

## 3. css 模块化

react 中可以开启 css 模块化功能，从而防止组件的样式在全局生效，解决组件间样式冲突问题。

### 开启 css 模块化：

`.css`、`.less`、`.scss` 后缀名的样式表，都可以单独开启模块化功能，只需在对应的样式 loader 规则中找到 `css-loader`，并添加 `modules` 参数，即可开启 css 模块化：

1. `.css` 模块化：
   ```javascript
   { test: /\.css$/, use: ['style-loader', 'css-loader?modules'] }
   ```
2. `.less` 模块化：
   ```javascript
   { test: /\.less$/, use: ['style-loader', 'css-loader?modules', 'less-loader'] }
   ```
3. `.scss` 模块化：
   ```javascript
   { test: /\.scss$/, use: ['style-loader', 'css-loader?modules', 'sass-loader'] }
   ```

### 导入并使用模块化样式

1. 导入被模块化的样式表：

   ```javascript
   import cssObj from '样式表的相对路径'
   ```

2. 使用模块化的样式：

   ```jsx
   { /* 使用单个样式 */ }
   <div className={ cssObj.类名 }>使用模块化的样式表</div>
   { /* 使用多个样式 */ }
   <div className={ [cssobj.类名1, cssobj.类名1].join(' ') }>使用模块化的样式表</div>
   ```

### `:local()` 和 `:global()`

+ 被模块化的样式表中，如果某个类被 `:local()` 包裹起来，则会被模块化；
+ 如果类被 `:global()` 包裹起来，则不会被模块化，这个类默认全局生效；
+ **注意：** 只有 **类选择器** 和 **Id选择器** 会被模块化控制，其它选择器无法被模块化控制！

## 4. styled-components

1. 安装依赖项：
    ```
    npm install styled-components -S
    ```
2. 在需要的组件内，导入依赖包：
    ```
    import styled from 'styled-components'
    ```
3. 创建带样式的自定义组件：
    ```javascript
    const MyButton = styled.button`
      background: transparent;
      border-radius: 3px;
      border: 2px solid palevioletred;
      color: palevioletred;
      margin: 0 1em;
      padding: 0.25em 1em;
    `
    ```
4. 在页面上使用组件：
    ```html
    <MyButton>按钮</MyButton>
    ```