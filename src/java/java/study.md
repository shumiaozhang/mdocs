# Java

### 一、Java基本语法

一个Java程序可以认为是一系列对象的集合，而这些对象通过调用彼此的方法来协同工作。简单介绍下类、对象、方法和实例变量的概念。

- 对象：对象是类的一个实例，有状态和行为。例如，一条狗是一个对象，它的状态有颜色、名字、品种；行为有摇尾巴、叫、吃等。

- 类：类是一个模板，它描述一类对象的行为和状态。

- 方法：方法就是行为，一个类可以有很多方法。逻辑运算、数据修改以及所有动作都是在方法中完成的。

- 实例变量：每个对象都有独特的实例变量，对象的状态由这些实例变量的值决定。

**1.基本语法:** 

- 大小写敏感：java是大小写敏的，意味着标识符Hello和hello是不同的。

- 类名：对于所有的类来说，类名的首字母都应该大写。如果类名由若干单词组成，那个每个单词的首字母应该大写。

- 方法名： 所有的方法名都应该以小写字母开头。如果方法名含有若干单词，则后面的每个单词首字母大写，使用驼峰命名法。

- 源文件名：源文件名必须和类名相同。当保存文件的时候，你应该使用类名作为文件名保存(切记Java是大小写敏感的)，文件名的后缀为.java （如果文件名和类名不相同会导致编译错误）

- 主方法入口：所有的的Java程序由`public static void main(String[] args)`方法开始执行。

**2.Java标识符**

Java所有的组成部分都需要名字。类名、变量名以及方法名都被称为标识符。

注意点：

- 所有的标识符都应该以字母(A-Z或者a-z),美元($)、或者下划线(_)开始

- 首字符之后可以是任何字符的组合

- 关键字不能作为标识符

- 标识符是大小写敏感的

**3.Java修饰符**

Java可以使用修饰符来修饰类中方法和属性。主要有两类修饰符：

- 访问控制修饰符: default, public, protected, private

- 非访问控制修饰符：final, abstract, static, synchronized和volatile

**4. 变量**

- 局部变量：在方法、构造方法或者语句块中定义的变量称为局部变量。变量的声明和初始化都是方法中，方法介绍后，变量就会自动销毁。

- 类变量(静态变量): 类变量也声明在类中，方法体外，但必须声明为static类型。

- 成员变量(非静态变量): 成员变量定义在类中，方法体之外的变量。这种变量在创建对象的时候实例化。成员变量可以被类中的方法、构造方法和特定类的语句块访问。

**5.Java数组**

数组是储存在堆上的对象，可以保存多个同类型变量。

**6.枚举**

Java 5.0引入了枚举，枚举限制变量只能是预先设定好的值。使用枚举可以减少代码中的bug。例如，我们为果汁店设计一个程序，他限制果汁为小杯、中杯、大杯。这就意味着它不允许顾客点除了这三种尺寸外的果汁。

**7.继承**

在Java中，一个类可以由其他类派生。如果你要创建一个类，而且已经存在一个类具有你所需要的属性和方法，那么你可以将新创建的类继承该类。
利用继承的方法，可以重用已存在类的方法和属性，而不用重写这些代码。被继承的类称为超类，派生类称为子类。

### 二、Java 对象和类

Java作为一种面向对象语言。支持以下基本概念： 多态，继承，封装，抽象，类，对象，实例，方法和消息解析。

对象：对象是类的一个实例，有状态和行为。例如：一条狗是一个对象，狗的颜色，名字和尾巴是状态。狗叫，摇尾巴，吃等是行为。

类：类是一个模板，描述一类对象的状态和行为。

类包括类的声明和类体。类体的内容由两部分构成：一部分是变量的声明，用来刻画属性，另一部分是方法的定义，用来刻画功能。

**1. 构造方法**

每个类都有构造方法。如果没有显式地为类定义构造方法，Java编译器将会为该类提供一个默认构造方法。
在创建一个对象的时候，至少要调用一个构造方法。构造方法的名称必须与类同名，一个类可以有多个构造方法。

```js
public class Puppy{
   public Puppy(){
   }
   public Puppy(String name){
      // 这个构造器仅有一个参数：name
   }
}
```
**2.方法**

方法由方法的声明和方法体两部分构成。方法体包括局部变量和java语句。

类中的方法也分为实例方法和类方法(前面有修饰符static)

注：1、 实例方法即能对实例变量操作也能对类变量操作，而类方法只能对类变量操作。

2、一个类中的方法可以互相调用，实例方法可以调用该类中的其他方法;类中的类方法只能调用该类的方法，不能调用实例方法。

**2.1方法重载**

一个类中有多个相同方法名的方法，只是其中的参数个不同或者参数类型有区别

**3.创建对象**

对象是根据类创建的。在Java中，使用关键字new来创建一个新的对象。创建对象需要以下三步：

声明：声明一个对象，包括对象名称和对象类型。

实例化：使用关键字new来创建一个对象。

初始化：使用new创建对象时，会调用构造方法初始化对象。

**3.1对象的内存模型**

在声明一个对象变量(如:`zhubajie`)后，`zhubajie`的内存中是没有任何数据的，称为一个空对象。空对象是不可以使用的，因为他还没有得到`实体`, 必须再进行为对象分配内存，才能使用，这个为对象分配内存的步骤即为对象分配实体。`而这个实体就是类的成员变量。`

```js
// 声明对象时的内存模型
XiyoujiRenwu zhubajie; // 空对象，没有实体，不能使用
// 分配内存时的内存模型
zhubajie = new XiyoujiRenwu(); // 有了实体
```

当new一个对象时，做了什么操作？

1. 为类中的成员变量分配空间，然后执行构造方法中的语句。

2. 会返一个引用给对象变量，由这个引用操作管理这些成员变量，这些成员变量属于对象的实体，这些成员变量是属于这个对象的，`所谓的对象分配内存就是指为它分配变量`。

**3.2 使用对象**

抽象的目的是为了产生类，而类的目的是创建具有属性和行为的对象。对象不仅可以操作自己的变量改变状态，而且能调用类中的方法产生一定的行为。

对象操作自己的变量(对象的属性): `对象.变量`

对象操作自己的方法(对象的功能): `对象.方法`

**3.3 体现封装**

当对象调用方法时，方法中出现的成员变量是指分配给该对象的变量。

对上面话的解释：当一个类创建两个对象时，会分别给每个对象分配一个引用，这个引用的值是不同的，也就代表着实体不同，虽然拥有一样名称的成员变量，但是二者是各自的，不会互相影响。

注：方法中的局部变量，在方法调用的时候才会被分配内存空间，方法执行完局部变量也就会释放。并且在声明时若没有初始化，是没有默认值的，所以说只有赋值之后才能使用。

**3.4 对象的引用和实体**

