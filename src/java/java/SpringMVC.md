简述：spring mvc是spring框架的一个模块，springmvc是一个基于MVC的web框架。 

![Spring MVC图解](https://tcs.teambition.net/storage/3122f02c84d661357fdba602091b58c77c45?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTYxMzUzMjkyOCwiaWF0IjoxNjEyOTI4MTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMxMjJmMDJjODRkNjYxMzU3ZmRiYTYwMjA5MWI1OGM3N2M0NSJ9.iT6as5PU77TYkbftqWPTEkUvYRIyUK__nULU3ZbuOpU)

![Spring MVC图解](https://tcs.teambition.net/storage/31220617e90092b536a9a29b7de033c3f250?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTYxMzc5MDIxMCwiaWF0IjoxNjEzMTg1NDEwLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMxMjIwNjE3ZTkwMDkyYjUzNmE5YTI5YjdkZTAzM2MzZjI1MCJ9.xbifAGNHmmjCKqCmU8DU2U-vs7FGD-cUN5kgFcipk8o)

> 第一步：发起请求到前端控制器(DispatcherServlet)
>
>第二步：前端控制器请求HandlerMapping查找 Handler可以根据xml配置、注解进行查找
>
>第三步：处理器映射器HandlerMapping向前端控制器返回Handler
>
>第四步：前端控制器调用处理器适配器去执行Handler
>
>第五步：处理器适配器去执行Handler
>
>第六步：Handler执行完成给适配器返回ModelAndView
>
>第七步：处理器适配器向前端控制器返回ModelAndView, ModelAndView是springmvc框架的一个底层对象，包括 Model和view
>
>第八步：前端控制器请求视图解析器去进行视图解析, 根据逻辑视图名解析成真正的视图(jsp)
>
>第九步：视图解析器向前端控制器返回View
>
>第十步：前端控制器进行视图渲染, 视图渲染将模型数据(在ModelAndView对象中)填充到request域
>
>第十一步：前端控制器向用户响应结果 


组件：

1、前端控制器DispatcherServlet（不需要程序员开发）
作用接收请求，响应结果，相当于转发器，中央处理器。
有了DispatcherServlet减少了其它组件之间的耦合度。

2、处理器映射器HandlerMapping(不需要程序员开发)
作用：根据请求的url查找Handler


3、处理器适配器HandlerAdapter
作用：按照特定规则（HandlerAdapter要求的规则）去执行Handler

4、处理器Handler(需要程序员开发)
注意：编写Handler时按照HandlerAdapter的要求去做，这样适配器才可以去正确执行Handler

5、视图解析器View resolver(不需要程序员开发)
作用：进行视图解析，根据逻辑视图名解析成真正的视图（view）

6、视图View(需要程序员开发jsp)
View是一个接口，实现类支持不同的View类型（jsp、freemarker、pdf...）

前端控制器

```
<!-- springmvc前端控制器 -->
<servlet>
  <servlet-name>springmvc</servlet-name>
  <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
  <!-- contextConfigLocation配置springmvc加载的配置文件（配置处理器映射器、适配器等等）
  如果不配置contextConfigLocation，默认加载的是/WEB-INF/servlet名称-serlvet.xml（springmvc-servlet.xml）
   -->
  <init-param>
  	<param-name>contextConfigLocation</param-name>
  	<param-value>classpath:springmvc.xml</param-value>
  </init-param>
</servlet>

<!-- servlet的映射配置 -->
<servlet-mapping>
  <servlet-name>springmvc</servlet-name>
  <!-- 
  第一种：*.action，访问以.action结尾 由DispatcherServlet进行解析
  第二种：/，所以访问的地址都由DispatcherServlet进行解析，对于静态文件的解析需要配置不让DispatcherServlet进行解析
  使用此种方式可以实现 RESTful风格的url
  第三种：/*，这样配置不对，使用这种配置，最终要转发到一个jsp页面时，
  仍然会由DispatcherServlet解析jsp地址，不能根据jsp页面找到handler，会报错。
  
   -->
  <url-pattern>*.action</url-pattern>
</servlet-mapping>
```


非注解handler

```
<!-- 配置Handler -->
<bean id="itemsController1" name="/queryItems_test.action" class="cn.itcast.ssm.controller.ItemsController1" />
<!-- 配置另外一个Handler -->
<bean id="itemsController2" class="cn.itcast.ssm.controller.ItemsController2" />
```

1、非注解的处理器映射器

第一种

将bean的name作为url进行查找 ，需要在配置Handler时指定beanname（就是url） 所有的映射器都实现 HandlerMapping接口。

```
<bean class="org.springframework.web.servlet.handler.BeanNameUrlHandlerMapping" />
```

第二种

```
<!--简单url映射  -->
<bean class="org.springframework.web.servlet.handler.SimpleUrlHandlerMapping">
	<property name="mappings">
		<props>
			<!-- 对itemsController1进行url映射是bean中的id，url是/queryItems1.action -->
			<prop key="/queryItems1.action">itemsController1</prop>
			<prop key="/queryItems2.action">itemsController1</prop>
			<prop key="/queryItems3.action">itemsController2</prop>
		</props>
	</property>
</bean>
```

多个映射器可以并存, 前端控制器判断url能让哪些映射器映射，就让正确的映射器处理。

映射器是根据url找handle,适配器就是按照规则执行handle

2、非注解处理器适配器

所有处理器适配器都实现 HandlerAdapter接口

第一种

要求编写的Handler实现 Controller接口。

```
<bean class="org.springframework.web.servlet.mvc.SimpleControllerHandlerAdapter" />

```

第二种

要求编写的Handler实现 HttpRequestHandler接口。

```
<bean class="org.springframework.web.servlet.mvc.HttpRequestHandlerAdapter"/>
```

## 1. 注解


- @Controller

作用：一个控制器

```
org.springframework.stereotype.Controller
@Controller
```

返回值：

1、ModelAndView

2、string

3、void

- @RequestMapping

作用：实现 对queryItems方法和url进行映射，一个方法对应一个url


```
org.springframework.web.servlet.ModelAndView
@RequestMapping("/queryItems") // url
@RequestMapping(value="/queryItems", method={RequestMethod.POST,RequestMethod.GET}) // value为url，method限制什么请求
```

**注解的handler**

```
// 1. 对于注解的Handler可以单个配置实际开发中建议使用组件扫描
<bean class="cn.itcast.ssm.controller.ItemsController3" />


// 2. 可以扫描controller、service、...
<context:component-scan base-package="cn.itcast.ssm.controller"></context:component-scan>
```

**注解的处理器映射器和适配器**

在spring3.1之前使用org.springframework.web.servlet.mvc.annotation.DefaultAnnotationHandlerMapping注解映射器。

在spring3.1之后使用org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping注解映射器。

在spring3.1之前使用org.springframework.web.servlet.mvc.annotation.AnnotationMethodHandlerAdapter注解适配器。

在spring3.1之后使用org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter注解适配器。


```
<!--注解映射器 -->
<bean class="org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping"/>
<!--注解适配器 -->
<bean class="org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter"/>

<!-- 使用 mvc:annotation-driven代替上边注解映射器和注解适配器配置
mvc:annotation-driven默认加载很多的参数绑定方法，
比如json转换解析器就默认加载了，如果使用mvc:annotation-driven不用配置上边的RequestMappingHandlerMapping和RequestMappingHandlerAdapter
实际开发时使用mvc:annotation-driven
 -->
<mvc:annotation-driven></mvc:annotation-driven>
```


**视图解析器**

```
<!-- 视图解析器
解析jsp解析，默认使用jstl标签，classpath下的得有jstl的包
 -->
<bean
	class="org.springframework.web.servlet.view.InternalResourceViewResolver">
	<!-- 配置jsp路径的前缀 -->
	<property name="prefix" value="/WEB-INF/jsp/"/>
	<!-- 配置jsp路径的后缀 -->
	<property name="suffix" value=".jsp"/>
</bean>
```

web.xml中初始化参数中的parm-value

可以写绝对路径，也可以写相对路径的，一般使用相对路径

```
<parm-value>classpath:springmvc.xml<parm-value/>
```
classpath：表示将在类文件路径中查找配置文件

## 2. Web.xml常用元素

<web-app>

<display-name></display-name>定义了WEB应用的名字

<description></description> 声明WEB应用的描述信息

<servlet></servlet> 在向servlet或JSP页面制定初始化参数或定制URL时，必须首先命名servlet或JSP页面。Servlet元素就是用来完成此项任务的。

<servlet-mapping></servlet-mapping> 服务器一般为servlet提供一个缺省的URL：http://host/webAppPrefix/servlet/ServletName。但是，常常会更改这个URL，以便servlet可以访问初始化参数或更容易地处理相对URL。在更改缺省URL时，使用servlet-mapping元素。

**contextConfigLocation类指定文件规则**

## 3. 参数绑定

## 4. 校验(validation)



```
//校验名称在1到30字符中间
//message是提示校验出错显示的信息
//groups：此校验属于哪个分组，groups可以定义多个分组
@Size(min=1,max=30,message="{items.name.length.error}",groups={ValidGroup1.class})
private String name;
```

```
// 商品信息修改提交
// 在需要校验的pojo前边添加@Validated，在需要校验的pojo后边添加BindingResult
// bindingResult接收校验出错信息
// 注意：@Validated和BindingResult bindingResult是配对出现，并且形参顺序是固定的（一前一后）。
// value={ValidGroup1.class}指定使用ValidGroup1分组的 校验
// @ModelAttribute可以指定pojo回显到页面在request中的key
@RequestMapping("/editItemsSubmit")
public String editItemsSubmit(
		Model model,
		HttpServletRequest request,
		Integer id,
		@Validated(value = { ValidGroup1.class }) ItemsCustom itemsCustom,
		BindingResult bindingResult
		) throws Exception {

	// 获取校验错误信息
	if (bindingResult.hasErrors()) {
		// 输出错误信息
		List<ObjectError> allErrors = bindingResult.getAllErrors();

		for (ObjectError objectError : allErrors) {
			// 输出错误信息
			System.out.println(objectError.getDefaultMessage());

		}
		// 将错误信息传到页面
		model.addAttribute("allErrors", allErrors);
		
		
		//可以直接使用model将提交pojo回显到页面
		model.addAttribute("items", itemsCustom);
		
		// 出错重新到商品修改页面
		return "items/editItems";
	}
}	
```

## 5. JSON交互

1、简介

请求的是json串需要指定contentType=application/json

请求的是key/value  contentType=application/x-www-form-urlen

@RequestBody将json串转成java对象

@ResponseBody将java对象转成json串输出

2、配置json转化器

在注解适配器中加入messageConverters

如果使用<mvc:annotation-driven /> 则不用定义messageConverters。

3、controller文件中


```
/请求json串(商品信息)，输出json(商品信息)
//@RequestBody将请求的商品信息的json串转成itemsCustom对象
//@ResponseBody将itemsCustom转成json输出
@RequestMapping("/requestJson")
public @ResponseBody ItemsCustom requestJson(@RequestBody ItemsCustom itemsCustom){
	
	//@ResponseBody将itemsCustom转成json输出
	return itemsCustom;
}
```


## 6. RESTful支持

1、

- 请求时指定contentType，要json数据，设置成json格式的type。
- 特点：url简洁，将参数通过url传到服务端

2、controller文件

定义方法，进行url映射使用REST风格的url，将查询商品信息的id传入controller .

输出json使用@ResponseBody将java对象输出json。

```
@RequestMapping(value="/ itemsView/{id}")：{×××}占位符，请求的URL可以是“/viewItems/1”或“/viewItems/2”，通过在方法中使用@PathVariable获取{×××}中的×××变量。
@PathVariable用于将请求URL中的模板变量映射到功能处理方法的参数上。
如果RequestMapping中表示为"/ itemsView /{id}"，id和形参名称一致，@PathVariable不用指定名称。
```

3、前端控制器配置

web.xml文件

```
<!-- springmvc前端控制器，rest配置 -->
<servlet>
	<servlet-name>springmvc_rest</servlet-name>
	<servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
	<!-- contextConfigLocation配置springmvc加载的配置文件（配置处理器映射器、适配器等等） 如果不配置contextConfigLocation，默认加载的是/WEB-INF/servlet名称-serlvet.xml（springmvc-servlet.xml） -->
	<init-param>
		<param-name>contextConfigLocation</param-name>
		<param-value>classpath:spring/springmvc.xml</param-value>
	</init-param>
</servlet>

<servlet-mapping>
	<servlet-name>springmvc_rest</servlet-name>
	<url-pattern>/</url-pattern>
</servlet-mapping>
```

4、对静态资源的解析

springmvc.xml文件


```
<!-- 静态资源解析
	包括 ：js、css、img、..
	 -->
<mvc:resources location="/js/" mapping="/js/**"/>
<mvc:resources location="/img/" mapping="/img/**"/>
```

## 7. 问题

1、web.xml中contextConfigLocation的作用

[contextConfigLocation的作用](https://www.cnblogs.com/zj0208/p/6226973.html)

2、web.xml文件、spring配置文件中的classpath的理解

[link](https://blog.csdn.net/u014137486/article/details/54381341?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.control&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.control)

【classpath:】此配置表示告诉web容器去classpath（WEB-INF/classes和WEB-INF/lib）中去加载指定名称的配置文件，若是有同名文件，则只会加载一个。

【classpath*:】此配置表示告诉web容器去classpath（WEB-INF/classes和WEB-INF/lib）中去加载指定名称的配置文件，若是有同名文件则会全部加载。

3、spring 使用aop 缺少依赖包aspectjweaver.jar 


```
<dependency>
	<groupId>org.aspectj</groupId>
	<artifactId>aspectjweaver</artifactId>
	<version>1.6.11</version>
</dependency>
```
4、出现 org.springframework.beans.factory.BeanCreationException 异常的原因及解决方法


5、https://blog.csdn.net/weixin_45744265/article/details/102956987?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.control&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.control

jdk

6、https://blog.csdn.net/kk12927/article/details/106584763?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-13.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-13.control

7、catalina.sh


```
JAVA_OPTS="$JAVA_OPTS -Djava.protocol.handler.pkgs=org.apache.catalina.webresources -Djava.security.egd=file:/dev/./urandom"
```

7、https://blog.csdn.net/vadonmo/article/details/80266860?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.control

catalina.bat

## 8. web.xml


```
<!--设置session失效时间为30分钟 -->
<session-config>
    <session-timeout>600</session-timeout>
</session-config>
<!-- 欢迎页面-->
<welcome-file-list>
    <welcome-file>/WEB-INF/index.jsp</welcome-file>
</welcome-file-list>
```

## 9. 注解

1、@ModelAttribute

2、@Validated
