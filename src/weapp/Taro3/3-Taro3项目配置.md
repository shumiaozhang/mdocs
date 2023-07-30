# Taro3项目、全局、页面配置

### 1. 项目配置

每个小程序都有自己的一个配置文件，微信小程序的配置文件是`project.config.json` ，项目初始化的时候只会生产一个微信小程序的配置文件，若要开发其他小程序，需要新增对于的配置文件。



各个小程序项目配置文件名称：https://taro-docs.jd.com/taro/docs/project-config



### 2. 页面配置

页面配置指的是针对小程序每个页面进行配置，在`.config.js`文件中进行配置。

主要是对页面的窗口样式，页面名称进行配置，这里进行的配置会直接覆盖全局`app.config.json`的配置。

文件会导出`export`一个默认对象。

1. 在v3.4增加了`definePageConfig函数`

这个函数可以提示类型以及自动补全，也可以直接在页面JS中使用，直接代替了`.config.js`文件

例如：

在`.config.js`

```js
// index.config.js
export default definePageConfig({
  navigationBarTitleText: '首页'
})
```

在页面的JS中使用,` 但不能使用变量，比如'首页'`

```js
// index.js
definePageConfig({
  navigationBarTitleText: '首页'
})

export default function Index () {}
```

2. 对于不同直接的小程序，可以使用`process.env.TARO_ENV`判断，但不支持使用多个文件进行判断。



### 3. 全局配置

在根目录的`app.config.js`中进行配置

也和页面配置一样在v3.4新增`defineAppConfig`,使用方法和`definePageConfig`一样。

常见的一些配置

#### 1. pages

配置每个页面的路径，每个页面的路径都要配置在pages内，是一个数组字符串形式。数组的第一项代表首页。

例如：

```js
// app.config.js
export default {
  pages: [
    'pages/index/index',
    'pages/logs/logs'
  ]
}
```

#### 2. window

主要配置窗口样式，标题，背景色，如何在某个页面中也配置了相同的属性，会覆盖这里的配置。

#### 3. tabBar

设置底部导航栏tab

#### 4. subPackages

分包，介绍如何分包

### 4. 设计尺寸

在taro中使用`px`，`%`，编译时会自动转换，设计是多少就写多少即可，当装化为小程序会转为对于的`rpx`，h5则转为`rem`。如果不想在转化则直接将字母大写即可，比如写成`PX`。

### 5. 使用html标签

在taro中只能使用小程序中的标签，比如`div`等标签是不能使用的，可以通过插件实现。

- 下载`yarn add @tarojs/plugin-html`

```js
yarn add @tarojs/plugin-html
```

- 在项目中配置插件

```js
// config/index.js
config = {
  // ...
  plugins: ['@tarojs/plugin-html']
}
```

注意的是`span`标签会被转为块级元素

### 6. 插件功能

