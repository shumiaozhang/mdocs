# css 模块化

react 中可以开启 css 模块化功能，从而防止组件的样式在全局生效，解决组件间样式冲突问题。

## 开启 css 模块化：

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

## 导入并使用模块化样式

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

## `:local()` 和 `:global()`

+ 被模块化的样式表中，如果某个类被 `:local()` 包裹起来，则会被模块化；
+ 如果类被 `:global()` 包裹起来，则不会被模块化，这个类默认全局生效；
+ **注意：** 只有 **类选择器** 和 **Id选择器** 会被模块化控制，其它选择器无法被模块化控制！
