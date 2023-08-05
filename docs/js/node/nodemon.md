nodejs热启动

> cross-env实现环境

### 1. 安装nodemon
```
npm i nodemon -D
```

### 2. 修改package.json

在`package.json`文件中的`scripts`，添加一条新的启动方式

```
"start-nodemon": "nodemon ./bin/www"
```
