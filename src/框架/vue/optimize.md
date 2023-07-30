# Vue-cli 3.x 打包优化

背景：

vue项目打包上线后，首次加载很慢，只是一个项目搭建就要耗时9到10s，严重堵塞访问心情。

优化：

- 开启Gzip压缩`compression-webpack-plugin`(nginx需要配合) 

- 项目构建后打包成一个.zip格式的压缩包`filemanager-webpack-plugin`

- 代码压缩插件`uglifyjs-webpack-plugin`,暂时未使用



### 1. compression-webpack-plugin

下载：

```js
npm install --save-dev compression-webpack-plugin
```
https://github.com/webpack-contrib/compression-webpack-plugin

配置:

在`vue.config.js`中的`configureWebpack`下的`plugins`新增一个`compression-webpack-plugin`插件，代码如下

```js
const CompressionPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
module.exports = {
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        filename: '[path].gz[query]',
        test: new RegExp(`\\.(${productionGzipExtensions.join('|')})$`), // 匹配文件名
        algorithm: 'gzip',
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets: true,
      }),
    ],
  },
}  
```

线上nginx修改，需要在`nginx.config`文件中的`http`模块添加

```js
    # 开启gzip
    gzip on;
    gzip_static on;

    # 启用gzip压缩的最小文件，小于设置值的文件将不会压缩
    gzip_min_length 1k;
 
    # gzip 压缩级别，1-9，数字越大压缩的越好，也越占用CPU时间，后面会有详细说明
    gzip_comp_level 2;
 
    # 进行压缩的文件类型。javascript有多种形式，后面的图片压缩不需要的可以自行删除
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
 
    # 是否在http header中添加Vary: Accept-Encoding，建议开启
    gzip_vary on;
 
    # 设置压缩所需要的缓冲区大小     
    gzip_buffers 4 16k;

```
### 2. filemanager-webpack-plugin

下载：

```js
npm install --save-dev filemanager-webpack-plugin
```
https://github.com/gregnb/filemanager-webpack-plugin

配置:

在`vue.config.js`中的`configureWebpack`下的`plugins`新增一个`filemanager-webpack-plugin`插件，代码如下

```js
const FileManagerPlugin = require('filemanager-webpack-plugin');
module.exports = {
  configureWebpack: {
    plugins: [
      new FileManagerPlugin({
        events: {
          onEnd: {
            delete: [ // 首先需要删除项目根目录下的dist.zip
              './dist.zip',
            ],
            archive: [ // 然后我们选择dist文件夹将之打包成dist.zip并放在根目录
              { source: './dist', destination: './dist.zip' }],
          },
        },
      }),
    ],
  },
}  
```