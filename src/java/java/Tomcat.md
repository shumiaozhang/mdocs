环境变量 [link](https://blog.csdn.net/weixin_43232955/article/details/93308142?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.baidujs&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.baidujs)


1、报错org.apache.catalina.startup.VersionLoggerListener

[解决方法](https://www.cnblogs.com/ycyzharry/p/5954144.html)

2、报错org.apache.catalina.core.AprLifecycleListener lifecycleEvent

[解决方法](https://www.pianshen.com/article/5735681296/)

3、Loaded APR based Apache Tomcat Native library [1.2.26] using APR version 

[解决方法](https://blog.csdn.net/niuzh/article/details/109612558)

4、一月 31, 2021 2:14:56 下午 org.apache.catalina.startup.HostConfig deployDirectory
信息: Deployment of web application directory [D:\tomcat\apache-tomcat-7.0.100\webapps\manager] has finished in [406] ms

[解决方法](http://www.outshine.cn/view/22)

5、乱码

[解决方法](https://blog.csdn.net/JF_OnTheWay/article/details/87889558)

[解决方法](https://www.pianshen.com/article/4058731758/)

6、org.apache.catalina.core.StandardService.initInternal Failed to initialize connector

端口号被占用

7、idea更改Help -> Edit Custom VM Options编辑器启动不了

[解决方法](https://blog.csdn.net/weixin_47572542/article/details/112519549)

8、修改Tomcat配置

选择菜单栏“Run-->Edit Configuration

9、Tomcat启动404

[解决方法](https://www.cnblogs.com/qujialin/p/12168770.html)

10、HTTP状态 500 - 内部服务器错误类型 异常报告 消息 Servlet[springmvc]的Servlet.init（）引发异常 描述 服务器遇到一个意外的情况，阻止它完成请求

11、“资源添加到Web应用程序[]的缓存中，因为在清除过期缓存条目后可用空间仍不足 - 请考虑增加缓存的最大空间”

解决办法：

在 /conf/context.xml 的</Context>前添加以下内容（大小默认是1024，单位是KB）：

```
<Resources cachingAllowed="true" cacheMaxSize="100000" />
```

12、错误The selected directory is not a TomEE home

原因选错了tomcat类型，应该是Tomcat Server

13、[localhost-startStop-1] org.apache.catalina.startup.HostConfig.deployDirectory Web应用程序目录[D:\tomcat\apache-tomcat-8.5.61\webapps\mvcDemo_master_war]的部署已在[9,127]毫秒内完成

[link](https://blog.csdn.net/xlc6011/article/details/103195273?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-5.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-5.control)

15、打包

- war 时会部署到Tomcat的webapps文件下
- war-exploaded 时不会部署到Tomcat的webapps文件下，会热更新

16、esplice转idea

[esplice转idea](https://blog.csdn.net/MmmxsBlogs/article/details/89193630?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.control)

16、至少有一个JAR被扫描用于TLD但尚未包含TLD。 为此记录器启用调试日志记录，以获取已扫描但未在其中找到TLD的完整JAR列表。 在扫描期间跳过不需要的JAR可以缩短启动时间和JSP编译时间。

[link](https://www.pianshen.com/article/99881407339/)
