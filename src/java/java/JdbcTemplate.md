# JdbcTemplate

简述：它是spring框架中提供的一个对象，是对原始JdbcAPI对象的简单封装，路径为`org.springframework.jdbc.core.JdbcTemplate`。

需要用到两个jar包，一个是spring-jdbc-4.24.RELEASE.jar，另外一个是事务jar,spring-tx-4.2.4.RELEASE.jar包。

1、最基本的使用（不使用xml）：

```java
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

public static void main(String[] args){
	//定义数据源
	DriverManagerDataSource ds = new DriverManagerDataSource();
	ds.setDriverClassName("com.mysql.jdbc.Driver");
	ds.setUrl("jdbc:mysql://localhost:3306/mydatabase");
	ds.setUsername("root");
	ds.setPassword("admin123");
	
	//1.获取对象
//		JdbcTemplate jt = new JdbcTemplate(ds);
	JdbcTemplate jt = new JdbcTemplate();
	jt.setDataSource(ds);
	//2.执行操作
	jt.execute("insert into account(name,money)values('ddd',1234)");
}
```


2、将连接数据库配置到xml文件中使用

```
// bean.xml文件中
<!-- 配置JdbcTemplate -->
<bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate">
	<property name="dataSource" ref="dataSource"></property>
</bean>

<!-- 配置SPRING内置数据源 -->
<bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
	<property name="driverClassName" value="com.mysql.jdbc.Driver"></property>
	<property name="url" value="jdbc:mysql://localhost:3306/mydatabase"></property>
	<property name="username" value="root"></property>
	<property name="password" value="admin123"></property>
</bean>
```

```
public static void main(String[] args){
	//1.获取容器
	ApplicationContext ac = new ClassPathXmlApplicationContext("bean.xml");
	//2.跟id获取bean对象
	JdbcTemplate jt = (JdbcTemplate) ac.getBean("jdbcTemplate");
	//3.执行操作
	jt.execute("insert into account(name,money)values('eee',2345)");
}
```

3、在xml文件中配置数据源三种方式

spring 内置的数据源
```
<bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
   <property name="driverClassName" value="com.mysql.jdbc.Driver"></property>
   <property name="url" value="jdbc:mysql://localhost:3306/mydatabase"></property>
   <property name="username" value="root"></property>
   <property name="password" value="admin123"></property>
</bean>
```
配置DBCP数据源

```
<bean id="dataSource" class="org.apache.commons.dbcp.BasicDataSource">
	<property name="driverClassName" value="com.mysql.jdbc.Driver"></property>
	<property name="url" value="jdbc:mysql://localhost:3306/day66_ee287_spring"></property>
	<property name="username" value="root"></property>
	<property name="password" value="1234"></property>
</bean>
```
配置c3p0数据源
```
<bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
	<property name="driverClass" value="com.mysql.jdbc.Driver"></property>
	<property name="jdbcUrl" value="jdbc:mysql://localhost:3306/day66_ee287_spring"></property>
	<property name="user" value="root"></property>
	<property name="password" value="1234"></property>
</bean>
```
4、DriverManagerDataSource类

是数据库连接池类，路径为`org.springframework.jdbc.datasource.DriverManagerDataSource`，首先需要通过DriverManagerDataSource类连接数据库(见最基本使用)，再创建JdbcTemplate对象之后进行SQL语句操作即可。

5、javax.sql.DataSource

进行连接数据库的类

6、org.springframework.jdbc.core.support.JdbcDaoSupport

有一个setDataSource，getDataSource方法，参数是DataSource类型的参数，目的是为了进行和数据源连接，在xml中就是dao层连接数据库，需要为dataSource赋值一个数据源。

7、在dao(持久层)中连接数据库，可以选择两种方式

第一种：在dao中使用`setJdbcTemplate`、`getJdbcTemplate`方法，则在xml中需要在dao层中的`jdbcTemplate`赋值为`dataSource`

dao代码

```
private JdbcTemplate jdbcTemplate;

public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
	this.jdbcTemplate = jdbcTemplate;
}

public JdbcTemplate getJdbcTemplate() {
	return jdbcTemplate;
}
```
bean.xml

