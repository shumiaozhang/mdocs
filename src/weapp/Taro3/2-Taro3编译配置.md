## Taro3编译配置

taro的编译配置存放在项目根目录下的`config`文件中，有三个文件

- index.js 是通用配置
- dev.js 是项目开发时的配置
- prod.js 是项目打包时的配置

### 1. 默认配置

```js
// config/index.js

const config = {
  // 项目名称
  projectName: 'Awesome Next',
  // 项目创建日期
  date: '2020-6-2',
  // 设计稿尺寸
  designWidth: 750,
  // 设计稿尺寸换算规则
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  // 项目源码目录
  sourceRoot: 'src',
  // 项目产出目录
  outputRoot: 'dist',
  // Taro 插件配置
  plugins: [],
  // 全局变量设置
  defineConstants: {},
  // 文件 copy 配置
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  // 框架，react，nerv，vue, vue3 等
  framework: 'react',
  // 小程序端专用配置
  mini: {
    postcss: {
      autoprefixer: {
        enable: true
      },
      // 小程序端样式引用本地资源内联配置
      url: {
        enable: true,
        config: {
          limit: 10240
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    // 自定义 Webpack 配置
    webpackChain (chain, webpack) {}
  },
  // H5 端专用配置
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    // 自定义 Webpack 配置
    webpackChain (chain, webpack) {},
    devServer: {}
  }
};

module.exports = function(merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
```



### 2. 配置详情

- sourceRoot  源代码存在的目录

类型：`string`  默认：`src`

- outputRoot 打包后的代码存在目录

类型：`string`  默认：`dist`

- designWidth 设计稿尺寸

类型：`number`和`function`

默认值：`750`

从taro`v3.4.3`开始支出`function`

当传入函数时，参数是当前样式文件的绝对路径，开发者可以根据不同的文件路径返回对应的 designWidth，例如：

```js
// config/index.js
config = {
  designWidth (input) {
    if (input.file.replace(/\\+/g, '/').indexOf('@nutui/nutui-taro') > -1) {
      return 375
    }
    return 750
  }
}
```

- alias

类型：`object`

用来配置目录别名，从而方便书写代码引用路径。

例如，使用相对路径书写文件引用如下：

```js
import A from '../../components/A';
import Utils from '../../utils';
import packageJson from '../../package.json';
import projectConfig from '../../project.config.json';
```

为了避免书写多级相对路径，可以如下配置 alias：

```js
module.exports = {
  // ...
  alias: {
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/utils': path.resolve(__dirname, '..', 'src/utils'),
    '@/package': path.resolve(__dirname, '..', 'package.json'),
    '@/project': path.resolve(__dirname, '..', 'project.config.json'),
  }
}
```

通过上述配置，可以将 src/components 和 src/utils 目录配置成别名，将根目录下的 package.json 和 project.config.json 文件配置成别名，则代码中的引用改写如下：

```js
import A from '@/components/A';
import Utils from '@/utils';
import packageJson from '@/package';
import projectConfig from '@/project';
```

- env

类型：`object`

用于设置环境变量，如 process.env.NODE_ENV。

例如：

```js
// config/dev.js：
module.exports = {
  // ...
  env: {
    NODE_ENV: '"development"' // JSON.stringify('development')
  }
}
```

- framework

类型：`string`

使用的开发框架。可选值：`react`、`preact`、`nerv`、`vue`、`vue3`。

其他更多配置属性：https://taro-docs.jd.com/taro/docs/config-detail