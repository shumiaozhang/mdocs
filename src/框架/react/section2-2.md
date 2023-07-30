# 使用外联样式表

## 配置对应的 loader 规则

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

## 加载外联样式

1. 在需要的组件内，使用 `import '外联样式表相对路径'` 语法导入外联的样式表；
2. 使用 `className` 属性为对应的组件添加样式类：

   ```html
   <div className="font12 colorRed">使用外联样式表</div>
   ```

## 注意：

- 默认情况下，react 组件中使用 import 导入的样式表会在全局生效，并不存在模块作用域！
- 同时，react 中并没有类似于 vue 的 `scoped` 指令；
