Express 是目前最流行的基于 Node.js 的 Web 开发框架，可以快速地搭建一个完整功能的网站。
Express Generator 是 Express 的应用程序生成器工具，使用它可以快速建立完整的项目文件目录。

## 1. 首先需要有node环境支持npm

## 2. 全局安装 express-generator
```
npm i express-generator -g
```

## 3. 初始化项目
创建一个名称为`myapp`的express项目
```
express myapp
```

目录结构
```
.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
|--- modles
|--- docs
|--- utils
└── views
	├── error.jade
	├── index.jade
	└── layout.jade

```

- app.js 是项目的主文件（入口文件），相当于vue项目的main.js

- bin: 启动目录 里面包含了一个启动文件，bin/www 一个启动文件,配置了项目运行的端口信息 默认监听端口是 3000

- package.json 包描述文件

- public:  所有的前端静态资源  html css image  js

- views: 主要放置 ejs 后端模板文件, 一般不需要使用

- routes:  放的是路由文件 (默认有两个)，主要在这个目录下开发接口,路由主要定义url和资源的映射关系 ( 一一对应关系 ),
主要用来接收前端发送的请求 响应数据给前端

- modles: 查询数据库语句，将查询后的结果返回routes中对应的方法

- docs: 存放一些对项目的介绍，比如sql文件，接口文档等`.md`文件

- utils: 存放一些自定义函数


## 4. 进入目录并安装包

```
cd myapp
npm i
```

## 5. 启动项目

```
npm start
```



