

### 1. 跨域策略文件crossdomain.xml的配置方法

链接：[https://blog.csdn.net/houbin0912/article/details/81944471](https://blog.csdn.net/houbin0912/article/details/81944471)

### 2. Ajax请求设置xhrFields的withCredentials为true实现跨域访问

**作用：** 在跨域请求是否允许携带cookie

withCredentials是XMLHttpRequest的一个属性，表示跨域请求是否提供凭据信息(cookie、HTTP认证及客户端SSL证明等)



```js
$.ajax({
   url: a_cross_domain_url,
   // 将XHR对象的withCredentials设为true
   xhrFields: {
      withCredentials: true
   }
});
```

链接：[https://www.cnblogs.com/fliu/articles/5465685.html](https://www.cnblogs.com/fliu/articles/5465685.html)

### 3. axios中的withCredentials问题

链接：[https://segmentfault.com/q/1010000015791317/a-1020000015791623](https://segmentfault.com/q/1010000015791317/a-1020000015791623)


### 4. 正则表达式应用"如何判断字符串中不包含连续重复的数字或者字母"

链接：[https://jzplp.github.io/2020/regex-password.html](https://jzplp.github.io/2020/regex-password.html)

