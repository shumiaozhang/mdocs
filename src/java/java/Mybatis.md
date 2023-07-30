## 1. mybatis框架

[下载地址github](https://github.com/mybatis/mybatis-3/releases)

[下载地址Maven官网](https://mvnrepository.com/artifact/org.mybatis/mybatis)

### 1.1 mybatis是什么

mybatis是一个持久层的框架，让程序将主要精力放在SQL上，通过mybatis提供的映射方式，自由灵活生成(半自动化，大部分需要程序员编写SQL)满足需要SQL语句。

mybatis可以将向preparedStatement中的输入参数自动进行输入映射，将查询结果集灵活映射成java对象。(输出映射)

SqlMapConfig.xml是mybatis全局配置文件 

### 1.2 mybatis如何使用

1、SqlMapConfig.xml（是mybatis的全局配置文件，名称不固定的），配置了数据源、事务等mybatis运行环境，配置映射文件（配置sql语句）比如：mapper.xml（映射文件）、mapper.xml、mapper.xml.....

2、SqlSessionFactory(会话工厂), 根据配置文件创建工厂。作用用于创建SqlSession

3、SqlSession(会话), 是一个接口, 面向用户(程序员)的接口。作用：操作数据库(发出SQL增删改查)

4、Executor(执行器),是一个接口(基本执行器、缓存器)。作用：SqlSession内部通过执行器操作数据库

5、mappend statement(底层封装对象) 作用：对操作数据库存储封装，包括sql语句，输入参数、输出结果类型‘

5.1、输入参数类型：java简单类型、hashmap、pojo自定义

5.2、输出结果类型：java简单类型、hashmap、pojo自定义

6、mysql

## 2. SqlMapConfig.xml

开始规范


```
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
"http://mybatis.org/dtd/mybatis-3-config.dtd">
```


**configuration标签**

根标签，写在最外层的。

**properties标签**

作用：在SqlMapConfig.xml文件中加载属性文件

比如连接数据库参数配置在db.properties文件中，可以通过此标签加载db.properties的属性值，便于对数据库连接参数的管理

有两个属性分别是resource和url。

注意点：

- 在properties元素体内定义的属性首先被读取
- 然后读取propeties元素中resource或url加载 的属性，它会覆盖已读取的同名属性
- 最后读取parameterType传递的属性，它会覆盖已读取的同名属性

建议

- 不要在properties元素体内添加任何属性值，只将属性定义在properties文件中
- 在properties文件中定义属性名要有一定特殊性，比如：xxxx.xxxx.xxxx


```
<!-- 加载属性文件 -->
<properties resource="db.properties">
	<!--properties中还可以配置一些属性名和属性值  -->
	<!-- <property name="jdbc.driver" value=""/> -->
</properties>
```


**settings标签**

进行全局参数配置，需要时配置

**typeAliases别名**

在映射文件(mapper.xml)中，定义很多的statement，而statement需要parameterType指定输入参数的类型、需要resultType指定输出结果的映射类型。

当指定类型时输入类型全路径，不方便进行开发，可以针对parameterType或者resultType指定的类型定义一些别名，在映射文件(mapper.xml)中通过别名定义，方便开发。

1 、默认支持的别名

别名 | 映射的类型
---|---
_byte |	byte 
_long |	long 
_short |	short 
_int 	|int 
_integer |	int 
_double |	double 
_float 	|float 
_boolean |	boolean 
string 	|String 
byte |	Byte 
long |	Long 
short |	Short 
int |	Integer 
integer| 	Integer 
double |	Double 
float |	Float 
boolean |	Boolean 
date |	Date 
decimal |	BigDecimal 
bigdecimal |	BigDecimal 

2、自定义别名

2.1、单个别名

别名定义(SqlMapConfig.xml)
```
<!-- 
针对单个别名定义
		type：类型的路径
		alias：别名
 -->
<typeAlias type="cn.itcast.mybatis.po.User" alias="user"/> 
```

引用别名(映射文件mapper.xml)

resultType属性的属性值为刚才设置的别名

```
<select id="findUserById" parameterType="int" resultType="user">
		SELECT * FROM USER WHERE id=#{value}
</select>
```

2.2、批量定义别名


```
<!--
	指定包名，mybatis自动扫描包中的po类，自动定义别名，别名就是类名（首字母大写或小写都可以）
		-->
<package name="cn.itcast.mybatis.po"/>
```

引用别名


```
<select id="findUserById" parameterType="int" resultType="user">
		SELECT * FROM USER WHERE id=#{value}
</select>
```

**typeHandlers(类型处理器)**

mybatis中通过typeHandles完成jdbc类型和java类型的转化，通常情况下，mybatis提供的类型处理器满足日常需要，不需要自定义。


**mappers映射配置**

作用：加载映射文件

1、通过resource加载单个映射文件

```
<mappers>
    <mapper resource="sqlmap/User.xml"/>
</mappers>
```

2、通过mapper接口加载单个mapper


```
<mappers>
    <!-- 
    	遵循一些规范：需要将mapper接口类名和mapper.xml映射文件名称保持一致，且在一个目录 中
    	上边规范的前提是：使用的是mapper代理方法
    	 -->
    <mapper class="cn.itcast.mybatis.mapper.UserMapper"/>
</mappers>
```

3、批量加载mapper


```
<mappers>
    <!--
    	指定mapper接口的包名，mybatis自动扫描包下边所有mapper接口进行加载
    	遵循一些规范：需要将mapper接口类名和mapper.xml映射文件名称保持一致，且在一个目录 中
    	上边规范的前提是：使用的是mapper代理方法
    	 -->
    <package name="cn.itcast.mybatis.mapper"/>
</mappers>
```

## 3 映射文件

1、命名规则：XXXMapper.xml

2、开始规范

```
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
"http://mybatis.org/dtd/mybatis-3-mapper.dtd">
```
3、根标签mapper

有一个属性namespace命名空间，其作用就是对sql进行分类化管理，隔离sql,如果使用mapper代理方法开发，namespace需要等于mapper接口地址

4、写SQL语句注意点

- id：标识 映射文件中的 sql
- parameterType 指定输入参数的类型
- resultType 指定输出结果的类型
- #{}和${}

#{}表示一个占位符，#{}接收输入参数，类型可以是简单类型、pojo、hashmap

如果接收简单类型，#{}中可以写成value或其他名称

#{}接收pojo对象值，通过OGNL读取对象中的属性值，通过属性.属性.属性...的方式获取对象属性值

---

${}表示一个拼接符合，会引用sql注入，不建议使用

${}接收输入参数，类型可以是简单类型、pojo、hashmap

如果接收简单类型，#{}中可以写成value或其他名称

${}接收pojo对象值，通过OGNL读取对象中的属性值，通过属性.属性.属性...的方式获取对象属性值

例如：简单的查询语句
```
<select id="findUserById" parameterType="int" resultType="cn.itcast.mybatis.po.User">
		SELECT * FROM USER WHERE id=#{value}
</select>
```

5、输入映射

输入参数的类型可以是简单类型、hashmap、pojo的包装类型

需求：对于需要传入查询条件复杂，可以使用自定义的包装类型的pojo，在包装类型的pojo中将复杂的查询条件包装进去。

- 包装查询条件

```
public class UserQueryVo {
	//在这里包装所需要的查询条件
	
	//用户查询条件
	private UserCustom userCustom;

	public UserCustom getUserCustom() {
		return userCustom;
	}

	public void setUserCustom(UserCustom userCustom) {
		this.userCustom = userCustom;
	}
	//可以包装其它的查询条件，订单、商品
	//....
}
```

- mapper.xml

```
<!-- 用户信息综合查询
	#{userCustom.sex}:取出pojo包装对象中性别值
	${userCustom.username}：取出pojo包装对象中用户名称
	 -->
<select id="findUserList" parameterType="cn.itcast.mybatis.po.UserQueryVo" 
		resultType="cn.itcast.mybatis.po.UserCustom">
    SELECT * FROM USER WHERE user.sex = #{userCustom.sex} AND user.username LIKE '%${userCustom.username}%'
</select>
```

-mapper.java


```
//用户信息综合查询
public List<UserCustom> findUserList(UserQueryVo userQueryVo) throws Exception;
```

6、输出类型

**6.1 resultType输出类型**

6.1.1、输出简单类型

使用resultType进行输出映射，只有查询出来的列名和pojo中的属性名一致，该列才可以映射成功。

如果查询出来的列名和pojo中的属性名全部不一致，没有创建pojo对象。

只要查询出来的列名和pojo中的属性有一个一致，就会创建pojo对象。

注：查询出来的结果只有一行且一列，可以使用简单类型进行输出映射。

6.1.2、输出pojo对象和pojo列表

不管是输出的pojo单个对象还是一个列表（list中包括pojo），在mapper.xml中resultType指定的类型是一样的。
在mapper.java指定的方法返回值类型不一样：

- 输出单个pojo对象，方法返回值是单个对象类型
- 输出pojo对象list，方法返回值是List<Pojo>

**6.2 resultMap**

如果查询出来的列名和pojo的属性名不一致，通过定义一个resultMap对列名和pojo属性名之间作一个映射关系。

**1、在mapper.xml中定义resultMap**

1. resultMap标签属性：

- id 对resultMap的唯一标识
- type：resultMap最终映射的java对象类型，可以使用别名
- extends：继承，继承其他resultMap，值为要继承的resultMap的id

2. resultMap内部标签

- 标签id：标示查询结果集中唯一标识
    - column: 查询出来的列名
    - property: type指定的pojo类型中属性名
- 标签result：对普通名映射定义
    - column: 查询出来的列名
    - property: type指定的pojo类型中的属性名
- 标签association：用于映射关联查询单个对象的信息
   
包含属性：

1、property: 要将关联查询的用户信息映射到Orders中的哪个属性

2、javaType: 对象的类型

包含标签: id、result其属性跟上面一样。

- 标签collection：用于对关联查询多条记录映射到集合对象中

包含属性：

1、property: 将关联查询到多条记录映射到Orders哪个属性

2、ofType: 指定映射到list集合属性中pojo的类型

包含标签：id、result其属性跟上面一样

```
<!-- 定义resultMap
将SELECT id id_,username username_ FROM USER 和User类中的属性作一个映射关系

type：resultMap最终映射的java对象类型,可以使用别名
id：对resultMap的唯一标识
 -->
 <resultMap type="user" id="userResultMap">
 	<!-- id表示查询结果集中唯一标识 
 	column：查询出来的列名
 	property：type指定的pojo类型中的属性名
 	最终resultMap对column和property作一个映射关系 （对应关系）
 	-->
 	<id column="id_" property="id"/>
 	<!-- 
 	result：对普通名映射定义
 	column：查询出来的列名
 	property：type指定的pojo类型中的属性名
 	最终resultMap对column和property作一个映射关系 （对应关系）
 	 -->
 	<result column="username_" property="username"/>
 </resultMap>
```

**2、使用resultMap作为statement的输出映射类型**

```
<!-- 使用resultMap进行输出映射
    resultMap：指定定义的resultMap的id，如果这个resultMap在其它的mapper文件，前边需要加namespace
-->
<select id="findUserByIdResultMap" parameterType="int" resultMap="userResultMap">
	SELECT id id_,username username_ FROM USER WHERE id=#{value}
</select>
```

**resultType和resultMap区别**

一对一查询：

- resultType：使用resultType实现较为简单，如果pojo中没有查询出来的列名，需要增加列名对应的属性，即可完成映射。如果没有查询结果特殊要求建议使用resultType。
- resultMap：需要单独定义resultMap，实现有点麻烦，如果对查询结果有特殊的要求，使用resultMap可以完成将关联查询映射pojo的属性中。
- resultMap可以实现延迟加载，resultType无法实现延迟加载

一对多查询：

- resultMap的collection标签对关联查询的多条记录映射到一个list集合属性中
- resultType实现，如果有重复需要自己去重

多对多查询：

- resultMap针对那些对查询结果映射有特殊要求的功能，比如映射成list中包括多个list。 


7、动态SQL

就是对SQL语句进行灵活操作，通过表达式判断，对SQL进行灵活拼接组装。

1、where 可以自动去掉条件中的第一个and

2、if 判断条件

3、foreach 遍历

例如：

```
<!-- 定义sql片段
id：sql片段的唯 一标识

经验：是基于单表来定义sql片段，这样话这个sql片段可重用性才高
在sql片段中不要包括 where
 -->
<sql id="query_user_where">
	<if test="userCustom!=null">
		<if test="userCustom.sex!=null and userCustom.sex!=''">
			and user.sex = #{userCustom.sex}
		</if>
		<if test="userCustom.username!=null and userCustom.username!=''">
			and user.username LIKE '%${userCustom.username}%'
		</if>
		<if test="ids!=null">
		<!-- 使用 foreach遍历传入ids
		collection：指定输入 对象中集合属性
		item：每个遍历生成对象中
		open：开始遍历时拼接的串
		close：结束遍历时拼接的串
		separator：遍历的两个对象中需要拼接的串
		 -->
		 <!-- 使用实现下边的sql拼接：
		  AND (id=1 OR id=10 OR id=16) 
		  -->
		<foreach collection="ids" item="user_id" open="AND (" close=")" separator="or">
			<!-- 每个遍历需要拼接的串 -->
			id=#{user_id}
		</foreach>
		
		<!-- 实现  “ and id IN(1,10,16)”拼接 -->
		<!-- <foreach collection="ids" item="user_id" open="and id IN(" close=")" separator=",">
			每个遍历需要拼接的串
			#{user_id}
		</foreach> -->
		
		</if>
	</if>
</sql>
<select id="findUserList" parameterType="cn.itcast.mybatis.po.UserQueryVo" 
			resultType="cn.itcast.mybatis.po.UserCustom">
    SELECT * FROM USER
    <!-- 
    where可以自动去掉条件中的第一个and
     -->
    <where>
    	<!-- 引用sql片段 的id，如果refid指定的id不在本mapper文件中，需要前边加namespace -->
    	<include refid="query_user_where"></include>
    	<!-- 在这里还要引用其它的sql片段  -->
    </where>
</select>
```



## 4. 开发dao的方法

### 原始dao开发

**SqlSession使用范围**

SqlSessionFactoryBuilder

通过SqlSessionFactoryBuilder创建会话工厂SqlSessionFactory

将SqlSessionFactoryBuilder当成一个工具类使用即可，不需要使用单例管理SqlSessionFactoryBuilder。

在需要创建SqlSessionFactory时候，只需要new一次SqlSessionFactoryBuilder即可。


SqlSessionFactory

通过SqlSessionFactory创建SqlSession，使用单例模式管理sqlSessionFactory（工厂一旦创建，使用一个实例）。

将来mybatis和spring整合后，使用单例模式管理sqlSessionFactory。


SqlSession

SqlSession是一个面向用户（程序员）的接口。

SqlSession中提供了很多操作数据库的方法：如：selectOne(返回单个对象)、selectList（返回单个或多个对象）、。

SqlSession是线程不安全的，在SqlSesion实现类中除了有接口中的方法（操作数据库的方法）还有数据域属性。

SqlSession最佳应用场合在方法体内，定义成局部变量使用。

**思路**

需要我们自己写dao接口和dao实现类，需求向dao实现类中注入SqlSessionFactory，在方法体内通过SqlSessionFactory创建SqlSession

例如一个查询用户信息实现类


```
// 需要向dao实现类中注入SqlSessionFactory
// 这里通过构造方法注入
private SqlSessionFactory sqlSessionFactory;

public UserDaoImpl(SqlSessionFactory sqlSessionFactory) {
	this.sqlSessionFactory = sqlSessionFactory;
}

@Override
public User findUserById(int id) throws Exception {
	SqlSession sqlSession = sqlSessionFactory.openSession();
	User user = sqlSession.selectOne("test.findUserById", id);
	// 释放资源
	sqlSession.close();
	return user;
}
```

### mapper代理方法

1、只需要写mapper接口即可，相当于dao接口。mybatis可以自动生成mapper接口实现类代理对象

2、编写mapper.xml映射文件，格式XXXMapper.xml

3、开发规范

- 在mapper.xml中的namespace等于mapper接口地址。
- mapper.java接口中的方法名和mapper.xml中的statement的id一致。
- mapper.java接口中的方法输入参数类型和mapper.xml中的statement的parameterTyep指定的类型一致。
- mapper.java接口中的方法返回值类型和mapper.xml中的statement的resultType指定的类型一致。

## 5. 延迟加载 resultMap

1、简介：

resultMap可以实现高级映射(使用association、collection实现一对一以及一对多映射)，association、collection具备延迟加载功能。

延迟加载：先从单表查询、需要时再从关联表去关联查询，大大提高数据性能，因为查询表要比关联查询多张表速度要快。

2、实现：

需要在mapper.xml文件中定义两个mapper的方法对应的statement。

使用标签association中的select属性指定延迟加载去执行的statement的id

3、SqlMapConfig.xml延迟加载配置项

mybatis默认是没有开启延迟加载的，需要开启。

```
<!-- 全局配置参数，需要时再设置 -->
<settings>
	<!-- 打开延迟加载 的开关 -->
	<setting name="lazyLoadingEnabled" value="true"/>
	<!-- 将积极加载改为消极加载即按需要加载 -->
	<setting name="aggressiveLazyLoading" value="false"/>
	<!-- 开启二级缓存 -->
	<setting name="cacheEnabled" value="true"/>
</settings>
```

## 6. 查询缓存

mybatis提供查询缓存，用于减轻数据压力，提高数据库性能。分为一级缓存和二级缓存。

一级缓存是SqlSession级别的缓存，在操作数据库时需要构造SqlSession对象，在对象中有一个数据结构(HashMap)用于存储缓存数据，不同的SqlSession之间的缓存数据区域(HashMap)是互相不影响的。

二级缓存是mapper级别的缓存，多个SqlSession去操作同一个Mapper的sql语句，多个SqlSession可以共用二级缓存，二级缓存是跨SqlSession的。

### 6.1 一级缓存原理

当进行一次查询操作时，会先去缓存中查找，如果没有就会去数据中查询，并存储到一级缓存。如果SqlSession执行commit(插入，更新，删除),会自动清空SqlSession中的一级缓存。

### 6.2 二级缓存原理

**区别：**

二级缓存的范围更大，多个SqlSession可以共享一个Mapper的二级缓存区域。Mapper有一个二级缓存区域(按namespace)区分，其他mapper也有自己的二级缓存区域(按namespace分)。

每一个namespace的mapper都有一个二级缓存区域，两个mapper的namespace如果相同，这两个mapper执行sql查询到数据将存在相同的二级缓存区域中。

**开启二级缓存**

- 在SqlMapConfig.xml设置二级缓存开关

```
<!-- 全局配置参数，需要时再设置 -->
<settings>
	<!-- 打开延迟加载 的开关 -->
	<setting name="lazyLoadingEnabled" value="true"/>
	<!-- 将积极加载改为消极加载即按需要加载 -->
	<setting name="aggressiveLazyLoading" value="false"/>
	<!-- 开启二级缓存 -->
	<setting name="cacheEnabled" value="true"/>
</settings>
```

- 在具体的mapper.xml中开启缓存

在根标签mapper下使用cache标签开启缓存