堆是一种运行时的数据结构，它是一个大的存储区域，用来支持动态的内存管理。

Java在分配内存时，Java的对象在堆内分配内存，对象的引用是自栈内分配内存。也就是说当一个对象创建时，类中的成员变量是在堆只能分配内存空间，这些内存空间称为对象的实体或者对象的变量。而对象中放在引用，该引用在栈中分配内存，以确保实体是由该对象进行操作。

**3.5 方法调用时的参数传值**

1. 基本数据类型参数的传值

对于基本数据类型的参数，向该参数传值的值的级别不能高于该参数的级别。比如不能向一个参数类型为`int`的传一个`float`值，但可以向`double`类型的传一个`float`。

2. 引用类型参数的传值

当参数是引用类型时，传值传递的是变量中存放的`引用`,而不是变量的所引用的实体。通过将传入参数的引用赋值给刚声明的还未初始化的空对象，这样就有了相同的实体，可以在这个类中操作另一个类的方法或变量。

3. 可变参数

可变参数是指在声明方法时不给出参数列表中从某项直至最后一项参数的名称和个数，但这些参数的类型必须是相同的，最后一个参数必须是列表中的最后一个参数。

例如：`public void f(double int ... x)`

这里在方法f中，从第二项起到最后一项都类型都必须为int型，但连续出现的int型参数个数不确定，称x是方法f的参数列表中可变参数的"参数列表"。参数列表可以通过下标的方式来计算出具体的参数，而x.length则等于x所代表的参数个数。 

**3.6 对象的组合**

一个类的成员变量可以是Java允许的任何数据类型，因此，一个类可以把对象作为自己的成员变量。如果用这样的类创建对象，那么该对象中就会  有其他对象，也就是说，该对象或其他对象作为自己的组成部分，或者说，该对象是由几个对象组合而成的。

```js
public class Puppy{
   public Puppy(String name){
      //这个构造器仅有一个参数：name
      System.out.println("Passed Name is :" + name ); 
   }
   public static void main(String []args){
      // 下面的语句将创建一个Puppy对象
      Puppy myPuppy = new Puppy( "tommy" );
   }
}
编译结果：Passed Name is :tommy
```
**3.7 使用对象**

抽象的目的是产生类，而类的目的是创建具有属性和行为的对象。对象不仅可以操作自己的变量改变状态，而且能调用类中的方法产生一定的行为。

通过使用运算符`.`，对象可以实现对自己的变量访问和方法的调用。

1. 对象操作自己的变量(对象的属性)

对象创建后，就有了自己的变量，也就是对象的实体。可以通过运算符`.`，对象可以实现对自己的变量访问，格式： 对象.变量;

2. 对象调用类中的方法(对象的功能)

通过调用方法，产生一定行为功能,格式: 对象.方法名

**3.8 类变量和实例变量的区别**

类变量是在类创建时就分配了内存，所以说当一个类创建的所有对象的类变量是共享的，当一个对象改变其中一个类变量，另一个对象相同的类变量也会相应的修改。

实例变量是在对象创建时分配的内存，相对于来说不同对象直接的实例变量其实是不同的。

**3.9 类方法和实例方法的区别**

类方法是在该类加载到内存时就分配了相应的入口地址，而实例方法是在创建对象后分配的入口地址，第一个对象创建后分配了方法的入口地址后，之后再创建对象是不会再分配方法的入口地址的。也正是因为这样，实例方法会比类方法分配入口地址要晚，所以实例方法可以调用类方法的，但是类方法只能调用类方法，因为类方法调用实例方法时有可能实例方法还未分配入口。

**3.10 this**

`this`是一个关键字，只能在构造方法和实例方法中使用，不能在类方法中使用。原因是类方法是在该类加载后就被分配了入口地址，而实例方法是在第一个对象创建成功后分配的入口地址。

`this`在构造方法中使用：`this`指的是调用该方法的对象，调用类变量或者类方法时应使用`类名.+方法名/类变量名`的方式。 

```js
public class ThisStaticVar {
    int leg = 1;
    static int land = 2;
    ThisStaticVar(){
        System.out.println(this.leg); // 1
        System.out.println(leg); // 1
//        System.out.println(ThisStaticVar.leg); // 报错
        System.out.println(this.land); // 2
        System.out.println(land); // 2
        System.out.println(ThisStaticVar.land); // 2
        this.g(); // g方法
        ThisStaticVar.g(); // g方法
        this.m(); // m方法
        m(); // m方法
    }
    int m() {
        System.out.println("m方法");
        return 1;
    }
    static  String g() {
        System.out.println("g方法");
        return "a";
    }
    public static void main(String args[]) {
        ThisStaticVar thisStaticVar = new ThisStaticVar();
    }
}

```

`this`在实例方法中使用

当实例方法中出现类变量时应该用`类名.类变量名`,若出现类方法时应该用`类名.类方法名`

注: 其中的`this`或者`类名`是可以省略的，但是如果局部变量和实例变量名称相同时则不能省略相应的`this`和`类名`





3.实例
```js
public class Puppy{  // 类
  int puppyAge;
  public Puppy(String name){
     // 这个构造器仅有一个参数：name
     System.out.println("Passed Name is :" + name ); 
  }

  public void setAge( int age ){
      puppyAge = age;
  }

  public int getAge( ){
      System.out.println("Puppy's age is :" + puppyAge ); 
      return puppyAge;
  }

  public static void main(String []args) {  // 主方法
     /* 创建对象 */
     Puppy myPuppy = new Puppy( "tommy" );
     /* 通过方法来设定age */
     myPuppy.setAge( 2 );
     /* 调用另一个方法获取age */
     myPuppy.getAge( );
     /* 你也可以像下面这样访问成员变量 */
     System.out.println("Variable Value :" + myPuppy.puppyAge ); 
  }
}
```

**4.源文件声明规则**

当在一个源文件中定义多个类，并且还有import语句和package语句时，要特别注意这些规则。

- 一个源文件中只能有一个public类

- 一个源文件可以有多个非public类

- 源文件的名称应该和public类的类名保持一致。例如源文件中public类的类名是Employee,那么源文件应该命名为Employee.java。

- 如果一个类定义在某个包中，那么package语句应该在源文件的首行。

- 如果源文件中包含import语句，那么应该放在package语句和类定义直接。如果没有package语句，那么import语句应该在源文件中最前面。

- import语句和package语句对源文件中定义的所有类都有效。在同一源文件中，不能给不同的类不同的包声明。

**5.Import语句**

在Java中，如果给出一个完整的限定名，包括报名，类名，那么Java编译器就可以很容易地定位到源代码或者类。Import语句就是用来提供一个合理的路径，使得编译器可以找到某个类

例如：下面的命令行将会命令编译器载入java_installation/java/io路径下的所有类

