[MySQL](https://mvnrepository.com/artifact/mysql/mysql-connector-java)

原生的mysql连接

```
public static void main(String[] args) throws Exception {
	//1.注册驱动
	//DriverManager.registerDriver(new com.mysql.jdbc.Driver());
	Class.forName("com.mysql.jdbc.Driver");
	//2.获取连接
	Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/day58_ee287_jpa", "root", "1234");
	//3.获取操作数据库的预处理对象
	PreparedStatement pstm = conn.prepareStatement("select * from cst_customer");
	//4.执行sql语句并获取返回结果
	ResultSet rs = pstm.executeQuery();
	//5.封装结果集
	while(rs.next()){
		System.out.println(rs.getString("cust_name"));
	}
	//6.释放资源
	rs.close();
	pstm.close();
	conn.close();
}
```
1、mysql启动


```
net start mysql // 启动
net stop mysql // 停止
```


## 2. 问题

1、java连接mysql出现The server time zone value '�й���׼ʱ��' is unrecognized的解决方法

[link](https://blog.csdn.net/qq_36470898/article/details/96321989?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.control&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.control)

2、设置id主键 自增长时，出现Incorrect  column specifier for column"id"的问题如何解决？

[link](https://blog.csdn.net/flyingshadower/article/details/81870798)

## 3. sql语句表编写

#### 字段属性

1、允许空值

为了允许一个字段接受空值，你要在字段定义的后面使用表达式NULL。

```
CREATE TABLE empty (
    empty1 CHAR (40) NULL,
    empty2 INT NULL
) 
```
BIT型数据不能是空值。一个这种类型的字段必须取0或者１。 

2、禁止空值

字段定义的后面跟有表达式NOT NULL。通过包含表达式NOT NULL


```
CREATE TABLE user (
    user_name CHAR(20) NOT NULL,
    create_time DATETIME NOT NULL
) 
```

3、缺省字段(提前给一个默认值)

字段定义的后面跟表达式DEFAULT + 默认值
```
CREATE TABLE orders (
    price MONEY DEFAULT $38.00, 
    quantity INT DEFAULT 50
)
```
注：缺省值应该使用单引号，而不是反引号。




