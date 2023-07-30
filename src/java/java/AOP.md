# Spring

Spring其实是一个容器，容器中放着对象

# AOP

简述：AOP的作用其实就是在不改变源代码的前提下，增强方法的功能，利用了动态代理的思想。

## 1、基于xml的AOP

有关字段含义

- 通知类

也就是要增强的方法的文件。

- 表达式

就是要增强的方法在那些文件中使用，用来指定文件。

步骤

1、将通知类(要增强的方法)交给spring管理。

2、导入aop空间使用`aop:config`标签

3、定义切入点表达式(也就是指定那些文件要执行要增强的方法，是个路径)，使用`aop:pointcut`标签

4、使用`aop:aspect`标签配置切面

就是用来指定是那个通知类，属性id用于给切面一个唯一标识，属性ref用于应用通知bean的id

4、配置通知的类型(就是指定增强方法何时执行)

相应的标签

- aop:config

作用：用于声明aop的配置

- aop:aspect

作用：用于设置切面

属性：id：给切面提供一个标识，ref：引用配置好的通知类的bean的id

- aop:pointcut

作用：用于设置切入点表达式

属性：expression：用于定义切入点表达式， id：用于给切入点表达式一个唯一的标识。

- aop:advisor

作用：配置事务通知和切入点表达式的关联

属性：advisor-ref：配置事务通知，pointcut-ref：关联切入点表达式

- aop:before 标签

作用：指定通知类在切面执行之前执行。

属性：

    - method:用于指定通知类中的方法名称。
    
    - pointct:定义切入点表达式。
    
    - pointcut-ref:定义切入点表达式的引用。
    
- aop:after-returning

作用：指定通知类在切面执行之后执行

属性：

    - method:用于指定通知类中的方法名称。
    
    - pointct:定义切入点表达式。
    
    - pointcut-ref:定义切入点表达式的引用。
    
- aop:after-throwing

作用：配置异常通知

属性：

    - method:用于指定通知类中的方法名称。
    
    - pointct:定义切入点表达式。
    
    - pointcut-ref:定义切入点表达式的引用。

- aop:after

作用：配置最终通知

属性：

    - method:用于指定通知类中的方法名称。
    
    - pointct:定义切入点表达式。
    
    - pointcut-ref:定义切入点表达式的引用。
    
- aop:around

作用：配置环绕通知，可以一起配置

属性：

    - method:用于指定通知类中的方法名称。
    
    - pointct:定义切入点表达式。
    
    - pointcut-ref:定义切入点表达式的引用。


**切入表达式说明**


```
execution:
		匹配方法的执行(常用)		
		execution(表达式)
表达式语法：execution([修饰符] 返回值类型 包名.类名.方法名(参数))
写法说明：
	全匹配方式：
		public void com.itheima.service.impl.CustomerServiceImpl.saveCustomer()
	访问修饰符可以省略	
		void com.itheima.service.impl.CustomerServiceImpl.saveCustomer()
	返回值可以使用*号，表示任意返回值
		* com.itheima.service.impl.CustomerServiceImpl.saveCustomer()
	包名可以使用*号，表示任意包，但是有几级包，需要写几个*
		* *.*.*.*.CustomerServiceImpl.saveCustomer()
	使用..来表示当前包，及其子包
		* com..CustomerServiceImpl.saveCustomer()
	类名可以使用*号，表示任意类
		* com..*.saveCustomer()
	方法名可以使用*号，表示任意方法
		* com..*.*()
	参数列表可以使用*，表示参数可以是任意数据类型，但是必须有参数
		* com..*.*(*)
	参数列表可以使用..表示有无参数均可，有参数可以是任意类型
		* com..*.*(..)
	全通配方式：
		* *..*.*(..)
```

例子：