```js
 import java.io.*;
```

### 三、Java基本数据类型

**1.Java基本数据类型**

变量就是申请内存来存储值。也就是说，当创建变量的时候，需要在内存中申请空间。

内存管理系统根据变量的类型为变量分配存储空间，分配的空间只能用来存储该类型数据。因此，通过定义不同类型的变量，可以在内存中存储整数，小数或者字符。

Java的两大数据类型： 内置数据类型、引用数据类型

**内置数据类型**：八种基本类型，包括6种数字类型（四种整数型，两个浮点型）， 一个字符型，还有一个布尔型。

byte: 

  byte数据类型为8位，有符合的，以二进制补码表示整数；-128（-2^7）~ 127(2^7); 默认为0；byte代表整数，只占int类型的四分之一

要知道一个字符在Unicode表的顺序位置，应该使用显示转化int，而将一个Unicode表的位置显示对应的字符应该使用char显示转化

```js
char w = 'w';
int w1 = (int)w;
int num = 234;
char num1 = (char)num;
```
**输入基本型数据**

Scanner是JDK1.5新增的一个类，可以使用该类创建一个对象

```js
Scanner reader = new Scanner(System.in);
```
然后reader对象调用方法`nextBoolean()`、`nextByte()`、`nextShort()`、`nextInt()`、`nextLong()`、`nextFloat()`和`nextDouble()`，用来读取用户在命令行输入的各种基本类型的数据

```js
import java.util.Scanner;
public class Example2_3 {
  public static void main (String args[]) {
    System.out.println("请输入若干个数，每输入一个数回车确认");
    System.out.println("最后输入数字0结束输入操作");
    Scanner render = new Scanner(System.in);
    double sum = 0;
    int m = 0;
    double x = render.nextDouble();
    while (x!= 0) {
        m = m + 1;
        sum = sum + x;
        x = render.nextDouble();
    }
    System.out.println(m + "个数的和为" + sum);
    System.out.println(m + "个数的平均值" + sum/m);
    boolean y = render.nextBoolean();
    System.out.println(y);
  }
}
```

**引用数据类型**

引用数据类型变量由类的构造函数创建，可以使用它们访问所引用的对象。这些变量在声明时被指定为一个特定的类型，比如Employee、Pubby等(也就是源文件名称)。变量一旦声明后，类型就不能被改变了。

对像，数组都是引用数据类型。

所有引用类型的默认值都是null。

一个引用变量可以用来引用与任何之兼容的类型。

例如： Animal animal = new Animal("giraffe")。

**数组**

数组就是相同类型的变量按顺序组成的一种复合数据类型，这些相同类型的变量称为数组的元素或单元。

- 声明数组

声明数组包括数组的名字和数组的类型

一维数组声明格式：

数组类型[] 数组名称

数组类型 数组名称[]

二维数组声明格式：

数组类型 数组名称[][]

数组类型[] [] 数组名称

例如：

```js
int a[];
int b[][];
```
注：对于声明数组来说不能直接指定数组的长度。如：`int c[23]` 这样书写是错误的

- 创建数组

创建数组不仅仅是给出了数组的名称和类型，还要为它分配空间，即长度。

格式：`数组名字 = new 数组元素的类型[数组元素的个数]`

例如：`boy = new float[4]`

对于分配内存空间后，数组`boy`就会获得4个用来存放`float`类型的内存空间，数组变量`boy`将存放着这些`内存单元的首地址`, 该地址称为数组的引用(如何直接打印数组，会打印出数组的引用来), 操作数组使用数组名加索引的方式进行操作。

声明数组和创建数组一起完成

`float boy = new float[4]`

一维、二维数组一样创建数组是都必须分配空间，但二维数组中的一维数组可以长度不一致，可以先不用分配

`int b = new int[3][]`

- 数组的使用

操作数组使用数组名加索引值的方式

```js
int a[] = new int[3];
a[1] = 1;
int b[][] = new int[1][3];
b[0][1] = 1;
```

- 数组的长度(length)

```js
int a[] = new int[2];
a.length
```

- 赋值数组

赋值数组即将一个数组a赋值成数组b,使数组b也有跟数组a有相同类型的元素变量

可以直接b=a,但这样的数组的引用也相同，假如修改b[1]，则a[1]也会随之变化，两个数组之间是互相有影响的。

1. arraycopy方法

这样方法是利用循环将一个数组的元素的值赋值给另一个数组中的元素。

使用方法

```js
import java.util.Arrays
System.Arrays(a, index, b, index1, length);
```
a代表要赋值的数组，index代表从数组a的那个位置开始赋值，b代表要被赋值的数组，从数组的index1开始赋值，length则代表要赋值的长度，总长度是a的。

注：b数组一定要提前定义好。

2. copyOf和copyOfRange

`public static double[] copyOf(double[] original, int newLength)`

copyOf: 是将数组original从index为0的地方开始赋值到一个新的数组，数组返回的长度为newLength,
若长度大于original的长度，则其余的元素值以默认值表示, 若小于original的长度，则多余的元素舍弃。

```js
int a[] = {1, 2, 3, 4}
int b[] = Arrays.copyOf(a, 8); // {1, 2, 3, 4, 1, 1, 1, 1}
```

`public static double[] copyOfRange(double[] original, int from, int to)`

copyOfRange：是将数组original从索引为`from`值`to-1`的元素赋值到一个新的数组中，并返回这个数组，即新数组的长度是`to-from`, 如果to的值大于original的length长度，则其余的元素值以默认值显示

```js
int a[] = {2, 3, 4, 5}
int b[] = Arrays.copyOfRange(a, 1, 3); // {3, 4}
```
3. 排序和二分法查找

`Arrays.sort(a)` 从小到大排序

`Arrays.binarySearch(a, number)` 传入一个值，检测这个值在数组中是否存在，存在返回索引，不存在返回一个负数 


1. Arrays.copyOf(arr, length) 从索引0开始赋值，新长度为length，若length大于arr长度则多余的取默认值
2. Arrays.copyOfRange(arr, from, to)  从索引from到to-1长度赋值，若to-1大于arr长度则多余的取默认值
3. System.arraycopy(a, index, b, index1, length) a数组从索引index处赋值到b数组，从index1开始，新数组长度为length

**枚举类型**

使用关键字`enum`声明枚举类型，语法格式

```js
enum 枚举名{
  常量列表
}
```
其中常量列表是用逗号分隔的字符序列，称为枚举类型的常量。声明枚举类型后，就可以用该枚举类型的枚举名声明一个枚举变量，用枚举变量来获取枚举类型中的常量。

```js
enum Season{
  春, 夏, 秋, 冬
}
Season x;
x.春
```

**Java常量**

常量就是一个固定值，它们不需要计算，直接代表相应的值。常量指不能改变的量。在Java中用final标志，声明方式和变量类似。

