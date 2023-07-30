## Taro3搭建

Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信 、京东 、百度 、支付宝 、字节跳动 、QQ 、飞书 小程序 、 H5 、RN 等应用。

现在如今端的形态多种多样，Web、React Native、微信小程序等各种端大行其道。当业务要求同时在不同的端都要求有所表现的时候，针对不同的端去编写多套代码的成本显然非常高，这时候只编写一套代码就能够适配到多端的能力就显得极为需要。

搭建taro项目，此处搭建一个react项目。

### 1. 下载taro-cli脚手架

```js
# 使用 npm 安装 CLI
npm install -g @tarojs/cli

# OR 使用 yarn 安装 CLI
yarn global add @tarojs/cli
```

1

### 2. 项目初始化

```js
taro init taroApp
```

这里选用Sass是为了使用taro-ui，因为taro-ui默认使用的是Scss。

`请注意`

如果安装过程出现sass相关的安装错误，请在安装 `mirror-config-china` 后重试。

```js
npm install -g mirror-config-china
```

1

### 3. 进入项目根目录

```js
cd taroApp
```

### 4. 下载包

```cmd
yarn
```

### 5. 运行项目

```js
yarn dev:weapp
```

### 6. 下载其他包插件

#### 1. taro-ui UI框架(https://taro-ui.jd.com/#/)

```js
yarn add taro-ui@next
```


#### 2. @tarojs/plugin-html

使taro能使用div、img等标签，否则只能使用特定的标签

- 首先下载安装插件 @tarojs/plugin-html

```js
yarn add @tarojs/plugin-html
```

- 然后在项目配置中添加使用插件

```js
// config/index.js
config = {
  // ...
  plugins: ['@tarojs/plugin-html']
}
```





