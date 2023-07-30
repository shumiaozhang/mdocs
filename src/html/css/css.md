# CSS

### 1. calc() 函数

用法：动态计算长度值，可以用于改变宽度

```css
.start {
  right: 0;
  width: calc(50% - 10px);
}
```
计算时宽度时可以一起使用`right`,`left` 计算后距离左右两侧多少距离。

注意项：

- 运算符前后都要保留一个空， 例如 width: calc(50% - 10px);
- 任何长度值都可以用calc()计算
- 支持`+`, `-`, `*`, `/`
- 使用标准的数学计算

### 2. meta标签中的viewport

```html
<meta id="viewport" name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1; user-scalable=no;">
```

属性名| 取值| 描述 
:--:| :--:|:--:
width|正整数 或?device-width|定义视口的宽度，单位为像素
height|正整数 或?device-height|定义视口的高度，单位为像素，一般不用
initial-scale|[0.0-10.0]|定义初始缩放值
minimum-scale|[0.0-10.0]|定义缩小最小比例，它必须小于或等于maximum-scale设置
maximum-scale|[0.0-10.0]|定义放大最大比例，它必须大于或等于minimum-scale设置
user-scalable|yes/no|定义是否允许用户手动缩放页面，默认值yes