### 四、Java变量类型

在Java语言中，所有的变量在使用前必须声明。格式如下

```js
type identifier [ = value] [,  identifier [=value] ...];
```

type为数据类型，identifier为变量名，可以使用分号声明多个同种类型的变量

```js
int ab = 1, b, c=45; // 声明了三个int类型的值，其中b只是声明并没有赋值
```

Java支持的变量类型为：

局部变量：写在方法内变量。(只能在本方法内调用，必须初始化，编译完即销毁)

实例变量: 写在方法外的变量，不用static修饰

类变量：写在方法外的变量，用static修饰

成员变量包括实例变量和类变量。
```js
public class Test {
  static int leiType = 1; // 类变量
  String aType = 2; // 实例变量
  public void method() {
    int bType = 2; // 局部变量
  }
}
```
注：如果方法内的局部变量的名称和成员变量的名称相同，则成员变量隐藏，操作时只针对局部变量来说的。

**Java局部变量**

局部变量声明在方法、构造方法或者语句块中;

局部变量在方法、构造方法或者语句中被执行的时候创建，当它们执行完成后，变量将会被销毁;

访问修饰符不能用于局部变量


### 五、Java修饰符

Java修饰符分为访问修饰符，非访问修饰符。

修饰符用来定义类、方法或者变量，通常放在语句的最前端。比如：

```java
public class className {}
private boolean myFlag;
```

**访问控制修饰符**

Java中，可以使用访问控制符来保护对类、变量、方法和构造方法的访问。支持4种不同的访问权限

默认的，也称为default，在同一包内可见，不使用任何修饰符。

私有的，以private修饰符指定，在同一类内可见。

共有的，以public修饰符指定，对所有类可见。

受保护的，以protected修饰符指定，对同一包内的类和所有子类可见。  https://www.cnblogs.com/chenyulin/p/11656576.html

**默认访问修饰符-不使用任何关键字**

使用默认访问修饰符声明的变量和方法，对同一个包内的类是可见的。接口里的变量都隐式声明为`public static final`,而接口里的方法默认情况下访问权限为`public`。

如下例所示，变量和方法的声明可以不使用任何修饰符

```java
String version = "1.5.1";
boolean processOrder() {
  return true;
}
```

**私有访问修饰符-private**

私有访问修饰符是最严格的访问级别，所以被声明为`private`的方法、

### 六、实用类

**1.String类**

在java中使用String类创建一个字符串变量，字符串变量是对象。String是一个不可改变的对象，当每次改变都会在堆中创建一个新的空间，改变指针，会浪费内存空间

**1.1 构造字符串对象**

使用String类声明字符串对象，并且new一个对象`String str = new String("hello word")`

也可以用已经创建好的字符串创建另一个字符串
```java
String str = new String("hello word");
String str1 = new String(str);
```
另外两个常用的构造方法

(1) String(char a[]) 用一个字符数组a创建一个字符串对象

(2) String(char a[], int startIndex, int count) 提取字符串数组a中从下标startIndex开始截取count个字符，创建一个字符串对象

注：字符串常量是对象，可以吧一个字符串常量赋给一个字符串变量，如果一个字符串常量同时赋给两个字符串变量那样他们具有相同的实体。

**1.2 String类中的常用方法**

1、public int length() 获取字符串的长度

2、public boolean equals(String s) 比较当前字符串和s的实体是否相同

3、public boolean equalsIgnoreCase(String s) 比较当前字符串和参数s是否相同，会忽略掉大小写

4、public boolean startsWith(String s) 判断当前的字符串对象的前缀是否是参数s、
public boolean endsWith(String s)  判断当前的字符串对象的后缀是否是参数s

5、public boolean regionMatchs(int firstStart, String other, int ortherStart, int length)指从当前字符串参数firstStart开始，取长度为length的子串与另一个字符串从ortherStart处开始取length长度，作比较。

重载方法：

public boolean regionMatchs(boolean b, int firstStart, String other, int ortherStart, int length) 可以通过b决定是否忽略大小，当为true时表示忽略大小。

6、public int compareTo(String s) 按字典序与参数s指定的字符串比较大小，若当前字符串与s相同，则该方法返回0，若大于返回正则，若小于返回负值。

7、public boolean contains(String s) 判断当前字符串是否含有参数s

8、public int IndexOf(String s) 从字符串的头检索是否有s，若有返回第一次出现的位置，否则返回-1。
lastIndexOf(String s) 从结尾开始检索

9、public String substring(int startpoint) 从当前字符串的startpoint处截取到结尾所得的字符串、
substring(int start, int end) 从start位置开始截取到end位置，不包括end位置的值

10、public String trim() 去掉字符串两边的空格

**1.3 字符串与基本数据的互相转化**

public static int parseInt(String s) 将数字字符串转成int型数据

public static String valueOf(int n) 将int型数据转成字符串

Byte、Short、Long、Float、Double类似

public String toString() 使用toString()方法将对象返回字符串的形式

**1.4 字符串与字符、字节数组**

public void getChart(int start, int end, char c[], int offset) 字符从start开始到end-1处截取字符复制到数组c中，从offset位置放

public char[] toCharArray() 将字符串返回成一个字符数组形式

**1.5 正则表达式以及字符串的替换与分解**

在正则中含有一些具有特殊意义的某些字符的字符串叫做元字符

public boolean matches(String regex) 判断当前字符串对象是否和参数regex指定的正则表达式匹配

public String replaceAll(String regex, String replacement) 返回一个字符串，该字符串是当前字符串中所有和参数regex指定的正则表达式匹配替换后的字符串

public String[] split(String regex) 字符串以指定的字符分离开，存放在一个字符数组中

**2 StringBuffer和 StringBuilder 类**

StringBuffer 字符串变量（线程安全）
StringBuilder 字符串变量（非线程安全) 不能同步访问

而StringBuilder速度比较快，一般建议多使用StringBuilder，但是如果应用要求线程安全，则必须使用StringBuffer。

String对象一旦创建实体就不可以在发生变化的。StringBuffer类能创建可修改的字符串序列，也就是说该对象的实体内存空间可以自动改变大小

StringBuffer buffer = new StringBuffer("我喜欢学习");

可以使用append方法追加一个字符串序列

有三个构造方法

StringBuffer() 分配给对象实体容量16个字符，若存放的大于16个会自动加，可以调用length()方法获取实体中存放的字符长度，通过capacity()方法获取当前实体的实际容量

StringBuffer(int size) 指定字符的容量size

StringBuffer(String s) 指定容量为字符串s的容量另外再加16

1、append 方法 将其他类型数据转化为字符串后，追加到StringBuffer中

2、public chat charAt(int n) 得到参数n指定位置上的单个字符。public void setCharAt(int n, char ch) 将位置为n处的字符用参数ch指定的字符替换

