# IOC

IOC是为了解决程序之间的耦合关系的，对象之间的依赖关系，通过配置ioc，当使用一个对象时去容器中找而不用直接new这个对象，ioc帮我们已经创建好了，咱们只要去调用即可。

## 1、如何获取Spring容器

**xml方式或xml和注解混合模式下**

可以使用两种方法也就是两个接口，分别是BeanFactory和ApplicationContext，
而BeanFactory是Spring容器最顶层接口，ApplicationContext是它的一个子接口。

而这两种方式的主要区别是创建对象的时间点不同，ApplicationContext接口只要一读配置文件，默认情况下就会创建对象。而BeanFactory则是什么时候使用什么时候创建对象。

ApplicationContext接口有两个实现的类
- ClassPathXmlApplicationContext ：它是从类的根路径下加载配置文件，推荐使用。
- FileSystemXmlApplicationContext ：它是从磁盘路径上加载配置文件，可以是任意位置。

```
public void static main(String[] args) {
    // 使用ApplicationContext接口的ClassPathXmlApplicationContext类获取spring容器
    ApplicationContext ac = new ClassPathXmlApplicationContext("bean.xml");
}
```

**纯注解的模式下**

```
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

ApplicationContext ac = new AnnotationConfigApplicationContext(SpringConfiguration.class);
		ICustomerService cs = (ICustomerService) ac.getBean("customerService");
```

## 2、基于XML的IOC配置

### 1、bean标签

**1.1 bean标签**

作用：用于配置对象让spring来创建，默认情况下它调用的是类中的无参构造函数，如果没有无参构造则不能成功

属性：
- id 给对象在容器中提供一个标识，用于获取对象。
- class 指定类的全限定类名，用于反射创建对象。默认请求下调用无参构造函数。
- scope 指定对象的作用范围
    - singleton: 默认值，单例
    - prototype：多例的
    - request：WEB项目中，spring创建一个Bean的对象，将对象存入到request域中。
    - session: WEB项目中，spring创建一个Bean的对象，将对象存入到session域中。
    - globalSession：WEB项目中，应用在Portlet环境，如果没有Portlet环境那么,globalSession相当于session。
- init-method：指定类中的初始化方法名称。
- destroy-method：指定类中销毁方法。

**1.2 bean的作用范围和生命周期**

单例对象：scope="singleton", 一个应用只有一个对象的实例。它的作用范围就是整个引用。

生命周期：

- 对象出生：当应用加载，创建容器时，对象就被创建了。
			
- 对象活着：只要容器在，对象一直活着。
			
- 对象死亡：当应用卸载，销毁容器时，对象就被销毁了。

多例对象：scope="prototype"，每次访问对象时，都会重新创建对象的实例。

生命周期：
- 对象出生：当使用对象时，创建新的对象实例。
- 对象活着：只要对象在使用中，就一直活着。
- 对象死亡：当对象长时间不用时，被java的垃圾回收器回收了。

**1.3 实例化Bean的三种方式**

第一种方式：使用默认无参构造函数

在默认情况下：它会根据默认无参构造函数来创建类对象。如果bean中没有默认无参构造函数，将会创建失败

```
<bean id="customerService" class="com.itheima.service.impl.CustomerServiceImpl"/>
```

第二种方式：spring管理静态工厂-使用静态工厂的方法创建对象


```
/**
 * 模拟一个静态工厂，创建业务层实现类
 */
 
public class StaticFactory {	
	public static ICustomerService createCustomerService(){
		return new CustomerServiceImpl();
	}
}

<!-- 此种方式是:
	 使用StaticFactory类中的静态方法createCustomerService创建对象，并存入spring容器
	 id属性：指定bean的id，用于从容器中获取
	 class属性：指定静态工厂的全限定类名
	 factory-method属性：指定生产对象的静态方法
 -->
<bean id="customerService" class="com.itheima.factory.StaticFactory"
factory-method="createCustomerService"></bean>
```
第三种方式：spring管理实例工厂-使用实例工厂的方法创建对象