```
<!-- 配置dao -->
<bean id="accountDao" class="com.itheima.dao.impl.AccountDaoImpl">
	<property name="jdbcTemplate" ref="jdbcTemplate"></property>
</bean> 

<!-- 配置JdbcTemplate -->
<bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate">
	<property name="dataSource" ref="dataSource"></property>
</bean> 

<!-- 配置SPRING内置数据源 -->
<bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
	<property name="driverClassName" value="com.mysql.jdbc.Driver"></property>
	<property name="url" value="jdbc:mysql://localhost:3306/mydatabase"></property>
	<property name="username" value="root"></property>
	<property name="password" value="admin123"></property>
</bean>
```

第二种：在dao中使用`setDataSource`方法，直接赋dataSource的值即可，这样少了一步

dao层代码

```
private JdbcTemplate jdbcTemplate;

public void setDataSource(DataSource dataSource){
	//判断jdbcTemplate是否为null
	if(jdbcTemplate == null){
		createJdbcTemplate(dataSource);
	}
}

private void createJdbcTemplate(DataSource dataSource) {
	jdbcTemplate = new JdbcTemplate(dataSource);
}
```
bean.xml

```
<!-- 配置dao2 -->
<bean id="accountDao2" class="com.itheima.dao.impl.AccountDaoImpl2">
	<property name="dataSource" ref="dataSource"></property>
</bean>
<!-- 配置SPRING内置数据源 -->
<bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
	<property name="driverClassName" value="com.mysql.jdbc.Driver"></property>
	<property name="url" value="jdbc:mysql://localhost:3306/mydatabase"></property>
	<property name="username" value="root"></property>
	<property name="password" value="admin123"></property>
</bean>
```
让dao直接继承JdbcDaoSupport,JdbcDaoSupport是spring框架提供的一个类，该类中定义了JdbcTemplate对象，可以直接获取使用，需要为其提供一个数据源


```
// 这个dao类继承了JdbcDaoSupport类，使用这个类中的getJdbcTemplate方法
public class AccountDaoImpl2 extends JdbcDaoSupport implements IAccountDao {

	@Override
	public Account findAccountById(Integer accountId) {
		List<Account> list = getJdbcTemplate().query("select * from account where id = ? ", new BeanPropertyRowMapper<Account>(Account.class),accountId);
		return list.isEmpty()?null:list.get(0);
	}
}
```


8、BeanPropertyRowMapper类 `org.springframework.jdbc.core.BeanPropertyRowMapper`

使用于SQL语句查询时，目的是将数据库查询结果转化成Java类对象。

常使用于spring中的JdbcTemplate查询数据库时，获取List结果列表，使数据库表字段和实体类字段一一对应。


```
@Override
public Account findAccountById(Integer accountId) {
	List<Account> list = getJdbcTemplate().query("select * from account where id = ? ", new BeanPropertyRowMapper<Account>(Account.class),accountId);
	return list.isEmpty()?null:list.get(0);
}

@Override
public Account findAccountByName(String name) {
	List<Account> list = getJdbcTemplate().query("select * from account where name = ? ", new BeanPropertyRowMapper<Account>(Account.class),name);
	if(list.isEmpty()){
		return null;//没有这个名称的账户
	}
	if(list.size()>1){
		//结果集不唯一，不符合我们的约定
		throw new RuntimeException("结果集不唯一，请检查数据");
	}
	return list.get(0);
}
```
因为一般设计数据库字段时使用下划线分割形式，比如user_name,而在java中常使用驼峰命名法，这个类可以匹配直接赋值。