3、StringBuffer insert(int index, String str) 将参数str指定的字符插入到参数index指定的位置，返回当前位置的引用

4、public StringBuffer reverse() 字符反转

5、StringBuffer delete(int startIndex, int endIndex) 删除位置从startIndex到endIndex-1位置的字符。deleteCharAt(int index) 删除index位置的一个字符

6、StringBuffer replace(int startIndex, int endIndex, String str) 字符串从位置startIndex到endIndex-1位置的字符用str替换

**3 StringTokenizer类**

可以将字符串分解成独立使用的单词

StringTokenizer(String s) 为字符串s构造一个分析器，使用默认的分隔标记即空格、换行、回车、Tab符。

StringTokenizer(String s , String delim) 以指定的delim作分隔

通过调用nextToken()来获取下一个语言符号，可以调用方法hasMoreTokens()方法，为true代表还有，countTokens()方法得到计数变量的值。

**4.Scanner类**

从字符串中解析程序所需要的数据，创建Scanner对象，并将要解析的字符串传递给所构造的对象

Scanner默认使用空格作为分隔标记来解析字符串中的单词，可以让Scanner对象调用方法；useDelimiter(正则表达式)，将正则表达式作为分隔标记。

特点：

1. scanner调用next()方法依次返回被解析的字符串中的单词，如果字符串的最后一个单词已被next()方法返回，scanner调用hasNext()将返回false，否则返回true。

2. 被解析的字符串中的数字单词，若为872、22.22等，可以用nextInt()或nextDouble()方法代替next(),返回的是相应的int或double数据。

3. 如果字符串不是数字型的，调用nextInt()或nextDouble()将会报错，发生InputMismatchException异常

**5.Date和Calendar类**

**1.Date类**

创建一个Date对象：Date date = new Date() 可进行传参，进行时间设置，默认从1970年1月1日0时开始

public long currentTimeMills() 获取系统当前时间

**2.Calendar类**
使用Calendar类中的static方法getInstance()可以初始化一个Calendar对象，习惯上称是对象。

Calendar calendar = Calendar.getInstance()

方法：

public final void set(int year, int month, int date)
public final void set(int year, int month, int date, int hour, int minute)
public final void set(int year, int month, int date, int hour, int minute, int second)

当year为负数时代表公用前

public int get(int field) 可以获取有关年份、月份、小时、星期等信息，参数field的有效值由Calendar的静态常量指定的

calendar.get(Calendar.MONTH) 如果返回是0则代表一月以此类推

calendar.get(DAY_OF_WEEK) 返回1代表星期日，以此类推

public long getTimeInMillis() 返回的是毫秒值

**3.日期格式化**

SimpleDateFormat类使用对象中的一个format进行日期格式化

创建一个对象public SimpleDateFormat(String pattern) 参数是格式化日期就格式

调用方法 simpleDateFormat.format(Date date) 参数是要格式化的日期

JDK1.5后

也可以使用Formatter类，Formatter类的format方法， format(格式模式, 日期列表)

格式模式是一个用双引号括起来的字符序列(字符串)

例如：String s = String.format("%ty年%tm月%td日", new Date(), new Date(), new Date());

因为格式模式是求三个的，所以后面跟着的日期列表的个数要一致

若想格式同一日期,则需使用`<`的格式符，如下

String s = String.format("%ty年%<tm月%<td日", new Date());

不同区域的星期格式

使用format的重载方法format(Locale locale, 格式化模式, 日期列表) 其中locale为地区的标识

**6.Math、BigInteger和Random类**

**1.Math**

类方法

public static long abs(double a) 返回a的绝对值

public static double max(double a, double b) 返回a、b的最大值

public static double min(double a, double b) 返回a、b的最小值

public static double random() 产生一个0到1之间的随机数(不包括0和1)

public static double pow(double a, double b) 返回a的b次幂

public static double sqrt(double a) 返回a的平方根

public static double log(double a) 返回a的对数

public static double sim(double a) 返回正弦值

public static double asin(double a) 返回反正弦值

**2.BigInteger类**

当程序需要处理大整数时，BigInteger类提供任意精度的整数运算,其构造方法public BigInteger(String val)
如果是非数字字符会发生NumberFormatException异常

方法：

public BigInteger add(BigInteger val) 返回当前大整数对象与参数指定的大整数对象的和

public BigInteger subract(BigInteger val) 返回当前大整数对象与参数指定的大整数对象的差

public BigInteger multiply(BigInteger val) 返回当前大整数对象与参数指定的大整数对象的积

public BigInteger divide(BigInteger val) 返回当前大整数对象与参数指定的大整数对象的商

public BigInteger remainder(BigInteger val) 返回当前大整数对象与参数指定的大整数对象的余

public BigInteger compareTo(BigInteger val) 返回当前大整数对象与参数指定的大整数对象的比较，若当前的大则返回1，小返回-1，等于返回0

public BigInteger abs() 返回当前大整数对象的绝对值

public BigInteger pow(int a) 返回当前大整数对象的a次幂

public BigInteger toString() 返回当前大整数对象十进制的字符串表示

public BigInteger toString(int p) 返回当前大整数对象p进制的字符串表示

**3.Random类**

Random类是更灵活的获取随机数，使用nextInt()方法返回一个随机整数，如果想返回一个0~m之间的数则nextInt(m)

如果程序想返回一个随机true和false，则调用nextBoolean()方法。

**7.DecimalFormat类**

作用：有时候需要对输出的数字结果进行格式化，比如保留两位小数等

格式化整数和小数位，使用0和.代表，比如 000.00 则代表整数三位，小数两位

public final String format(double number)

整数位的分组

如果想将整数部位分组，比如两个一组，或三个一组，使用逗号做分隔的#组成的字符串，例如：##, ###, ###

**8 Pattern和Match类**
模式匹配就是检索和指定模式匹配的字符串。

模式对象

进行模式匹配是创建Pattern类对象，称为模式对象，模式对象是对正则表达式的封装，Pattern类调用类方法compile(String regex)返回一个模式对象，其中参数regex是正则表达式被称为模式对象使用的模式

Pattern p = Pattern.compile("hello\\d");

也可以调用类方法compile(String regex, int flags) 返回一个Pattern对象

匹配对象

### 7. 泛型与集合框架

java中实现常见数据结构的类，统称为java集合框架

**7.1 泛型类的声明**

可以使用`class名称<E>`声明一个类，这样的声明叫做泛型类

```java
class People<E>
```

其中People是泛型类的名称，E是其中的泛型，在这里并没有指定E是何种类型的数据，他可以是任何对象或接口但不能是基本类型数据。泛类在声明时,`泛型列表`给出的泛型可以作为类的成员变量的类型、方法的类型以及局部变量的类型。

