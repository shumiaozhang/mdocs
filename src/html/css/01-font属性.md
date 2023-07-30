#### font

font 简写属性在一个声明中设置所有字体属性。

顺序是：font-style 、font-variant、 font-weight 、font-size/line-height 、font-family

其中：font-size和font-family的值是必需的。要是缺少了其他值，默认值将被插入，如果有默认值的话。



例如：

```css
span {
    font: italic bold 12px/30px Georgia, serif;
}
```



#### font-style

设置字体样式

参数：

`normal`默认值，浏览器显示的

`italic`斜体

`oblique`倾斜

`inherit`继承父元素字体样式

```css
span {
    font-style: italic;
}
```



#### font-variant

小写转大写字母

参数：

`normal`默认值

`small-caps`小写转大写

`inherit`继承父元素



#### font-weight

字体粗细

参数：

`normal`默认

`bold`粗体

`bolder`更粗

`lighter` 100 - 900 其中400 等同于 normal，而 700 等同于 bold

`inherit`继承父元素



#### font-size

字体大小



#### font-family

定义一个元素的字体

