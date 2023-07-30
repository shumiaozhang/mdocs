
当编译时，如果本地仓库没有就会去远程下，并且将远程的jar下载到本地

## 1. POM文件

POM(项目对象模型),是Maven的基本单元，是一个xml文件，包含了项目的基本信息，用于描述项目构建，声明项目依赖。

执行任务时，Maven会在当前目录中查找POM, 读取POM，获取所需的配置信息，然后执行目标。

描述项目组 (groupId), 项目的唯一ID。


节点 | 描述
:---:|:---:
project | 工程的根标签
modelVersion | 模型版本需要设置为 4.0。
groupId|这是工程组的标识。它在一个组织或者项目中通常是唯一的。例如，一个银行组织 com.companyname.project-group 拥有所有的和银行相关的项目。
artifactId|这是工程的标识。它通常是工程的名称。例如，消费者银行。groupId 和 artifactId 一起定义了 artifact 在仓库中的位置。(项目的唯一ID，一个groupId下面可能多个项目，就是靠artifactId来区分的)
version|这是工程的版本号。在 artifact 的仓库中，它用来区分不同的版本


```
<!--project 最外层的根元素-->
<project xmlns = "http://maven.apache.org/POM/4.0.0"
    xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation = "http://maven.apache.org/POM/4.0.0
    http://maven.apache.org/xsd/maven-4.0.0.xsd">
 
    <!-- 模型版本 -->
    <modelVersion>4.0.0</modelVersion>
    <!-- 公司或者组织的唯一标志，并且配置时生成的路径也是由此生成，
    如com.companyname.project-group，maven会将该项目打成的jar包放本地路径：/cn.zhangshumiao -->
    <groupId>cn.zhangshumiao</groupId>
 
    <!-- 项目的唯一ID，一个groupId下面可能多个项目，就是靠artifactId来区分的 -->
    <artifactId>project</artifactId>

    <!-- 版本号 -->
    <version>1.0</version>
    
    <!--项目名称-->
    <name>maven-demo Maven Webapp</name>
    
    <!--maven打包方式， jar、war-->
    <packaging>war</packaging>
    
    <!--集中定义依赖版本号 在dependency标签中使用-->
    <properties>
        <!--例如定义spring-->
        <srping.version>5.2.3.RELEASE</srping.version>
    </properties>
    
    <!--依赖列表-->
    <dependencies>
        <!--依赖坐标-->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-test</artifactId>
            <version>${srping.version}</version>
        </dependency>
    </dependencies>
    <!--依赖的管理:定义父模块的jar包便于子模块的继承-->
    <dependencyManagement>
      <dependencies>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-test</artifactId>
            <version>${srping.version}</version>
        </dependency>
      </dependencies>
  </dependencyManagement>
  
  <!--插件列表:需指定插件的坐标-->
  <build>
      <plugin>
          <groupId></groupId>
          <artifactId></artifactId>
          <version></version>
      </plugin>
  </build>
</project>
```
**depencyManagement和dependencies区别**

都是声明jar依赖列表