```
<!-- 配置service -->
<bean id="customerService" class="com.itheima.service.impl.CustomerServiceImpl"></bean>
<!-- 基于xml的aop配置步骤 ：要想使用spring的aop，必须导入aop的jar包-->
<!-- 第一步：把通知类交给spring来管理 -->
<bean id="logger" class="com.itheima.utils.Logger"></bean>
	
<!-- 第二步：导入aop名称空间，并且使用aop:config开始aop的配置 -->
<aop:config>
	<!-- 定义通用的切入点表达式，如果写在aop:aspct标签外部，则表示所有切面可用 -->
	<aop:pointcut expression="execution(* com.itheima.service.impl.*.*(..))" id="pt1"/>
	
	<!-- 第三步：使用aop:aspect配置切面  id属性用于给切面提供一个唯一标识。ref属性：用于应用通知Bean的id-->
	<aop:aspect id="logAdvice" ref="logger">
		<!-- 第四步：配置通知的类型，指定增强的方法何时执行。method属性：用于指定增强的方法名称 pointcut属性：用于指定切入点表达式。-->
		<aop:before method="printLog" pointcut-ref="pt1"/>
		<!-- 定义通用的切入点表达式：如果是写在了aop:aspect标签内部，则表示只有当前切面可用 
		<aop:pointcut expression="execution(* com.itheima.service.impl.*.*(..))" id="pt1"/>-->
	</aop:aspect>
</aop:config>
```
**环绕通知(aop:around)**

问题：当我们配置了环绕通知之后，切入点方法没有执行，而环绕通知里的代码执行了。
分析：由动态代理可知，环绕通知指的是invoke方法，并且里面有明确的切入点方法调用。而我们现在的环绕通知没有明确切入点方法调用。

解决：

spring为我们提供了一个接口：ProceedingJoinPoint。该接口可以作为环绕通知的方法参数来使用。

在程序运行时，spring框架会为我们提供该接口的实现类，供我们使用。

该接口中有一个方法，proceed()，它的作用就等同于method.invoke方法，就是明确调用业务层核心方法（切入点方法）

环绕通知：它是spring框架为我们提供的一种可以在代码中手动控制通知方法什么时候执行的方式。

```
public Object aroundPrintLog(ProceedingJoinPoint pjp){
	Object rtValue = null;
	try {
		System.out.println("Logger中的aroundPrintLog方法开始记录日志了。。。。前置");
//			rtValue = pjp.proceed();
		System.out.println("Logger中的aroundPrintLog方法开始记录日志了。。。。后置");
	} catch (Throwable e) {
		System.out.println("Logger中的aroundPrintLog方法开始记录日志了。。。。异常");
		e.printStackTrace();
	}finally{
		System.out.println("Logger中的aroundPrintLog方法开始记录日志了。。。。最终");
	}
	
	return rtValue;
}
```
获取方法的参数使用getArgs方法，类型为Object

```
Object []args = pjp.getArgs();
```
获取方法的名称

```
String str = pjp.getSignature().getName();
```



```
<!-- 配置service -->
<bean id="customerService" class="com.itheima.service.impl.CustomerServiceImpl"></bean>
<!-- 把通知类交给spring来管理 -->
<bean id="logger" class="com.itheima.utils.Logger"></bean>

<aop:config>
	<!-- 定义通用的切入点表达式，如果写在aop:aspct标签外部，则表示所有切面可用 -->
	<aop:pointcut expression="execution(* com.itheima.service.impl.*.*(..))" id="pt1"/>
	<!--配置切面-->
	<aop:aspect id="logAdvice" ref="logger">
		<!-- 配置前置通知： 永远在切入点方法执行之前执行
		<aop:before method="beforePrintLog" pointcut-ref="pt1"/>-->
		<!-- 配置后置通知： 切入点方法正常执行之后执行
		<aop:after-returning method="afterReturningPrintLog" pointcut-ref="pt1"/>-->
		<!-- 配置异常通知： 切入点方法执行产生异常之后执行。它和后置通知永远只能执行一个
		<aop:after-throwing method="afterThrowingPrintLog" pointcut-ref="pt1"/>-->
		<!-- 配置最终通知：无论切入点方法是否正常执行，它都会在其后面执行
		<aop:after method="afterPrintLog" pointcut-ref="pt1"/> -->
		
		<!-- 配置环绕通知 -->
		<aop:around method="aroundPrintLog" pointcut-ref="pt1"/>
	</aop:aspect>
</aop:config>
```