```
/**
 * 模拟一个实例工厂，创建业务层实现类
 * 此工厂创建对象，必须现有工厂实例对象，再调用方法
 */
public class InstanceFactory {	
	public ICustomerService createCustomerService(){
		return new CustomerServiceImpl();
	}
}
<!-- 此种方式是：
	 先把工厂的创建交给spring来管理。
	然后在使用工厂的bean来调用里面的方法
	factory-bean属性：用于指定实例工厂bean的id。
	factory-method属性：用于指定实例工厂中创建对象的方法。
-->
<bean id="instancFactory" class="com.itheima.factory.InstanceFactory"></bean>
<bean id="customerService" 
	  factory-bean="instancFactory" 
	  factory-method="createCustomerService"></bean>
```

### 2、spring的依赖注入

是spring框架核心ioc的具体实现方式，就是自动将对象传入。

**2.1 构造函数注入**

就是使用类中的构造函数，给成员变量赋值，IOC会自动赋值，不需要自己做，通过配置。

标签：constructor-arg，写在bean标签内部。

属性：
- index: 指定参数在构造函数参数列表的索引位置
- type: 指定参数在构造函数中的数据类型
- name: 指定参数在构造函数中的名称，也就是给这个name赋值
- value:它能赋的值是基本数据类型和String类型
- ref:它能赋的值是其他bean类型，也就是说，必须得是在配置文件中配置过的bean

例子：


```
public class CustomerServiceImpl implements ICustomerService {
	
	private String name;
	private Integer age;
	private Date birthday;
		
	public CustomerServiceImpl(String name, Integer age, Date birthday) {
		this.name = name;
		this.age = age;
		this.birthday = birthday;
	}

	@Override
	public void saveCustomer() {
		System.out.println(name+","+age+","+birthday);	
	}
}
```

```
// 使用构造函数的方式，给service中的属性传值
<bean id="customerService" class="com.itheima.service.impl.CustomerServiceImpl">
	<constructor-arg name="name" value="张三"></constructor-arg>
	<constructor-arg name="age" value="18"></constructor-arg>
	<constructor-arg name="birthday" ref="now"></constructor-arg>
</bean>

<bean id="now" class="java.util.Date"></bean>
```
分别给类CustomerServiceImpl中的name、age、birthday进行赋值。

**2.2 set方法注入**

就是在类中提供需要注入成员的set方法。

标签：property

属性：
- name：找的是类中set方法后面的部分
- ref：给属性赋值是其他bean类型的
- value：给属性赋值是基本数据类型和string类型的

例如：


```
public class CustomerServiceImpl implements ICustomerService {
	
	private String name;
	private Integer age;
	private Date birthday;
	
	
	public void setName(String name) {
		this.name = name;
	}
	public void setAge(Integer age) {
		this.age = age;
	}
	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	@Override
	public void saveCustomer() {
		System.out.println(name+","+age+","+birthday);	
	}
}
```

```
<bean id="customerService" class="com.itheima.service.impl.CustomerServiceImpl">
		<property name="name" value="test"></property>
		<property name="age" value="21"></property>
		<property name="birthday" ref="now"></property>
</bean>
	
<bean id="now" class="java.util.Date"></bean>
```

**2.3 注入集合属性**

## 3、基于注解的IOC配置

#### 3.1、常见的注解

**用于创建对象的**

- @Component

作用：把资源让spring来管理，相当于xml中配置一个bean

属性：value：指定bean中的id，如果不指定id，默认bean的id是当前的类名但首字母要小写。

- @Controller  @Service   @Repository

作用和属性一样

@Controller: 一般用于表现层的注解

@Service: 一般用于业务层的注解

@Repository: 一般用于持久层的注解

注：当注解只有一个属性且为value时，可以省略value,直接写值

相当于: <bean id=""  class="">

**用于注入数据的**

- @Autowired