**7.2 使用泛型类声明对象**

和普通类相比，泛型类在声明和创建对象时，类名后面多了一对`<>`,而且必须要用具体的类型替换`<>`中的泛型，例如

```java
Cone<Cricle>coneOne;
coneOne = new Cone<Cricle>(new Circle());
```

泛型变量只能调用从Object类继承的或重新的方法，所以如果需要调用某些写需要在普通类中需要重新方法

**7.3泛型接口**

使用`interface`名称<泛型列表>声明一个接口，这样声明的接口称为泛型接口

```java
interface Computer<E>
```
Computer是泛型接口的名称，E是其中的泛型，泛型类可以使用泛型接口

Java泛型的主要目的是建立类型安全的数据结构，如链表、散列表等数据结构，最重要的一个优点就是在使用这些泛型类建立的数据结构时，不必进行强制类型转换。

**7.4链表**

 当处理一些类型相同的数据是，一般会使用数组，但是数组必须定义元素的个数，并且不能轻易的改变其大小，对于动态的来新增或删除数据项时，可以使用链表这种数据结构。

 链表是由若干个被称为结点的对象组成的一种数据结构，每个节点含有一个数据和下一个数据的引用(单链表)
 或含有一个数据并含有上一个结点的引用和下一个结点的引用(双链表)

 **7.4.1LinkedList<E>泛型类**

 LinkedList<E>泛型类创建的对象是以链表结构存储数据的，以LinkedList类创建的对象叫做链表对象，创建时必须指定泛型的具体类型

 ```java
 LinkedList <String> mylist = new LinkedList<String>(); // 创建一个空双链表
 // 使用add方法添加结点
 mylist.add("How");
 mylist.add("How");
 ```

 ### 8.JDBC

在java中连接数据库步骤：