## 2、基于注解的AOP

- @Aspect 

作用：把当前类设置成切面

-@Pointcut

作用：指定切入点表达式

属性：value：指定表达式的内容


```
@Pointcut("execution(* com.itheima.service.impl.*.*(..))")
```

- @Before

作用：把当前的方法看成前置通知

属性：value：用于指定切入点表达式或表达式引用

- @AfterReturning

作用：把当前方法看成后置通知

属性：value：用于指定切入点表达式或表达式引用

- @AfterThrowing

作用：把当前的方法看成异常通知

属性：value：用于指定切入点表达式或表达式引用

- @After

作用：把当前方法看成是最终通知

属性：value：用于指定切入点表达式或表达式引用

- @Around

作用：把当前方法看成是环绕通知

属性：value：用于指定切入点表达式或表达式引用

- @EnableAspectJAutoProxy

作用：开启spring对AOP的支持


**xml和注解混合使用**

在xml中需要配置spring创建容器时需要扫描的包和对AOP的支持。


```
<!-- 配置spring创建容器时要扫描的包 -->
<context:component-scan base-package="com.itheima"></context:component-scan>

<!-- 开启spring对注解AOP的支持-->
<aop:aspectj-autoproxy />
```

**纯注解形式**

新建一个SpringConfiguration.java文件，中配置spring创建容器时需要扫描的包和对AOP的支持。

```
package config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@Configuration
@ComponentScan("com.itheima")
@EnableAspectJAutoProxy
public class SpringConfiguration {

}
```

在创建容器对象时需要使用`AnnotationConfigApplicationContext`


```
package com.itheima.ui;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.itheima.service.ICustomerService;

import config.SpringConfiguration;

public class Client {

	public static void main(String[] args) {
		ApplicationContext ac = new AnnotationConfigApplicationContext(SpringConfiguration.class);
		ICustomerService cs = (ICustomerService) ac.getBean("customerService");
		cs.saveCustomer();
		
	}

}
```

## 3. tx:Advice transactionManager 生成

[link](https://www.cnblogs.com/dayspring/articles/5962570.html)


```
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:context="http://www.springframework.org/schema/context" xmlns:p="http://www.springframework.org/schema/p"
       xmlns:aop="http://www.springframework.org/schema/aop" xmlns:tx="http://www.springframework.org/schema/tx"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-4.0.xsd
	http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-4.0.xsd
	http://www.springframework.org/schema/aop http://www.springframework.org/schema/aop/spring-aop-4.0.xsd http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx-4.0.xsd
	http://www.springframework.org/schema/util http://www.springframework.org/schema/util/spring-util-4.0.xsd">
 
    <!-- 事务管理器 -->
    <bean id="transactionManager"
          class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
        <!-- 数据源 -->
        <property name="dataSource" ref="dataSource" />
    </bean>
    <!-- 通知 -->
    <tx:advice id="txAdvice" transaction-manager="transactionManager">
        <tx:attributes>
            <!-- 传播行为 -->
            <tx:method name="save*" propagation="REQUIRED" />
            <tx:method name="insert*" propagation="REQUIRED" />
            <tx:method name="add*" propagation="REQUIRED" />
            <tx:method name="create*" propagation="REQUIRED" />
            <tx:method name="delete*" propagation="REQUIRED" />
            <tx:method name="update*" propagation="REQUIRED" />
            <tx:method name="find*" propagation="SUPPORTS" read-only="true" />
            <tx:method name="select*" propagation="SUPPORTS" read-only="true" />
            <tx:method name="get*" propagation="SUPPORTS" read-only="true" />
        </tx:attributes>
    </tx:advice>
    <!-- 切面 -->
    <aop:config>
        <aop:advisor advice-ref="txAdvice"
                     pointcut="execution(* com.taotao.order.service.*.*(..))" />
    </aop:config>
 
</beans>
```