作用：自动按照类型注入，当使用注解注入属性时，set方法可以省略，它只能注入其他bean类型。当多个类型匹配时，使用要注入的对象变量名称作为bean的id，在spring容器查找，找到了也可以注入成功。找不到就报错。

- @Qualifier

作用：在自动按照类型注入的基础上，再按照bean的id注入。不能单独使用需要和@Autowired一起使用；但在给方法注入时可以独立使用。

属性：value：指定bean的id

- @Resource

作用：直接按照Bean的id注入，它也只能注入其他bean类型。

属性：value：指定bean中的id

- @Value

作用：注入基本数据类型和String类型

属性：value：用于指定值

相当于：<property name="" ref=""> <property name="" value="">

**用于改变作用范围**

- @Scope

作用：指定bean的作用范围

属性：value：指定范围的值  取值：singleton  prototype  request  session 
globalsession

相当于：<bean id="" class="" scope="">

**生命周期相关**

- @PostConstruct

作用：用于指定初始化方法

- @PreDestory

作用：用于指定销毁方法

相当于：<bean id="" class="" init-method="" destroy-method="" />

**spring获取读取文件**

- @Configuration

作用：用于指定当前类是一个spring配置类，当创建容器时会从该类上加载注解。获取容器时需要使用AnnotationApplicationContext(有@Configuration注解的类.class)。

属性：value：用于指定配置类的字节码

- @ComponentScan

作用：用于指定spring在初始化容器时要扫描的包。

属性：value：basePackages：用于指定要扫描的包。

相当于：<content:component-scan base-package=""/>

- @PropertySource

作用：用于加载`.properties`文件中的配置。

属性：value[]：用于指定properties文件位置。如果是类路径下，需要写上classpath:

注：在其他文件中使用`.propeties`文件时格式为：`@Value("${jdbc.driver}")`

- @Import

作用：用于导入其他配置类，在引入其他配置类时，可以不用再写@Configuration注解。

属性：value[]：用于指定其他配置类的字节码

- @Bean

作用：该注解只能写在方法上，表明使用此方法创建一个对象，并放入spring容器。

属性：name：给当前@Bean注解方法创建的对象指定一个名称(即bean中的id)

相当于：xml中的factory-bean和factory-method。


**xml和注解混合使用**

如果xml和注解混合使用时，需要配置bean.xml文件，如果是纯注解形式则不需要。

如果混合，需要在bean.xml文件中，使用`context:component-scan`标签告知spring在那些文件中读取配置文件，其中属性`base-package`来指定配置文件的路径。

```
<?xml version="1.0" encoding="UTF-8"?>
<!-- 我们导入约束时，除了昨天的那部分之外，还要单独导入一个context名称空间 -->
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context" 
       xsi:schemaLocation="http://www.springframework.org/schema/beans 
       		  http://www.springframework.org/schema/beans/spring-beans.xsd
       		  http://www.springframework.org/schema/context 
       		  http://www.springframework.org/schema/context/spring-context.xsd">
	<!-- 告知spring框架在通过读取配置文件创建容器时，扫描的包，并根据包中类的注解创建对象-->
	<context:component-scan base-package="com.itheima"></context:component-scan>
</beans>
```


**纯注解**

纯注解，也就是不要xml文件，将告知spring从那个路径扫描注解由从xml文件配置改到其他地方中。

解决方法：新建一个.java文件，比如SpringConfiguration文件，在这个文件中配置扫描路径，告知spring。


```
@Configuration//它就是把当前类看成是spring的配置类
@ComponentScan({"com.itheima"})//从这个路径下扫描注解
@Import({JdbcConfig.class})//导入其他配置类
@PropertySource("classpath:config/jdbcConfig.properties")
public class SpringConfiguration {

}
```
但是此时在获取spring容器时跟xml方式是不一样的


```
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

ApplicationContext ac = new AnnotationConfigApplicationContext(SpringConfiguration.class);
		ICustomerService cs = (ICustomerService) ac.getBean("customerService");
```