[depencyManagement和dependencies区别](https://www.cnblogs.com/feibazhf/p/7886617.html)

<dependencies>中的jar直接加到项目中，管理的是依赖关系（如果有父pom,子pom,则子pom中只能被动接受父类的版本）；

<dependencyManagement>主要管理版本，对于子类继承同一个父类是很有用的，集中管理依赖版本不添加依赖关系，对于其中定义的版本，子pom不一定要继承父pom所定义的版本。

**dependency的scope作用域详解**

1、test范围指的是测试范围有效，在编译和打包时都不会使用这个依赖

2、compile范围指的是编译范围有效，在编译和打包时都会将依赖存储进去

3、provided依赖：在编译和测试的过程有效，最后生成war包时不会加入，诸如：servlet-api，因为servlet-api，tomcat等web服务器已经存在了，如果再打包会冲突 

4、runtime在运行的时候依赖，在编译的时候不依赖 

## 2. 命令

- clean 清理

将项目根目录下的target目录清理掉

- compile 编译

将项目中.java文件编译成.class文件

- test 单元测试

单元测试类要求XxxTest.java，将项目根目录下src/test/java目录下的单元测试类都会执行

- package 打包

web project  ---war包

Java project  ---jar包

命令完成了项目编译、单元测试、打包功能，但没有把打好的可执行jar包（war包或其它形式的包）布署到本地maven仓库和远程maven私服仓库

- install 安装

打包到本地仓库

命令完成了项目编译、单元测试、打包功能，同时把打好的可执行jar包（war包或其它形式的包）布署到本地maven仓库，但没有布署到远程maven私服仓库

- deploy

命令完成了项目编译、单元测试、打包功能，同时把打好的可执行jar包（war包或其它形式的包）布署到本地maven仓库和远程maven私服仓库

## 生命周期

一共有三套生命周期，每个生命周期之间相互独立，互不影响，在一套生命周期内，执行后面的指令会把前面的操作自动执行。

- clean 项目清理
- default(compile,test,package,install,deploy) 默认生命周期
- site 项目站点文档创建的处理


## 3. 私服
1、启动

在bin目录下使用管理员打开黑窗口，分别执行`nexus install`、`nexus start`

修改端口号：conf -> nexus.properties文件

2、上传jar到私服

- 在maven目录下conf/settings.xml.认证：配置用户名密码

```
<server>
  <id>releases</id>
  <username>admin</username>
  <password>admin123</password>
</server>
<server>
  <id>snapshots</id>
  <username>admin</username>
  <password>admin123</password>
</server>
```

- 在将要上传的项目的pom.xml中配置jar包上传路径url
- 执行命令发布项目到私服（上传）deploy

3、下载jar到本地仓库

- 在maven目录下conf/settings.xml。配置模板

模板

```
<profile>   
    <!--profile的id-->
    <id>dev</id>   
    <repositories>   
      <repository>  
    	<!--仓库id，repositories可以配置多个仓库，保证id不重复-->
        <id>nexus</id>   
    	<!--仓库地址，即nexus仓库组的地址-->
        <url>http://localhost:8081/nexus/content/groups/public/</url>   
    	<!--是否下载releases构件-->
        <releases>   
          <enabled>true</enabled>   
        </releases>   
    	<!--是否下载snapshots构件-->
        <snapshots>   
          <enabled>true</enabled>   
        </snapshots>   
      </repository>   
    </repositories>  
     <pluginRepositories>  
    	<!-- 插件仓库，maven的运行依赖插件，也需要从私服下载插件 -->
        <pluginRepository>  
        	<!-- 插件仓库的id不允许重复，如果重复后边配置会覆盖前边 -->
            <id>public</id>  
            <name>Public Repositories</name>  
            <url>http://localhost:8081/nexus/content/groups/public/</url>  
        </pluginRepository>  
    </pluginRepositories>  
</profile> 
```

激活模板



## 4. Maven配置镜像

conf文件夹下的settings.xml

```
<mirrors>
<!-- mirror
 | Specifies a repository mirror site to use instead of a given repository. The repository that
 | this mirror serves has an ID that matches the mirrorOf element of this mirror. IDs are used
 | for inheritance and direct lookup purposes, and must be unique across the set of mirrors.
 |
<mirror>
  <id>mirrorId</id>
  <mirrorOf>repositoryId</mirrorOf>
  <name>Human Readable Name for this Mirror.</name>
  <url>http://my.repository.com/repo/path</url>
</mirror>
 -->
  <mirror>
      <id>nexus-aliyun</id>
      <name>nexus-aliyun</name>
      <url>http://maven.aliyun.com/nexus/content/groups/public</url>
      <mirrorOf>central</mirrorOf>
  </mirror>
</mirrors>
```

## 5. pom.xml


```
<!--JSON-->
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.8.7</version>
</dependency>
```


## 6. 问题

1、解决Dependency ‘org.springframework:spring-context:5.0.5.RELEASE‘ not found问题1

[解决Dependency](https://blog.csdn.net/qq_43485652/article/details/110289212)

2、Intellij IDEA运行出现1099 is already in use解决办法

cmd黑窗口


```
netstat -aon | findstr 1099  // 找到PID
taskkill -f -pid PID  // 关闭PID
```