1、在IDEA中安装JDBC的驱动，然后进而加载数据库驱动类。[参考](https://blog.csdn.net/qq_34622844/article/details/102817852?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.control&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.control)

2、加载数据库驱动类

3、建立连接

代码如下：
```js
package cn.zhangshumiao;

import java.sql.*;

/**
 * 使用JDBC连接MySQL数据库
 */
public class MySQLTest {
    public static void main(String[] args) {
        try {
            // 1.加载数据库驱动类
            /**
            JDBC使用java.lang包中的Class类加载驱动程序，通过调用它的静态方法forName加载sun.jdbc.odbc包中的jdbcOdbcDriver类加载，需要抛出异常
            
            */
            Class.forName("com.mysql.cj.jdbc.Driver");
            System.out.println("数据库驱动加载成功");

            // 2.创建连接
            //格式为jdbc:mysql:
            // 127.0.0.1:3306/数据库名称?useSSL=true&characterEncoding=utf-8&user=账号名&password=密码
            /**
            首先使用java.sql包中的Connection类声明一个对象，然后使用DriverManager类调用它的静态方法getConnection()创建连接，需要抛出异常
            
            */
            Connection connection = DriverManager.getConnection(
                    "jdbc:mysql://127.0.0.1:3306/111?useSSL=true&characterEncoding=utf-8&serverTimezone=GMT&user=11&password=111");
            System.out.println("创建连接成功");
            // 创建SQL语句对象
            Statement sql = connection.createStatement();
            // 添加一条信息
            sql.execute("INSERT INTO student (name) values ('大宝宝')");
            System.out.println("success!");
            connection.close();
        }
        catch (ClassNotFoundException cnfe) {
            cnfe.printStackTrace();
        }
        catch (SQLException sqle) {
            sqle.printStackTrace();
        }
    }
}

```

**8.1更新添加删除操作**
SQL更新指令： UPDATE<表名>SET<字段名>=新值 WHERE<条件字句>

SQL添加指令： INSERT INTO 表名(字段列表) VALUES (对于的具体记录) 或者 INSERT INTO 表 VALUES(对应的具体的记录)

SQL删除指令：DELETE FROM 表名 WHERE 条件字句

**8.2查询操作**

对一个数据库中的表进行查询操作的步骤:

1、向数据库发送SQL查询语句

当数据库成功连接后，首先使用Statement类声明一个SQL语句对象，然后让一创建的连接对象connection调用方法createStatement()创建SQL语句对象

```js
try {
  Statement sql = connection.createStatement();
}
catch(SQLException e) {}
```

2、处理查询结果

这个对象调用相应的方法进行对数据库的查询操作，查询的结果会存放在一个ResultSet类声明的对象中。这ResultSet对象一次只能看到一个数据行，使用next()方法执行到下一数据行，获得一行数据后，ResultSet对象可以使用getXXX方法获取字段值,参数是位置索引或列名。

查询语句使用excuteQuery(), sql.excuteQuery(SQL)

**8.2.1顺序查询**

主要是使用ResultSet类声明的对象(rs)的next()方法，返回布尔类型，当为true时则代表有下一行，然后调用rs.getXXX()方法，获取其内容。

如何知道表中有那些字段？

在连接好对象connection之后，调用getMetaData()方法可以返回一个DatabaseMetaData对象，`DatabaseMetaData metadata = connection.getMetaData();` metadata再调用getColumns，可以将表中的字段信息以行、列的形式存储在一个ResultSet对象中 `ResultSet tableMessage = metadata.getColumns(null, null, 表名, null);`

**8.2.2随机查询**

有时候结果需要指定一条或者随机显示若干条，这时必须返回一个可滚动的结果集，需要先获得一个Statement对象`Statement stmt = connection.createStatement(int type, int concurrency);`,然后根据参数的type, concurrency的取值情况，stmt返回相应的结果集
`ResultSet re = stmt.execteQuery(SQL语句);`

type的取值决定滚动方式

- ResultSet.TYPE_FORWORD_ONLY: 结果集的游标只能向下滚动。
- ResultSet.TYPE_SCROLL_INSENSITIVE: 结果集的游标可以上下移动，当数据库变化时，当前结果集不变。
- ResultSet.TYPE_SCROLL_SENSITIVE: 返回额可以滚动的结果集，当数据库变化时，当前结果集同步变化。

concurrency 的值决定了是否可以用结果集更新数据库

见P352页

**8.3.3条件查询**

SQL语句：SELECT * FROM 表名 Where 条件 

**8.3.4排序查询**

SQL语句：SELECT * FROM 表名 ORDER BY 字段名

**8.3.5 模糊查询**

使用SQL语句操作符LIKE进行模式匹配，使用`%`代替0或者多个字符，用一个下划线`_`代替一个字符，用`[abc]`代替a、b、c中的任何一个。

SQL语句：SELECT * FROM 表名 WHERE 字段名 LIKE 模糊查询的条件

**8.4预处理语句**

PreparedStatement对象

为什么要使用预处理语句？

当我们执行一条SQL语句时，数据库中的SQL解释器会把SQL语句生成底层的内部命令，然后再执行该命令，完成有关的数据操作。如果大量的操作会加大SQL解释器的压力，而PreparedStatement对象可以把SQL语句直接解释成底层命令，会减轻数据库的负担。

如何使用？

在JDBC，使用Connection和数据库建立连接后，连接对象con,可以调用prepareStatement(String sql) 方法对参数sql指定的SQL语句进行预编译处理，生成该数据库底层的命令，并将封装后的命令封装在PreparedStatement对象中，而该对象调用`ResultSet execteQuery()`、`boolean execute()`、`int execteUpdate()` 可以使底层命令被数据库执行。

```js
Statement sql = connection.prepareStatement(SQL); // 将SQL语句生成数据库底层命令
rs = sql.executeQuery(); // 数据库执行底层命令
```

**8.4.1通配符**

在使用SQL进行预处理时可以使用通配符`?`来代替字段的值，只要在预处理语句执行之前设置通配符所表示的值即可。

void setFloat(int?parameterIndex, int?x) 

参数parameterIndex用来表示SQL语句中从左到右的第parameterIndex个通配符, x是指具体值。

常用的预处理语句设置通配符`?`的值的常用方法

```js
void setDate(int parameterIndex, Date x)
void setDouble(int parameterIndex, double x)
void setFloat(int parameterIndex, float x)
void setInt(int parameterIndex, int x)
void setLong(int parameterIndex, long x)
void setString(int parameterIndex, String x)
```

**8.5事务**

事务是由一组SQL语句组成，所谓的事务处理，是指应用程序保证事务中的SQL语句要么全部执行，要么一个都不执行。

为什么会出现事务？

当于数据库创建连接后可能会执行多个语句，当有时碰到执行语句时不成功，或者多条语句有一条语句不成功就不能全部执行。例如：
当银行转账时，一个账号多钱，一个账号少钱，但是如果一个账号钱是少了，但另一个却没有多或者多的不够，此时就得这两条语句是不能执行的。也就出现了事务。

处理步骤：

1、setAutoCommit(boolean autoCommit)方法

当连接成功后，直接调这个方法

con.setAutoCommit(false)

2、使用commit() 方法

con调用commit()方法让事务中的SQL语句全部生效

3、使用rollback() 方法

在con调用commit()进行事务处理时，若有异常就会抛出SQLException异常，而con调用rollback()方法就是如果有报错，已经执行的语句会再恢复之前的状态。

**8.6 CachedRowSetImpl类**

当查询数据库时，建立连接后，执行后，一旦连接对象关闭后，ResultSet对象中的数据会立即消失。而CachedRowSetImpl类则可以保存这个ResultSet结果

```js
ResultSet rs = sql.executeQuery(SQL);
CachedRowSetImpl rowSet = new CachedRowSetImpl();
rowSet.populate(rs);
```
保存到rowSet的结果就可以像操作ResultSet对象一样。



### 9.常见的类

**9.1 Map**



![img](https://tcs.teambition.net/storage/3121bf2cc62b198b33e1e394a6b8bc1753cb?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IjVmNGNlMTc3Zjc0MjJkMDdiOWJhNzhiNCIsImV4cCI6MTYxMDU5NDIzMSwiaWF0IjoxNjA5OTg5NDMxLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMxMjFiZjJjYzYyYjE5OGIzM2UxZTM5NGE2YjhiYzE3NTNjYiJ9.RK8lFsiXvNbaHXvtMP8rMRWiiGYXUWGxLCxOqEgJjAM)

>  Map 是“键值对”映射的抽象接口。
>
> AbstractMap 实现了Map中的绝大部分函数接口。它减少了“Map的实现类”的重复编码。
>
> SortedMap 有序的“键值对”映射接口。
>
> NavigableMap 是继承于SortedMap的，支持导航函数的接口。
>
> HashMap, Hashtable, TreeMap, WeakHashMap这4个类是“键值对”映射的实现类。它们各有区别！



**HashMap** 是基于“拉链法”实现的散列表。一般用于单线程程序中。

**Hashtable** 也是基于“拉链法”实现的散列表。它一般用于多线程程序中。

**WeakHashMap** 也是基于“拉链法”实现的散列表，它一般也用于单线程程序中。相比HashMap，WeakHashMap中的键是“弱键”，当“弱键”被GC回收时，它对应的键值对也会被从WeakHashMap中删除；而HashMap中的键是强键。

**TreeMap** 是有序的散列表，它是通过红黑树实现的。它一般用于单线程中存储有序的映射。

 Map中常见的方法:

```js
1) Object put(Object key, Object value); 添加一个键值对，key不允许重复，如果重复会被覆盖。
2) void putAll(Map map); 复制一份键值对。
3) Object get(key); 根据key获取是value
4) Boolean containKey(Object key); 是否包括某个key
5) Boolean containValue(Object value); 是否包括某个value
6) int size(); 返回键值对的个数
7) Boolean isEmpty();判断键值对个数是否为空
8) Object remove(key); 删除某个key对应的键值对，返回删除的value
9) Boolean remove(key, value); 删除某个key，value键值对，返回布尔类型
10) void clear(); 清空所有的键值对。
11) String keySet(); 所有key集合。
12) values();返回所有的values。
13) entrySet(); 所有key-value集合，是一个Map.Entry对象类型(后面讲)
```



Map中的遍历:

1、for遍历

```js
for (String key : mapSet.keySet()) {
    System.out.println(key);
}
for (Map.Entry<String, String> value : mapSet.entrySet()) {
    System.out.println(value);
}
```

2、迭代器遍历

```js
Iterator<String> iterator = mapSet.keySet().iterator();
while (iterator.hasNext()) {
    System.out.println(iterator.next());
}
Iterator<Map.Entry<String, String>> iterator1 = mapSet.entrySet().iterator();
while (iterator1.hasNext()) {
    System.out.println(iterator1.next());
}
```





**9.2 Map中的内嵌接口Entry**

Entry是一个Map接口内的一个内部(static修饰)接口，返回的是Set集合，装的是Entry接口类型，即将映射关系装入Set集合中。Entry将键值对的对应关系封装成了对象，即键值对对象，在遍历Map集合时，就可以从每一个键值对(Entry)对象中获取对应的键和对应的值。

```java
 Set<Map.Entry<K,V>> entrySet();
```

Set集合中的每一个元素都是Map.Entry对象，可以使用getKey()获取key、getValue()获取key-value值、setValue()设置value。 注：setValue方法会设置所有键值对中的值，使用使用可判断进行操作。

```js
Set<Map.Entry<String, String>> entrySet = mapSet.entrySet();
for (Map.Entry<String, String> obj: entrySet) {
    Object a = obj.getKey();
    Object b = obj.getValue();
    if(a == "key3") {
        obj.setValue("key3");
    }
}
```



**9.3 HashMap和HashTable**

HashMap的主干是一个Entry数组，Entry是HashMap的基本单元，每一个Entry包含一个key-value键值对，是一个散列表，存储的内容是键值对映射。

相同点：

- HashMap和HashTable 都是存储键值对发散列表，而且都是采用拉链法实现的。

- 存储思想是：通过table数组存储，数组的每一个元素都是一个Entry，而一个Entry都是一个单链表，Entry链表中的每一个节点都保存了key-vlaue键值对数据，

- 添加键值对：首先根据key值计算出哈希值，再计算出数组的索引(即key-value在table中的索引)，然后再根据数组索引找到Entry(即单链表)，再遍历单向链表，将key和链表中的每一个节点的key进行对比，若key已经在Entry链表中，则用该value值取代旧的value值，若key不存在链表中，则新建一个key-value节点，并将该节点插入Entry链表的表头。
- 删除键值对：根据key计算出数组索引(即key-value在table中的索引)，然后根据索引找出Entry(即单链表), 若key-value存在与链表Entry中，则删除链表中的节点。

不同点：

- 继承和实现方式不同

HashMap 继承于AbstractMap，实现了Map、Cloneable、java.io.Serializable接口。

Hashtable 继承于Dictionary，实现了Map、Cloneable、java.io.Serializable接口。

HashMap的定义:
```js
public class HashMap<K,V>
    extends AbstractMap<K,V>
    implements Map<K,V>, Cloneable, Serializable { ... }
```

HashTable的定义:

```js
public class Hashtable<K,V>
    extends Dictionary<K,V>
    implements Map<K,V>, Cloneable, java.io.Serializable { ... }
 
```

从中，我们可以看出：

1、HashMap和Hashtable都实现了Map、Cloneable、java.io.Serializable接口。

​      实现了Map接口，意味着它们都支持key-value键值对操作。支持“添加key-value键值对”、“获取key”、“获取value”、“获取map大小”、“清空map”等基本的key-value键值对操作。

​      实现了Cloneable接口，意味着它能被克隆。

​      实现了java.io.Serializable接口，意味着它们支持序列化，能通过序列化去传输。

2、HashMap继承于AbstractMap，而Hashtable继承于Dictionary

​	   AbstractMap是一个抽象类，它实现了Map接口的绝大部分API函数；为Map的具体实现类提供了极大的便利。它是JDK 1.2新增的类。

​      Dictionary是一个抽象类，它直接继承于Object类，没有实现任何接口。Dictionary类是JDK 1.0的引入的。虽然Dictionary也支持“添加key-value键值对”、“获取value”、“获取大小”等基本操作，但它的API函数比Map少；而且Dictionary一般是通过Enumeration(枚举类)去遍历，Map则是通过Iterator(迭代器)去遍历。 然而‘由于Hashtable也实现了Map接口，所以，它即支持Enumeration遍历，也支持Iterator遍历。

- 线程安全不同

Hashtable的几乎所有函数都是**同步的，即它是线程安全的，支持多线程。**

而HashMap的函数则是**非同步的，它不是线程安全的**。若要在多线程中使用HashMap，需要我们额外的进行同步处理。 对HashMap的同步处理可以使用Collections类提供的synchronizedMap静态方法，或者直接使用JDK 5.0之后提供的java.util.concurrent包里的ConcurrentHashMap类。

- 对null值的处理不同HashMap的key、value都可以为null

Hashtable的key、value都不可以为null。

我们先看看HashMap和Hashtable “添加key-value”的方法

Hashtable的key或value，都不能为null！否则，会抛出异常NullPointerException。

HashMap的key、value都可以为null。 当HashMap的key为null时，HashMap会将其固定的插入table[0]位置(即HashMap散列表的第一个位置)；而且table[0]处只会容纳一个key为null的值，当有多个key为null的值插入的时候，table[0]会保留最后插入的value。

- 支持的遍历种类不同

HashMap只支持Iterator(迭代器)遍历。

Hashtable支持Iterator(迭代器)和Enumeration(枚举器)两种方式遍历。

- 通过Iterator迭代器遍历时，遍历的顺序不同

HashMap是**“从前向后”**的遍历数组；再对数组具体某一项对应的链表，从表头开始进行遍历。

Hashtabl是**“从后往前”**的遍历数组；再对数组具体某一项对应的链表，从表头开始进行遍历。HashMap和Hashtable都实现Map接口，所以支持获取它们“key的集合”、“value的集合”、“key-value的集合”，然后通过Iterator对这些集合进行遍历。

由于“key的集合”、“value的集合”、“key-value的集合”的遍历原理都是一样的；

HashMap 和Hashtable 遍历"key-value集合"的方式是：(01) 通过entrySet()获取“Map.Entry集合”。 (02) 通过iterator()获取“Map.Entry集合”的迭代器，再进行遍历。

**HashMap的实现方式：先“从前向后”的遍历数组；对数组具体某一项对应的链表，则从表头开始往后遍历。**

**Hashtable的实现方式：先从“后向往前”的遍历数组；对数组具体某一项对应的链表，则从表头开始往后遍历。**

- 容量的初始值 和 增加方式都不一样

HashMap**默认的容量大小是16**；增加容量时，每次将容量变为**“原始容量x2”**。

Hashtable**默认的容量大小是11**；增加容量时，每次将容量变为“**原始容量x2 + 1**”。

**HashMap默认的“加载因子”是0.75, 默认的容量大小是16。当HashMap的 “实际容量” >= “阈值”时，(阈值 = 总的容量 加载因子)，就将HashMap的容量翻倍。**

**Hashtable默认的“加载因子”是0.75, 默认的容量大小是11。** **当Hashtable的 “实际容量” >= “阈值”时，(阈值 = 总的容量 x 加载因子)，就将变为“原始容量x2 + 1”。



9.4  HashMap和WeakHashMap的不同点 

q







**9.5 迭代器Iterator**

迭代器是一种设计模式，它是一个对象，它可以遍历并选择序列中的对象，而开发人员不需要了解该序列的底层结构。迭代器通常被称为“轻量级”对象，因为创建它的代价小。

iterator()方法是java.lang.Iterable接口,被Collection继承。

Iterator方法:

```js
(1) next()获得序列中的下一个元素。
(2) hasNext()检查序列中是否还有元素。
(3) remove()将迭代器新返回的元素删除。
```



例子：

```java
Iterator<String> iterator = mapSet.keySet().iterator();
while (iterator.hasNext()) {
  System.out.println(iterator.next());
}
Iterator<Map.Entry<String, String>> iterator1 = mapSet.entrySet().iterator();
while (iterator1.hasNext()) {
  System.out.println(iterator1.next());
}
```



 














