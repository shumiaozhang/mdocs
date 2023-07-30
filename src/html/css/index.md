# CSS简介

CSS(层叠样式表)，是一种用来为结构化文档(html)添加样式(比如字体，颜色)的计算机语言，CSS文件扩展名为`.css`。

### CSS语法

其中CSS规定由两个部分构成，分别是选择器以及一条或多条声明

[//]: # (![image-20220924211859936]&#40;C:\Users\Sapling\AppData\Roaming\Typora\typora-user-images\image-20220924211859936.png&#41;)

选择器就是html中的元素

每条声明由一个属性和一个值组成。

属性（property）是您希望设置的样式属性（style attribute）。每个属性有一个值。属性和值被冒号分开。

CSS声明总是以分号 **;** 结束，声明总以大括号 **{}** 括起来

例如：

```css
p {
    color:red;
    text-align:center;
}

```

CSS 注释

注释是用来解释你的代码，并且可以随意编辑它，浏览器会忽略它。

CSS注释以` /*` 开始, 以` */`结束

例如：

```css
/*这是个注释*/
p
{
    text-align:center;
    /*这是另一个注释*/
    color:black;
    font-family:arial;
}
```

### id和Class选择器

#### id选择器

id 选择器是 HTML 元素特定的样式，一个html页面只能声明一个，不能重复。

HTML元素以id属性来设置id选择器,CSS 中 id 选择器以 "#" 来定义。

例如：

```css
#a {
    text-align:center;
    color:red;
}
```

#### class选择器

class 选择器用于描述一组元素的样式，class可以在多个元素中使用。

class 选择器在 HTML 中以 class 属性表示, 在 CSS 中，类选择器以一个点 **.** 号显示：

例如：

```css
.b {
    text-align: center;
}
```

### CSS的创建

插入样式表的方法有三种:

- 外部样式表
- 内部样式表
- 内联样式

#### **外部样式表**

编写在`.css`文件中

例如：

```css
// mystyle.css
.a {
	color: '#ddd';
}
```



```css
// 引入
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>

```

#### **内部样式表**

写在html内部使用 `<style>` 标签在文档头部定义

例如：

```html
<head>
    <style>
        hr {
            color:sienna;
        } 
    </style>
</head>
```



#### **内联样式**

就是将样式和元素写在一起。

例如：

```html
<p style="color:sienna;margin-left:20px">这是一个段落。</p>
```



#### 多重样式优先级

优先级是浏览器通过判断哪些属性值与元素最相关以决定并应用到该元素上的。优先级仅由选择器组成的匹配规则决定的。

优先级就是分配给指定的CSS声明的一个权重，它由匹配的选择器中的每一种选择器类型的数值决定。

**优先级顺序**

!important > 内联样式 > Id选择器 > 伪类 = 属性选择器 =  类选择器 > 元素选择器 = 伪元素选择器 > 通用选择器(*)



**CSS7种选择器**

-  id 选择器
-  类选择器
-  伪类选择器
-  属性选择器
-  伪元素选择器
-  通配选择器
-  标签选择器

**CSS权值**

-  内联样式表的权值最高 1000；
-  ID 选择器的权值为 100
-  Class 类选择器的权值为 10
-  HTML 标签选择器的权值为 1

**CSS 优先级法则：**

-   选择器都有一个权值，权值越大越优先；
-   当权值相等时，后出现的样式表设置要优于先出现的样式表设置；
-   创作者的规则高于浏览者：即网页编写者设置的CSS 样式的优先权高于浏览器所设置的样式；
-   继承的CSS 样式不如后来指定的CSS 样式；
-   在同一组属性设置中标有“!important”规则的优先级最大；