[BeanPropertyRowMapper 类](https://www.jianshu.com/p/5cad506fad94)

9、org.springframework.jdbc.core.RowMapper

在spring中的jdbcTemplate中使用RowMapper,RowMaper可以将数据中的每一行数据封装成用户自定义类，说白了就是将结果赋值给自己定义的字段，一般只有单独使用spring时才会使用到它。

使用时实现了RowMapper接口，其中有一个mapRow方法，返回的是这一行的数据


```
class AccountRowMapper implements RowMapper<Account>{

	@Override
	public Account mapRow(ResultSet rs, int index) throws SQLException {
		Account account = new Account();
		account.setId(rs.getInt("id"));
		account.setName(rs.getString("name"));
		account.setMoney(rs.getFloat("money"));
		return account;
	}
}
```


10、java.sql.ResultSet

[java.sql.ResultSet](https://www.cnblogs.com/liuzyw/p/5633123.html)

### Spring中的事务管理

Spring中的事务管理需要用到`spring-tx-4.2.4.RELEASE.jar`

Spring中事务管理API

**PlatformTransactionManager**

PlatformTransactionManager接口，提供了事务操作的方法

获取事务状态信息：

TransactionStatus getTransaction(TransactionDefinition definition)

提交事务：

void commit(TransactionStatus status)

回滚事务：

void rollback(TransactionStatus status)

但是在开发中常使用它的实现类

DataSourceTransactionManager 使用Spring JDBC或iBatis进行持久化数据时使用

HibernateTransactionManager 使用Hibernate3.0版本进行持久化数据时使用

---

**TransactionDefinition**

它是事务的定义信息对象，方法有

String getName() 获取事务对象名称

int getIsoIationLevel() 获取事务隔离级


```
// 事务隔离级反映事务提交并发访问时的处理态度
ISOLATION_DEFAULT 默认级别，归属下列某一种
ISOLATION_READ_UNCOMMITTED 可以读取未提交数据
ISOLATION_READ_COMMITTED 只能读取已提交数据，解决脏读问题
ISOLATION_REPATBLE_READ 是否读取其他事务提交后的数据，解决不可重复读取问题(MySQl默认级别)
ISOLATION_SERIALIZABLE 是否读取其他事务提交添加后的数据，解决幻影读问题
```

int getPropagationBehavior() 获取事务传播行为

```
REQUIRED:如果当前没有事务，就新建一个事务，如果已经存在一个事务中，加入到这个事务中。一般的选择（默认值）
SUPPORTS:支持当前事务，如果当前没有事务，就以非事务方式执行（没有事务）
MANDATORY：使用当前的事务，如果当前没有事务，就抛出异常
REQUERS_NEW:新建事务，如果当前在事务中，把当前事务挂起。
NOT_SUPPORTED:以非事务方式执行操作，如果当前存在事务，就把当前事务挂起
NEVER:以非事务方式运行，如果当前存在事务，抛出异常
NESTED:如果当前存在事务，则在嵌套事务内执行。如果当前没有事务，则执行REQUIRED类似的操作。
```


int getTimeOut() 获取事务超时时间

```
默认是-1，没有超时限制。如果有，以秒单位进行设置
```
boolean isReadOnly() 获取事务是否只读


```
建议查询时设置为只读
```



---

**TransactionStatus**

接口提供事务具体的运行状态，描述了某个时间点上事务对象的状态信息

void flush() 刷新事务

boolean hasSavepoint() 获取是否存在存储点

boolean isCompleted() 获取事务是否完成

boolean isNewTransaction() 获取事务是否为新的事务

boolean isRollbackOnly() 获取事务是否回滚

void setRollbackOnly() 设置事务回滚


**1、基于XML的声明式事务控制**

相应的标签

- tx:advice 标签

作用：配置事务通知

属性：

- id: 唯一标识
- transaction-manager：指定事务管理器

- tx:attributes

作用：只接受`tx:method`标签作为子项

- tx:method

作用：配置事务的属性

属性：

- isolation：配置事务的隔离级别。默认值：DEFAULT，使用数据库的默认隔离级别。mysql是REPEATABLE_READ 
- propagation：配置事务的传播行为。默认值是：REQUIRED。 一般的选择。（增删改方法）。当是查询方法时，选择SUPPORTS 
- timeout：指定事务的超时时间。默认值是：-1，永不超时。当指定其他值时，以秒为单位 
- read-only：配置是否只读事务。默认值是：false，读写型事务。   当指定为true时，表示只读，只能用于查询方法。 
- rollback-for：用于指定一个异常，当执行产生该异常时，事务回滚。产生其他异常时，事务不回滚。没有默认值，任何异常都回滚。 
- no-rollback-for：用于指定一个异常，当执行产生该异常时，事务不回滚。产生其他异常时，事务回滚。没有默认值，任何异常都回滚。

- tx:annotation-driven

作用：配置spring开启注解事务的支持，用于xml和注解混合模式

属性：

- transaction-manager 指定事务管理器



```

<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xsi:schemaLocation="http://www.springframework.org/schema/beans 
       					   http://www.springframework.org/schema/beans/spring-beans.xsd
       					   http://www.springframework.org/schema/tx 
       					   http://www.springframework.org/schema/tx/spring-tx.xsd
       					   http://www.springframework.org/schema/aop 
       					   http://www.springframework.org/schema/aop/spring-aop.xsd">
	
	<!-- 配置service -->
	<bean id="accountService" class="com.itheima.service.impl.AccountServiceImpl">
		<property name="accountDao" ref="accountDao"></property>
	</bean>
	
	<!-- 配置dao -->
	<bean id="accountDao" class="com.itheima.dao.impl.AccountDaoImpl">
		<property name="dataSource" ref="dataSource"></property>
	</bean>
	
	<!-- 配置SPRING内置数据源 -->
	<bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
		<property name="driverClassName" value="com.mysql.jdbc.Driver"></property>
		<property name="url" value="jdbc:mysql://localhost:3306/mydatabase"></property>
		<property name="username" value="root"></property>
		<property name="password" value="admin123"></property>
	</bean>
	
	<!-- spring基于XML的声明式事务控制 -->
	<!-- 第一步：配置事务管理器 -->
	<bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
		<!-- 注入数据源 -->
		<property name="dataSource" ref="dataSource"></property>
	</bean>
	
	<!-- 第二步：配置事务的通知 -->
	<tx:advice id="txAdvice" transaction-manager="transactionManager">
		<!-- 第四步：配置事务的属性 
			isolation：配置事务的隔离级别。默认值：DEFAULT，使用数据库的默认隔离级别。mysql是REPEATABLE_READ 
			propagation：配置事务的传播行为。默认值是：REQUIRED。 一般的选择。（增删改方法）。当是查询方法时，选择SUPPORTS 
			timeout：指定事务的超时时间。默认值是：-1，永不超时。当指定其他值时，以秒为单位 
			read-only：配置是否只读事务。默认值是：false，读写型事务。   当指定为true时，表示只读，只能用于查询方法。 
			rollback-for：用于指定一个异常，当执行产生该异常时，事务回滚。产生其他异常时，事务不回滚。没有默认值，任何异常都回滚。 
			no-rollback-for：用于指定一个异常，当执行产生该异常时，事务不回滚。产生其他异常时，事务回滚。没有默认值，任何异常都回滚。
		-->
		<tx:attributes>
			<tx:method name="*" propagation="REQUIRED" read-only="false"/>
			<tx:method name="find*" propagation="SUPPORTS" read-only="true"/>
		</tx:attributes>
	</tx:advice>
	
	<!-- 第三步：配置aop 
		要配的是：切入点表达式
				通知和切入点表达式的关联
	-->
	<aop:config>
		<!-- 配置切入点表达式 -->
		<aop:pointcut expression="execution(* com.itheima.service.impl.*.*(..))" id="pt1"/>
		<!-- 配置事务通知和切入点表达式的关联 -->
		<aop:advisor advice-ref="txAdvice" pointcut-ref="pt1"/>
	</aop:config>
</beans>
```

**2、基于注解的声明式事务控制**

相应的注解

- @Transactional

作用：
- 在需要事务的地方使用@Transactional注解，
- 该注解可以写在接口上，类上和方法上。
- 写在接口上，表示该接口的所有实现类都有事务。
- 写在类上，表示该类中所有方法都有事务。
- 写在方法，表示该方法有事务。
- 优先级：就近原则。

- @EnableTransactionManagement

作用：开启spring对象事务的支持

**基于xml和注解的混合模式**

```
<!-- spring基于XML和注解组合的配置步骤-->
<!-- 第一步：配置事务管理器 -->
<bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
	<!-- 注入数据源 -->
	<property name="dataSource" ref="dataSource"></property>
</bean>

<!-- 第二步：配置spring开启注解事务的支持 -->
<tx:annotation-driven transaction-manager="transactionManager"/>
```

**基于纯注解**




**如何获取`.properties`文件**

使用ResourceBundle类获取资源文件

路径：java.util.ResourceBundle

```
private static ResourceBundle bundle = ResourceBundle.getBundle("dbconfig");
```

